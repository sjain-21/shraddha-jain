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
        className="text-muted-foreground font-body text-sm mb-10 max-w-2xl"
      >
        Outdoorsy person at heart. Here's what I'm into when I'm not building things:
      </motion.p>

      <div className="flex flex-wrap gap-2.5">
        {tidbits.map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="bg-muted/40 border border-border/40 rounded-full px-4 py-1.5 flex items-center gap-1.5 text-muted-foreground text-sm font-body"
          >
            <span className="text-sm">{item.emoji}</span>
            {item.text}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-muted-foreground/60 font-body text-xs"
      >
        Got book or trail recs? <a href="mailto:21jain.shraddha@gmail.com" className="underline hover:text-foreground transition-colors">Send them my way</a>
      </motion.p>
    </section>
  );
};

export default PersonalSection;
