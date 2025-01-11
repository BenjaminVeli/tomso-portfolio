import { motion } from "framer-motion";
import ScrollReveal from "../utils/ScrollReveal";
import { fadeFromLeft, fadeUp } from "../utils/motionVariants";

import { techStack } from "../utils/data";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center items-center min-h-screen  py-20 md:py-40 border-y border-customGrayLight"
    >
      <div className="container">
        <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 items-center gap-x-8 gap-y-8 md:gap-y-20">
          <ScrollReveal
            variant="container"
            className="text-center md:text-left order-1"
          >
            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-customGrayDark to-black bg-clip-text mb-8"
            >
              Front{" "}
              <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#9281F7] to-[#9A54DC]">
                end
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-stormGray font-medium tracking-tighter"
            >
              As a front-end developer, I specialize in creating attractive and
              functional user interfaces, optimizing the user experience through
              responsive and efficient designs.
            </motion.p>
          </ScrollReveal>

          <ScrollReveal className="flex flex-col items-center overflow-x-auto order-2">
            {Object.entries(techStack)
              .filter(([category]) => category === "Frontend")
              .map(([category, items]) => (
                <div key={category}>
                  <div className="flex gap-4 sm:gap-6 lg:gap-8">
                    {items.map(({ id, name, icon: Icon }) => (
                      <div
                        key={id}
                        className="duration-500 transition-all text-neutralGray hover:text-customBlack cursor-pointer"
                      >
                        <div className="flex h-12 w-[3.75rem] sm:h-14 sm:w-[4.30rem] items-center justify-center rounded-2xl border border-customGrayLight hover:border-customBlack">
                          <Icon className="text-lg sm:text-2xl" />
                        </div>
                        <p className="mt-2 text-center">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </ScrollReveal>

          <ScrollReveal className="flex flex-col items-center overflow-x-auto order-4 md:order-3">
            {Object.entries(techStack)
              .filter(([category]) => category === "Backend")
              .map(([category, items]) => (
                <div key={category}>
                  <div className="flex gap-4 sm:gap-6 lg:gap-8">
                    {items.map(({ id, name, icon: Icon }) => (
                      <div
                        key={id}
                        className="duration-500 transition-all text-neutralGray hover:text-customBlack cursor-pointer"
                      >
                        <div className="flex h-12 w-[3.75rem] sm:h-14 sm:w-[4.30rem] items-center justify-center rounded-2xl border border-customGrayLight hover:border-customBlack">
                          <Icon className="text-lg sm:text-2xl" />
                        </div>
                        <p className="mt-2 text-center">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </ScrollReveal>

          <ScrollReveal
            variant="container"
            className="text-center md:text-left order-3 md:order-4"
          >
            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-customGrayDark to-black bg-clip-text mb-8"
            >
              Back{" "}
              <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#9281F7] to-[#9A54DC]">
                End
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-stormGray font-medium tracking-tighter"
            >
              In the backend field, I am dedicated to developing and maintaining
              the server logic, guaranteeing the functionality, security and
              scalability of web applications.
            </motion.p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
