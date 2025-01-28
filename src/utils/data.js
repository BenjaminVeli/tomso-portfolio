import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiAstro } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import { RiPhpFill } from "react-icons/ri";
import { SiLaravel } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiGithub } from "react-icons/si";

import { RiInstagramLine } from "react-icons/ri";
import { RiTiktokFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

export const techStack = {
    Frontend: [
        { id: 1, name: 'React', icon: RiReactjsFill },
        { id: 2, name: 'Next.js', icon: RiNextjsLine },
        { id: 3, name: 'Astro', icon: SiAstro },
        { id: 4, name: 'Framer', icon: SiFramer },
        { id: 5, name: 'Tailwind', icon: RiTailwindCssFill },
    ],
    Backend: [
        { id: 1, name: 'PHP', icon: RiPhpFill },
        { id: 2, name: 'Laravel', icon: SiLaravel },
        { id: 3, name: 'Django', icon: SiDjango },
        { id: 4, name: 'Node.js', icon: SiNodedotjs },
        { id: 5, name: 'GitHub', icon: SiGithub },
    ]
};

export const navLinks = [
    { id: 1, href: "/", name: "Hero" },
    { id: 2, href: "/about", name: "About" },
    { id: 3, href: "/projects", name: "Projects" },
    { id: 4, href: "/contact", name: "Contact" },
];

export const itemProjects = [
    {
        id: 1,
        title: "Sociall App",
        description: "A social app for sharing and interacting with multimedia posts, built with Next.js, styled with TailwindCSS and ShadCN, using PostgreSQL for the database, Clerk for authentication, and Prisma as the ORM.",
        img: "/Project1.webp",
        alt: "Project Tomso",
        url: "https://tomso-social-app.vercel.app/",
        github: "https://github.com/BenjaminVeli/social-app",
    },
    {
        id: 2,
        title: "Tomso",
        description: "Landing page designed to showcase web creation and sales services.Built with modern technologies like Next.js, Tailwind CSS, and smooth animations powered by Framer Motion.",
        img: "/Project2.webp",
        alt: "Project Tomso",
        url: "https://tomso.vercel.app/",
        github: "https://github.com/BenjaminVeli/Tomso",
    },
    {
        id: 3,
        title: "Tomso AI",
        description: "Landing page designed to showcase TomsoAi, an AI that generates custom code styles using Tailwind CSS, inspired by Scale AI design. Built with React and Tailwind CSS, featuring smooth animations powered by Framer Motion.",
        img: "/Project3.webp",
        alt: "Project TomsoAI",
        url: "https://tomsoai.vercel.app/",
        github: "https://github.com/BenjaminVeli/tomsoai.git",
    },
    {
        id: 4,
        title: "Exploratec",
        description: "Landing page offering a 360° virtual tour of the Lima campus of Tecsup. Built with React and Tailwind CSS, featuring smooth animations powered by Framer Motion.",
        img: "/Project4.webp",
        alt: "Project Exploratec",
        url: "https://exploratec.vercel.app/",
        github: "https://github.com/BenjaminVeli/Exploratec/tree/main",
    },
    {
        id: 5,
        title: "TalkTec",
        description: "A platform for Tecsup students to share day-to-day campus events. Built with a React and CSS frontend, and a Django and MySQL backend.",
        img: "/Project5.webp",
        alt: "Project TalkTec",
        url: "https://talk-tec-prototype.vercel.app/home.html",
        github: "https://github.com/BenjaminVeli/TalkTec-Web.git",
    },
    {
        id: 6,
        title: "NextGenPC",
        description: "Landing page designed for a store specializing in high-quality PC components and accessories. Built with HTML, Bootstrap, and JavaScript for an engaging experience.",
        img: "/Project6.webp",
        alt: "Project NextGenPC",
        url: "https://lading-page-tomso.vercel.app/",
        github: "https://github.com/BenjaminVeli/LadingPage-Tomso",
    },
]

export const socialMedias = [
    {
        id: 1, icon: RiInstagramLine, link: 'https://www.instagram.com/tomso.app/', label: 'Visit my Instagram profile.',
    },
    {
        id: 2, icon: RiTiktokFill, link: 'https://www.tiktok.com/@tomso.js?lang=es', label: 'Visit my TikTok profile.',
    },
    {
        id: 3, icon: RiTwitterXFill, link: 'https://x.com/TomsoJS', label: 'Visit my Twitter profile.',
    },
]





