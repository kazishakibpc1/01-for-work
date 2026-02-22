import { motion } from "motion/react";
import { Lightbulb, Coffee, BookOpen } from "lucide-react";

const facts = [
  {
    icon: Lightbulb,
    text: "I've played over 1,000 blitz games."
  },
  {
    icon: BookOpen,
    text: "I read one business book every two weeks."
  },
  {
    icon: Coffee,
    text: "I'm a coffee enthusiast who codes at 2 AM."
  }
];

export function FunFact() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-8 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 overflow-hidden text-center group hover:bg-white dark:hover:bg-[#161B22] transition-colors duration-300"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-background shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <fact.icon className="w-6 h-6 text-accent" />
            </div>
            
            <p className="text-foreground font-medium">
              "{fact.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
