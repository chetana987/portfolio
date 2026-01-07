import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function LaptopModel() {
  const { scene } = useGLTF("/models/laptop.glb");
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();

    // 🔹 VERY slow rotation
    groupRef.current.rotation.y = t * 0.15;

    // 🔹 Subtle floating
    groupRef.current.position.y = Math.sin(t) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={0.8}
        position={[0, -1, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/laptop.glb");
