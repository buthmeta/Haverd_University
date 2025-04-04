import React, { useRef } from "react";
import video from "../assets/education.mp4";

const Video = ({ playState, setPlayState }) => {
  const playerRef = useRef(null);

  // Close video when clicked outside the video area
  const closePlayer = (e) => {
    // Check if the click is outside the video player
    if (playerRef.current && !playerRef.current.contains(e.target)) {
      setPlayState(false); // Close the video
    }
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full z-50 ${
        playState ? "" : "hidden"
      }`}
      onClick={closePlayer} // Close video when clicking outside
    >
      <div
        ref={playerRef} // Reference the video container
        className="fixed inset-0 flex justify-center items-center"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))",
          width: "100%",
          height: "100%",
        }}
      >
        <video
          className="w-[500px] h-auto border-4 border-white"
          autoPlay
          loop
          muted
          controls
          src={video}
        ></video>
      </div>
    </div>
  );
};

export default Video;
