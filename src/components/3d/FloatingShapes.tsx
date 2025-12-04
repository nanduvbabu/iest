import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const AnimatedTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.4, 32, 100]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const AnimatedBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh position={position} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />
        <pointLight position={[10, -10, 5]} intensity={0.5} color="#a855f7" />
        
        <AnimatedSphere position={[-4, 2, 0]} color="#00d4ff" speed={1.2} />
        <AnimatedTorus position={[4, -1, -2]} color="#a855f7" />
        <AnimatedBox position={[3, 3, -1]} color="#00d4ff" />
        <AnimatedSphere position={[-3, -2, -1]} color="#a855f7" speed={0.8} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default FloatingShapes;
