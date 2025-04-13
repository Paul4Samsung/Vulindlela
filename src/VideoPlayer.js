import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div>
      <h1>KASI TV Player</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=xo_aFeVdSA4" // Replace with your video URL
        playing={true} // Set to true to auto-play
        controls={true} // Show player controls
        width="100%" // Set width
        height="100%" // Set height
      />
    </div>
  );
};

export default VideoPlayer;
