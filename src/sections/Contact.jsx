import React from "react";
import ScrollReveal from "../utils/ScrollReveal";

import { motion } from "framer-motion";
import { fadeUp } from "../utils/motionVariants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex justify-center items-center py-20 md:py-40 bg-white"
    >
      <div className="container">
        <ScrollReveal variant="container">
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-medium text-center tracking-tighter text-zaffreBlue mb-20"
          >
            Contact me!
          </motion.h2>

          <div className="container">
            <form action="">
              <div className="grid grid-cols-2 gap-x-28 gap-y-10 input-box">
                <div className="col-span-2 sm:col-span-1 input-field px-0 lg:px-14">
                  <input type="text" className="input" required />
                  <label className="text-zaffreBlue">Your Name</label>
                </div>
                <div className="col-span-2 sm:col-span-1 input-field px-0 lg:px-14">
                  <input type="email" className="input" required />
                  <label className="text-zaffreBlue">Email Adress</label>
                </div>
                <div className="col-span-2 px-0 lg:px-14">
                  <textarea id="message" className="input" required />
                  <label className="text-zaffreBlue">Your Message</label>
                </div>
                <div className="bg-green-950 col-span-2"></div>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
