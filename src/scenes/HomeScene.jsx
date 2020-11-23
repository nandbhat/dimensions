import React from "react";
import { Canvas } from "react-three-fiber";
import Plane from "../components/Plane";
import SpinningBox from "../components/SpinningBox";
import { OrbitControls, softShadows } from "drei";

softShadows();
const HomeScene = () => {
  return (
    <Canvas
      shadowMap
      colorManagement
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={0.5}
        shadowMapHeight={1024}
        shadowMapWidth={1024}
        shadowCameraLeft={-10}
        shadowCameraFar={50}
        shadowCameraBottom={-10}
        shadowCameraTop={10}
        shadowCameraRight={10}
        castShadow
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <group>
        <Plane />
        <SpinningBox
          position={[0, 1, 0]}
          color={"pink"}
          size={[3, 2, 1]}
          speed={1}
        />
        <SpinningBox position={[-2, 1, -5]} speed={2} />
        <SpinningBox position={[5, 1, -2]} color={"cyan"} speed={2} />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

export default HomeScene;
