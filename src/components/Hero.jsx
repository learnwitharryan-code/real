import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, PresentationControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import Orb from './Orb';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black" id="home">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f2ff" />
          <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#ff6b00" />
          
          <Suspense fallback={null}>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <Orb />
            </PresentationControls>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML Overlay */}
      <div className="container relative z-10 flex h-full items-center pointer-events-none">
        <div className="flex flex-col gap-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Hey, I'm <br />
              <span className="text-gradient-orange">Rishi Singh</span>
            </h1>
          </motion.div>
          
          <motion.h2 
            className="text-xl md:text-3xl font-medium text-[var(--accent-teal)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Motion Graphics Artist & Video Editor
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Creating cinematic edits, motion graphics, and immersive digital visuals with creativity and storytelling.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mt-4 pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#portfolio" className="btn btn-glow">
              View Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-glass">
              Hire Me
            </a>
            <a href="#contact" className="btn btn-primary" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Scroll</span>
        <div className="w-[1px] h-[60px] bg-gradient-to-b from-[var(--accent-orange)] to-transparent" />
      </motion.div>
    </section>
  );
}
