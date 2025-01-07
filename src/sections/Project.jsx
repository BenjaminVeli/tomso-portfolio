import { itemProjects } from "../utils/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { useRef } from "react";

const Single = ({ itemProject }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section
      className="w-full flex justify-center items-center py-20 md:py-40"
      ref={ref}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 wrapper">
          <div className="flex justify-center items-center">
            <img
              src={itemProject.img}
              alt={itemProject.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="flex items-center md:items-start flex-col gap-4 "
            style={{ y }}
          >
            <h3 className="text-white text-5xl font-semibold">
              {itemProject.title}
            </h3>
            <p className="text-gray-400 tex-3xl font-normal">
              {itemProject.description}
            </p>
            <a
              className="font-medium bg-zinc-950 hover:bg-customButton border rounded-md border-customButton py-2.5 px-6 transition-all duration-300 text-white hover:text-black text-center"
              target="_blank"
              rel="noopener noreferrer"
              href={itemProject.url}
            >
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
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
    <section id="projects" className="pt-20">
      <h2 className=" text-5xl md:text-6xl font-medium text-center tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_right,white,white,rgb(32,32,138,.5))] text-transparent bg-clip-text mb-2">
        Featured Works
      </h2>
      {itemProjects.map((itemProject) => (
        <Single itemProject={itemProject} key={itemProject.id} />
      ))}
    </section>
  );
};

export default Project;
