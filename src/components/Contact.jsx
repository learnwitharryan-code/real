import { motion } from 'framer-motion';
import { Mail, Link, MessageCircle, Video, Image } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

export default function Contact() {
  return (
    <section id="contact" className="section bg-[#050505] relative min-h-screen overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-teal)] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              Let's Work <br />
              <span className="text-gradient-orange">Together.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light">
              Open for freelance opportunities, cinematic edits, and motion design projects.
            </p>

            <form className="glass-panel p-8 mb-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-orange)] opacity-0 group-focus-within:opacity-10 blur-[50px] transition-opacity duration-700 pointer-events-none rounded-full" />
              
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-[var(--accent-teal)] transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-0 top-0 text-gray-500 transform -translate-y-4 text-sm transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:text-sm peer-focus:text-[var(--accent-teal)] pointer-events-none">
                    Name
                  </label>
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-[var(--accent-teal)] transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-0 top-0 text-gray-500 transform -translate-y-4 text-sm transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:text-sm peer-focus:text-[var(--accent-teal)] pointer-events-none">
                    Email Address
                  </label>
                </div>
                
                <div className="relative mt-4">
                  <textarea 
                    id="message"
                    rows="4"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-body focus:outline-none focus:border-[var(--accent-teal)] transition-colors peer resize-none"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="absolute left-0 top-0 text-gray-500 transform -translate-y-4 text-sm transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:text-sm peer-focus:text-[var(--accent-teal)] pointer-events-none">
                    Tell me about your project
                  </label>
                </div>

                <button type="button" className="btn btn-glow mt-4 self-start">
                  Send Message
                </button>
              </div>
            </form>

            {/* Direct Contact & Socials */}
            <div className="flex flex-col gap-6">
              <a href="mailto:rishusinghrk045@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group w-max">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-orange)] transition-colors">
                  <Mail size={20} className="text-[var(--accent-orange)]" />
                </div>
                <span className="text-xl font-light">rishusinghrk045@gmail.com</span>
              </a>

              <div className="flex gap-4">
                {[Link, MessageCircle, Video, Image].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal)]/10 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - 3D Object */}
          <div className="hidden lg:block h-[600px] w-full relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ff6b00" />
              <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#00f2ff" />
              
              <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <Sphere args={[1.8, 64, 64]}>
                  <MeshDistortMaterial 
                    color="#050505" 
                    distort={0.5} 
                    speed={2} 
                    roughness={0.2}
                    metalness={0.8}
                    emissive="#00f2ff"
                    emissiveIntensity={0.2}
                    wireframe
                  />
                </Sphere>
              </Float>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
