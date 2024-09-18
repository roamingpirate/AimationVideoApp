import { Environment, OrbitControls, Sky, ContactShadows } from "@react-three/drei";
import {Avatar} from "./Avatar";
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import { Chair } from "./Chair"
function Background() {
  const texture = useLoader(TextureLoader, '../../public/background/forest.jpg');

  return (
    <Plane args={[15, 15]} position={[0, 2.2, -15]} >
      <meshBasicMaterial attach="material" map={texture} />
    </Plane>
  );
}


export const Experience = () => {

  return (
    <>
      <Background />
      <OrbitControls />
      <ambientLight intensity={1}/>
      <group position={[0,-2,0]}>
      <ContactShadows position={[0,-0.49,0]}opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Sky/>
        <Environment preset="sunset"/>
        <mesh rotation-x={-Math.PI*0.5} scale={4}>
        <planeGeometry/>
        <meshStandardMaterial color={"#5a9ec4"}/>
      </mesh>
      <Avatar avatarName = 'Jordan' position={[-0.6,0.5,0.01]} scale={0.9} rotation = {[0,0.3,0]}/>
      <Avatar avatarName = 'Michael' position={[0.6,0.5,0.01]} scale={0.9} rotation = {[0,-0.3,0]}/>
      <Chair/>
      </group>
      
    </>
  );
};
