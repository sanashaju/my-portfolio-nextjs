// This file contains constants and data used across the portfolio template.
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Sana Illikkal",
  title: "Backend Developer",
  location: "Irinjalakuda, Thrissur, Kerala, India",
  email: "sanashajuillikkal@gmail.com",
  description: [
    "Hi, I’m Sana Illikkal, a backend developer with a strong focus on building reliable, scalable, and secure server-side applications. I enjoy solving complex problems and turning ideas into efficient APIs and systems.",
    "I’m passionate about developing secure authentication flows, robust RESTful APIs, and intelligent data-driven applications. I enjoy crafting backend systems that are scalable, maintainable, and built with clean, modern architecture.",
  ],
  profileImage: "", // Replace with your profile image
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
  // resume:
  //   "https://drive.google.com/file/d/1lf2eQpjK10k9CFMpI7HCLGmskxRb3hdT/view?usp=sharing",
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
    name: "node-rest-api-typescript",
    description:
      " A scalable Node.js REST API built with TypeScript, featuring JWT-based authentication, MongoDB for data persistence, and Redis for caching. The application is Dockerized for consistent development and deployment, following clean architecture and modern backend best practices.",
    tech: [
      "Node.js",
      "TypeScript",
      "JWT",
      "Redis",
      "Docker",
      "MongoDB",
      "argon2",
    ],
    link: "",
    github: "https://github.com/sanashaju/node-rest-api-typescript",  
    }
  // Add more projects as needed
];

