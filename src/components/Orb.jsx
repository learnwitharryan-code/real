import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Trail, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export default function Orb() {
  const orbRef = useRef();
  
  // Animate rotation
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <group>
        <Trail width={2} length={10} color={new THREE.Color('#ff6b00')} attenuation={(t) => t * t}>
          <Sphere ref={orbRef} args={[1, 64, 64]} scale={1.5}>
            <MeshDistortMaterial
              color="#050505"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
              envMapIntensity={1}
              emissive="#ff6b00"
              emissiveIntensity={0.2}
              wireframe={true}
            />
          </Sphere>
        </Trail>
        
        {/* Core glow */}
        <Sphere args={[0.8, 32, 32]}>
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.1} />
        </Sphere>
        
        {/* Timeline Rings */}
        <mesh rotation-x={Math.PI / 2}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#ff6b00" emissive="#ff6b00" emissiveIntensity={0.5} transparent opacity={0.4} />
        </mesh>
        <mesh rotation-x={Math.PI / 3} rotation-y={Math.PI / 4}>
          <torusGeometry args={[3, 0.01, 16, 100]} />
          <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={0.5} transparent opacity={0.3} />
        </mesh>
        
        {/* Cinematic Particles */}
        <Sparkles count={100} scale={8} size={2} speed={0.4} opacity={0.5} color="#ffb693" />
        <Sparkles count={50} scale={6} size={4} speed={0.2} opacity={0.8} color="#00f2ff" />
      </group>
    </Float>
  );
}
