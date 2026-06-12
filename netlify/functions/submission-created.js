// netlify/functions/submission-created.js
// Netlify runs this AUTOMATICALLY every time the "booking" form gets a submission.
// It sends a confirmation email to the client via Brevo (free: 300 emails/day).
//
// SETUP (one time):
// 1. Create a free account at brevo.com
// 2. Brevo > Settings > Senders: add & verify YOUR email (the "from" address)
// 3. Brevo > SMTP & API > API Keys: create a key
// 4. Netlify > Site configuration > Environment variables:
//      BREVO_API_KEY  = your key
//      FROM_EMAIL     = the verified sender email
//      FROM_NAME      = Tufayel
// 5. Redeploy. Done. Every booking now triggers a client email.

exports.handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body);

    // Only react to the booking form
    if (payload.form_name !== "booking") {
      return { statusCode: 200, body: "ignored" };
    }

    const d = payload.data || {};
    const name = d.name || "there";
    const email = d.email;
    const day = d.day || "TBC";
    const time = d.time || "TBC";
    const topic = d.topic || "a chat";

    if (!email) return { statusCode: 200, body: "no email in submission" };

    const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;background:#0E1116;color:#E9E4D8;border-radius:16px;overflow:hidden">
      <div style="padding:36px 36px 28px">
        <p style="font-size:12px;letter-spacing:2px;color:#FF4B26;margin:0 0 14px;text-transform:uppercase">Call request received</p>
        <h1 style="font-size:30px;margin:0 0 18px;color:#E9E4D8">You're on the list, ${name} 🎤</h1>
        <p style="color:#8B93A1;font-size:15px;line-height:1.7;margin:0 0 24px">
          Your request landed safely. Here's what you picked:
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:10px 0;color:#8B93A1;border-bottom:1px solid #2a3038">Day</td><td style="padding:10px 0;color:#E9E4D8;border-bottom:1px solid #2a3038;text-align:right"><b>${day}</b></td></tr>
          <tr><td style="padding:10px 0;color:#8B93A1;border-bottom:1px solid #2a3038">Time</td><td style="padding:10px 0;color:#E9E4D8;border-bottom:1px solid #2a3038;text-align:right"><b>${time}</b></td></tr>
          <tr><td style="padding:10px 0;color:#8B93A1">Topic</td><td style="padding:10px 0;color:#E9E4D8;text-align:right"><b>${topic}</b></td></tr>
        </table>
        <p style="color:#8B93A1;font-size:15px;line-height:1.7;margin:24px 0 0">
          I'll confirm the slot personally within 24 hours (usually much faster).
          If anything changes on your side, just reply to this email.
        </p>
        <p style="color:#8B93A1;font-size:15px;line-height:1.7;margin:18px 0 0">
          Bring your numbers. I'll bring ideas.<br>
          <span style="color:#E9E4D8;font-weight:bold">Tufayel</span><br>
          <span style="font-size:12px">Performance × Product × Automation</span>
        </p>
      </div>
      <div style="background:#FF4B26;padding:14px;text-align:center;color:#fff;font-size:12px;letter-spacing:1px">
        SPEND MONEY. MAKE MORE MONEY. REPEAT WITH STYLE.
      </div>
    </div>`;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          email: process.env.FROM_EMAIL,
          name: process.env.FROM_NAME || "Tufayel",
        },
        to: [{ email, name }],
        replyTo: { email: process.env.FROM_EMAIL },
        subject: `Call request received: ${day} at ${time} ✅`,
        htmlContent: html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Brevo error:", err);
      return { statusCode: 200, body: "email failed but submission saved" };
    }

    return { statusCode: 200, body: "confirmation sent" };
  } catch (e) {
    console.error(e);
    return { statusCode: 200, body: "error, submission still saved" };
  }
};
