import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-secondary/5" id="education">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-display mb-16"
      >
        Where I <span className="italic text-gradient">studied</span>
      </motion.h2>

      <div className="space-y-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border-l-4 border-primary pl-6"
        >
          <h3 className="text-2xl font-display">New York University</h3>
          <p className="text-primary font-body text-sm font-medium mt-1">
            Courant Institute of Mathematical Sciences
          </p>
          <p className="text-muted-foreground font-body mt-2">
            M.S. Computer Science · 2023 – 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="border-l-4 border-accent pl-6"
        >
          <h3 className="text-2xl font-display">BITS Pilani</h3>
          <p className="text-primary font-body text-sm font-medium mt-1">
            Birla Institute of Technology and Science
          </p>
          <p className="text-muted-foreground font-body mt-2">
            B.E. Chemical Engineering · 2016 – 2020
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
