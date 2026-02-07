// This file contains constants and data used across the portfolio template.
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Sana Illikkal",
  title: "Full Stack Developer",
  location: "Irinjalakuda, Thrissur, Kerala, India",
  email: "sanashajuillikkal@gmail.com",
  description: [
    "Hi, I’m Sana Illikkal, a full stack developer with a strong focus on building reliable, scalable, and secure server-side applications. I enjoy solving complex problems and turning ideas into efficient APIs and systems.",
    "I’m passionate about developing secure authentication flows, robust RESTful APIs, and intelligent data-driven applications. I enjoy crafting backend systems that are scalable, maintainable, and built with clean, modern architecture.",
  ],
  profileImage: "/sana 1.jpeg", // Restore original image
  profileGif: "/profile-gif.gif", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "sanashaju",
  leetcodeUsername: "sanaillikkal", // remove or keep blank if you don't have a LeetCode profile
  //   hashnodeUsername: "your-hashnode-username", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/sanashaju",
  linkedin: "https://www.linkedin.com/in/sanashaju/",
  // twitter: "https://twitter.com/your-twitter",
  leetcode: "https://leetcode.com/u/sanaillikkal/",
  // peerlist: "https://peerlist.io/your-peerlist", // remove or keep blank if you don't have a Peerlist profile
  instagram: "",
  email: "mailto:sanashajuillikkal@gmail.com",
  // blog: "https://yourblog.com", // remove if you don't have a blog
  resume:
    "https://drive.google.com/file/d/1lf2eQpjK10k9CFMpI7HCLGmskxRb3hdT/view?usp=sharing",
  phone: "+91 77367 09420",
  whatsapp: "https://wa.me/ 77367 09420",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export const SKILLS = {
  // Keep only the skills you want to showcase and remove the rest
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    // "React",
    // "Next.js",
    "Bootstrap",
  ],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  languages: [
    "JavaScript",
    "TypeScript",
  ],
  cloudDevOps: ["AWS", "Docker", "Vercel", "GitHub Actions"],
  tools: [
    "VS Code",
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "Figma",
    "Jest",
    "Windows",
  ],
};

export const PROJECTS = [
  {
    id: 1,
    name: "node-rest-api-typescript",
    category: "BACKEND",
    description:
      "**Problem:** Traditional APIs often suffer from performance bottlenecks and weak type safety.\n**Impact:** This leads to fragile codebases and poor developer experience.\n**Solution:** A scalable Node.js REST API built with TypeScript, featuring JWT-based authentication, MongoDB for data persistence, and Redis for caching. Dockerized for consistent deployment.",
    tech: ["Node.js", "TypeScript", "JWT", "Redis", "Docker", "MongoDB"],
    link: "",
    github: "https://github.com/sanashaju/node-rest-api-typescript",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    color: "#3178C6",
  },
  {
    id: 2,
    name: "RoyalEssence E-commerce",
    category: "E-COMMERCE",
    description:
      "**Problem:** Many perfume shop websites lack a premium feel and smooth user experience.\n**Impact:** High bounce rates and low customer trust in luxury niche markets.\n**Solution:** RoyalEssence is a luxury perfume e-commerce platform. Features include wishlist management, seamless cart experience, and robust admin product management.",
    tech: ["Node.js", "JavaScript", "Bootstrap 5", "Handlebars", "Express.js", "MongoDB"],
    link: "https://royal-essence.onrender.com/",
    github: "https://github.com/sanashaju/RoyalEssence-Ecommerce-Platform",
    image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=2070&auto=format&fit=crop",
    color: "#00FF94",
  },
];

export const EXPERIENCE = [
  {
    company: "G-Tec Computer Education",
    companyLink: "https://gtecirinjalakuda.com/",
    role: "Full Stack Development Intern",
    period: "Jul 2025 - Feb 2026 (Expected)",
    location: "Onsite",
    description:
      "Working on full-stack development with a focus on backend engineering. Building secure RESTful APIs, implementing caching and session management with Redis, designing scalable architectures, and integrating relational and NoSQL databases. Gaining hands-on experience with containerization, API performance optimization, and modern JavaScript development workflows.",
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
    period: "Jul 2021 - Jul 2024 ",
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
