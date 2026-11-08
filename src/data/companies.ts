export interface Company {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  description: string;
  highlights: string[];
  services: string[];
  stats: { label: string; value: string }[];
  contactEmail: string;
  colorScheme: string;
}

export const companies: Company[] = [
  {
    id: "marketing",
    name: "Marketing",
    iconName: "Megaphone",
    tagline: "Strategic Brand Amplification & High-Impact Campaigns",
    description: "MK Marketing delivers comprehensive brand transformation, nationwide advertising campaigns, and strategic market positioning for industry leaders across Pakistan.",
    highlights: ["360° Omnichannel Campaigns", "Nationwide Media Planning", "Brand Identity Architecture"],
    services: ["Creative Brand Strategy", "ATL & BTL Advertising", "Corporate Identity Design", "Public Relations & Media Buying"],
    stats: [
      { label: "Successful Campaigns", value: "250+" },
      { label: "Client Retention", value: "98%" },
      { label: "Awards & Recognitions", value: "15+" }
    ],
    contactEmail: "marketing@mkgc.com.pk",
    colorScheme: "from-amber-500/20 to-yellow-600/10"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    iconName: "Building2",
    tagline: "Pioneering Architectural Landmarks & Luxury Living",
    description: "Developing iconic commercial destinations, upscale residential developments, and strategic land acquisition with uncompromising architectural integrity.",
    highlights: ["Premier Commercial Centers", "Luxury Residential Towers", "Smart Urban Planning"],
    services: ["Commercial Development", "Residential Communities", "Property Asset Management", "Real Estate Investment Advisory"],
    stats: [
      { label: "Projects Completed", value: "35+" },
      { label: "Sq. Ft. Developed", value: "4.2M" },
      { label: "Active Developments", value: "8" }
    ],
    contactEmail: "realestate@mkgc.com.pk",
    colorScheme: "from-amber-600/20 to-orange-600/10"
  },
  {
    id: "education",
    name: "Education",
    iconName: "GraduationCap",
    tagline: "Empowering Next-Gen Minds Through World-Class Pedagogy",
    description: "MK Education establishes state-of-the-art educational institutions, progressive STEM curricula, and executive leadership academies shaping tomorrow's leaders.",
    highlights: ["Global Standard Curriculum", "Accredited Faculty", "Leadership Development"],
    services: ["K-12 Progressive Academies", "Executive Training Programs", "STEM & AI Labs", "Vocational Excellence Centers"],
    stats: [
      { label: "Students Enrolled", value: "12,000+" },
      { label: "Campuses", value: "6" },
      { label: "Scholarships Awarded", value: "1,500+" }
    ],
    contactEmail: "education@mkgc.com.pk",
    colorScheme: "from-yellow-500/20 to-amber-700/10"
  },
  {
    id: "software",
    name: "Software",
    iconName: "Laptop",
    tagline: "Innovative, Reliable & Scalable Software Solutions",
    description: "MK Group of Companies' Software & Technology Division develops websites, e-commerce platforms, POS, ERP, CRM, mobile applications, and customized business software. We help organizations simplify operations, improve productivity, reduce manual work, and embrace digital transformation with solutions tailored to their needs.",
    highlights: [],
    services: [
      "Website Design & Development",
      "E-commerce Development & Online Stores",
      "Point of Sale (POS) Systems",
      "Custom Software Development",
      "Customer Relationship Management (CRM)",
      "Enterprise Resource Planning (ERP)",
      "Mobile Application Development",
      "Database Design & Management",
      "API Development & Integration",
      "Cloud Solutions & Hosting Services",
      "UI/UX Design & Prototyping",
      "Business Automation & Digital Transformation",
      "Cybersecurity & Software Security",
      "Educational Management Systems",
      "HR & Payroll Management Software",
      "IT Consultancy & Technical Support",
      "Custom Dashboards & Business Intelligence",
      "Software Maintenance & Technical Development",
    ],
    stats: [],
    contactEmail: "software@mkgc.com.pk",
    colorScheme: "from-yellow-400/20 to-amber-600/10"
  },
  {
    id: "trading",
    name: "Trading",
    iconName: "TrendingUp",
    tagline: "Global Commodity, Industrial & Commercial Trade Networks",
    description: "Managing seamless international import/export operations, strategic commodity trade, reliable supply chain corridors, and trusted cross-border commerce.",
    highlights: ["Global Trade Corridors", "Certified Quality Control", "Optimized Supply Chain"],
    services: ["Commodity Import & Export", "Wholesale Distribution", "Customs Brokerage", "Logistics & Fleet Management"],
    stats: [
      { label: "Annual Trade Volume", value: "$45M+" },
      { label: "Partner Countries", value: "18+" },
      { label: "Warehouses", value: "7" }
    ],
    contactEmail: "trading@mkgc.com.pk",
    colorScheme: "from-amber-500/20 to-yellow-500/10"
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    iconName: "Radio",
    tagline: "Creative, Data-Driven Strategies for Sustainable Digital Growth",
    description: "MK Group of Companies' Digital Marketing Division helps businesses, brands, startups, and organizations strengthen their digital presence, reach target audiences, and grow through online branding, strategic campaigns, audience engagement, lead generation, and performance optimization.",
    highlights: [],
    services: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (SMM)",
      "Social Media Advertising",
      "Google Ads & Search Engine Marketing (SEM)",
      "Website Design & Digital Presence Optimization",
      "Content Marketing & Strategy",
      "Graphic Design & Creative Branding",
      "Video Marketing & Production",
      "Email Marketing & Automation",
      "Online Reputation Management (ORM)",
      "Lead Generation & Business Growth Marketing",
      "Digital Marketing Consultation & Strategy",
      "E-commerce & Online Business Marketing",
      "Analytics, Tracking & Performance Reporting",
    ],
    stats: [],
    contactEmail: "digital@mkgc.com.pk",
    colorScheme: "from-amber-600/20 to-yellow-600/10"
  },
  {
    id: "quran-academy",
    name: "Quran Academy",
    iconName: "BookOpen",
    tagline: "Spiritual Enlightenment, Tajweed & Authentic Islamic Sciences",
    description: "Nurturing spiritual excellence through certified Al-Azhar qualified instructors, interactive one-on-one Quranic recitation, Tajweed, Tafseer, and Islamic character formation.",
    highlights: ["Certified Tajweed Scholars", "1-on-1 Interactive Classes", "Flexible Global Timings"],
    services: ["Noorani Qaida for Beginners", "Quran Memorization (Hifz)", "Tajweed & Tarteel Mastery", "Islamic Jurisprudence & Tafseer"],
    stats: [
      { label: "Certified Graduates", value: "3,800+" },
      { label: "Countries Served", value: "24+" },
      { label: "Qualified Tutors", value: "85+" }
    ],
    contactEmail: "quranacademy@mkgc.com.pk",
    colorScheme: "from-amber-400/20 to-yellow-700/10"
  },
  {
    id: "it-centre",
    name: "IT Centre",
    iconName: "Cpu",
    tagline: "Cutting-Edge Hardware, Infrastructure & Tech Incubation",
    description: "Providing enterprise data centers, network architecture, cybersecurity audits, and a premier tech incubation lab for engineering the next generation of tech talent.",
    highlights: ["Tier-3 Data Center Facilities", "Advanced Cybersecurity", "Hands-On Tech Labs"],
    services: ["Data Center Hosting & Colocation", "Network Infrastructure Setup", "Cybersecurity Audits & Monitoring", "Hardware Supply & Maintenance"],
    stats: [
      { label: "Servers Under Management", value: "450+" },
      { label: "IT Specialists Certified", value: "2,200+" },
      { label: "Incident Resolution Rate", value: "99.8%" }
    ],
    contactEmail: "itcentre@mkgc.com.pk",
    colorScheme: "from-yellow-500/20 to-amber-600/10"
  },
  {
    id: "shopping-mall",
    name: "Shopping Mall",
    iconName: "ShoppingCart",
    tagline: "Pakistan's Flagship Retail, Dining & Family Entertainment Haven",
    description: "An ultra-modern commercial shopping and lifestyle hub housing international retail brands, gourmet dining terraces, state-of-the-art cinemas, and kids play spaces.",
    highlights: ["Over 150+ Flagship Brands", "Multi-Cuisine Food Courts", "World-Class Security & Parking"],
    services: ["Luxury Brand Outlets", "Fine Dining & Cafes", "Family Amusement & Cineplex", "Retail Space Leasing"],
    stats: [
      { label: "Footfall Per Month", value: "350K+" },
      { label: "Retail Brands", value: "150+" },
      { label: "Parking Capacity", value: "1,200+" }
    ],
    contactEmail: "shoppingmall@mkgc.com.pk",
    colorScheme: "from-amber-600/20 to-yellow-600/10"
  },
  {
    id: "career-hub",
    name: "Career Hub",
    iconName: "Briefcase",
    tagline: "Elite Talent Acquisition, Executive Headhunting & Placement",
    description: "Bridging the gap between top-tier executive talent and thriving national and multinational enterprises with transparent vetting and talent development.",
    highlights: ["Executive Search & Selection", "Industry-Specific Portfolios", "Resume & Interview Coaching"],
    services: ["Executive Headhunting", "Volume Recruitment", "Workforce Upskilling", "HR Consultancy Services"],
    stats: [
      { label: "Professionals Placed", value: "8,500+" },
      { label: "Corporate Partners", value: "300+" },
      { label: "Placement Success Rate", value: "94%" }
    ],
    contactEmail: "careerhub@mkgc.com.pk",
    colorScheme: "from-yellow-400/20 to-amber-500/10"
  },
  {
    id: "tour-travel",
    name: "Tour & Travel",
    iconName: "Plane",
    tagline: "Bespoke International Voyages, Luxury Tours & Holy Pilgrimages",
    description: "Curating seamless domestic and international corporate travel, bespoke luxury vacations, and premier VIP Hajj & Umrah pilgrimage packages with comprehensive support.",
    highlights: ["VIP Umrah & Hajj Services", "Direct Airline Ticketing", "Global Hotel Partnerships"],
    services: ["Corporate Travel Management", "Umrah & Hajj Packages", "International Tour Packages", "Visa Assistance & Travel Insurance"],
    stats: [
      { label: "Happy Pilgrims & Travelers", value: "28,000+" },
      { label: "Global Destinations", value: "65+" },
      { label: "Satisfaction Rating", value: "4.9/5" }
    ],
    contactEmail: "travel@mkgc.com.pk",
    colorScheme: "from-amber-500/20 to-yellow-600/10"
  },
  {
    id: "digital-media",
    name: "Digital Media",
    iconName: "Camera",
    tagline: "Cinematic Production, Broadcast Studios & Viral Content",
    description: "High-end television commercial production, corporate documentaries, podcast broadcasting, and viral multimedia storytelling engineered for massive cultural resonance.",
    highlights: ["4K & 8K Cinema Production", "Acoustically Treated Studios", "Post-Production CGI & Color Grading"],
    services: ["TV Commercials & Ads", "Corporate Video Production", "Studio Rental & Podcasting", "Visual Effects & Sound Design"],
    stats: [
      { label: "Commercials Produced", value: "320+" },
      { label: "Video Views Generated", value: "80M+" },
      { label: "Studio Spaces", value: "3" }
    ],
    contactEmail: "media@mkgc.com.pk",
    colorScheme: "from-yellow-500/20 to-amber-700/10"
  }
];
