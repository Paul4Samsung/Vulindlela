import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  Player,
  ControlBar,
  PlayToggle,
  ReplayControl,
  ForwardControl,
} from "react-player-controls";

const VideoPlayer = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=xo_aFeVdSA4",
    "https://www.youtube.com/watch?v=6psxZxo_8xg",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length
    );
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Player>
        <ReactPlayer
          url={videoUrls[currentVideoIndex]}
          width="100%"
          height="100%"
          controls={false} // Disable default controls to use custom controls
        />
        <ControlBar>
          <PlayToggle />
          <ReplayControl seconds={10} />
          <ForwardControl seconds={10} />
        </ControlBar>
      </Player>
      <div>
        <button onClick={handlePreviousVideo}>Previous Video</button>
        <button onClick={handleNextVideo}>Next Video</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
