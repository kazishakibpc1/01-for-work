import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden bg-[#EAE4D9] dark:bg-[#0D1117]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center h-full">
        
        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
             {/* User provided image */}
            <img 
              src="https://drive.google.com/uc?export=view&id=1jCf5PkE3MlcYqMVViLyixHOTIx-rVeA_" 
              alt="Kazi Shakib Hero" 
              className="w-full h-full object-contain bg-black/5 dark:bg-white/5"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
