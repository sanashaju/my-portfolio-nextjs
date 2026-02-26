// This file contains constants and data used across the portfolio template.
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Sana Illikkal",
  title: "Full Stack Developer",
  location: "Irinjalakuda, Thrissur, Kerala, India",
  email: "sanashajuillikkal@gmail.com",
  description: [
    "Hi, I'm Sana Illikkal (Shaju), a Full Stack Developer specializing in the MERN stack—building robust, scalable, and secure web applications. With a deep focus on backend engineering and high-performance frontend interfaces, I transform complex ideas into intuitive digital products.",
    "Driven by clean architecture and user-centric design, I have a proven track record in engineering efficient APIs, optimizing performance, and delivering production-ready solutions using React.js, Next.js, Node.js, and TypeScript. I am committed to solving real-world challenges with elegant code and continuous innovation.",
  ],
  profileImage: "/sana 1.jpeg", // Restore original image
  profileGif: "/sana-animated.webp", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "sanashaju",
  leetcodeUsername: "sanaillikkal", // remove or keep blank if you don't have a LeetCode profile
  //   hashnodeUsername: "your-hashnode-username", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/sanashaju",
  linkedin: "https://linkedin.com/in/sanashaju",
  // twitter: "https://twitter.com/your-twitter",
  leetcode: "https://leetcode.com/u/sanaillikkal",
  // peerlist: "https://peerlist.io/your-peerlist", // remove or keep blank if you don't have a Peerlist profile
  instagram: "",
  email: "mailto:sanashajuillikkal@gmail.com",
  // blog: "https://yourblog.com", // remove if you don't have a blog
  resume:
    "https://drive.google.com/file/d/1XHXTeslX8WEoEXkLeSSpaD4A60zvNezP/view?usp=sharing",
  phone: "+91 77367 09420",
  whatsapp: "https://wa.me/+917736709420",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export const SKILLS = {
  languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "RESTful APIs",
    "JWT",
    "WebSocket",
    "Socket.io",
  ],
  databases: [
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Mongoose ODM",
    "Prisma ORM",
  ],
  cloudDevOps: [
    "AWS",
    "Docker",
    "Nginx",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "Render",
    "PM2",
    "Linux/Bash",
  ],
  testing: [
    "Jest",
    "Playwright",
    "Postman",
    "Supertest",
  ],
  tools: [
    "Git",
    "GitHub",
    "Swagger",
    "Figma",
    "VS Code",
    "Cursor",
    "Jira",
    "Notion",
    "ESLint",
    "Prettier",
    "Vite",
    "npm",
    "yarn",
    "pnpm",
  ],
  "architecture Concepts": [
    "MVC",
    "SOLID Principles",
    "OOP",
    "Design Patterns",
    "Agile/Scrum",
    "System Design",
    "API Rate Limiting",
    "Load Balancing",
    "Data Structures & Algorithms",
  ],
};

export const PROJECTS = [
  {
    id: 1,
    name: "Modern-Portfolio",
    category: "FRONTEND",
    description:
      "Crafted a responsive 9-section portfolio using Next.js 15, TypeScript, and Framer Motion with dark mode support.\nIntegrated GitHub and Leetcode APIs displaying 261+ solved problems and 64-day max streak.\nAchieved 90+ Lighthouse score via SEO, code splitting, and Open Graph meta tags.\nEnsured code quality with ESLint, Prettier, and Vercel Analytics.",
    tech: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind CSS", "GitHub API", "LeetCode API"],
    link: "",
    github: "https://github.com/sanashaju/my-portfolio-nextjs",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    color: "#3178C6",
  },
  {
    id: 2,
    name: "React-TS-Personal-Portfolio ",
    category: "Frontend",
    description:
      "Built responsive portfolio with React, TypeScript, Tailwind CSS, and Framer Motion animations.\nImproved performance by 60% via code splitting and lazy loading with Vite.\nIncreased discoverability by 75% through SEO optimization and Vercel deployment.\nEnhanced user experience with Framer Motion animations achieving 95% mobile compatibility.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    link: "",
    github: "https://github.com/sanashaju/React-TS-Personal-Portfolio",
    image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=2070&auto=format&fit=crop",
    color: "#00FF94",
  },
  {
    id: 3,
    name: "Node-Mongoose-JWT-APIs-TS",
    category: "Backend",
    description:
      "Implemented production REST API using Node.js, TypeScript, MongoDB, Redis, and Docker.\nImproved performance by 50% via configured Redis caching for frequent data operations.\nSecured endpoints with JWT authentication, reducing security vulnerabilities by 80%.\nEstablished Jest testing suite achieving 90% code coverage for core API modules.",
    tech: ["Node.js", "TypeScript", "MongoDB", "Redis", "Docker", "JWT", "Jest"],
    link: "",
    github: "https://github.com/sanashaju/node-rest-api-typescript",
    image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=2070&auto=format&fit=crop",
    color: "#00FF94",
  },
  {
    id: 4,
    name: "RoyalEssence E-commerce",
    category: "Full Stack",
    description:
      "Constructed a full-stack e-commerce platform managing 100+ products using Node.js, Express.js, MongoDB, and MVC architecture.\nIntegrated JWT authentication with cart, wishlist, and order tracking features.\nArchitected an admin dashboard with product/user management and real-time Chart.js analytics.\nAdded soft delete, user blocking, and order management, cutting admin workload by 40%.",
    tech: ["Node.js", "Express.js", "MongoDB", "Handlebars", "Chart.js", "Bootstrap 5", "JWT"],
    link: "https://royal-essence.onrender.com/",
    github: "https://github.com/sanashaju/RoyalEssence-Ecommerce-Platform",
    image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=2070&auto=format&fit=crop",
    color: "#00FF94",
  },
];

export const EXPERIENCE = [
  {
    company: "G-Tec Education, Irinjalakuda",
    companyLink: "https://gtecirinjalakuda.com/",
    role: "Full Stack Development Intern",
    period: "Jul 2025 - March 2026",
    location: "Onsite",
    description:
      "Engineered and deployed full-stack MERN applications with a strong focus on performance and security, achieving a 30% reduction in load times through lazy loading and component optimization. Implemented JWT authentication and role-based access control across 140+ REST APIs using Node.js, Express.js, NestJS, and TypeScript, ensuring zero unauthorized access. Optimized MongoDB and PostgreSQL database schemas through advanced indexing strategies and query optimization, improving query performance by 40%. Containerized and deployed applications using Docker, AWS S3, and AWS Cognito, delivering 99.9% uptime, 50% faster deployments, and maintaining 85%+ Jest test coverage throughout the development lifecycle.",
    skills: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "REST APIs",
      "Backend Architecture",
    ],
  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Computer Science (B.CS).",
    institution: " Nirmala College Of Arts And Science, Meloor,Chalakudy",
    institutionLink: "https://ncas.nirmalacollege.edu.in/",
    period: "Aug 2021 - Mar 2024",
  },
  {
    degree: "Senior Secondary (Plus Two) ",
    institution: "Govt.Model Girls Higher Secondary School, Irinjalakuda",
    institutionLink: "https://in.worldorgs.com/catalog/irinjalakuda/high-school/government-model-girls-higher-secondary-school",
    period: "Jul 2019 - Mar 2021",
  },
  {
    degree: "Secondary (SSLC)",
    institution: "Sreekrishna Higher Secondary School, Anandapuram",
    institutionLink: "https://www.justdial.com/Thrissur/Sree-Krishna-Higher-Secondary-School-Near-Mahavishnu-Temple-Anandapuram/9999PX487-X487-170405112818-M1U9_BZDET",
    period: "Jul 2018 - Mar 2019",
  },

  // Add more education as needed
];
