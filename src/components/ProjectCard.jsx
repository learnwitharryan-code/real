import React from 'react';

export default function ProjectCard({ project, onClick }) {
  return (
    <div 
      className={`group relative aspect-[4/5] rounded-xl overflow-hidden glass-panel border border-white/5 cursor-pointer ${project.span}`}
      onClick={() => onClick(project)}
    >
      <div className="absolute inset-0 bg-surface-dim z-0">
        {project.videoUrl ? (
          <video 
            src={project.videoUrl} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <img 
            alt={project.title} 
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" 
            src={project.thumbnail}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest">{project.category}</span>
          <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(255,107,0,0.3)]">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-variant z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="h-full bg-secondary-container relative" style={{ width: `${project.progress}%` }}>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_#ff6b00]"></div>
        </div>
      </div>
    </div>
  );
}
