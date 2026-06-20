const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');
const DOMPurify = require('isomorphic-dompurify');

const CONTENT_DIR = path.join(__dirname, 'content', 'blog');
const BLOG_DIR = path.join(__dirname, 'blog');
const INDEX_PATH = path.join(__dirname, 'index.html');
const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml');

if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

const posts = [];

if (fs.existsSync(CONTENT_DIR)) {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    const slug = file.replace('.md', '').replace(/[^a-z0-9-]/gi, '');
    if (!slug) { console.warn('Skipping invalid slug: ' + file); continue; }
    const html = DOMPurify.sanitize(marked(content));
    const date = new Date(data.date);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    posts.push({
      slug,
      title: data.title || slug,
      tag: data.tag || 'Marketing',
      description: data.description || '',
      reading_time: data.reading_time || '5 min read',
      date,
      dateStr,
      isoDate: date.toISOString().split('T')[0]
    });

    const page = blogTemplate(data, html, slug, dateStr);
    fs.writeFileSync(path.join(BLOG_DIR, slug + '.html'), page);
    console.log('Built: blog/' + slug + '.html');
  }
}

posts.sort((a, b) => b.date - a.date);

updateIndex(posts);
updateSitemap(posts);
updateNetlifyRedirects(posts);

console.log(`Done. ${posts.length} CMS post(s) built.`);

function blogTemplate(data, bodyHtml, slug, dateStr) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(data.title)} | Tufayel Hossain</title>
<meta name="description" content="${esc(data.description)}">
<meta name="author" content="Tufayel Hossain">
<link rel="canonical" href="/blog/${slug}">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png">
<meta property="og:title" content="${esc(data.title)} | Tufayel Hossain">
<meta property="og:description" content="${esc(data.description)}">
<meta property="og:type" content="article">
<meta property="og:url" content="/blog/${slug}">
<meta property="article:author" content="Tufayel Hossain">
<meta property="article:published_time" content="${new Date(data.date).toISOString().split('T')[0]}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(data.title)} | Tufayel Hossain">
<meta name="twitter:description" content="${esc(data.description)}">
<script type="application/ld+json">
${buildJsonLd(data, slug)}
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--ink:#0E1116;--ink-2:#161B23;--bone:#E9E4D8;--signal:#FF4B26;--slate:#8B93A1;--line:rgba(233,228,216,.14)}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--ink);color:var(--bone);font-family:'Archivo',sans-serif;line-height:1.7}
a{color:inherit;text-decoration:none}
.nav{position:sticky;top:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:18px 5vw;background:rgba(14,17,22,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav a{font-family:'JetBrains Mono',monospace;font-size:14px;color:var(--slate);transition:color .2s}
.nav a:hover{color:var(--bone)}
.nav .brand{font-family:'Anton',sans-serif;font-size:20px;text-transform:uppercase;color:var(--bone);letter-spacing:.04em}
.wrap{max-width:720px;margin:0 auto;padding:80px 24px 120px}
.meta-bar{display:flex;flex-wrap:wrap;gap:16px;align-items:center;margin-bottom:40px;font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--slate)}
.meta-bar .tag{color:var(--signal);border:1px solid var(--signal);border-radius:6px;padding:3px 10px;font-size:11px;letter-spacing:.1em;text-transform:uppercase}
h1{font-family:'Anton',sans-serif;font-size:clamp(32px,5vw,56px);text-transform:uppercase;line-height:1.1;margin-bottom:20px}
article h2{font-family:'Anton',sans-serif;font-size:clamp(22px,3vw,32px);text-transform:uppercase;margin:48px 0 16px;color:var(--bone)}
article h3{font-size:20px;font-weight:600;margin:32px 0 12px;color:var(--bone)}
article p{color:var(--slate);margin-bottom:20px;font-size:17px}
article ul,article ol{color:var(--slate);margin:0 0 20px 24px;font-size:17px}
article li{margin-bottom:8px}
article strong,article b{color:var(--bone);font-weight:600}
article blockquote{border-left:3px solid var(--signal);padding:16px 24px;margin:28px 0;background:rgba(255,255,255,.03);border-radius:0 12px 12px 0}
article blockquote p{margin:0;color:var(--bone);font-style:italic}
article code{font-family:'JetBrains Mono',monospace;font-size:14px;background:rgba(255,255,255,.06);padding:2px 8px;border-radius:4px}
.author-box{margin-top:64px;padding:32px;border:1px solid var(--line);border-radius:16px;display:flex;gap:20px;align-items:center}
.author-avatar{width:56px;height:56px;border-radius:50%;background:var(--signal);display:flex;align-items:center;justify-content:center;font-family:'Anton',sans-serif;font-size:22px;color:#fff;flex-shrink:0}
.author-box .name{font-weight:600;color:var(--bone);margin-bottom:4px}
.author-box .role{font-size:14px;color:var(--slate)}
.author-box a{color:var(--signal);font-size:14px;font-family:'JetBrains Mono',monospace}
.footer{text-align:center;padding:24px;color:var(--slate);font-size:13px;border-top:1px solid var(--line);margin-top:80px}
</style>
</head>
<body>
<nav class="nav">
  <a href="/">&larr; Back to tufayel.com</a>
  <span class="brand">Tufayel</span>
</nav>
<div class="wrap">
  <div class="meta-bar">
    <span class="tag">${esc(data.tag || 'Marketing')}</span>
    <span>${dateStr}</span>
    <span>${esc(data.reading_time || '5 min read')}</span>
  </div>
  <h1>${esc(data.title)}</h1>
  <article>${bodyHtml}</article>
  <div class="author-box">
    <div class="author-avatar">T</div>
    <div>
      <div class="name">Tufayel Hossain</div>
      <div class="role">Full-Funnel Performance Marketer & Growth Consultant</div>
      <a href="/">tufayel.com &rarr;</a>
    </div>
  </div>
</div>
<div class="footer">&copy; 2026 Tufayel Hossain</div>
</body>
</html>`;
}

function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function buildJsonLd(data, slug) {
  const graph = [
    {
      "@type": "BlogPosting",
      headline: data.title,
      description: data.description,
      author: {"@type": "Person", name: "Tufayel Hossain"},
      datePublished: new Date(data.date).toISOString().split('T')[0],
      url: "/blog/" + slug
    }
  ];
  if (data.faq && Array.isArray(data.faq) && data.faq.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: data.faq.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {"@type": "Answer", text: f.a}
      }))
    });
  }
  return JSON.stringify({"@context": "https://schema.org", "@graph": graph}, null, 2);
}

function updateIndex(cmsPosts) {
  let html = fs.readFileSync(INDEX_PATH, 'utf8');

  const cmsCards = cmsPosts.map(p => `
      <a href="/blog/${p.slug}" class="blog-card reveal">
        <div class="blog-card-body">
          <span class="blog-tag">${esc(p.tag)}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <span class="blog-read">Read article &rarr;</span>
        </div>
        <div class="blog-meta">
          <span>${esc(p.dateStr)}</span>
          <span>${esc(p.reading_time)}</span>
        </div>
      </a>`).join('\n');

  const marker = '<!-- CMS_BLOG_CARDS -->';
  const endMarker = '<!-- /CMS_BLOG_CARDS -->';

  if (html.includes(marker) && html.includes(endMarker)) {
    const before = html.slice(0, html.indexOf(marker) + marker.length);
    const after = html.slice(html.indexOf(endMarker));
    html = before + '\n' + cmsCards + '\n      ' + after;
    fs.writeFileSync(INDEX_PATH, html);
    console.log('Updated index.html blog grid with ' + cmsPosts.length + ' CMS cards');
  }
}

function updateSitemap(cmsPosts) {
  let xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const endTag = '</urlset>';

  let newEntries = '';
  for (const p of cmsPosts) {
    const loc = `https://tufayel.com/blog/${p.slug}`;
    if (!xml.includes(loc)) {
      newEntries += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${p.isoDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }
  }

  if (newEntries) {
    xml = xml.replace(endTag, newEntries + '\n' + endTag);
    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log('Updated sitemap.xml');
  }
}

function updateNetlifyRedirects(cmsPosts) {
  let toml = fs.readFileSync(path.join(__dirname, 'netlify.toml'), 'utf8');
  let changed = false;

  for (const p of cmsPosts) {
    const rule = `/blog/${p.slug}`;
    if (!toml.includes(rule)) {
      toml += `
[[redirects]]
  from = "${rule}"
  to = "${rule}.html"
  status = 200
`;
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(path.join(__dirname, 'netlify.toml'), toml);
    console.log('Updated netlify.toml redirects');
  }
}
