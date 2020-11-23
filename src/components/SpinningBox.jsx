import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";
import { useSpring, a } from "react-spring/three";

const SpinningBox = ({
  position,
  size = [1, 1, 1],
  color = "grey",
  speed = 1,
}) => {
  const mesh = useRef(null);
  const [isExpand, setIsExpand] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  const props = useSpring({
    scale: isExpand ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  return (
    <a.mesh
      ref={mesh}
      position={position}
      castShadow
      onClick={() => setIsExpand(!isExpand)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={size} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.6}
      />
    </a.mesh>
  );
};

export default SpinningBox;
