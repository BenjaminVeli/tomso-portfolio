import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiAstro } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";

import { RiPhpFill } from "react-icons/ri";
import { SiLaravel } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";

import { SiFramer } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDocker } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export const techStack = {
    Frontend: [
        { id: 1, name: 'React', icon: RiReactjsFill },
        { id: 2, name: 'Next.js', icon: RiNextjsLine },
        { id: 3, name: 'Astro', icon: SiAstro },
        { id: 4, name: 'Vue', icon: RiVuejsFill },
    ],
    Backend: [
        { id: 1, name: 'PHP', icon: RiPhpFill },
        { id: 2, name: 'Laravel', icon: SiLaravel },
        { id: 3, name: 'Django', icon: SiDjango },
        { id: 4, name: 'Node.js', icon: SiNodedotjs },
    ],
    Tools: [
        { id: 1, name: 'Framer', icon: SiFramer },
        { id: 2, name: 'Tailwind', icon: RiTailwindCssFill },
        { id: 3, name: 'Docker', icon: SiDocker },
        { id: 4, name: 'GitHub', icon: SiGithub },
    ],
};

export const navLinks = [
    { id: 1, href: "#hero", name: "Hero" },
    { id: 2, href: "#about", name: "About" },
    { id: 3, href: "#projects", name: "Projects" },
    { id: 4, href: "#contact", name: "Contact" },
];

export const itemProjects = [
    {
        id: 1,
        title: "Tomso",
        description: "Landing Page diseñada para representar servicios de creación y venta de sitios web. Desarrollada con tecnologías modernas como Next.js, Tailwind CSS, y animaciones fluidas integradas con Framer Motion.",
        img: "/Project1.webp",
        alt: "Project Tomso",
        url: "https://tomso.vercel.app/",
    },
    {
        id: 2,
        title: "Tomso AI",
        description: "Landing Page diseñada para presentar TomsoAi una ia  que genera estilos de código personalizados utilizando Tailwind CSS, inspirada en el diseño de Scale AI. Desarrollada con React y Tailwind CSS, y animaciones fluidas integradas con Framer Motion.",
        img: "/Project2.webp",
        alt: "Project TomsoAI",
        url: "https://tomsoai.vercel.app/",
    },
    {
        id: 3,
        title: "Exploratec",
        description: "Landing Page que ofrece un recorrido virtual 360° por el campus de la sede Lima de Tecsup. Desarrollada con React y Tailwind CSS, y animaciones fluidas integradas con Framer Motion. ",
        img: "/Project3.webp",
        alt: "Project Exploratec",
        url: "https://exploratec.vercel.app/",
    },
    {
        id: 4,
        title: "NextGenPC",
        description: "Landing Page diseñada para una tienda especializada en componentes y accesorios de alta calidad para PC. Desarrollada con HTML, Bootstrap y Javascript para una experiencia atractiva.",
        img: "/Project4.webp",
        alt: "Project NextGenPC",
        url: "https://lading-page-tomso.vercel.app/",
    },
]






