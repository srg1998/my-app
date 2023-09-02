import Education from "./components/education";
import Header from "./components/header";
import AnimatedCursor from "react-animated-cursor";
import {  useScroll } from "framer-motion";
function App() {
  return (
    <div className="flex flex-col justify-center items-center overflow-auto">
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <Header/>
      <Education/>
      <Education/>
      <Education/>
      <Education/>
    </div>
  );
}

export default App;
