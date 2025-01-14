import { itemProjects } from "../utils/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ScrollReveal from "../utils/ScrollReveal";
import { useRef } from "react";

const Single = ({ itemProject }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <div
      className="w-full flex justify-center items-center py-20 md:py-40"
      ref={ref}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 wrapper">
        <div className="flex justify-center items-center cursor-pointer">
          <img
            loading="lazy"
            width="600"
            height="290"
            src={itemProject.img}
            alt={itemProject.alt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-95"
          />
        </div>
        <motion.div
          className="flex items-center md:items-start flex-col gap-4 "
          style={{ y }}
        >
          <h3 className="text-customBlack text-4xl font-bold">
            {itemProject.title}
          </h3>
          <p className="text-stormGray tex-3xl font-normal">
            {itemProject.description}
          </p>
          <div className="flex items-center flex-col gap-4 md:flex-row">
            <a
              className="font-medium bg-zinc-950 hover:bg-customButton border rounded-md border-customButton py-2.5 px-6 transition-all duration-300 text-white hover:text-black text-center"
              target="_blank"
              rel="noopener noreferrer"
              href={itemProject.url}
            >
              See Demo
            </a>
            <a
              className="font-medium inline-block bg-customButton hover:bg-zinc-950 border rounded-md border-customButton py-2.5 px-6 transition-all duration-300 text-black hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              href={itemProject.github}
            >
              View Code
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="projects" className="pt-32">
      <div className="container">
        <ScrollReveal variant="fadeFromLeftShort">
          <h2 className=" text-4xl md:text-6xl font-semibold text-center tracking-tighter text-transparent bg-gradient-to-b from-customGrayDark to-black bg-clip-text">
            Featured Works
          </h2>
        </ScrollReveal>
        {itemProjects.map((itemProject) => (
          <Single itemProject={itemProject} key={itemProject.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
