import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neon Genesis Drift',
    category: 'CGI + Motion Integration',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Void Resonance',
    category: 'Promotional Videos',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Synthwave Pulse',
    category: 'Music Sync Edits',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'Brand Anthem',
    category: 'YouTube Edits',
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 5,
    title: 'Hyper-Speed Highlights',
    category: 'Instagram Reels',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000&auto=format&fit=crop',
    featured: true,
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-[#050505] relative min-h-screen">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Showcase</h2>
            <p className="text-xl text-gray-400">Selected works and cinematic experiments.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button className="btn btn-glass group">
              View All 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-xl overflow-hidden glass-panel cursor-pointer ${
                project.featured && index === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/5] lg:aspect-[4/5]'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Thumbnail Image */}
              <div className="absolute inset-0 bg-[#121212] z-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Floating UI Elements */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center bg-black/50 text-[var(--accent-orange)] backdrop-blur-md">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>
              </div>

              {/* Content Details */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-[10px] tracking-[0.2em] text-[var(--accent-teal)] uppercase font-semibold bg-black/40 px-3 py-1 rounded backdrop-blur-sm border border-white/5">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-white mb-2">
                  {project.title}
                </h3>
              </div>

              {/* Custom Scrubber Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div 
                  className="h-full bg-[var(--accent-teal)] relative"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "45%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent-orange)] rounded-full shadow-[0_0_8px_#ff6b00]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
