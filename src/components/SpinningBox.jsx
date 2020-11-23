import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const SpinningBox = ({ position, size = [1, 1, 1], color = "grey" }) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position} castShadow>
      <boxBufferGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default SpinningBox;
