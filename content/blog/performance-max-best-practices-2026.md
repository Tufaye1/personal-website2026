---
title: "Performance Max Best Practices 2026: What Actually Works After Running $500K Through It"
date: 2026-06-18
tag: "Google Ads"
description: "Performance Max best practices for 2026, based on spending $500K+ across ecommerce and lead gen accounts. Asset group strategy, audience signals, brand exclusions, and how to read PMax reporting."
reading_time: "10 min"
faq:
  - q: "Is Performance Max better than Standard Shopping?"
    a: "For most ecommerce accounts with catalogs over 50 products, yes. PMax accesses more inventory (Shopping, Display, YouTube, Discover, Gmail, Search) and Google's algorithm has gotten significantly better at allocating across channels. The trade-off is control. Standard Shopping gives you product-level bidding and search term visibility that PMax doesn't. If you have a small catalog and want granular control, Standard Shopping still has a place. For larger catalogs, PMax with proper brand exclusions and asset group segmentation outperforms Standard Shopping in most cases."
  - q: "How do I stop PMax from spending on branded searches?"
    a: "Use the brand exclusion feature in your PMax campaign settings. Go to Settings, then Brand Safety, then Brand Restrictions. Add your brand name and common misspellings. This prevents PMax from bidding on searches containing your brand terms, forcing it to earn conversions from non-branded traffic. You should also run a separate branded search campaign to capture that traffic with full visibility and control. Check regularly using the Insights tab to verify brand terms aren't leaking through."
  - q: "What's a good ROAS target for Performance Max?"
    a: "It depends entirely on your margins and business model. For ecommerce, start with a target that's 20-30% lower than your blended account ROAS. PMax runs across multiple channels including upper-funnel placements, so holding it to the same target as your branded search campaign will strangle its reach. A typical starting point for DTC ecommerce is 300-400% ROAS. For lead gen, use Target CPA instead of Target ROAS and start with a CPA 20-30% above your branded search CPA. Adjust after 2-4 weeks of data collection. The key is giving PMax room to explore before tightening."
---

Performance Max best practices in 2026 come down to this: give it the right inputs (strong creative assets, accurate conversion data, smart audience signals), prevent it from gaming the easy wins (brand exclusions are mandatory), and read the reporting with a skeptical eye because PMax will happily take credit for conversions it didn't actually drive. After running over $500K through PMax campaigns across ecommerce and lead gen accounts at Eskimi and through my agency Truman, I can tell you exactly what works, what's a waste of time, and what Google's documentation conveniently leaves out.

PMax is not a "set it and forget it" campaign type. It's a machine learning system that optimizes based on the signals you give it. Bad inputs equal bad outputs, and the cost of bad outputs is hiding inside a black box where you can't see exactly how your money is being spent. That's the tension with PMax: it can be incredibly effective, but only if you set it up to succeed and monitor it to catch the ways it tries to cheat.

## Asset Group Strategy: Stop Dumping Everything Into One Group

The single biggest PMax mistake is running one asset group with all your products and a handful of generic assets. Google recommends "letting the algorithm decide," and yes, Google also benefits when you give it maximum flexibility with your ad spend. Funny how that works.

Instead, segment your asset groups by product category or theme. Each asset group should have:

- **Specific product listings** (use listing groups to assign relevant products)
- **Tailored headlines** that match those products (not generic "Shop Now" headlines)
- **Relevant images and videos** for that product category
- **A landing page URL** that matches the product theme (not your homepage)
- **Unique audience signals** for that customer segment

For an ecommerce store with 200+ products across 5 categories, I'd run 5-8 asset groups within one PMax campaign. Each group maps to a product category with its own creative and audience signals.

Why not separate campaigns? Because PMax campaigns need conversion volume to optimize. One PMax campaign with 5 asset groups shares learnings across groups while still serving relevant creative. Five separate PMax campaigns with one asset group each often don't get enough individual conversion volume, especially if your daily budget per campaign drops below $50-100.

The exception: if different product categories need fundamentally different ROAS targets (luxury items vs accessories, for example), use separate campaigns. Budget and ROAS targets are set at the campaign level, not the asset group level.

## Audience Signals: They're Suggestions, Not Targeting

This confuses people. Audience signals in PMax are not the same as audience targeting in other campaign types. They're starting suggestions. You're telling Google, "these are the types of people most likely to convert, start here." Google will use these signals initially and then expand beyond them as it learns.

That said, strong audience signals dramatically shorten the learning period and improve early performance. Here's what to include:

**Customer match lists:** Upload your existing customer email list (hashed). This is your strongest signal. Google finds users who look like your best customers, which is exactly what you want PMax doing. Update this list monthly at minimum.

**Website visitor lists:** Your remarketing audiences. PMax will use these to find similar users, not just to retarget existing visitors (though it does that too).

**Custom segments (search-term based):** Add the top-performing keywords from your search campaigns. If "organic cotton sheets" converts well in search, adding it as a custom segment in PMax tells the algorithm to find users with similar search behavior across Shopping, Display, and YouTube.

**Custom segments (URL based):** Add competitor URLs and relevant industry sites. Google profiles users who visit those sites and finds similar audiences for you.

**In-market and affinity segments:** Layer in relevant Google audiences. These are less powerful than your first-party data, but they help during the initial learning phase.

What I've found is that PMax campaigns with strong first-party audience signals (customer lists + website visitors + search-term custom segments) outperform those with only Google's built-in segments by 25-40% in the first 30 days. After that, the performance gap narrows as PMax learns from its own conversion data. But those first 30 days matter a lot, especially when you're trying to justify PMax's existence to a client or CFO.

## Brand Exclusions: This Is Not Optional

If I could tattoo one PMax rule on every advertiser's forehead, it would be this: exclude your brand terms.

PMax will spend on branded searches. Eagerly. Because branded searches convert at high rates and make PMax's performance look spectacular. The problem is that you were going to capture those branded conversions anyway, either through organic search or through your dedicated branded search campaign. PMax spending on branded terms is not incremental. It's cannibalistic.

Here's how to set it up:

1. In your PMax campaign settings, go to Brand Safety, then Brand Restrictions
2. Add your brand name and all common variations/misspellings
3. Run a separate branded search campaign to capture those terms with full visibility

After implementing brand exclusions, expect your PMax reported conversions to drop. This is good. The conversions that disappear were never real PMax wins. They were branded searches that PMax was claiming credit for. What remains is the actual non-branded performance, and that's what you should optimize.

I always pair this with a properly structured account. If you haven't read my [account structure guide](/blog/google-ads-account-structure-ecommerce), the short version is: branded search gets its own campaign with its own budget, and PMax handles non-branded Shopping, Display, YouTube, and Discovery.

## How to Read PMax Reporting (Without Getting Fooled)

PMax's reporting is improving, but it's still a black box compared to other campaign types. Here's how to extract useful signal:

**Insights tab over campaign-level metrics.** The Insights tab shows you which search themes, audience segments, and product categories are driving performance. This is more actionable than the top-level CPA/ROAS numbers.

**Search terms report (partial).** Google now shows search categories (not individual search terms) that trigger your PMax ads. Check this weekly. If you see branded categories appearing despite your exclusions, your exclusion list needs updating.

**Auction insights.** Available for PMax since 2024. Shows you which competitors appear alongside your ads. Useful for understanding competitive dynamics.

**Asset performance ratings.** Google rates each asset as "low," "good," or "best." Take these with a grain of salt. "Best" doesn't mean the asset is actually good. It means Google showed it more and it got clicks. The asset could be driving low-quality traffic. Cross-reference asset ratings with actual conversion data.

**Placement reports.** You can now see where PMax placed your ads (specific YouTube channels, websites, apps). Review this monthly and exclude irrelevant or low-quality placements.

**The truth test:** Compare your PMax reported conversions against your actual back-end data (Shopify orders, CRM entries, bank deposits). If PMax claims 100 conversions but you only see 70 in your back-end, the attribution gap tells you PMax is over-claiming. This isn't fraud. It's attribution modeling. PMax uses data-driven attribution which gives itself partial credit for conversions that other channels also touched. Understanding this gap is essential for honest budget allocation. For a deeper dive into how attribution models affect what you see, check out my [attribution model guide](/blog/google-ads-attribution-model-guide).

## Creative Testing in PMax: Working Within the Black Box

You can't A/B test creative in PMax the way you can in standard campaigns. There's no "ad variations" experiment. Instead, use this framework:

**Sequential testing.** Run one set of assets for 2-3 weeks. Measure performance. Swap in a new set of assets for the next 2-3 weeks. Compare the periods. Not scientific. Not perfect. But it's what works within PMax's constraints.

**Asset rotation analysis.** Look at which assets Google rates as "best" and which it stops showing. Upload 5-8 headlines, 5-8 descriptions, 5-15 images, and 2-5 videos. After two weeks, check which ones Google is actually using. Replace the "low" performers with new variations. This is iterative optimization, not controlled testing, but it works.

**Video matters more than you think.** PMax runs on YouTube. If you only provide images, Google will auto-generate video assets from your images, and they look terrible. Upload real video assets (even simple product demos or UGC-style clips shot on a phone) and your YouTube placements will perform dramatically better.

**Image specifications.** Provide all recommended sizes: landscape (1200x628), square (1200x1200), and portrait (960x1200). Missing sizes means PMax can't serve your ads on certain placements, which limits its reach and forces it into auctions you might not want (like low-quality display inventory where only one ad size fits).

The creativity question is where [AI is reshaping Google Ads](/blog/ai-changing-google-ads) most significantly. Google's asset generation tools can now produce passable variations of your creative at scale. They're not replacing a good creative strategy, but they're useful for filling asset slots and testing messaging angles you wouldn't have tried manually.

## What PMax Can't Do (and What to Use Instead)

PMax is powerful. It's not everything. Here's what it genuinely can't handle:

**Granular keyword control.** If you need to bid on specific high-value keywords with precision, use search campaigns. PMax doesn't let you choose keywords. It finds its own based on your product feed, assets, and audience signals. For your top 50 money keywords, run them in a dedicated search campaign alongside PMax.

**Sequential remarketing.** You can't build a "show ad A on day 1, ad B on day 3, ad C on day 7" sequence in PMax. For sophisticated remarketing funnels, use standard Display remarketing campaigns with audience segmentation by recency.

**Specific placement control.** Despite improvements, you still can't proactively target specific YouTube channels or websites in PMax. You can only exclude placements after PMax has already spent money there. If placement precision matters for your brand, use dedicated YouTube or Display campaigns.

**Upper-funnel branding.** PMax optimizes for conversions. It's not designed for pure awareness campaigns measured on reach, frequency, or brand lift. Use Video Reach campaigns or Demand Gen for top-of-funnel brand building.

**B2B lead gen (sometimes).** PMax can work for B2B, but it needs high-quality conversion data. If your B2B funnel takes 90 days from click to closed deal, PMax only sees the early micro-conversions (form fills, demo requests) and optimizes for those. The quality of those leads varies wildly. For B2B, feed offline conversion data back to Google so PMax learns which lead sources actually close, not just which ones fill out forms.

## The PMax Launch Checklist

Before you launch or relaunch a PMax campaign, verify these:

1. Brand exclusions are active and include all brand variations
2. At least 3-5 asset groups with product-relevant creative
3. Customer match list uploaded and assigned as audience signal
4. Search-term based custom segments from your top keywords
5. All image sizes provided (landscape, square, portrait)
6. At least one real video asset (not auto-generated)
7. Server-side conversion tracking verified and working (see my [server-side tracking setup guide](/blog/server-side-tracking-google-ads) if you haven't done this)
8. ROAS target set 20-30% lower than your blended account ROAS
9. Daily budget at minimum $50 (preferably $100+) to give the algorithm room
10. Negative placement list from previous campaigns applied
11. Final URL expansion turned off (unless you've tested it and it works for your site)
12. Separate branded search campaign running to capture brand traffic with full visibility

## The Honest Assessment

PMax works. It works well for ecommerce with large catalogs, strong product feeds, and good conversion data. It can work for lead gen with proper offline conversion imports. It allocates budget across channels more efficiently than most humans can manage manually, especially across Shopping, Display, and YouTube simultaneously.

But it also works hard to take credit for things it didn't do. It inflates its own performance through generous attribution. It hides what it's actually doing behind limited reporting. And it will happily spend your entire budget on branded searches while showing you a beautiful ROAS number that means nothing.

The best practices aren't about trusting PMax more or trusting it less. They're about setting it up so it can only succeed in ways that actually matter to your business. Brand exclusions, quality conversion data, strong creative, and skeptical reporting. Do those four things and PMax becomes one of the most effective tools in your account. Skip them and it becomes the most effective tool at wasting your money while looking like it's not.

## Frequently Asked Questions

## Is Performance Max better than Standard Shopping?

For most ecommerce accounts with catalogs over 50 products, PMax outperforms Standard Shopping. PMax accesses more inventory across Shopping, Display, YouTube, Discover, Gmail, and Search. Google's algorithm has improved significantly at allocating across these channels based on where conversions are most likely. The trade-off is visibility and control. Standard Shopping gives you product-level bidding, search term reports, and placement control that PMax simply doesn't offer. If you have a small catalog (under 50 products) and want precise control over how each product is bid and where it appears, Standard Shopping still has a place. For larger catalogs where manual management of hundreds of products isn't practical, PMax with proper setup (brand exclusions, segmented asset groups, accurate tracking) outperforms Standard Shopping in both revenue and ROAS for the majority of accounts I've managed.

## How do I stop PMax from spending on branded searches?

Use the brand exclusion feature built into PMax campaign settings. Navigate to your campaign settings, find Brand Safety, then Brand Restrictions. Add your brand name along with common misspellings, abbreviations, and product line names that function as brand terms. This prevents PMax from bidding on any search query containing those terms. You should also run a dedicated branded search campaign to capture that traffic with full visibility into search terms, CPCs, and conversion rates. After enabling brand exclusions, check the PMax Insights tab weekly for the first month to verify that branded search themes aren't leaking through. Sometimes Google's matching isn't perfect, and you'll need to add additional brand variations to your exclusion list. The performance drop you see after enabling exclusions is revealing PMax's true non-branded performance, and that's the number you should actually be optimizing.

## What's a good ROAS target for Performance Max?

There's no universal answer because it depends entirely on your margins, business model, and growth goals. The framework I use: start with a ROAS target that's 20-30% lower than your current blended account ROAS. PMax runs across multiple channels including upper-funnel placements like YouTube and Display, which naturally have lower direct ROAS than search. If your blended account ROAS is 500%, start PMax at 350-400%. For DTC ecommerce with 60-70% gross margins, a common starting range is 300-400% ROAS. For lower-margin businesses, you'll need higher targets, typically 500-800%. For lead gen accounts, switch to Target CPA instead of Target ROAS and set your initial CPA target 20-30% above your branded search CPA. Give PMax 2-4 weeks at this looser target to collect data and learn. Then gradually tighten. Dropping your target by 10-15% every two weeks until you find the point where volume starts declining gives you the efficiency curve you need to make informed budget decisions.
