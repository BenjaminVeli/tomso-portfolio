import React from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp,fadeInScale, fadeFromLeft, fadeFromLeftShort, fadeUpShort } from "./motionVariants";

const ScrollReveal = ({
  children,
  variant = "fadeUp", // puede ser "text" o "div"
  amount = 0.1,
  className = "",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    container: {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    fadeUp,
    fadeInScale,
    fadeFromLeft,
    fadeFromLeftShort,
    fadeUpShort
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
