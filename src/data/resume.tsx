import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shreyas GAadave",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "As a third-year Computer Science Engineering (CSE) student pursuing a B.Tech degree, I am passionately working toward my goal of becoming a software engineer. I am currently building and scaling my own SaaS projects, driven by my interest in creating innovative solutions.In addition to my technical pursuits, I have a wide range of hobbies that keep me inspired—photography, coding, riding, and traveling. These interests fuel my creativity and help me approach problems with a fresh perspective. My journey has been a blend of exploration and learning, and I’m excited to see how I can contribute to the world of technology and entrepreneurship through my skills and dedication.",
  avatarUrl: "/me.svg",
  skills: [
    "React",
    "Next.js",
    // "Typescript",
    "Node.js",
    "Figma",
    "Go",
    "Deploy",
    // "Docker",
    // "Kubernetes",
    "Java",
    // "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shreyasgadave777@gmail.com",
    tel: "+91-7028934703",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShreyasGadave",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreyas-gadave-26a56128b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/dhanush___777?s=21",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "shreyasgadave777@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Vipracube",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Testing Engineer",
      logoUrl: "/vipracube.svg",
      start: "Jun 2023",
      end: "Aug 2023",
      description:
        "During my internship at Vipracube as a Testing Engineer, I gained practical experience in API testing, learning how to verify API functionality and test APIs using Postman. I also developed a strong understanding of databases like PostgreSQL, including managing and testing database functionality. Additionally, I contributed to manual testing efforts by creating detailed test cases to ensure system reliability, validating the performance of microservices, and ensuring smooth integration across systems",
    },
  ],
  education: [
    {
      school: "Late Mrs. Housabai Jaypal Magdum Public High School",
      // href: "https://buildspace.so",
      degree: "Primary and Secondary Education",
      logoUrl: "/buildspace.jpg",
      start: "2008",
      end: "2020",
    },
    {
      school: "DKTE Collage Ichalkaranji",
      href: "",
      degree: "Higher Secondary or Senior Secondary Education",
      logoUrl: "/waterloo.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "D.Y. Patil College of Engineering and Technology",
      href: "",
      degree: "Bachelor of Technology Degree (BTech)",
      logoUrl: "/laurier.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
