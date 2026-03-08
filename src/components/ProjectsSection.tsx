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
    title: "Vision Transformer",
    subtitle: "ViT from Scratch",
    description:
      "Vision Transformer (ViT) from scratch in PyTorch, implementing patch embedding, multi-head self-attention, and classification head for image recognition.",
    tags: ["PyTorch", "ViT", "Transformers", "Computer Vision"],
    link: "https://github.com/sjain-21/vit/blob/main/ViT.ipynb",
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

      <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative bg-card rounded-xl p-6 hover-lift border border-border hover:border-primary/30 transition-all duration-300 min-w-[calc(50%-12px)] max-w-[calc(50%-12px)] snap-start flex-shrink-0"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start justify-between">
              <h3 className="text-xl font-display text-foreground mb-1">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
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
