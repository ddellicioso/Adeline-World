import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Logo from "../assets/3dmodels/Logo";
import { PerspectiveCamera, Environment } from "@react-three/drei";

const RotatingLogo = () => {
  const groupRef = useRef();
  const lastTime = useRef(performance.now());

  useFrame(() => {
    const currentTime = performance.now();
    const delta = currentTime - lastTime.current;

    if (delta >= 1000 / 60) {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.025;
      }

      lastTime.current = currentTime;
    }
  });

  return (
    <group ref={groupRef}>
      <Logo />
    </group>
  );
};

const ThreeLogo = () => {
  return (
    <Canvas>
      <PerspectiveCamera
        makeDefault
        fov={75}
        near={0.1}
        far={1000}
        position={[0, 0, 5]}
      />
      <ambientLight color={0x404040} />
      <pointLight
        color={0xffffff}
        intensity={1000000}
        distance={100}
        position={[0, 2, 5]}
      />
      <Suspense fallback={null}>
        <Environment files="/assets/3dmodels/envTexture.hdr" />
        <RotatingLogo />
      </Suspense>
    </Canvas>
  );
};

export default ThreeLogo;
