import { motion } from "framer-motion";

const tidbits = [
  { emoji: "🏸", text: "Badminton enthusiast" },
  { emoji: "🎾", text: "Trying to pick up tennis" },
  { emoji: "🥾", text: "Love hiking" },
  { emoji: "🏎️", text: "Hoping Ferrari strategies finally work for Charles in 2026" },
  { emoji: "🎾", text: "Lifelong Nadal fan" },
  { emoji: "📖", text: "Currently reading the Mistborn series" },
  { emoji: "❤️", text: "Recently loved: I Who Have Never Known Men" },
];

const PersonalSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-display mb-6"
      >
        Beyond the <span className="italic text-gradient">screen</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground font-body text-lg mb-12 max-w-2xl"
      >
        Outdoorsy person at heart. Here's what I'm into when I'm not building things:
      </motion.p>

      <div className="flex flex-wrap gap-3">
        {tidbits.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="group bg-card border border-border rounded-full px-5 py-2.5 flex items-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
          >
            <span className="text-lg">{item.emoji}</span>
            <span className="font-body text-sm text-foreground">{item.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-muted-foreground font-body text-sm italic"
      >
        Got book or hiking trail recs? I'd love to hear them — <a href="mailto:21jain.shraddha@gmail.com" className="text-primary hover:underline">send them my way</a> ✨
      </motion.p>
    </section>
  );
};

export default PersonalSection;
