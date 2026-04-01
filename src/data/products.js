import writingImg from "../assets/products/writing_2327400 1.png";
import designImg from "../assets/products/design-tool.png";
import stockImg from "../assets/products/social-media.png";
import operationImg from "../assets/products/operation.png";
import portfolioImg from "../assets/products/portfolio.png";
import cartImg from "../assets/products/shopping-cart.png";


const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description:
      "Generate blogs, website copy, product descriptions, and email content faster with advanced AI writing assistance.",
    price: 29,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar and tone correction"
    ],
    icon: writingImg,
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description:
      "Access ready-made templates for social media posts, presentations, flyers, and marketing campaigns.",
    price: 49,
    period: "one-time",
    tag: "Popular",
    tagType: "popular",
    features: [
      "200+ premium templates",
      "Editable design files",
      "Commercial license included"
    ],
    icon: designImg,
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description:
      "Download high-quality stock photos, illustrations, mockups, and videos for creative and client projects.",
    price: 19,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: [
      "10,000+ stock assets",
      "Commercial usage rights",
      "New content every week"
    ],
    icon: stockImg,
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description:
      "Save time by automating repetitive tasks like form responses, email follow-ups, and workflow management.",
    price: 79,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: [
      "50+ automation workflows",
      "API integration support",
      "No-code setup options"
    ],
    icon: operationImg,
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description:
      "Create job-winning resumes and cover letters with modern layouts, ATS-friendly formatting, and export tools.",
    price: 15,
    period: "one-time",
    tag: "New",
    tagType: "new",
    features: [
      "100+ resume templates",
      "ATS optimization",
      "Export to PDF"
    ],
    icon: portfolioImg,
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description:
      "Plan and create engaging social media posts, captions, and campaign assets for multiple platforms.",
    price: 39,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: [
      "5000+ content assets",
      "Caption ideas included",
      "Content planner templates"
    ],
    icon: cartImg,
  },
  {
    id: 7,
    name: "Presentation Master Suite",
    description:
      "Build professional business decks, training slides, and pitch presentations with polished design resources.",
    price: 59,
    period: "one-time",
    tag: "Popular",
    tagType: "popular",
    features: [
      "80+ slide themes",
      "Drag and drop sections",
      "Business-ready layouts"
    ],
    icon: "📊"
  },
  {
    id: 8,
    name: "Video Editing Essentials",
    description:
      "Enhance your videos with transitions, title packs, overlays, motion graphics, and editing presets.",
    price: 25,
    period: "monthly",
    tag: "New",
    tagType: "new",
    features: [
      "300+ video presets",
      "Motion title pack",
      "Easy import to editors"
    ],
    icon: "🎬"
  },
  {
    id: 9,
    name: "Freelancer Proposal Bundle",
    description:
      "Close more clients using ready-made proposal templates, contract files, invoice sheets, and onboarding docs.",
    price: 35,
    period: "yearly",
    tag: "Best Seller",
    tagType: "best-seller",
    features: [
      "Proposal templates",
      "Contract samples",
      "Invoice and onboarding files"
    ],
    icon: "💼"
  },
  {
    id: 10,
    name: "Productivity Planner Hub",
    description:
      "Organize your daily tasks, weekly priorities, project milestones, and team routines in one system.",
    price: 12,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    features: [
      "Daily and weekly planners",
      "Goal tracking system",
      "Printable templates"
    ],
    icon: "✅"
  }
]

export default products