import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, motion, useTransform } from 'framer-motion';
import { Sphere, Box, MeshDistortMaterial, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function Scene({ scrollYProgress }) {
  const group = useRef();
  const material1 = useRef();
  const material2 = useRef();

  useFrame((state) => {
    const scroll = scrollYProgress.get();
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, scroll * Math.PI * 2, 0.05);
      group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, scroll * 5, 0.05);
    }
    
    if (material1.current) {
      material1.current.distort = THREE.MathUtils.lerp(0.2, 0.8, scroll);
    }
    if (material2.current) {
      material2.current.distort = THREE.MathUtils.lerp(0.5, 0.1, scroll);
    }
  });

  return (
    <group ref={group}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]} position={[-3, 0, -2]}>
          <MeshDistortMaterial ref={material1} color="#ff6b00" emissive="#ff6b00" emissiveIntensity={0.5} wireframe speed={2} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <Box args={[1.5, 1.5, 1.5]} position={[3, 1, -4]} rotation={[Math.PI/4, Math.PI/4, 0]}>
          <MeshDistortMaterial ref={material2} color="#00f2ff" emissive="#00f2ff" emissiveIntensity={0.5} wireframe speed={3} />
        </Box>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.5, 32, 32]} position={[0, -2, 2]}>
          <meshStandardMaterial color="#ffffff" wireframe />
        </Sphere>
      </Float>
    </group>
  );
}

export default function ImmersiveScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[150vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ff6b00" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#00f2ff" />
          <Scene scrollYProgress={scrollYProgress} />
        </Canvas>

        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="text-center mix-blend-difference">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
              Motion Beyond Limits
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
              Crafting fluid experiences where design and technology converge in 3D space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
