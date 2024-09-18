import { Canvas, useThree} from "@react-three/fiber";
import {PerspectiveCamera } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Leva } from "leva";
import { useEffect } from "react";
import { AnimationEditor } from "./components/AnimationEditor";
import { Podcast2 } from "./components/Scenes/PodcastScene2";
import { Podcast1 } from "./components/Scenes/PodcastScene1";
import { ScriptEditPage } from "./pages/ScriptEditPage";


function App() {

  return (
    <>
    <div style={{width:'700px', height:'700px', margin:'15px'}}>
    <Canvas shadows>
    <PerspectiveCamera
        makeDefault
        position={[0, 0, 2]}
        fov={50}
        near={0.1}
        far={1000}
      />
      <Podcast2/>
    </Canvas>
    </div>
    <AnimationEditor/>
    </>
  );
}

export default App;
