// lib/constants.ts

export const COMPANY_NAME = "Dumpster Pro Rentals";
export const COMPANY_TAGLINE = "Reliable Dumpster Rental — Fast Delivery, Easy Pickup";
export const COMPANY_SUBTEXT = "Serving Residential & Commercial Clients | Same-Day & Next-Day Available";
export const CTA_QUOTE = "Get a Free Quote";
export const CTA_SIZES = "View Sizes & Pricing";
export const PHONE_NUMBER = "(123) 456-7890";
export const EMAIL_ADDRESS = "info@dumpsterpro.com";
export const ADDRESS = "123 Dumpster Lane, Anytown, CA 90210";
export const SERVICE_HOURS = "Mon-Sat: 7 AM - 5 PM";

export const TRUST_ICONS = [
  { label: "Licensed & Insured", icon: "CheckCircle" },
  { label: "Eco-Friendly Disposal", icon: "Leaf" },
  { label: "Same-Day Available", icon: "Truck" },
  { label: "Flexible Rental Periods", icon: "CalendarDays" },
];

export const ABOUT_STATS = [
  { value: "10,000+", label: "Rentals Completed" },
  { value: "15+", label: "Years in Business" },
  { value: "50+", label: "Cities Served" },
  { value: "99%", label: "On-Time Delivery" },
];

export const DUMPSTER_SIZES = [
  {
    size: "10 Yard",
    dimensions: "12ft L x 8ft W x 3.5ft H",
    weightLimit: "2 Tons",
    useCase: "Ideal for small cleanouts, dirt, or concrete.",
    price: "$299",
    badge: null,
  },
  {
    size: "15 Yard",
    dimensions: "14ft L x 8ft W x 4.5ft H",
    weightLimit: "3 Tons",
    useCase: "Great for single-room renovations or garage clear-outs.",
    price: "$349",
    badge: null,
  },
  {
    size: "20 Yard",
    dimensions: "22ft L x 8ft W x 4ft H",
    weightLimit: "4 Tons",
    useCase: "Most popular for larger home renovations or construction debris.",
    price: "$399",
    badge: "Recommended",
  },
  {
    size: "30 Yard",
    dimensions: "22ft L x 8ft W x 6ft H",
    weightLimit: "5 Tons",
    useCase: "Perfect for major construction, demolition, or large estate cleanouts.",
    price: "$499",
    badge: null,
  },
];

export const SERVICES_LIST = [
  {
    title: "Residential Cleanup",
    description: "Home decluttering, garage cleanouts, attic clear-outs.",
    icon: "Home",
  },
  {
    title: "Commercial Projects",
    description: "Office cleanouts, retail remodels, business waste disposal.",
    icon: "Building",
  },
  {
    title: "Construction Debris",
    description: "Remodeling, new builds, demolition waste removal.",
    icon: "HardHat",
  },
  {
    title: "Yard Waste Removal",
    description: "Tree trimming, landscaping projects, storm debris cleanup.",
    icon: "TreePalm",
  },
  {
    title: "Estate Cleanouts",
    description: "Compassionate and efficient service for estate clear-outs.",
    icon: "Box",
  },
  {
    title: "Renovation Waste",
    description: "Kitchen & bathroom remodels, basement finishing debris.",
    icon: "Paintbrush",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Choose Your Size",
    description: "Select the perfect dumpster for your project needs.",
    icon: "RulerText",
  },
  {
    step: 2,
    title: "Pick Delivery Date",
    description: "Schedule a convenient delivery date and time.",
    icon: "CalendarDays",
  },
  {
    step: 3,
    title: "We Deliver to Your Door",
    description: "Our team delivers the dumpster to your specified location.",
    icon: "Truck",
  },
  {
    step: 4,
    title: "We Pick Up When Done",
    description: "Once filled, we'll pick it up promptly and responsibly.",
    icon: "Recycle",
  },
];

export const PRICING_PLANS = [
  {
    name: "Basic",
    size: "10 Yard",
    rentalDays: "3 Days",
    tonnage: "2 Tons Included",
    extraDayFee: "$25/day",
    extraTonFee: "$75/ton",
    features: [
      "Small cleanouts",
      "Dirt/Concrete disposal",
      "Driveway friendly",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    size: "20 Yard",
    rentalDays: "7 Days",
    tonnage: "4 Tons Included",
    extraDayFee: "$20/day",
    extraTonFee: "$65/ton",
    features: [
      "Home renovations",
      "Construction debris",
      "Most popular choice",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    size: "30 Yard",
    rentalDays: "14 Days",
    tonnage: "5 Tons Included",
    extraDayFee: "$15/day",
    extraTonFee: "$55/ton",
    features: [
      "Major construction",
      "Demolition projects",
      "Large estate cleanouts",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export const WHY_CHOOSE_US_FEATURES = [
  {
    title: "Transparent Pricing",
    description: "No hidden fees, exact quote upfront, competitive rates.",
    icon: "ReceiptText",
    image: "/images/transparent-pricing.jpg", // Placeholder
    imageAlt: "Transparent Pricing",
  },
  {
    title: "Same-Day Delivery",
    description: "Order before 12pm, get your dumpster delivered today.",
    icon: "Truck",
    image: "/images/same-day-delivery.jpg", // Placeholder
    imageAlt: "Same-Day Delivery",
  },
  {
    title: "Eco-Friendly Disposal",
    description: "60%+ materials recycled, responsible waste management.",
    icon: "Recycle",
    image: "/images/eco-friendly-disposal.jpg", // Placeholder
    imageAlt: "Eco-Friendly Disposal",
  },
  {
    title: "Flexible Scheduling",
    description: "Keep it 1 day or 2 weeks, adjust to your project timeline.",
    icon: "CalendarRange",
    image: "/images/flexible-scheduling.jpg", // Placeholder
    imageAlt: "Flexible Scheduling",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah P.",
    location: "Los Angeles, CA",
    project: "Home Renovation",
    rating: 5,
    quote: "Dumpster Pro Rentals was fantastic! On-time delivery, clean dumpster, and easy pickup. Highly recommend their service for any home project.",
  },
  {
    name: "John D.",
    location: "Long Beach, CA",
    project: "Construction Site",
    rating: 5,
    quote: "Reliable service is key for our construction business, and Dumpster Pro consistently delivers. Great communication and competitive pricing.",
  },
  {
    name: "Emily R.",
    location: "Pasadena, CA",
    project: "Estate Cleanout",
    rating: 4,
    quote: "Very helpful during a difficult estate cleanout. The team was professional and made the process much smoother than expected.",
  },
  {
    name: "Mike S.",
    location: "Santa Monica, CA",
    project: "Yard Waste",
    rating: 5,
    quote: "Needed a dumpster for a huge yard cleanup. Got it same-day, and it was perfect for all the green waste. Will use again!",
  },
  {
    name: "David L.",
    location: "Glendale, CA",
    project: "Office Renovation",
    rating: 5,
    quote: "Efficient and professional. The dumpster was delivered and picked up exactly when scheduled, keeping our office renovation on track.",
  },
];

export const FAQ_QUESTIONS = [
  {
    question: "What dumpster sizes do you offer?",
    answer: "We offer 10, 15, 20, and 30-yard dumpsters to accommodate various project sizes. You can view detailed dimensions and recommendations on our Sizes page.",
  },
  {
    question: "How long can I keep the dumpster?",
    answer: "Standard rental periods range from 3 to 14 days, depending on the pricing plan. You can extend your rental for an additional daily fee. Contact us for details.",
  },
  {
    question: "What can't I put in a dumpster?",
    answer: "Hazardous materials such as chemicals, paints, oils, asbestos, tires, and batteries are strictly prohibited. Please contact us if you have questions about specific items.",
  },
  {
    question: "Do I need a permit for a dumpster?",
    answer: "Permit requirements vary by city and location. If the dumpster will be placed on public property (street, sidewalk), a permit is usually required. We recommend checking with your local municipality.",
  },
  {
    question: "How is pricing calculated?",
    answer: "Pricing is based on the dumpster size, rental duration, and included tonnage. Additional fees may apply for extra days or tonnage beyond the included limits. Get a free quote for an exact price.",
  },
  {
    question: "Is same-day delivery available?",
    answer: "Yes, we offer same-day delivery for orders placed before 12 PM, subject to availability. Please call us to confirm same-day service in your area.",
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve a wide range of cities across the greater Los Angeles area. Please contact us with your location to confirm service availability.",
  },
  {
    question: "How do I extend my rental?",
    answer: "To extend your rental, please call our customer service team at least 24 hours before your scheduled pickup date. Additional daily fees will apply.",
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Sizes", href: "#dumpster-sizes" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#quote-form" },
];
