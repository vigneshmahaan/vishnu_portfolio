export interface SkillGroup {
  index: string;
  label: string;
  items: { name: string; icon?: string }[];
}

export interface TechChip {
  name: string;
  icon: string;
}

export interface InternshipItem {
  id: string;
  index: string;
  role: string;
  company: string;
  domain: string;
  summary: string;
  tags: string[];
  tools: { name: string; icon: string }[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  summary: string;
  tags: string[];
  steps: { step: string; label: string }[];
  architectureNote: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export const PROFILE = {
  name: "Vishnu Kumar K M",
  shortName: "Vishnu",
  roleTitle: "Software, IoT & Web Engineer",
  status: "Available for opportunities",
  email: "kmvishnukumar4@gmail.com",
  phone: "+91 7092835052",
  linkedinUrl: "https://www.linkedin.com/in/vishnu-kumar-k-m-0a8532371",
  linkedinDisplay: "LinkedIn",
  location: "Tamil Nadu, India",
  educationShort: "B.E CSE ’26 · 8.0 CGPA",
  bio: "Computer Science graduate engineering Java & Python backend logic, MySQL databases, and IoT systems.",
  aboutShort:
    "I am a Computer Science and Engineering graduate (Sethu Institute of Technology, 8.0 CGPA) focused on Java, Python, MySQL, and responsive web development. Across three technical internships in web, IoT hardware, and 2D automotive ML data, I build reliable, practical software.",
};

export const HERO_STACK: TechChip[] = [
  { name: "Java", icon: "/assets/icons/java.svg" },
  { name: "Python", icon: "/assets/icons/python.svg" },
  { name: "MySQL", icon: "/assets/icons/mysql.svg" },
  { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
  { name: "HTML5", icon: "/assets/icons/html.svg" },
  { name: "CSS3", icon: "/assets/icons/css.svg" },
  { name: "Arduino", icon: "/assets/icons/arduino.svg" },
  { name: "Git", icon: "/assets/icons/git.svg" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    index: "01",
    label: "LANGUAGES & CORE",
    items: [
      { name: "Java", icon: "/assets/icons/java.svg" },
      { name: "Python", icon: "/assets/icons/python.svg" },
      { name: "C" },
      { name: "OOP & Data Structures" },
    ],
  },
  {
    index: "02",
    label: "FRONTEND WEB",
    items: [
      { name: "HTML5", icon: "/assets/icons/html.svg" },
      { name: "CSS3", icon: "/assets/icons/css.svg" },
      { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
      { name: "Next.js & Tailwind CSS", icon: "/assets/icons/nextjs.svg" },
    ],
  },
  {
    index: "03",
    label: "DATABASE",
    items: [
      { name: "MySQL", icon: "/assets/icons/mysql.svg" },
      { name: "DBMS & Normalization" },
      { name: "SQL Queries" },
      { name: "Backend Connectivity" },
    ],
  },
  {
    index: "04",
    label: "IOT & EMBEDDED",
    items: [
      { name: "Microcontrollers", icon: "/assets/icons/arduino.svg" },
      { name: "Impact & Tilt Sensors" },
      { name: "Real-Time Telemetry" },
      { name: "Automated Alerts" },
    ],
  },
  {
    index: "05",
    label: "ML & DATA ANNOTATION",
    items: [
      { name: "VGG 2D Annotation" },
      { name: "JSON Export", icon: "/assets/icons/json.svg" },
      { name: "Panel Classification" },
      { name: "Dataset QA" },
    ],
  },
  {
    index: "06",
    label: "TOOLS & PRACTICES",
    items: [
      { name: "Git", icon: "/assets/icons/git.svg" },
      { name: "VS Code", icon: "/assets/icons/visual-studio-code.svg" },
      { name: "Responsive Web Design" },
      { name: "Debugging & Testing" },
    ],
  },
];

export const INTERNSHIPS: InternshipItem[] = [
  {
    id: "aatzy",
    index: "01",
    role: "Web Development Intern",
    company: "Aatzy Technologies",
    domain: "Web & Database",
    summary: "Built responsive web pages in HTML, CSS, JS and debugged backend MySQL connectivity.",
    tags: ["HTML5", "CSS3", "JavaScript", "MySQL"],
    tools: [
      { name: "HTML5", icon: "/assets/icons/html.svg" },
      { name: "CSS3", icon: "/assets/icons/css.svg" },
      { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
      { name: "MySQL", icon: "/assets/icons/mysql.svg" },
    ],
  },
  {
    id: "virtual",
    index: "02",
    role: "IoT Development Intern",
    company: "Virtual Technologies",
    domain: "Embedded Hardware",
    summary: "Developed IoT monitoring systems integrating hardware sensors for real-time stream analysis.",
    tags: ["IoT", "Sensors", "Real-Time", "C"],
    tools: [
      { name: "Arduino / IoT", icon: "/assets/icons/arduino.svg" },
      { name: "VS Code", icon: "/assets/icons/visual-studio-code.svg" },
      { name: "Git", icon: "/assets/icons/git.svg" },
    ],
  },
  {
    id: "clearquote",
    index: "03",
    role: "Automotive Data Intern",
    company: "ClearQuote Technologies India Pvt Ltd",
    domain: "Computer Vision QA",
    summary: "Annotated 2D external vehicle panels in VGG and exported classified ML damage datasets to JSON.",
    tags: ["VGG 2D", "JSON", "ML Datasets", "QA"],
    tools: [
      { name: "Python", icon: "/assets/icons/python.svg" },
      { name: "JSON", icon: "/assets/icons/json.svg" },
      { name: "VS Code", icon: "/assets/icons/visual-studio-code.svg" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "accident-detection",
    index: "01",
    title: "Smart Accident Detection & Emergency Response",
    summary:
      "Microcontroller and sensor system detecting vehicle impacts and abnormal tilt to dispatch automated emergency alerts in real time.",
    tags: ["MICROCONTROLLER", "IMPACT SENSORS", "TILT DETECTION", "EMERGENCY ALERT"],
    steps: [
      { step: "01", label: "Impact & Tilt Sensing" },
      { step: "02", label: "MCU Threshold Check" },
      { step: "03", label: "Emergency Dispatch" },
    ],
    architectureNote:
      "Continuously samples impact force, vehicle tilt angle, and abnormal movement vectors in real time. Once a confirmed collision signature crosses safety thresholds, the microcontroller dispatches emergency alerts.",
    highlights: [
      "Monitors sudden impacts, abnormal tilt angles, and irregular movement patterns.",
      "Reduces manual reporting delay through automated alert dispatch.",
    ],
  },
  {
    id: "portfolio-platform",
    index: "02",
    title: "Personal Engineering Portfolio",
    summary:
      "Responsive showcase built from HTML, CSS, and JavaScript foundations into a statically exported Next.js, shadcn/ui, and Tailwind CSS site.",
    tags: ["NEXT.JS", "SHADCN/UI", "TAILWIND CSS", "HTML · CSS · JS"],
    steps: [
      { step: "01", label: "Semantic UI" },
      { step: "02", label: "Component Architecture" },
      { step: "03", label: "Static Export" },
    ],
    architectureNote:
      "Presents verified engineering skills, three internships, and projects across mobile and desktop viewports with fast static HTML/CSS delivery.",
    highlights: [
      "Clean bento architecture with full-color tooling icons and accessible interactive flows.",
      "Static Next.js build ready for instant CDN deployment.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.E Computer Science Engineering",
    institution: "Sethu Institute of Technology",
    period: "2022–2026",
    score: "CGPA 8.0",
  },
  {
    degree: "HSC (Higher Secondary)",
    institution: "VHN Hr Sec School",
    period: "2021–2022",
    score: "79.86%",
  },
  {
    degree: "SSLC (Secondary)",
    institution: "VHN Hr Sec School",
    period: "2019–2020",
    score: "76%",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { title: "Website Development", issuer: "Infosys Springboard" },
  { title: "Java Programming", issuer: "Infosys Springboard" },
  { title: "MySQL", issuer: "Codechef" },
];
