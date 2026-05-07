import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate the height of the glowing line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Calculate the glow opacity based on scroll
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  return (
    <section id="timeline" className="section bg-[#050505] relative" ref={containerRef}>
      <div className="container relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[var(--accent-orange)] to-transparent mx-auto" />
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-[var(--accent-orange)] to-[var(--accent-teal)] md:-translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          >
            {/* Glow effect on the active line */}
            <motion.div 
              className="absolute top-0 bottom-0 left-1/2 w-6 bg-[var(--accent-orange)] blur-[10px] -translate-x-1/2 mix-blend-screen pointer-events-none"
              style={{ opacity: glowOpacity }}
            />
          </motion.div>

          {/* Timeline Node */}
          <div className="relative mb-32 md:mb-0 w-full flex flex-col md:flex-row items-start justify-between group">
            
            {/* Desktop Left Side (Date) */}
            <div className="hidden md:block w-[45%] text-right pr-12 pt-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-display text-[var(--accent-orange)] tracking-widest uppercase text-sm font-semibold">
                  2023 — Present
                </span>
              </motion.div>
            </div>

            {/* The Dot */}
            <motion.div 
              className="absolute left-[-5px] md:left-1/2 w-4 h-4 rounded-full border-2 border-[var(--accent-orange)] bg-[#050505] z-10 md:-translate-x-1/2 top-2 transition-all duration-300 group-hover:bg-[var(--accent-orange)] group-hover:shadow-[0_0_15px_#ff6b00]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            />

            {/* Content Box */}
            <div className="w-full md:w-[45%] pl-12 md:pl-12 pt-0">
              <motion.div 
                className="glass-panel p-8 hover:border-[var(--accent-orange)] transition-colors duration-500 relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Mobile Date */}
                <div className="md:hidden mb-4">
                  <span className="font-display text-[var(--accent-orange)] tracking-widest uppercase text-sm font-semibold">
                    2023 — Present
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-medium text-white mb-2">
                  Freelance Motion Designer & Video Editor
                </h3>
                <h4 className="text-[var(--accent-teal)] text-sm uppercase tracking-wider mb-4">Independent</h4>
                
                <p className="text-gray-400 leading-relaxed font-light">
                  Executing high-end motion graphics, CGI integrations, and cinematic video edits for premium clients and content creators. Specialized in high-retention short-form content, title sequences, and immersive brand storytelling using advanced workflows in After Effects, Premiere Pro, and Blender.
                </p>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-orange)] opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-700 pointer-events-none rounded-full" />
              </motion.div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
