import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary font-body text-lg md:text-xl font-medium mb-4 tracking-wide"
        >
          Hey, I'm
        </motion.p>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[1.05] mb-6">
          Shraddha
          <br />
          <span className="text-gradient italic">Jain</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl font-body text-muted-foreground max-w-xl mt-6 leading-relaxed"
        >
          Forward Deployed AI Engineer crafting intelligent systems 
          at the intersection of research and production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-5 mt-10"
        >
          <a
            href="https://www.linkedin.com/in/shraddhajain21/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover-lift hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/sjain-21"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover-lift hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:21jain.shraddha@gmail.com"
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover-lift hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
