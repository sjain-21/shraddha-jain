import { motion } from "framer-motion";
import { Brain, Workflow } from "lucide-react";

const interests = [
  {
    icon: Brain,
    title: "AI Agents & Evals",
    description:
      "Building autonomous multi agent systems that reason, plan, and execute — and designing robust evaluation frameworks to measure and improve their performance in real-world settings.",
  },
  {
    icon: Workflow,
    title: "Context Engineering",
    description:
      "Crafting the right context at the right time - from retrieval strategies to prompt architecture - to unlock model capabilities.",
  },
];

const InterestsSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24" id="interests">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-display mb-16"
      >
        Currently <span className="italic text-gradient">exploring</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {interests.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover-lift"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <item.icon className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-display text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
