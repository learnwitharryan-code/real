import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-lg overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-40 bg-surface/60 backdrop-blur-[60px] border-b border-white/5 bg-gradient-to-b from-surface-dim to-transparent transition-all duration-500 ease-out">
        <div className="flex justify-between items-center px-6 md:px-margin-desktop py-unit w-full max-w-container-max mx-auto">
          <div className="font-headline-md text-2xl md:text-headline-md tracking-tighter text-on-surface uppercase">RISHI.MOTION</div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-on-surface-variant hover:text-on-surface hover:backdrop-blur-[80px] hover:bg-surface-bright/10 transition-colors font-body-lg text-body-lg px-4 py-2 rounded-DEFAULT" href="#showcase">Showcase</a>
            <a className="text-on-surface-variant hover:text-on-surface hover:backdrop-blur-[80px] hover:bg-surface-bright/10 transition-colors font-body-lg text-body-lg px-4 py-2 rounded-DEFAULT" href="#process">Process</a>
            <a className="text-on-surface-variant hover:text-on-surface hover:backdrop-blur-[80px] hover:bg-surface-bright/10 transition-colors font-body-lg text-body-lg px-4 py-2 rounded-DEFAULT" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:block glass-panel px-6 py-2 rounded-DEFAULT text-primary font-body-lg text-body-lg btn-glow transition-all duration-300">Hire Me</a>
            <button 
              className="md:hidden text-on-surface hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Full-Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-background z-[100] flex flex-col transition-all duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'}`}>
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center px-6 py-unit w-full border-b border-white/5 bg-surface/60 backdrop-blur-xl">
          <div className="font-headline-md text-2xl tracking-tighter text-on-surface uppercase">RISHI.MOTION</div>
          <button 
            className="text-on-surface hover:text-primary transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>close</span>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-10 relative overflow-hidden">
          {/* Subtle background glow for premium feel */}
          <div className="absolute top-[20%] right-[-20%] w-[300px] h-[300px] bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[20%] left-[-20%] w-[300px] h-[300px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <a className="text-5xl font-display-xl tracking-tight text-on-surface hover:text-primary transition-colors" href="#showcase" onClick={() => setIsMobileMenuOpen(false)}>Showcase</a>
          <a className="text-5xl font-display-xl tracking-tight text-on-surface hover:text-primary transition-colors" href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
          <a className="text-5xl font-display-xl tracking-tight text-on-surface hover:text-primary transition-colors" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a className="mt-8 px-12 py-4 border border-primary/30 text-primary font-body-lg rounded-full shadow-[0_0_20px_rgba(255,107,0,0.2)] hover:bg-primary/10 transition-all text-xl" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-[120px] pb-24 md:pb-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[-10%] md:left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-container/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] right-[-10%] md:right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary-container/10 rounded-full blur-[150px]"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-gutter w-full z-10 text-center lg:text-left mt-8 lg:mt-0">
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start gap-6">
            <h1 className="font-display-xl text-5xl sm:text-7xl md:text-display-xl text-on-surface leading-tight">
              Hey, I'm <br/><span className="text-gradient">Rishi Singh</span>
            </h1>
            <h2 className="font-headline-md text-xl md:text-headline-md text-secondary">Motion Graphics Artist &amp; Video Editor</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Creating cinematic edits, motion graphics, and immersive digital visuals with creativity and storytelling.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a className="glass-panel px-8 py-4 rounded-DEFAULT font-body-lg text-body-lg text-on-surface btn-glow transition-all duration-300 flex items-center gap-2" href="#showcase">
                View Projects <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a className="px-8 py-4 rounded-DEFAULT font-body-lg text-body-lg text-primary border border-primary-container/30 hover:border-primary-container hover:bg-primary-container/10 transition-all duration-300" href="#contact">
                Hire Me
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[350px] md:h-[600px] flex items-center justify-center [perspective:1000px] [transform-style:preserve-3d] mt-12 lg:mt-0">
            {/* 3D Orbiting System */}
            <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d] [transform:rotateX(75deg)] z-20">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] [transform-style:preserve-3d] animate-[orbit-ring_20s_linear_infinite]">
                {/* Orbit Ring Track */}
                <div className="absolute inset-0 border-[2px] border-primary-container/30 rounded-full shadow-[0_0_30px_rgba(255,107,0,0.2)] border-dashed"></div>
                
                {/* After Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
                  <div className="animate-[orbit-icon_20s_linear_infinite]">
                    <div className="w-16 h-16 bg-surface-dim rounded-2xl flex items-center justify-center glass-panel shadow-[0_0_20px_rgba(153,153,255,0.4)] border border-white/10">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" className="w-10 h-10 drop-shadow-lg" alt="After Effects" />
                    </div>
                  </div>
                </div>
                
                {/* Premiere Pro */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 [transform-style:preserve-3d]">
                  <div className="animate-[orbit-icon_20s_linear_infinite]">
                    <div className="w-16 h-16 bg-surface-dim rounded-2xl flex items-center justify-center glass-panel shadow-[0_0_20px_rgba(234,119,255,0.4)] border border-white/10">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" className="w-10 h-10 drop-shadow-lg" alt="Premiere Pro" />
                    </div>
                  </div>
                </div>
                
                {/* Blender */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
                  <div className="animate-[orbit-icon_20s_linear_infinite]">
                    <div className="w-16 h-16 bg-surface-dim rounded-2xl flex items-center justify-center glass-panel shadow-[0_0_20px_rgba(232,125,13,0.4)] border border-white/10">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" className="w-10 h-10 drop-shadow-lg" alt="Blender" />
                    </div>
                  </div>
                </div>
                
                {/* CapCut */}
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]">
                  <div className="animate-[orbit-icon_20s_linear_infinite]">
                    <div className="w-16 h-16 bg-surface-dim rounded-2xl overflow-hidden flex items-center justify-center glass-panel shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/10">
                      <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg" className="w-10 h-10 rounded-xl drop-shadow-lg" alt="CapCut" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Character Image with floating animation */}
            <img 
              src="/character.png" 
              alt="Rishi 3D Character" 
              className="absolute h-[90%] object-contain drop-shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105 transition-transform duration-500 ease-out z-30"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
            {/* Ambient Back Glow */}
            <div className="absolute w-[60%] h-[60%] bg-primary-container/30 rounded-full blur-[100px] z-10 [transform:translateZ(-50px)]"></div>
          </div>
        </div>
      </section>

      {/* About & Skills Section (Bento Grid) */}
      <section className="py-24 md:py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto relative" id="process">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-auto md:auto-rows-[250px]">
          {/* About Card */}
          <div className="md:col-span-8 glass-panel rounded-xl p-8 flex flex-col justify-center card-glow transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[60px] group-hover:bg-primary-container/10 transition-all duration-500"></div>
            <h3 className="font-label-caps text-label-caps text-secondary mb-4 tracking-widest uppercase">The Artist</h3>
            <p className="font-headline-md text-headline-md text-on-surface max-w-2xl leading-relaxed">
              Creative editor and motion designer with <span className="text-primary">3 years experience</span> in cinematic editing and high-impact social media content.
            </p>
          </div>
          {/* Experience Snippet */}
          <div className="md:col-span-4 glass-panel rounded-xl p-8 flex flex-col justify-between card-glow transition-all duration-500">
            <h3 className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Current Status</h3>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-secondary-container animate-pulse"></div>
                <span className="font-body-lg text-body-lg text-on-surface">Freelance Motion Designer</span>
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">2023 – Present</div>
            </div>
          </div>
          {/* Skills List */}
          <div className="md:col-span-4 md:row-span-2 glass-panel rounded-xl p-8 card-glow transition-all duration-500 overflow-hidden">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 tracking-widest uppercase">Arsenal</h3>
            <div className="flex flex-col gap-4">
              <div className="p-3 border border-white/5 rounded-DEFAULT hover:border-secondary-container/50 transition-colors flex justify-between items-center">
                <span className="font-body-lg text-body-lg text-on-surface">Adobe After Effects</span>
                <span className="font-label-caps text-label-caps text-primary bg-primary-container/10 px-2 py-1 rounded">Advanced</span>
              </div>
              <div className="p-3 border border-white/5 rounded-DEFAULT hover:border-secondary-container/50 transition-colors flex justify-between items-center">
                <span className="font-body-lg text-body-lg text-on-surface">Premiere Pro</span>
                <span className="font-label-caps text-label-caps text-primary bg-primary-container/10 px-2 py-1 rounded">Advanced</span>
              </div>
              <div className="p-3 border border-white/5 rounded-DEFAULT hover:border-secondary-container/50 transition-colors flex justify-between items-center">
                <span className="font-body-lg text-body-lg text-on-surface">Blender</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-bright px-2 py-1 rounded">Intermediate</span>
              </div>
              <div className="p-3 border border-white/5 rounded-DEFAULT hover:border-secondary-container/50 transition-colors flex items-center">
                <span className="font-body-lg text-body-lg text-on-surface">Photoshop / Figma / CapCut</span>
              </div>
            </div>
          </div>
          {/* Expertise Tags */}
          <div className="md:col-span-8 md:row-span-2 glass-panel rounded-xl p-8 card-glow transition-all duration-500">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 tracking-widest uppercase">Core Disciplines</h3>
            <div className="flex flex-wrap gap-4">
              <span className="px-6 py-3 border border-white/10 rounded-full font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-all cursor-default">Motion Graphics Animation</span>
              <span className="px-6 py-3 border border-white/10 rounded-full font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-all cursor-default">Cinematic Editing</span>
              <span className="px-6 py-3 border border-white/10 rounded-full font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-all cursor-default">Sound Design</span>
              <span className="px-6 py-3 border border-white/10 rounded-full font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-all cursor-default">Color Grading</span>
              <span className="px-6 py-3 border border-white/10 rounded-full font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-all cursor-default">Reels &amp; Short-form</span>
              <span className="px-6 py-3 border border-white/10 rounded-full font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-all cursor-default">Typography</span>
              <span className="px-6 py-3 border border-white/10 rounded-full font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-all cursor-default">Graphic Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 md:py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto relative" id="showcase">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg text-4xl md:text-headline-lg text-on-surface mb-2">Showcase</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Selected works and cinematic experiments.</p>
          </div>
          <button className="hidden md:flex glass-panel px-6 py-2 rounded-DEFAULT text-on-surface font-body-lg text-body-lg hover:border-secondary-container transition-colors items-center gap-2">
            View All <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Project Card 1 */}
          <div className="group relative aspect-[4/5] rounded-xl overflow-hidden glass-panel border border-white/5 cursor-pointer">
            <div className="absolute inset-0 bg-surface-dim z-0">
              <video 
                src="/cgi-work.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-label-caps text-secondary tracking-widest">CGI Integration</span>
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Neon Genesis Drift</h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-full bg-secondary-container w-[45%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_#ff6b00]"></div>
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="group relative aspect-[4/5] rounded-xl overflow-hidden glass-panel border border-white/5 cursor-pointer">
            <div className="absolute inset-0 bg-surface-dim z-0">
              <img alt="Abstract Topology" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiBshvfcO7M9lvWtqzcCXQsY9qPOuQruhClt4SmT4Q1B_jf4WmKG--F5j3Xx9fiKfkDZNIpF6AqImToOYv39IHbBZYnyzwCYe_FZU7pjh_WBKNRZSggbTW_CFSJNV0sI-KpjPtEONDds99653idRgM_blw6yg98VS06I7hqP9GNpMT2G7VQjXkAvJ-4Bj9YHbhW_E8h3_Csy4rtt8l6FLGb0et06SezGQyfJBFrtJyIuYo5AAtGYyUKjY8UHmTw_F2naifuqHimZG9"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-label-caps text-secondary tracking-widest">Title Sequence</span>
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Void Resonance</h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-full bg-secondary-container w-[70%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_#ff6b00]"></div>
              </div>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="group relative aspect-[4/5] rounded-xl overflow-hidden glass-panel border border-white/5 cursor-pointer md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-surface-dim z-0">
              <img alt="Retro Wave Edit" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjtUaf_INI7q_WXYxk06u5Pvex8ZtHocKJmNmh56UH1ggpHvXUa66ObMPY6urnIBG3R265zA4eWmJzD6BTBoxhNi3QzWKR8QQ8AyNaLUgaQW--himbhpO0g1C-gJpCMGIuXrWZVTygLknoctKlMuyuVYee2DNpkOtF8pAog7NnbqYblBbdD334U2qfnelSbuaCENgzKUAD7FqLLxD1GW3WVF3nW0hazl56qH9VazKwdZKceIL9ZyC3igjZBBKHYAKdyeyvGHEOH7Ym"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-label-caps text-secondary tracking-widest">Music Sync Edit</span>
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Synthwave Pulse</h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-full bg-secondary-container w-[20%] relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_#ff6b00]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-surface-container-lowest border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-6 md:px-margin-desktop py-12 md:py-gutter gap-6 w-full max-w-container-max mx-auto mt-24 md:mt-section-gap" id="contact">
        <div className="font-headline-md text-2xl md:text-headline-md text-on-surface mb-4 md:mb-0 uppercase tracking-tighter">
          RISHI.MOTION
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left mb-6 md:mb-0">
          <span className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer">rishusinghrk045@gmail.com</span>
        </div>
        <div className="flex gap-6 mb-6 md:mb-0">
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out" href="#">Instagram</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out" href="#">LinkedIn</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out" href="#">Behance</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 ease-in-out" href="#">Vimeo</a>
        </div>
        <div className="font-label-caps text-label-caps text-secondary text-center md:text-right">
          © 2024 RISHI SINGH STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
