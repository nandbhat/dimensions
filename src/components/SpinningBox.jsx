import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";

const SpinningBox = ({
  position,
  size = [1, 1, 1],
  color = "grey",
  speed = 1,
}) => {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position} castShadow>
      <boxBufferGeometry attach="geometry" args={size} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </mesh>
  );
};

export default SpinningBox;
