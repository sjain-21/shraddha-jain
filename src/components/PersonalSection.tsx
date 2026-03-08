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
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground font-body text-sm mb-8"
      >
        When I'm not building things —
      </motion.p>

      <div className="flex flex-wrap gap-2.5">
        {tidbits.map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="bg-muted/50 border border-border/50 rounded-full px-4 py-1.5 flex items-center gap-1.5 text-muted-foreground text-sm font-body"
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
        className="mt-6 text-muted-foreground/70 font-body text-xs"
      >
        Got book or trail recs? <a href="mailto:21jain.shraddha@gmail.com" className="underline hover:text-foreground transition-colors">Send them my way</a>
      </motion.p>
    </section>
  );
};

export default PersonalSection;
