---
title: "Google Ads Account Structure for Ecommerce: The Architecture That Scales"
date: 2026-06-17
tag: "Google Ads"
description: "The right Google Ads account structure for ecommerce separates branded from non-branded, tiers search by intent, and uses PMax strategically. Here's the architecture that scales from $5K to $500K/month."
reading_time: "10 min"
faq:
  - q: "Should I use one campaign or multiple for ecommerce?"
    a: "Multiple, always. At minimum you need separate campaigns for branded search, non-branded search, and Shopping/PMax. This gives you independent budget control and bidding for each intent tier. A single campaign forces Google to allocate budget across fundamentally different conversion behaviors, and it will default to the easiest conversions (branded) every time, starving your prospecting efforts."
  - q: "How do I structure Google Ads for a Shopify store?"
    a: "The structure is the same regardless of platform. Start with three campaigns: branded search, non-branded search tiered by intent, and Performance Max with brand exclusions. Feed your product data through Google Merchant Center (Shopify's native integration works fine). The Shopify-specific consideration is tracking. Use Shopify's native Google channel for basic setup, but layer server-side tracking on top for accurate conversion data. Don't rely solely on Shopify's built-in pixel."
  - q: "When should I consolidate campaigns?"
    a: "Consolidate when individual campaigns don't generate enough conversion volume for Smart Bidding to learn, typically fewer than 15-30 conversions per month per campaign. Also consolidate when you're splitting campaigns by arbitrary criteria (like individual product categories with similar ROAS targets) rather than by strategic differences in bidding or budget needs. The rule: if two campaigns have the same goal, same ROAS target, and could share budget without issue, merge them."
---

The best Google Ads account structure for ecommerce separates branded from non-branded traffic, tiers search campaigns by purchase intent, uses Performance Max with brand exclusions for Shopping, and keeps budgets independent so you can scale prospecting without cannibalizing what's already working. That's the short answer. If you want the full architecture with the reasoning behind every decision, keep reading.

I've built and rebuilt this structure across ecommerce accounts spending $5K/month all the way up to $500K/month at Eskimi and through my agency Truman. The details shift depending on catalog size, margin structure, and growth goals. But the foundational architecture stays remarkably consistent, because it's built around how Google's algorithms actually process signal, not around how the platform's default setup wizard wants you to organize things.

## The Core Principle: Structure Around Intent, Not Products

The biggest mistake in ecommerce account structure is organizing campaigns by product category. You end up with a campaign for "Men's Shoes," another for "Women's Shoes," another for "Accessories," and so on. This feels logical from a merchandising perspective. It's terrible from a bidding perspective.

Here's why. A user searching "Nike Air Max 90 black size 11" has completely different intent than someone searching "comfortable running shoes for flat feet." Both might land in your "Men's Shoes" campaign. But the first query converts at 12% and the second at 2%. They need different bids, different ROAS targets, and probably different landing pages. Lumping them together forces Smart Bidding to find an average bid for wildly different conversion rates.

Instead, structure around intent tiers. High intent (branded, specific product searches), mid intent (category and comparison searches), and low intent (broad awareness and competitor terms). Each tier gets its own campaign with its own budget and bidding strategy. Products flow across tiers naturally based on the queries that trigger them.

## The Architecture

Here's the full structure I use for most ecommerce accounts. Adjust based on your catalog size and spend level.

### Tier 1: Branded Search

**Campaign type:** Search
**Bidding:** Maximize Conversions or Target ROAS (depending on volume)
**Budget:** Uncapped (within reason)

This captures everyone searching for your brand name. It's your cheapest, highest-converting traffic. Seems simple, but people mess this up in two ways.

First, they don't run branded search at all because "we rank #1 organically anyway." Sure. But competitor ads sit above your organic listing. Without brand campaigns, competitors siphon 10-15% of your brand traffic. The CPCs are $0.10-0.50. Just run it.

Second, they dump branded terms into the same campaign as non-branded. This inflates non-branded performance metrics, making it impossible to evaluate actual prospecting effectiveness. It also lets Smart Bidding lean on easy branded conversions instead of working harder on the non-branded terms.

Keep branded search isolated. Give it its own budget. Let it do its thing. This is a defensive campaign, not a growth campaign.

### Tier 2: Non-Branded Search (High Intent)

**Campaign type:** Search
**Bidding:** Target ROAS or Target CPA
**Budget:** Scaled based on ROAS targets

These are the money keywords. Product-specific searches, "buy" and "shop" intent, comparison queries where someone is actively choosing between options. Examples: "buy ceramic cookware set," "best noise cancelling headphones under $300," "organic cotton sheets queen."

Use exact and phrase match keywords. Build tight ad groups around product categories or use cases. Write ads that match the specific intent (someone searching for a specific product wants price and availability, not your brand story).

This tier usually delivers your best non-branded ROAS. Scale it first before expanding into lower intent tiers.

### Tier 3: Non-Branded Search (Mid Intent)

**Campaign type:** Search
**Bidding:** Target ROAS (usually a lower target than Tier 2)
**Budget:** Controlled, scaled based on incrementality

These are category-level and informational-with-commercial-intent queries. "Best cookware materials," "how to choose running shoes," "types of bed sheets." The user isn't ready to buy this second, but they're researching with purchase intent.

This tier feeds your funnel. Lower conversion rate, higher volume, lower ROAS, but it drives new customer acquisition. Without it, you're only capturing demand, never creating it.

I wrote about how this fits into the broader funnel in my [full-funnel Google Ads strategy](/blog/full-funnel-google-ads-strategy) guide. The mid-intent tier is where most ecommerce accounts have the biggest growth opportunity.

### Tier 4: Performance Max (with Brand Exclusions)

**Campaign type:** Performance Max
**Bidding:** Target ROAS
**Budget:** Significant (this is your primary Shopping + Display + YouTube channel)

Performance Max is where your product feed lives. It runs across Shopping, Display, YouTube, Discover, Gmail, and Search (if you let it). For ecommerce, it's essentially replaced Standard Shopping for most accounts.

The critical setup detail: **exclude your brand terms**. PMax will happily spend your entire budget on branded searches if you let it, because those convert easily and make PMax look brilliant. Use the brand exclusion list in PMax settings to force it to earn its keep on non-branded traffic.

I've covered PMax setup in detail in my [Performance Max best practices](/blog/performance-max-best-practices-2026) guide, including the specific exclusions and asset group strategies that actually work. But the structural decision is this: PMax gets its own budget, separate from search, so you can scale both channels independently.

### Tier 5: Remarketing

**Campaign type:** Display Remarketing + RLSA (Remarketing Lists for Search Ads)
**Bidding:** Target CPA or Maximize Conversions
**Budget:** 10-20% of total spend

Don't let PMax handle all your remarketing. Yes, PMax does remarketing. No, you can't control it. A dedicated remarketing campaign lets you set specific frequency caps, creative sequences, and audience windows that PMax's black box doesn't expose.

Segment your remarketing lists:
- Cart abandoners (7 days): highest priority, highest bids
- Product viewers (14 days): medium priority
- All visitors (30 days): lower priority
- Customer list (purchasers for cross-sell): separate treatment

RLSA (remarketing lists applied to search campaigns) is underrated. Adding audience lists to your Tier 2 and 3 search campaigns with bid adjustments lets you bid more aggressively on non-branded keywords when the user has already visited your site. The conversion rate difference is massive.

### Tier 6: Prospecting (YouTube, Display, Demand Gen)

**Campaign type:** Demand Gen or Video campaigns
**Bidding:** Maximize Conversions or Target CPA
**Budget:** 5-15% of total spend (scale up once unit economics prove out)

This is your top-of-funnel. Brand awareness. New audience acquisition. The campaigns here have the worst direct ROAS, and that's fine, because they feed the mid-funnel and branded search tiers with new audiences.

Measure these campaigns on view-through metrics and new customer rate, not last-click ROAS. If you hold them to the same ROAS target as your branded search campaign, you'll kill them immediately and then wonder why branded search volume plateaued.

## Budget Allocation Framework

Here's the starting split I recommend for a scaling ecommerce account:

- **Branded Search:** 10-15% (let this float based on brand search volume)
- **Non-Branded Search (High Intent):** 25-30%
- **Non-Branded Search (Mid Intent):** 10-15%
- **Performance Max:** 25-35%
- **Remarketing:** 10-15%
- **Prospecting:** 5-15%

This is a starting point. Shift based on your margins, growth goals, and what the data tells you. A brand trying to grow aggressively should push more into prospecting and mid-intent. A brand optimizing for profitability should consolidate into high-intent search and PMax.

The key: these budgets must be independent. Shared budgets across campaigns with different intent levels are the fastest way to destroy your structure's effectiveness. Google will always default to spending where conversions are easiest, which means branded traffic eats everything.

## Campaign Segmentation Logic: When to Split vs. Consolidate

This is where accounts get bloated or too thin. The decision framework:

**Split campaigns when:**
- You need different ROAS/CPA targets (branded vs non-branded obviously need different targets)
- You need independent budget control (your search budget shouldn't dictate your PMax budget)
- Performance varies dramatically and you need to bid differently (high-margin vs low-margin products)
- You're in different geographic markets with different competitive dynamics

**Consolidate campaigns when:**
- Individual campaigns don't get 15-30+ conversions per month (Smart Bidding needs volume to learn)
- You're splitting by arbitrary product categories that have similar conversion dynamics
- You have the same ROAS target and could share budget without issue
- Granularity is giving you more control than you actually use

The sweet spot for most ecommerce accounts spending $20K-$100K/month is 6-10 campaigns. Under $20K, you might run 4-5. Over $100K, you might need 12-15. But I've seen accounts with 50+ campaigns spending $30K/month, and they're all starved of data.

## Tracking: The Foundation You Can't Skip

None of this structure matters if your conversion tracking is broken. And in 2026, purely client-side tracking misses 20-40% of conversions due to ad blockers, iOS restrictions, and cookie limitations.

You need [server-side tracking](/blog/server-side-tracking-google-ads) in place before you optimize structure. If Smart Bidding is learning from 60% of your actual conversions, it's optimizing toward a distorted picture regardless of how clean your campaign architecture is.

At minimum: server-side GTM, Enhanced Conversions with hashed email data, and Consent Mode v2 if you operate in the EU. This isn't optional anymore. It's the foundation that makes everything else work.

## When to Use Standard Shopping vs. Performance Max

This is the question I get asked most. The answer has gotten simpler over the last year.

**Use PMax as your primary Shopping channel.** It has access to more inventory (YouTube, Display, Discover) and generally performs well for ecommerce when set up properly (asset groups by category, brand exclusions, strong product feed).

**Use Standard Shopping when you need granular control.** If you have a small catalog (under 50 products) where each product needs specific bid management, Standard Shopping still gives you product-level bidding control that PMax doesn't. Also useful for specific product launches where you want to control exactly how budget is allocated.

**Use both when you need to protect high-priority products.** Run a Standard Shopping campaign for your best sellers at a higher priority, then let PMax pick up everything else. This ensures your top products always get shown while PMax handles the long tail.

## Scaling the Structure

The beauty of this architecture is that it scales in predictable ways.

**Scaling up:** Increase budgets on Tier 2 (high-intent search) first. Then PMax. Then expand Tier 3 keywords. Then increase prospecting. Each tier feeds the one above it, so you're building demand while capturing it.

**Scaling into new markets:** Duplicate the structure per market/language. Don't mix geographies in the same campaigns unless the markets are small enough that consolidation is necessary for data volume. Different markets have different CPCs, conversion rates, and competitive dynamics.

**Scaling with new products:** Add product groups to your PMax asset groups. Add new keyword sets to the appropriate search tier based on intent. The structure accommodates new products without requiring new campaigns.

**Seasonal scaling:** Increase budgets proportionally across tiers during peak seasons. Don't just dump money into PMax during Black Friday. Increase search budgets too, because search intent spikes and you want to capture it directly rather than hoping PMax allocates correctly.

The goal is a machine where every dollar goes to the right place based on intent, every campaign has enough data to optimize, and you can adjust any lever without breaking the rest of the system.

## Frequently Asked Questions

## Should I use one campaign or multiple for ecommerce?

Multiple, always. At bare minimum you need separate campaigns for branded search, non-branded search, and Shopping/Performance Max. This gives you independent budget control and bidding strategies for each intent tier. A single campaign forces Google to allocate budget across fundamentally different conversion behaviors, and it will default to the easiest conversions (branded) every time. That means your prospecting efforts get starved of budget while branded search soaks up everything. Even at low budgets ($3K-5K/month), running three campaigns with $1K-2K each produces better results than a single $5K campaign, because you're making the strategic decisions about budget allocation instead of letting Google's algorithm chase the path of least resistance.

## How do I structure Google Ads for a Shopify store?

The account structure is platform-agnostic. Whether you're on Shopify, WooCommerce, BigCommerce, or a custom build, the campaign architecture stays the same: branded search, tiered non-branded search, PMax with brand exclusions, remarketing, and prospecting. What changes with Shopify is the data layer. Use Shopify's native Google channel integration for your Merchant Center product feed (it handles automatic syncing, pricing updates, and inventory status). But don't rely solely on Shopify's built-in tracking pixel. Layer server-side tracking on top for accurate conversion data. Shopify's checkout sits on a different domain (checkout.shopify.com), which creates cross-domain tracking challenges. Server-side tracking routes through your own domain and eliminates this issue.

## When should I consolidate campaigns?

Consolidate when individual campaigns don't generate enough conversion volume for Smart Bidding to learn effectively. The threshold is roughly 15-30 conversions per month per campaign. Below that, Smart Bidding is essentially guessing. Also consolidate when you've split campaigns by criteria that don't actually require different treatment. If two product category campaigns have the same ROAS target, the same geographic targeting, and could share budget without either suffering, they should be one campaign. The consolidation test is simple: do these campaigns need different bids, different budgets, or different targets? If the answer to all three is no, merge them. The most common over-segmentation I see is splitting by product category when all categories have similar margins and conversion rates. You end up with eight campaigns each getting four conversions per week, and none of them have enough data to optimize.
