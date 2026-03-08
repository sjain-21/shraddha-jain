import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "RapidEdit",
    subtitle: "Real-Time Instruction-Based Image Editing",
    description:
      "Natural language image inpainting using SAM & Hugging Face Diffusers. Integrated LCM-LoRA with Stable Diffusion for 60% faster inference, cutting latency from 41s to 17s.",
    tags: ["SAM", "Stable Diffusion", "LCM-LoRA", "T4 GPU"],
  },
  {
    title: "LLM Multi-Digit Tuning",
    subtitle: "Arithmetic Reasoning with LLaMA-2",
    description:
      "Improved LLaMA-2-7B accuracy for 7-digit addition from 16% to 28% via in-context learning and prompt engineering.",
    tags: ["LLaMA-2", "Fine-tuning", "Prompt Engineering"],
  },
  {
    title: "Sentiment Analysis",
    subtitle: "Robust Language Model Fine-tuning",
    description:
      "Fine-tuned BERT to 92.9% accuracy on IMDB, with 89.84% OOD accuracy using data augmentation pipelines.",
    tags: ["BERT", "NLP", "Data Augmentation"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-secondary/5" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-display mb-16"
      >
        Things I've <span className="italic text-gradient">built</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group relative bg-card rounded-xl p-8 hover-lift border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <h3 className="text-xl font-display text-foreground mb-1">
              {project.title}
            </h3>
            <p className="text-sm font-body text-primary font-medium mb-4">
              {project.subtitle}
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-muted text-muted-foreground text-xs font-body rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
