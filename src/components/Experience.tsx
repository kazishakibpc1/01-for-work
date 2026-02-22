import { motion } from "motion/react";
import { Briefcase, TrendingUp, Users } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-white dark:bg-[#161B22] rounded-[48px] border border-black/5 dark:border-white/5 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-8 md:p-12">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold uppercase tracking-wider mb-6">
            <Briefcase className="w-4 h-4" /> Professional Experience
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            DummyMarketorr
          </h2>
          <h3 className="text-xl text-secondary font-medium mb-8">
            Founder & Lead Strategist
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-600 dark:text-green-400 mt-1">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Client Management</h4>
                <p className="text-secondary">Managed 5+ clients in the retail and tech sectors, delivering tailored digital strategies.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400 mt-1">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Growth Impact</h4>
                <p className="text-secondary">Increased brand engagement by 200% through data-backed social media campaigns.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10"
        >
          <img 
            src="https://picsum.photos/seed/marketing/800/600" 
            alt="DummyMarketorr Dashboard" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          
          {/* Floating Logo Placeholder */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#0D1117] p-6 rounded-2xl shadow-xl">
            <span className="text-2xl font-bold text-foreground">DM</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
