import { motion } from "framer-motion";

const experiences = [
  {
    company: "Labelbox",
    role: "Forward Deployed AI Engineer",
    period: "Jul 2025 – Present",
    location: "San Francisco, CA",
    highlights: [
      "Architected hybrid LLM evaluation framework on 47K+ interactions with 88% human agreement",
      "Built high-throughput ML pipelines cutting processing latency by 80% on 50K+ samples",
      "Engineered data schemas for AIME/GPQA reasoning benchmarks, transforming 41K+ interactions into RLHF trajectories",
      "Developed RAG tool with LangChain for SDK documentation search",
    ],
  },
  {
    company: "Zero True",
    role: "Data Scientist",
    period: "Jun 2024 – Aug 2024",
    location: "New York, NY",
    highlights: [
      "Built route optimization system boosting logistics client profitability by 120%",
      "Accelerated data analysis workflows by 40% with FastAPI services",
      "Shipped 5+ UI components in TypeScript & Vue.js",
    ],
  },
  {
    company: "HSBC",
    role: "Data Analyst",
    period: "Aug 2020 – Jul 2023",
    location: "Bengaluru, India",
    highlights: [
      "Led migration of 30GB+ banking data from Teradata to HDFS using Python & Spark",
      "Designed ETL pipelines integrating MongoDB, Oracle, and BigQuery",
      "Built AML risk detection model, placed 3rd of 25 teams—adopted by HSBC ML team",
    ],
  },
  {
    company: "Blyndr",
    role: "Data Scientist & Co-Founder",
    period: "Jul 2020 – Jul 2021",
    location: "Bengaluru, India",
    highlights: [
      "Founded social app with LGBTQ+ version on Google Play, 500+ downloads",
      "Acquired 1500+ users in 3 days across three university campuses",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-display mb-16"
      >
        Where I've <span className="italic text-gradient">worked</span>
      </motion.h2>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group border-t border-border py-8 md:py-12"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-display group-hover:text-primary transition-colors duration-300">
                  {exp.company}
                </h3>
                <p className="text-lg font-body text-muted-foreground mt-1">
                  {exp.role}
                </p>
              </div>
              <div className="text-right font-body text-sm text-muted-foreground shrink-0">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            <ul className="space-y-2 mt-4 max-w-3xl">
              {exp.highlights.map((h, j) => (
                <li
                  key={j}
                  className="text-muted-foreground font-body text-sm md:text-base leading-relaxed pl-4 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                >
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
