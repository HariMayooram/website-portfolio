"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedStarfield() {
  const starRef = useRef(null);
  console.log("refHere" + starRef);

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <group ref={starRef}>
      <Stars
        radius={100}
        depth={50}
        count={500}
        factor={4}
        saturation={1}
        fade={true}
        speed={1}
        color="#a5f3fc"
      />
    </group>
  );
}
export default function Starfield() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <AnimatedStarfield />
      </Canvas>
    </div>
  );
}
