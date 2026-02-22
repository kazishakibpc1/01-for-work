import { motion } from "motion/react";
import { Brain, Clock, Shield } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Problem Solving",
    desc: "Breaking down complex positions into manageable tactical sequences."
  },
  {
    icon: Clock,
    title: "Pressure Management",
    desc: "Making critical decisions with seconds on the clock."
  },
  {
    icon: Shield,
    title: "Logical Reasoning",
    desc: "Anticipating opponent moves and preparing counter-strategies."
  }
];

export function ChessSkills() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Strategic Skills</h2>
        <p className="text-secondary max-w-2xl mx-auto">
          How the 64 squares prepared me for the boardroom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-[32px] bg-white dark:bg-[#161B22] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 text-center"
          >
            <div className="inline-flex p-4 bg-accent/10 rounded-2xl text-accent mb-6">
              <skill.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{skill.title}</h3>
            <p className="text-secondary leading-relaxed">{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">FIDE Profile</h3>
          <p className="text-secondary">Official Rating: <span className="font-bold text-foreground">1850+</span></p>
          <p className="text-secondary text-sm mt-1">Champion of [Tournament Name] • Top [X] in [Region]</p>
        </div>
        <a 
          href="#" 
          className="px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
        >
          View FIDE Profile
        </a>
      </div>
    </section>
  );
}
