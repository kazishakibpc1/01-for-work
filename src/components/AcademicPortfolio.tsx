import { motion } from "motion/react";
import { FileText, Award, TrendingUp } from "lucide-react";

const stats = [
  { label: "GPA", value: "4.0", desc: "Unweighted" },
  { label: "SAT/ACT", value: "1500+", desc: "Top 1%" },
  { label: "AP Scholar", value: "Distinction", desc: "College Board" },
];

const works = [
  {
    title: "The Economics of Game Theory",
    type: "Research Paper",
    desc: "An analysis of how Nash Equilibrium applies to modern competitive markets.",
    icon: FileText
  },
  {
    title: "Advanced Data Analytics",
    type: "Certification",
    desc: "Google Data Analytics Professional Certificate (Coursera).",
    icon: Award
  },
  {
    title: "Market Volatility Study",
    type: "Essay",
    desc: "A deep dive into the 2020-2024 market trends and consumer behavior.",
    icon: TrendingUp
  }
];

export function AcademicPortfolio() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Academic Portfolio</h2>
        <p className="text-secondary max-w-2xl mx-auto">
          A collection of my rigorous academic work, certifications, and achievements.
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white dark:bg-[#161B22] border border-black/5 dark:border-white/10 text-center shadow-sm"
          >
            <h3 className="text-4xl font-bold text-accent mb-2">{stat.value}</h3>
            <p className="text-foreground font-bold uppercase tracking-wide text-sm">{stat.label}</p>
            <p className="text-secondary text-sm">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="group p-8 rounded-[32px] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-[#161B22] hover:shadow-xl transition-all duration-300"
          >
            <div className="p-4 bg-accent/10 rounded-2xl text-accent w-fit mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
              <work.icon className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-2 block">
              {work.type}
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
              {work.title}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              {work.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
