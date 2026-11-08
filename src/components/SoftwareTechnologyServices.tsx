import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const serviceSections = [
  {
    title: "Website Design & Development",
    description:
      "We design responsive, high-performance, search-friendly websites that help businesses establish an online presence, showcase services, and reach customers.",
    capabilities: [
      "Business websites for startups, SMEs, companies, and service providers.",
      "Corporate websites featuring company profiles, services, departments, portfolios, and contact information.",
      "Custom website development tailored to specific business requirements.",
      "WordPress websites, theme customization, plugin integration, and content management.",
      "Landing pages for products, services, campaigns, and lead generation.",
      "Portfolio websites for individuals, freelancers, and organizations.",
      "Educational websites for schools, colleges, universities, academies, and training institutes.",
      "News and media publishing platforms, online magazines, and news portals.",
      "Website redesign to improve appearance, usability, responsiveness, and performance.",
      "Website maintenance, updates, backups, security checks, troubleshooting, and technical support.",
    ],
  },
  {
    title: "E-commerce Development & Online Stores",
    description:
      "We develop complete e-commerce solutions for selling online, managing orders, accepting payments, and serving customers with a smooth shopping experience.",
    capabilities: [
      "E-commerce websites with product catalogs, shopping carts, checkout, and order management.",
      "Custom online stores tailored to specific business models.",
      "Product management for details, categories, prices, images, and inventory.",
      "Integration of supported online payment methods.",
      "Order processing, tracking, and management systems.",
      "Inventory integration to synchronize product quantities and stock.",
      "Customer profiles, order histories, and account management.",
      "Multi-vendor marketplaces that allow multiple sellers to list products.",
      "E-commerce automation for notifications, order updates, and routine operations.",
    ],
  },
  {
    title: "Point of Sale (POS) Systems",
    description:
      "We develop centralized POS solutions for sales, billing, inventory, purchases, customers, and daily operations in retail, supermarkets, restaurants, pharmacies, and wholesale businesses.",
    capabilities: [
      "Retail POS for billing and sales management.",
      "Restaurant POS for orders, tables, kitchen tickets, billing, and operations.",
      "Supermarket POS with high-volume billing, barcode scanning, products, and inventory.",
      "Pharmacy POS for medicine sales, stock, expiry tracking, and categorization.",
      "Inventory management with stock monitoring, adjustments, and low-stock alerts.",
      "Barcode generation, scanning, and product identification.",
      "Supplier records, purchase orders, and stock receiving.",
      "Transactions, refunds, exchanges, and sales records.",
      "Customer profiles, purchase history, and outstanding balances.",
      "Supplier, purchase, and payment records.",
      "Business expense recording and monitoring.",
      "Financial reports for sales, profit, expenses, cash flow, and performance.",
      "Centralized management of multiple business locations.",
      "Employee access controls, roles, and permissions.",
    ],
  },
  {
    title: "Custom Software Development",
    description:
      "We build applications around real business processes to address specific challenges, automate workflows, and improve organizational efficiency.",
    capabilities: [
      "Business management platforms for everyday operations.",
      "Windows desktop applications for businesses and institutions.",
      "Browser-accessible web applications for use across devices.",
      "Workflow automation for repetitive tasks and business processes.",
      "Data management systems to organize, store, retrieve, and manage information.",
      "Employee systems for records, attendance, departments, and administration.",
      "Digital document storage, organization, and retrieval.",
      "Custom reports, dashboards, and business analytics.",
      "Modernization and upgrades for existing software applications.",
    ],
  },
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "We develop CRM solutions that centralize customer interactions, organize information, manage sales activities, track leads, and strengthen customer relationships.",
    capabilities: [
      "Capture, organize, assign, and track potential customers.",
      "Maintain customer and business contact information.",
      "Track opportunities through sales pipeline stages.",
      "Schedule and monitor customer follow-ups.",
      "Maintain records of calls, emails, meetings, and other interactions.",
      "Assign tasks and monitor team activities.",
      "Monitor revenue, sales performance, and conversion rates.",
      "Automate follow-ups, notifications, and repetitive sales activities.",
      "Custom CRM platforms for specific organizational requirements.",
    ],
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    description:
      "We develop and implement ERP platforms that integrate business departments, improve information flow, coordinate operations, and support informed decisions.",
    capabilities: [
      "Financial management for accounts, transactions, expenses, and records.",
      "Inventory management for stock, products, warehouses, and movements.",
      "Human resource information and operations.",
      "Supplier, purchasing, and procurement activities.",
      "Sales transactions, quotations, and customer orders.",
      "Production planning and operational workflows.",
      "Consolidated organizational reports and analytics.",
      "Integration of business functions in a unified platform.",
      "Custom ERP systems tailored to organizational needs.",
    ],
  },
  {
    title: "Mobile Application Development",
    description:
      "We create functional, user-friendly, scalable mobile experiences that help businesses, institutions, and startups deliver services on smartphones and tablets.",
    capabilities: [
      "Custom Android applications for businesses and individuals.",
      "Applications for Apple mobile devices.",
      "Mobile solutions for business operations and customer services.",
      "Shopping applications with product catalogs and ordering.",
      "Learning platforms, student applications, and digital education tools.",
      "Utility applications that simplify everyday tasks.",
      "Applications connected to websites, databases, and backend systems through APIs.",
      "Application bug fixes, updates, improvements, and technical support.",
    ],
  },
  {
    title: "Database Design & Management",
    description:
      "We design, develop, and manage database systems focused on data accuracy, performance, security, and scalability.",
    capabilities: [
      "Database architecture based on application requirements.",
      "Relational and non-relational database development and configuration.",
      "Database connections to websites, applications, and business systems.",
      "Data migration between database platforms.",
      "Query performance and database efficiency optimization.",
      "Backup strategies and recovery procedures.",
      "Appropriate data access controls and security practices.",
      "Database monitoring, troubleshooting, and maintenance.",
    ],
  },
  {
    title: "API Development & Integration",
    description:
      "We connect applications and digital services through APIs so businesses can exchange information, automate operations, and integrate technology platforms.",
    capabilities: [
      "Custom APIs for websites, mobile applications, and business systems.",
      "REST APIs for structured communication between applications.",
      "Third-party service integration with existing platforms.",
      "Integration of supported payment providers.",
      "SMS and email notification service integration.",
      "Secure login and authorization integrations.",
      "Connections between CRM, ERP, POS, e-commerce, and other business applications.",
      "Technical API documentation for developers and system users.",
    ],
  },
  {
    title: "Cloud Solutions & Hosting Services",
    description:
      "We help businesses deploy, manage, and maintain digital platforms using hosting and cloud infrastructure, with a focus on availability, performance, and scalability.",
    capabilities: [
      "Hosting environment configuration for websites and applications.",
      "Application deployment on supported cloud platforms.",
      "Domain registration assistance and configuration.",
      "DNS records and domain-to-hosting connections.",
      "Application server and hosting environment setup.",
      "Managed and self-hosted database configuration.",
      "Migration of applications and data to suitable cloud infrastructure.",
      "SSL certificates and HTTPS configuration.",
      "Application and data backup systems.",
      "Application availability and infrastructure performance monitoring.",
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "We create intuitive interfaces for websites, applications, and software, with attention to accessibility, usability, and consistency.",
    capabilities: [
      "Professional interface design for websites and applications.",
      "UX research into user needs, behavior, and expectations.",
      "Wireframes to establish structure before development.",
      "Clickable prototypes of digital products.",
      "Administrative and business dashboard design.",
      "Interfaces for desktop, tablet, and smartphone screens.",
      "Reusable design systems and visual standards.",
      "Identification and resolution of user experience problems.",
    ],
  },
  {
    title: "Business Automation & Digital Transformation",
    description:
      "We replace repetitive manual processes with digital systems designed to improve operational efficiency, accuracy, and productivity.",
    capabilities: [
      "Automation of routine business workflows and approvals.",
      "Digital invoice generation, management, and processing.",
      "Employee attendance and working-hours automation.",
      "Scheduled business report generation.",
      "Automatic alerts, reminders, and updates.",
      "Data synchronization across connected platforms.",
      "Organized digital recordkeeping.",
      "Conversion of paper-based workflows into digital processes.",
    ],
  },
  {
    title: "Cybersecurity & Software Security",
    description:
      "We help businesses improve the security of digital platforms, applications, and information systems through appropriate practices and technical assessments.",
    capabilities: [
      "Website security assessments to identify common weaknesses.",
      "Review of application security practices and configurations.",
      "Role-based user permissions and access control.",
      "Secure login and account protection mechanisms.",
      "SSL and HTTPS configuration for data in transit.",
      "Backup and recovery planning for business continuity.",
      "Software dependency maintenance and security patches.",
      "Monitoring for suspicious activity and potential vulnerabilities.",
    ],
  },
  {
    title: "Educational Management Systems",
    description:
      "We develop digital solutions for educational institutions to simplify academic and administrative management.",
    capabilities: [
      "School administration and daily activity management.",
      "Student profiles and academic records.",
      "Application, registration, and admission workflows.",
      "Student and staff attendance tracking.",
      "Examination, marks, grades, and results management.",
      "Tuition fees, payments, and outstanding balances.",
      "Digital learning environments and course management.",
      "Online assessments and tests.",
      "Teacher profiles, schedules, and academic responsibilities.",
      "Parent portals for relevant student information.",
    ],
  },
  {
    title: "HR & Payroll Management Software",
    description:
      "We develop HR software that helps organizations manage employees, attendance, payroll, and administration efficiently.",
    capabilities: [
      "Centralized employee information and records.",
      "Employee attendance and working hours.",
      "Salary, allowance, deduction, and net payment calculations.",
      "Leave applications, balances, and approvals.",
      "Employee access to personal and employment information.",
      "Employee evaluations and performance records.",
      "Job applications and recruitment workflows.",
      "Employee, payroll, and attendance reports.",
    ],
  },
  {
    title: "IT Consultancy & Technical Support",
    description:
      "We provide technical guidance and support for businesses seeking suitable technology, system improvements, and digital transformation.",
    capabilities: [
      "Identify suitable software and technology solutions.",
      "Analyze software requirements and business needs before development.",
      "Plan appropriate IT infrastructure.",
      "Diagnose and resolve technical issues.",
      "Install and configure business applications.",
      "Maintain existing systems and applications.",
      "Train employees and teams on implemented systems.",
      "Recommend and implement suitable technology upgrades.",
    ],
  },
  {
    title: "Custom Dashboards & Business Intelligence",
    description:
      "We turn business data into useful information through interactive dashboards, reporting systems, and analytics that support decision-making.",
    capabilities: [
      "Executive dashboards for organizational performance indicators.",
      "Analysis of revenue, transactions, and sales trends.",
      "Monitoring of expenses, income, and financial performance.",
      "Analysis of stock levels and product movements.",
      "Employee performance indicators and reports.",
      "Dynamic reports with filtering and visualization.",
      "Business intelligence solutions that turn organizational data into insights.",
    ],
  },
  {
    title: "Software Maintenance & Technical Development",
    description:
      "We provide ongoing technical services to help applications remain functional, secure, and compatible with changing business requirements.",
    capabilities: [
      "Identify and resolve software errors.",
      "Add new functionality to existing applications.",
      "Improve application performance and maintainability.",
      "Update software frameworks, libraries, and dependencies.",
      "Address identified security issues.",
      "Monitor application performance and availability.",
      "Maintain software and system documentation.",
      "Provide ongoing maintenance and development assistance.",
    ],
  },
];

const technologyStack = [
  ["Frontend development", "HTML, CSS, JavaScript, React, Next.js"],
  ["Backend development", "Node.js, Python, PHP, Flask"],
  ["Database systems", "PostgreSQL, MySQL, Supabase, MongoDB"],
  ["CMS & e-commerce", "WordPress, WooCommerce"],
  ["Mobile development", "Flutter, React Native, Android"],
  ["UI/UX design", "Figma, Adobe XD"],
  ["Cloud & deployment", "Vercel, Netlify, cloud platforms"],
  ["API development", "REST APIs, JSON, third-party APIs"],
  ["Version control", "Git, GitHub"],
];

const developmentProcess = [
  ["Requirement analysis", "Understand the client's business, objectives, challenges, and technical requirements."],
  ["Planning & strategy", "Define scope, features, technologies, architecture, and development roadmap."],
  ["UI/UX design", "Prepare layouts, wireframes, prototypes, and user interfaces."],
  ["Development", "Turn approved designs and requirements into functional digital products."],
  ["Testing & quality assurance", "Test functionality, responsiveness, performance, security, and usability."],
  ["Deployment & launch", "Configure the required infrastructure and deploy the completed solution."],
  ["Maintenance & support", "Provide technical assistance, updates, improvements, and ongoing development where agreed."],
];

const industries = [
  ["Retail & Supermarkets", "POS, inventory, and sales management."],
  ["Restaurants & Hospitality", "Restaurant POS, ordering, and operations."],
  ["Education", "School management and learning platforms."],
  ["Corporate & SMEs", "CRM, ERP, and business automation."],
  ["Healthcare & Pharmacy", "Pharmacy systems and management software."],
  ["E-commerce", "Online stores and marketplace solutions."],
  ["Real Estate", "Property management and listing platforms."],
  ["Logistics & Distribution", "Inventory, fleet, and delivery management."],
];

const reasonsToChoose = [
  ["Customized Solutions", "Developed around actual business requirements."],
  ["Modern Technologies", "Built with contemporary development tools and frameworks."],
  ["Business-Oriented Development", "Focused on solving practical operational problems."],
  ["Scalable Architecture", "Designed with future expansion and technical requirements in mind."],
  ["User-Friendly Design", "Simple, accessible, and intuitive interfaces."],
  ["Integrated Systems", "Connect applications and business processes."],
  ["Reliable Support", "Maintenance and technical assistance based on project agreements."],
  ["Continuous Innovation", "Explore emerging technologies to improve products and services."],
];

export default function SoftwareTechnologyServices() {
  return (
    <>
      <section
        className="mt-12 rounded-2xl border border-[#D4AF37]/25 bg-[#100D0A] p-6 sm:p-8"
        aria-labelledby="software-about-heading"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Software &amp; Technology Division
        </p>
        <h2
          id="software-about-heading"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          About Our Software Module
        </h2>
        <div className="mt-4 max-w-4xl space-y-4 text-sm leading-7 text-zinc-300">
          <p>
            The Software &amp; Technology Division of MK Group of Companies is
            dedicated to developing innovative, reliable, and scalable
            technology solutions that empower businesses, organizations,
            institutions, and individuals in an increasingly digital world.
          </p>
          <p>
            We transform ideas and business requirements into practical digital
            products through modern software engineering, web technologies,
            application development, business automation, and technology
            consulting.
          </p>
          <p>
            Our goal is to simplify operations, improve productivity, reduce
            manual work, enhance customer experiences, and help organizations
            embrace digital transformation. From professional websites and
            e-commerce platforms to POS, ERP, CRM, and customized business
            management software, our solutions are tailored to different
            industries and requirements.
          </p>
          <p>
            We combine technical expertise, modern development frameworks,
            user-centered design, and innovative thinking to deliver solutions
            that are secure, efficient, maintainable, and ready for future growth.
          </p>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="software-services-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          What we offer
        </p>
        <h2
          id="software-services-heading"
          className="mt-2 text-2xl font-bold text-white sm:text-3xl"
        >
          Software &amp; Technology Services
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
          Explore our services by area. Open a section to see how we can support
          your project or organization.
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

      <section className="mt-16" aria-labelledby="technology-stack-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          How we build
        </p>
        <h2 id="technology-stack-heading" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Our Technology Stack
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-300">
          We work with modern technologies and development tools. Selection
          depends on each project&apos;s requirements, scalability, and security needs.
        </p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {technologyStack.map(([area, technologies]) => (
            <div key={area} className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5">
              <dt className="font-semibold capitalize text-[#F5E29E]">{area}</dt>
              <dd className="mt-2 text-sm leading-6 text-zinc-300">{technologies}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16" aria-labelledby="development-process-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          From idea to launch
        </p>
        <h2 id="development-process-heading" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Our Development Process
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-300">
          A structured process helps us plan, design, develop, test, and deliver
          each project.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {developmentProcess.map(([step, description], index) => (
            <li key={step} className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5">
              <span className="text-xs font-bold tracking-wider text-[#D4AF37]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold capitalize text-white">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16" aria-labelledby="industries-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Who we support
        </p>
        <h2 id="industries-heading" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Industries We Serve
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-300">
          Our software solutions can support businesses and organizations across
          multiple industries.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(([industry, solutions]) => (
            <div key={industry} className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5">
              <h3 className="font-semibold text-[#F5E29E]">{industry}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{solutions}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="why-software-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Why work with us
        </p>
        <h2 id="why-software-heading" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Why Choose MKGC Software &amp; Technology?
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasonsToChoose.map(([reason, description]) => (
            <div key={reason} className="rounded-xl border border-zinc-800 bg-[#100D0A] p-5">
              <h3 className="font-semibold text-[#F5E29E]">{reason}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{description}</p>
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
            To empower businesses, institutions, and organizations through
            innovative software solutions, modern technology, and digital
            transformation, making operations smarter, simpler, and more efficient.
          </p>
        </div>
        <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#100D0A] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our vision
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-200">
            To become a trusted software and technology solutions provider,
            recognized for innovation, technical excellence, customer
            satisfaction, and impactful digital products.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-r from-[#24180B] via-[#15100A] to-[#100D0A] p-7 text-center sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Turning Ideas Into Digital Solutions
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-zinc-300">
          Technology should solve real problems, create opportunities, and make
          businesses more efficient. From a professional website or customized
          POS to an enterprise application or complete digital management
          platform, we work to bring your ideas to life.
        </p>
        <p className="mt-4 font-semibold text-[#F5E29E]">
          Innovating Technology. Empowering Businesses. Building the Digital Future.
        </p>
        <Link
          href="/contact?subject=Software%20and%20Technology%20Inquiry"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA8520] px-5 py-3 text-sm font-bold text-black transition hover:brightness-110"
        >
          Discuss Your Project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="mt-10 rounded-xl border border-zinc-800 bg-[#100D0A] p-6">
        <h2 className="text-lg font-bold text-white">
          One partner for building and growing your business
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          Pair digital products and business systems with an online growth
          strategy from our Digital Marketing division.
        </p>
        <Link
          href="/companies/digital-marketing"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F5E29E] hover:text-[#D4AF37]"
        >
          Explore Digital Marketing
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
