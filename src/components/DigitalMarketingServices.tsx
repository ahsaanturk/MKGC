import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const serviceSections = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We help businesses improve search visibility and attract relevant organic traffic, connecting them with customers actively searching for their products and services.",
    capabilities: [
      "Technical SEO: Improve site structure, loading speed, mobile responsiveness, indexing, crawling, and technical performance.",
      "On-Page SEO: Optimize titles, meta descriptions, headings, URLs, images, and content.",
      "Off-Page SEO: Build authority through quality backlinks, digital PR, and relevant external references.",
      "Local SEO: Improve visibility in local searches and Google Maps.",
      "Keyword Research: Identify relevant keywords by search volume, competition, and customer intent.",
      "SEO Content Strategy: Plan and optimize content to attract organic visitors.",
      "SEO Audits: Identify website issues and create actionable optimization plans.",
      "Competitor SEO Analysis: Study competitor rankings, keywords, and backlink strategies.",
    ],
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "We help businesses build audience relationships through strategic social media marketing and consistent online communication, increasing brand awareness, engagement, trust, and growth.",
    capabilities: [
      "Social Media Strategy: Develop plans based on business objectives and target audiences.",
      "Account Management: Manage business profiles and maintain a professional online presence.",
      "Facebook Marketing: Promote businesses, manage pages, and create campaigns for relevant audiences.",
      "Instagram Marketing: Build brand identity through visual content, reels, stories, and audience engagement.",
      "LinkedIn Marketing: Develop professional visibility, B2B connections, and networking opportunities.",
      "TikTok Marketing: Create short-form content strategies to increase reach and engagement.",
      "YouTube Marketing: Promote video content, optimize channels, and grow audiences.",
      "Community Management: Respond to comments, messages, inquiries, and customer interactions.",
      "Social Media Analytics: Monitor engagement, reach, impressions, follower growth, and campaign performance.",
    ],
  },
  {
    title: "Social Media Advertising",
    description:
      "We plan and manage paid campaigns to reach specific audiences, generate leads, increase sales, and promote services using audience targeting, clear campaign objectives, budget optimization, and performance analysis.",
    capabilities: [
      "Facebook Ads: Target campaigns for awareness, traffic, leads, and conversions.",
      "Instagram Ads: Create visual advertising for stories, reels, feeds, and other placements.",
      "LinkedIn Ads: Reach professional audiences for B2B marketing, recruitment, and corporate services.",
      "TikTok Ads: Use short-form video advertising to reach relevant audiences.",
      "YouTube Ads: Promote brands, products, and services through targeted video ads.",
      "Audience Targeting: Identify potential customers by demographics, interests, location, and behavior.",
      "Retargeting: Reach people who have visited a website or interacted with a brand.",
      "Campaign Optimization: Improve performance through testing, analysis, and budget adjustments.",
    ],
  },
  {
    title: "Google Ads & Search Engine Marketing (SEM)",
    description:
      "We help businesses reach people actively searching for relevant products and services, generating qualified traffic, inquiries, and conversions through structured, optimized campaigns.",
    capabilities: [
      "Google Search Ads: Show ads in search results for relevant keywords.",
      "Google Display Ads: Promote brands with visual ads across Google's display network.",
      "YouTube Advertising: Reach audiences through targeted video advertisements.",
      "Google Shopping Ads: Promote eligible products through product-based ads.",
      "Keyword Planning: Identify high-intent keywords for campaigns.",
      "Conversion Tracking: Measure calls, form submissions, purchases, and other valuable actions.",
      "Campaign Management: Manage budgets, bidding strategies, advertisements, and targeting.",
      "Performance Reporting: Evaluate clicks, impressions, cost per click, conversions, and return on ad spend.",
    ],
  },
  {
    title: "Website Design & Digital Presence Optimization",
    description:
      "We create modern, responsive, user-friendly websites that communicate brand value and help turn visitors into potential customers.",
    capabilities: [
      "Business Websites: Build professional sites for companies, organizations, and service providers.",
      "Corporate Websites: Showcase company profiles, services, achievements, and contact information.",
      "Landing Pages: Create conversion-focused pages for specific marketing campaigns.",
      "WordPress Websites: Develop and customize WordPress sites.",
      "E-commerce Websites: Build online stores with product catalogs, carts, and purchasing functionality.",
      "Website Redesign: Improve an existing site's appearance, structure, usability, and performance.",
      "Conversion Rate Optimization: Improve site elements to increase inquiries, registrations, and sales.",
      "Website Maintenance: Update content, monitor performance, and maintain functionality.",
    ],
  },
  {
    title: "Content Marketing & Strategy",
    description:
      "We develop meaningful content that communicates a brand's message, attracts potential customers, and builds long-term trust while supporting business objectives and marketing campaigns.",
    capabilities: [
      "Content Strategy: Plan content around brand identity, audience interests, and marketing goals.",
      "Blog Writing: Create informative, SEO-friendly articles for business websites.",
      "Website Content: Write service descriptions, company profiles, landing pages, and other web materials.",
      "Social Media Content: Develop captions, posts, content calendars, and promotional messages.",
      "Marketing Copywriting: Write persuasive advertising, promotional, and campaign content.",
      "Email Content: Develop newsletters, promotional emails, and customer communications.",
      "Content Optimization: Improve existing content for readability, search visibility, and engagement.",
    ],
  },
  {
    title: "Graphic Design & Creative Branding",
    description:
      "We create professional visual identities and marketing materials that communicate business value, maintain brand consistency, and stand out in competitive markets.",
    capabilities: [
      "Logo Design: Create distinctive logos that represent a company's identity.",
      "Brand Identity Design: Develop brand colors, typography, visual guidelines, and consistent design elements.",
      "Social Media Graphics: Design posts, banners, covers, stories, and promotional graphics.",
      "Marketing Materials: Create brochures, flyers, posters, business cards, and company profiles.",
      "Advertisement Creatives: Design visuals for digital advertising campaigns.",
      "Presentation Design: Create professional corporate and business presentations.",
      "Infographics: Turn complex information into clear, engaging visuals.",
    ],
  },
  {
    title: "Video Marketing & Production",
    description:
      "We create engaging video content for digital platforms, promotional campaigns, and brand storytelling.",
    capabilities: [
      "Promotional Videos: Introduce and promote businesses, products, and services.",
      "Corporate Videos: Present company profiles, operations, achievements, and organizational activities.",
      "Social Media Reels: Develop short-form videos for Instagram, Facebook, and TikTok.",
      "Product Videos: Showcase product features, benefits, and applications.",
      "Video Editing: Provide professional editing, transitions, subtitles, and visual enhancements.",
      "Motion Graphics: Create animated elements and visual explanations.",
      "Video Advertising: Produce creative videos for paid marketing campaigns.",
    ],
  },
  {
    title: "Email Marketing & Automation",
    description:
      "We help businesses communicate directly with customers through strategic email campaigns that build relationships, generate leads, promote services, and improve retention.",
    capabilities: [
      "Email Campaign Management: Plan and execute targeted campaigns.",
      "Email Newsletter Design: Create professional newsletters for customers and subscribers.",
      "Lead Nurturing: Develop email sequences that guide potential customers toward business decisions.",
      "Automated Email Campaigns: Set up welcome emails, follow-ups, reminders, and other automated communications.",
      "Email List Management: Organize and segment subscriber lists.",
      "Email Copywriting: Write engaging subject lines and persuasive email content.",
      "Campaign Analytics: Monitor delivery, opens, clicks, conversions, and engagement.",
    ],
  },
  {
    title: "Online Reputation Management (ORM)",
    description:
      "We help businesses maintain a professional online reputation by monitoring their digital presence, managing feedback, and strengthening public trust.",
    capabilities: [
      "Reputation Monitoring: Track brand mentions, reviews, and online discussions.",
      "Review Management: Monitor customer reviews across relevant platforms.",
      "Customer Feedback Management: Organize feedback and identify areas for improvement.",
      "Google Business Profile Management: Maintain accurate business information and updates.",
      "Brand Image Development: Strengthen credibility through consistent communication.",
      "Reputation Improvement Strategy: Address negative feedback ethically and improve customer trust.",
    ],
  },
  {
    title: "Lead Generation & Business Growth Marketing",
    description:
      "We help businesses identify potential customers and turn audience interest into genuine business opportunities with structured marketing strategies.",
    capabilities: [
      "B2B Lead Generation: Identify potential business clients and decision-makers.",
      "B2C Lead Generation: Reach consumers interested in specific products and services.",
      "Lead Research: Research relevant companies, industries, and target audiences.",
      "Lead Capture Systems: Develop landing pages, inquiry forms, and contact collection processes.",
      "Marketing Funnels: Create customer journeys from awareness to conversion.",
      "Lead Nurturing: Develop follow-up strategies to improve lead engagement.",
      "Campaign Performance Analysis: Evaluate lead quality, acquisition costs, and conversion rates.",
    ],
  },
  {
    title: "Digital Marketing Consultation & Strategy",
    description:
      "We provide strategic guidance to improve digital marketing activities, identify growth opportunities, and develop effective online marketing plans.",
    capabilities: [
      "Digital Marketing Audits: Evaluate marketing activities and identify improvement opportunities.",
      "Business Growth Strategy: Develop marketing plans aligned with business objectives.",
      "Competitor Analysis: Study competitors' digital presence, positioning, and marketing activities.",
      "Target Audience Research: Identify customer demographics, interests, needs, and behavior.",
      "Marketing Budget Planning: Help allocate marketing budgets effectively.",
      "Digital Transformation Guidance: Recommend suitable digital tools, platforms, and marketing technologies.",
      "Performance Measurement: Establish KPIs and evaluate marketing results.",
    ],
  },
  {
    title: "E-commerce & Online Business Marketing",
    description:
      "We support online businesses in increasing product visibility, attracting potential buyers, and improving online sales through specialized digital marketing.",
    capabilities: [
      "E-commerce SEO: Optimize product pages, categories, and online store structure.",
      "Product Marketing: Develop promotional strategies for products and collections.",
      "Online Store Advertising: Run campaigns to attract relevant shoppers.",
      "Product Content Creation: Develop descriptions, promotional graphics, and product videos.",
      "Shopping Campaign Management: Manage eligible Google Shopping campaigns.",
      "Conversion Optimization: Improve product pages and purchasing journeys.",
      "Customer Retention Marketing: Develop campaigns that encourage repeat purchases.",
    ],
  },
  {
    title: "Analytics, Tracking & Performance Reporting",
    description:
      "We measure digital marketing performance to help businesses understand results and identify where improvements are needed.",
    capabilities: [
      "Google Analytics 4: Monitor website traffic, user behavior, and conversions.",
      "Google Search Console: Analyze search performance, indexing, and organic visibility.",
      "Google Tag Manager: Manage tracking tags and marketing measurement tools.",
      "Conversion Tracking: Measure important customer actions across digital platforms.",
      "Social Media Insights: Analyze audience engagement and content performance.",
      "Advertising Reports: Evaluate campaign expenditure, results, and efficiency.",
      "Performance Dashboards: Present marketing KPIs through clear reports and dashboards.",
      "Data-Driven Recommendations: Use performance data to improve future marketing decisions.",
    ],
  },
];

const reasonsToChoose = [
  {
    title: "Strategic Approach",
    description: "Every marketing activity is aligned with clear business objectives.",
  },
  {
    title: "Creative Excellence",
    description: "We combine innovative ideas with professional execution.",
  },
  {
    title: "Data-Driven Decisions",
    description: "We use analytics and performance insights to improve results.",
  },
  {
    title: "Integrated Solutions",
    description: "Access multiple digital marketing services under one division.",
  },
  {
    title: "Customer-Focused",
    description: "Our strategies are developed around business needs and target audiences.",
  },
  {
    title: "Continuous Improvement",
    description: "We adapt to changing digital trends, technologies, and market behavior.",
  },
];

const digitalChannels = [
  ["Search & discovery", "Google Search, Google Ads, and Google Business Profile"],
  ["Social media", "Facebook, Instagram, LinkedIn, and TikTok"],
  ["Video", "YouTube and short-form social video"],
  ["Measurement", "Google Analytics 4, Search Console, and Tag Manager"],
  ["Direct communication", "Email campaigns, newsletters, and automated follow-ups"],
  ["Owned digital channels", "Business websites, landing pages, and online stores"],
];

const marketingProcess = [
  {
    title: "Discovery & goals",
    description:
      "Understand your business, audience, current digital presence, and the outcomes you want to achieve.",
  },
  {
    title: "Research & strategy",
    description:
      "Research customers, competitors, and channels, then shape a plan around your objectives and budget.",
  },
  {
    title: "Content & campaign planning",
    description:
      "Plan messaging, creative content, campaign structure, and the customer journey across selected channels.",
  },
  {
    title: "Launch & management",
    description:
      "Publish content and campaigns, manage audience interactions, and monitor activity against the plan.",
  },
  {
    title: "Measurement & reporting",
    description:
      "Track relevant reach, engagement, traffic, leads, and conversion measures using available platform data.",
  },
  {
    title: "Optimization",
    description:
      "Use performance insights to refine content, targeting, landing experiences, and campaign activity.",
  },
];

const audiences = [
  ["Startups & SMEs", "Build an initial digital presence and create a practical foundation for growth."],
  ["Established businesses", "Strengthen branding, customer engagement, and digital campaign performance."],
  ["E-commerce & online stores", "Promote products, improve shopping journeys, and encourage customer retention."],
  ["Service providers", "Reach relevant audiences, generate inquiries, and communicate service value."],
  ["B2B & corporate teams", "Support professional visibility, business networking, and lead generation."],
  ["Education & organizations", "Promote institutions, programs, and organizational services through digital channels."],
];

export default function DigitalMarketingServices() {
  return (
    <>
      <section
        className="mt-12 rounded-2xl border border-[#D4AF37]/25 bg-[#100D0A] p-6 sm:p-8"
        aria-labelledby="digital-marketing-about-heading"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Digital Marketing Division
        </p>
        <h2
          id="digital-marketing-about-heading"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          About Our Digital Marketing Module
        </h2>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-zinc-300">
          <p>
            The Digital Marketing Division of MK Group of Companies helps
            businesses, brands, startups, and organizations establish a strong
            digital presence, reach target audiences, and pursue sustainable
            growth in the digital marketplace.
          </p>
          <p>
            We bring together creativity, technology, data-informed strategy,
            and modern marketing techniques to support online branding,
            campaigns, audience engagement, lead generation, and performance
            improvement.
          </p>
          <p>
            From shaping a brand&apos;s identity to managing its digital
            presence, our services are designed to increase visibility,
            strengthen customer relationships, and create business
            opportunities. Our focus is on long-term digital strategies that
            deliver measurable value.
          </p>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="services-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          What we offer
        </p>
        <h2
          id="services-heading"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          Digital Marketing Services
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
          Explore our services by area. Open a section to see the ways we can
          support your business.
        </p>

        <div className="mt-6 space-y-3">
          {serviceSections.map((section, index) => (
            <details
              key={section.title}
              className="group rounded-xl border border-[#D4AF37]/25 bg-[#100D0A] open:border-[#D4AF37]/50"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 marker:hidden">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#1A140E] text-sm font-bold text-[#F5E29E]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-base font-semibold text-white sm:text-lg">
                  {section.title}
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl text-[#D4AF37] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-zinc-800 px-5 pb-5 pt-4 sm:pl-[4.5rem]">
                <p className="text-sm leading-6 text-zinc-300">
                  {section.description}
                </p>
                <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  What we offer
                </h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {section.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2.5 text-sm leading-6 text-zinc-300"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#D4AF37]" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="digital-channels-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Where we work
        </p>
        <h2
          id="digital-channels-heading"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          Digital Channels &amp; Measurement
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
          We select channels and measurement approaches based on your audience,
          objectives, and campaign requirements.
        </p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {digitalChannels.map(([channel, platforms]) => (
            <div
              key={channel}
              className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5"
            >
              <dt className="font-semibold text-[#F5E29E]">{channel}</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">{platforms}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16" aria-labelledby="marketing-process-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          From planning to improvement
        </p>
        <h2
          id="marketing-process-heading"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          Our Marketing Process
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-300">
          A flexible, goal-focused process helps keep marketing activity aligned
          with your business needs.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marketingProcess.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5"
            >
              <span className="text-xs font-bold tracking-wider text-[#D4AF37]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16" aria-labelledby="marketing-audiences-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Who we support
        </p>
        <h2
          id="marketing-audiences-heading"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          Businesses &amp; Organizations We Support
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([audience, description]) => (
            <div
              key={audience}
              className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5"
            >
              <h3 className="font-semibold text-[#F5E29E]">{audience}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#100D0A] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our mission
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-200">
            To empower businesses and organizations through innovative digital
            marketing solutions, strategic creativity, and technology-driven
            approaches that create meaningful connections between brands and
            their audiences.
          </p>
        </div>
        <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#100D0A] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our vision
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-200">
            To become a trusted digital growth partner by delivering
            professional marketing services, embracing emerging technologies,
            and creating measurable digital success.
          </p>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="why-choose-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Why work with us
        </p>
        <h2
          id="why-choose-heading"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          Why Choose MKGC Digital Marketing?
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasonsToChoose.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5"
            >
              <h3 className="font-semibold text-[#F5E29E]">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#24180B] via-[#15100A] to-[#100D0A] p-7 text-center sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Let&apos;s Grow Your Business Digitally
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
          We believe every business deserves a strong digital presence and the
          opportunity to grow. Our Digital Marketing Division is committed to
          helping brands reach new audiences, build lasting relationships, and
          unlock their potential through effective digital strategies.
        </p>
        <p className="mt-4 font-semibold text-[#F5E29E]">
          Building Brands. Creating Connections. Driving Digital Growth.
        </p>
        <Link
          href="/contact?subject=Digital%20Marketing%20Inquiry"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA8520] px-5 py-3 text-sm font-bold text-black transition hover:brightness-110"
        >
          Discuss Your Goals
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
