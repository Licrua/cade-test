import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BufferGeometry, Float32BufferAttribute } from "three";

interface BoxSceneProps {
  vertices: number[];
}

const BoxScene: React.FC<BoxSceneProps> = ({ vertices }) => {
  const geometryRef = useRef<BufferGeometry | null>(null);

  if (geometryRef.current) {
    geometryRef.current.setAttribute(
      "position",
      new Float32BufferAttribute(vertices, 3)
    );
  }

  return (
    <Canvas style={{ height: "100vh", background: "#0a0e27" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <bufferGeometry ref={geometryRef} />
        <meshStandardMaterial color="lightgrey" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default BoxScene;
