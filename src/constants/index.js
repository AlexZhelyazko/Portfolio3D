import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hilti,
  OHIS,
  paysend,
  qogita,
  carrent,
  dental,
  marketplace,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "HILTI",
    icon: hilti,
    iconBg: "#383E56",
    date: "Feb 2018 - Jan 2019",
    points: [
      "Designed and implemented an internal web platform enabling project management, efficient resource tracking and workflow automation, thereby enhancing the company's operational efficiency.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Spearheaded the development of the company's website.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "OHI-S",
    icon: OHIS,
    iconBg: "#E6DEDD",
    date: "Jan 2019- Apr 2020",
    points: [
      "Developed responsive application designs that are compatible with multiple devices and platforms.",
      "Preparation of technical documentation to ensure clarity and comprehension of the developed solutions.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Quogita",
    icon: qogita,
    iconBg: "#383E56",
    date: "Jun 2020 - Sep 2022",
    points: [
      "Rewrite the front-end of a monolithic web application in TypeScript for micro-service architecture with accompanying unit, integration, and end-to-end tests.",
      "Support back-end engineers with migration from GraphQL to REST by designing new API contracts, which are now consumed by the v2 front-end.",
      "Conscious pre-rendering of routes, preloading critical and deferring non-critical resources resulted in a 61% improvement in Core Web Vital metrics.",
      "Flexible first-party component design resulted in an 88% reduction in third-party dependencies and a 42% decrease in overall client-side JavaScript.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Paysend",
    icon: paysend,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Jan 2024",
    points: [
      "Developed and implemented a user behavior analysis mechanism using machine learning, optimizing the process of recommending personalized financial services.",
      "Created an innovative risk management system to combat fraud and ensure the security of financial transactions based on big data analysis and machine learning algorithms.",
      "Designed and implemented instant notification system for financial transactions, providing users with real-time information on each payment and transaction.",
      "Participated in a project to develop a cryptocurrency wallet integrated with the existing PaySend platform, expanding the service's functionality and attracting new users.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://localrent.com/en/cyprus/?pd=12-05-24&pickup_date=2024-05-12&dd=26-05-24&dropoff_date=2024-05-26&pc=LARNACA&dc=LARNACA&multi_tabs%5B0%5D=3",
  },
  {
    name: "Dental Portal",
    description:
      "An e-learning platform featuring content across various fields of dentistry: webinars, online practices, seminar recordings, webinar series, practical courses, seminars, congresses, and global forums.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: dental,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.ohi_s.mobile.twa&hl=ru&gl=US",
  },
  {
    name: "Quogita Marketplace",
    description:
      "Qogita is revolutionizing the process of wholesale procurement: it is a one-stop shop for all branded products with a click of a button and at the world’s most competitive prices.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: marketplace,
    source_code_link: "https://www.qogita.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
