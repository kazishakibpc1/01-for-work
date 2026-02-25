import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#EAE4D9] dark:bg-[#0D1117]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full"
      >
        {/* User provided image - Full Screen */}
        <img 
          src="https://lh3.googleusercontent.com/d/1jCf5PkE3MlcYqMVViLyixHOTIx-rVeA_" 
          alt="Kazi Shakib Hero" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
