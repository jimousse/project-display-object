import { useFrame } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { useRef } from "react";
import Plane from "./plane/Plane";
import { useControls } from "leva";
import { Perf } from 'r3f-perf';

const BACKGROUND_COLOR = "#fff";

export default function Experience() {
  const { backgroundColor } = useControls({
    backgroundColor: BACKGROUND_COLOR,
  });

  return (
    <>
      <Perf position={"top-left"} />
      <color args={[backgroundColor]} attach="background" />
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.9} />
      <ambientLight intensity={0.5} />
      <Center>
        <Plane />
      </Center>
    </>
  );
}
