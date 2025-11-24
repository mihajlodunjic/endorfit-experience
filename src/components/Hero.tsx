import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  height?: "full" | "large" | "medium";
  overlay?: boolean;
  children?: ReactNode;
}

export const Hero = ({ 
  image, 
  title, 
  subtitle, 
  height = "full", 
  overlay = true,
  children 
}: HeroProps) => {
  const heightClass = {
    full: "h-screen",
    large: "h-[80vh]",
    medium: "h-[60vh]",
  }[height];

  return (
    <div className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {title.split(" ").map((word, i) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="text-primary glow-text">{word}</span>
                ) : (
                  <span className="text-foreground"> {word}</span>
                )}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
