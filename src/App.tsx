import './app.scss';
import Experience from './Experience.tsx';
import { Canvas } from '@react-three/fiber';
import Home from "./Home";

const App = () => {
  return (
    <>
      <div className="app-container">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
      <Home />
    </>
  )
}

export default App;
