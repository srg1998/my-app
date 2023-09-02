import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return (
    <div className="wrapper h-[100vh] w-[100vh] text-white flex items-center">
      <div ref={ref}>
        <div className="sticky">sdsdsdsd</div>
      </div>
    </div>
  );
}
