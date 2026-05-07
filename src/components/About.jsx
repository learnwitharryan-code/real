import { motion } from 'framer-motion';
import { Palette, Scissors, Video, Music, Layers, Type, Wand2, Smartphone } from 'lucide-react';

const skills = [
  { name: 'Motion Graphics Animation', icon: <Layers size={20} /> },
  { name: 'Video Editing', icon: <Scissors size={20} /> },
  { name: 'Cinematic Editing', icon: <Video size={20} /> },
  { name: 'Reels & Short-form Content', icon: <Smartphone size={20} /> },
  { name: 'Text Animation & Typography', icon: <Type size={20} /> },
  { name: 'Color Grading', icon: <Palette size={20} /> },
  { name: 'Sound Design', icon: <Music size={20} /> },
  { name: 'Graphic Design', icon: <Wand2 size={20} /> },
];

const software = [
  { name: 'Adobe After Effects', level: 'Advanced', color: '#9999ff' },
  { name: 'Adobe Premiere Pro', level: 'Advanced', color: '#ea77ff' },
  { name: 'Photoshop', level: 'Advanced', color: '#31a8ff' },
  { name: 'Blender', level: 'Intermediate', color: '#ea7600' },
  { name: 'Figma', level: 'Intermediate', color: '#f24e1e' },
  { name: 'CapCut', level: 'Advanced', color: '#ffffff' },
];

export default function About() {
  return (
    <section id="about" className="section bg-[#050505] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent-teal)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-orange)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The Artist</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-orange)] to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* About Text Card */}
          <motion.div 
            className="md:col-span-8 glass-panel p-8 md:p-12 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-orange)] rounded-full mix-blend-screen filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
            
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-teal)] mb-6 font-semibold">Background</h3>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
              I am a creative editor and motion graphics designer with <span className="text-white font-medium">3 years of experience</span>. My focus is on crafting <span className="text-[var(--accent-orange)]">cinematic edits</span> and high-impact social media content that tells a compelling story through immersive visual language.
            </p>
          </motion.div>

          {/* Current Status Card */}
          <motion.div 
            className="md:col-span-4 glass-panel p-8 flex flex-col justify-between group hover:border-[var(--accent-teal)] transition-colors duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-teal)] mb-6 font-semibold">Current Status</h3>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-[var(--accent-teal)] animate-pulse" />
                <span className="text-lg font-medium text-white">Freelance Motion Designer</span>
              </div>
              <div className="text-sm text-gray-500">2023 – Present</div>
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div 
            className="md:col-span-8 glass-panel p-8 group hover:border-[var(--accent-orange)] transition-colors duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-teal)] mb-6 font-semibold">Core Disciplines</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-[var(--accent-orange)] transition-all cursor-default"
                >
                  <span className="text-[var(--accent-teal)]">{skill.icon}</span>
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Software Arsenal */}
          <motion.div 
            className="md:col-span-4 glass-panel p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent-teal)] mb-6 font-semibold">Software Arsenal</h3>
            <div className="flex flex-col gap-4">
              {software.map((sw, index) => (
                <div key={index} className="flex justify-between items-center group cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sw.color }} />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{sw.name}</span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400 group-hover:text-[var(--accent-teal)] transition-colors">
                    {sw.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
