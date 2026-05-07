import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const OUTPUT_FILE = path.resolve('src/data/projects.js');

// Helper to format string like "ui-animation-2" to "Ui Animation 2"
function formatTitle(filename) {
  return filename
    .replace(/\.mp4$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function syncVideos() {
  console.log('Scanning public folder for videos...');
  
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('Error: public directory not found.');
    return;
  }

  const files = fs.readdirSync(PUBLIC_DIR);
  const mp4Files = files.filter(file => file.endsWith('.mp4'));

  const projects = mp4Files.map((file, index) => {
    return {
      id: index + 1,
      title: formatTitle(file),
      category: "Cinematic Showcase",
      thumbnail: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1000",
      videoUrl: `/${file}`,
      span: "", // All cards take 1 column for a clean grid
      progress: Math.floor(Math.random() * 60) + 20 // Random progress bar between 20-80%
    };
  });

  const fileContent = `export const projects = ${JSON.stringify(projects, null, 2)};\n`;

  fs.writeFileSync(OUTPUT_FILE, fileContent);
  console.log(`Successfully generated src/data/projects.js with ${projects.length} videos.`);
}

syncVideos();
