import { Github, Linkedin, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-3xl font-display">
            Let's <span className="italic text-gradient">connect</span>
          </h3>
          <p className="text-muted-foreground font-body mt-2 text-sm">
            Always happy to chat about AI, data, and building cool things.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/shraddhajain21/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/sjain-21"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:21jain.shraddha@gmail.com"
            className="p-3 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      <p className="text-center text-muted-foreground text-xs font-body mt-12">
        © {new Date().getFullYear()} Shraddha Jain
      </p>
    </footer>
  );
};

export default FooterSection;
