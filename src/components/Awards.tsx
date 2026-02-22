import { motion } from "motion/react";
import { Award, Medal, Trophy } from "lucide-react";

const awards = [
  {
    title: "Regional Chess Champion",
    org: "State Chess Association",
    year: "2024",
    icon: Trophy
  },
  {
    title: "Best Business Plan",
    org: "Future Business Leaders",
    year: "2025",
    icon: Award
  },
  {
    title: "Academic Excellence Award",
    org: "High School / College",
    year: "2023",
    icon: Medal
  }
];

export function Awards() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Awards & Recognition</h2>
      
      <div className="space-y-4">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-[#161B22] border border-black/5 dark:border-white/5 hover:border-accent/50 transition-colors group"
          >
            <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <award.icon className="w-6 h-6" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground">{award.title}</h3>
              <p className="text-secondary text-sm">{award.org}</p>
            </div>
            
            <span className="text-sm font-bold text-secondary/50 group-hover:text-accent transition-colors">
              {award.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
