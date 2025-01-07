import React from "react";
import { delay, motion, useInView } from "framer-motion";

const ScrollReveal = ({
  children,
  variant = "text", // puede ser "text" o "div"
  amount = 0.1,
  className = "",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const variants = {
    text: {
      initial: {
        y: 200,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    },
    divUp: {
      initial: {
        y: 250,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
        },
      },
    },
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
