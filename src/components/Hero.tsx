import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Action Shot */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 group">
            <img 
              src="https://picsum.photos/seed/chess/800/800" 
              alt="Kazi Shakib Strategy" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-[#161B22]/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 dark:border-white/10 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Currently Analyzing
              </span>
              <p className="text-sm font-semibold text-foreground">
                Sicilian Defense / Market Trends
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 space-y-8"
        >
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-4">
              Kazi Shakib: Strategist, Entrepreneur, & Aspiring <span className="text-accent">Scholar</span>.
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed">
              Combining the tactical precision of a <span className="font-semibold text-foreground">FIDE-rated chess player</span> with the data-driven mindset of a <span className="font-semibold text-foreground">digital marketing founder</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="group relative px-8 py-4 bg-accent text-white rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View Academic Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-transparent border border-accent text-accent rounded-full font-medium transition-all hover:bg-accent/5 flex items-center gap-2">
              Download CV/Resume <Download className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
