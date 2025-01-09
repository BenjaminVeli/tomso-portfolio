import { navLinks, socialMedias } from "../utils/data";
import ScrollReveal from "../utils/ScrollReveal";

import { motion } from "framer-motion";
import { fadeUpShort } from "../utils/motionVariants";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="footer-upper pt-20">
        <div class="container">
          <ScrollReveal variant="container">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                variants={fadeUpShort}
                className="text-center md:text-left"
              >
                <h3 className="text-[#0F172A] font-extrabold text-2xl mb-2">
                  Tomso
                </h3>
                <p className="text-[#0B2131] text-md md:text-base">
                  I'm Benjamín Veli, a Full Stack Developer from Peru with a
                  passion for creating visually engaging and user-friendly
                  websites.
                </p>
              </motion.div>

              <motion.div variants={fadeUpShort} class="text-center">
                <h3 className="text-black text-lg font-bold mb-4">Menu</h3>
                <nav>
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((navLink) => (
                      <li>
                        <a
                          href={navLink.href}
                          className="font-normal text-[#0F172A] hover:text-blue-600 transition-all duration-300 cursor-pointer"
                        >
                          {navLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>

              <motion.div
                variants={fadeUpShort}
                className="flex flex-col items-center gap-4 text-center"
              >
                <h3 className="text-black text-lg font-bold">Contact Us</h3>
                <p className="text-black">tomso.app@gmail.com</p>
                <h4 className="font-medium mt-4 uppercase">Social Media</h4>
                <div className="flex gap-4">
                  {socialMedias.map((socialMedia) => (
                    <a
                      className="bg-customBeige p-3 rounded-full"
                      href={socialMedia.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={socialMedia.id}
                    >
                      <socialMedia.icon className="text-black hover:text-customOrange transition-all duration-500 text-2xl" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
            <div class="pt-12 pb-8">
              <p class="text-sm black text-center">
                &copy; 2024{" "}
                <a href="/" class="text-blue-600 font-medium hover:underline">
                  Tomso™
                </a>{" "}
                . All Rights Reserved.
              </p>
            </div >
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
