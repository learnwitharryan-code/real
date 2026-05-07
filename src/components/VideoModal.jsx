import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 backdrop-blur-2xl p-4 md:p-12"
          onClick={onClose}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[210] w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface hover:text-primary hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Project Details Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-6 left-6 md:top-10 md:left-10 z-[210] pointer-events-none"
          >
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase shadow-black drop-shadow-md">{project.category}</span>
            <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mt-2 shadow-black drop-shadow-lg">{project.title}</h2>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like easing
            className="relative w-full max-w-[1400px] aspect-video rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(255,107,0,0.15)] border border-white/10"
            onClick={(e) => e.stopPropagation()} // Prevent clicks on video from closing modal
          >
            {project.videoUrl ? (
              <VideoPlayer src={project.videoUrl} thumbnail={project.thumbnail} autoPlay={true} />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-surface-dim relative">
                <img src={project.thumbnail} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" />
                <div className="z-10 flex flex-col items-center text-center p-8 glass-panel rounded-xl">
                  <span className="material-symbols-outlined text-primary text-6xl mb-4">videocam_off</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Video Coming Soon</h3>
                  <p className="font-body-lg text-on-surface-variant max-w-md">The high-resolution video for this project is currently being processed or is not yet available.</p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
