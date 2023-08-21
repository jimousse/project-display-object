import { useVideoTexture, Html, useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";

export default function Plane() {
  const texture = useVideoTexture("./galaxy.mp4");
  const computer = useGLTF("./model.gltf");
  const phone = useGLTF("./Cell.glb");
  const laptop = useGLTF("./Laptop.glb");
  const monitor = useGLTF("./Monitor.glb");
  const notebook = useGLTF("Notebook.glb");
  return (
    <>
      <primitive object={monitor.scene} scale={2}>
        <mesh position-z={0.025} position-y={0.24} scale-x={0.88} scale-y={0.47}>
          <planeGeometry />
          <meshBasicMaterial
            map={texture}
            toneMapped={false}
            side={THREE.FrontSide}
          />
        </mesh>
      </primitive>
      <primitive object={notebook.scene} scale={0.1} position-y={-0.38}>
      </primitive>
      <Text
        fontSize={0.5}
        position={[2.2, 0.5, 0]}
        rotation-x={-Math.PI / 9}
        maxWidth={0.3}
        textAlign={"center"}
      >
        Animated Galaxy
      </Text>
      {/* <primitive object={phone.scene} position-y={0} position-x={-3} rotation-y={Math.PI/2} scale={0.05}>
        <mesh
          position-y={1.53}
          position-z={-1.39}
          rotation-x={-Math.PI / 11.9}
          scale-x={2.95}
          scale-y={1.95}
        >
          <Html transform distanceFactor={3}>
            <button>See demo</button>
          </Html>
        </mesh>
      </primitive> */}
    </>
  );
}
