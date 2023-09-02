import { useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import { scroll } from "framer-motion/dom";

export default function Header() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const video = document.getElementsByClassName("video");

  // Scrub through the video on scroll
  scroll((progress) => {
    if (video.readyState) {
      video.currentTime = video.duration * progress;
    }
  });

  //to make video play for only 3 sec
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Add an event listener to the video element for time updates
      video.addEventListener("timeupdate", handleTimeUpdate);

      // Start playing the video
      video.play();

      // Clean up the event listener when the component unmounts
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (video && video.currentTime >= 1.3) {
      // Pause the video after 3 seconds
      video.pause();
    }
  };

  return (
    <div
      ref={ref}
      className="m-auto text-white w-[100vh] h-[100vh] flex items-center text-9xl "
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsinline
        preload
        className="video fixed -right-12 -z-40 h-[90vh] bottom-0"
      >
        <source src="./assets/videos/header.mp4" type="video/mp4" />
      </video>

      <motion.div
        className="h-fit w-fit"
        style={{
          transform: isInView ? "none" : "translateX(-400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div>
          <div className="text-4xl">Hey I am</div>
          <div>Sreerag</div>
        </div>
      </motion.div>
    </div>
  );
}
