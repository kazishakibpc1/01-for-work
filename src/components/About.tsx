import { motion } from "motion/react";
import { BookOpen, GraduationCap, Target } from "lucide-react";

export function About() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-black/5 dark:bg-white/5 rounded-[48px] my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">My Story</h2>
          </div>
          
          <p className="text-lg text-secondary leading-relaxed">
            Chess taught me that every move has a consequence, and the best players are those who can see the furthest ahead. I've taken that discipline from the 64 squares and applied it to the world of business.
          </p>
          <p className="text-lg text-secondary leading-relaxed">
            As the founder of <span className="font-semibold text-foreground">DummyMarketorr</span>, I don't just "guess" what works—I analyze, strategize, and execute.
          </p>
          
          <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-xl text-foreground font-medium">
            "I believe every problem is a board to be analyzed and every market is a game to be won."
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent/10 rounded-lg text-accent">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
          </div>

          <div className="bg-background p-6 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
            <h3 className="text-xl font-bold text-foreground">Current Institution Name</h3>
            <p className="text-accent font-medium mb-2">Expected Graduation: 202X</p>
            <p className="text-secondary mb-4">Focusing on Mathematics, Economics, and Business Strategy.</p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs font-medium text-secondary">Advanced Math</span>
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs font-medium text-secondary">Economics</span>
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-xs font-medium text-secondary">Computer Science</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
