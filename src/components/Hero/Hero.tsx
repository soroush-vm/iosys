import { motion } from "framer-motion";

import logo from "@/assets/images/logo1.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAFCFC]"
    >

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[700px] w-[700px] rounded-full bg-cyan-100/70 blur-[180px]" />
      </div>

      {/* Logo */}

      <motion.img
        src={logo}
        alt="Soroush"
        draggable={false}
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          w-[92%]
          max-w-[900px]
          select-none
          object-contain
        "
      />

    </section>
  );
};

export default Hero;