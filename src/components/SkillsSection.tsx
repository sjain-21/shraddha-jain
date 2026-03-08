import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "ML & AI",
    skills: ["PyTorch", "LangChain", "RAG", "Hugging Face", "LLMs", "Fine-tuning", "Prompt Engineering", "OpenAI", "Claude APIs", "Scikit-learn", "OpenCV"],
  },
  {
    label: "Languages & Frameworks",
    skills: ["Python", "SQL", "TypeScript", "C", "Scala", "Flask", "FastAPI"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "AWS (S3, Lambda, Glue)", "GCP BigQuery", "Git"],
  },
  {
    label: "Data & Analytics",
    skills: ["Spark", "Hadoop", "Hive", "Tableau", "Power BI", "Alteryx"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-display mb-16"
      >
        My <span className="italic text-gradient">toolkit</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-display text-foreground mb-4">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-body text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
