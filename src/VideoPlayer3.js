import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=xo_aFeVdSA4",
    "https://www.youtube.com/watch?v=6psxZxo_Xc4&pp=ygUbYnVzdGEgcmh5bWVzIHdoYXQgZG8geW91IGRv",
    "https://ultra.hyperxbot.site/1001186374563/14095",
    "https://www.youtube.com/watch?v=dDqk-ZsgZmA&pp=ygUbYnVzdGEgcmh5bWVzIHdoYXQgZG8geW91IGRv",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleEnded = () => {
    // Move to the next video or loop back to the first video
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  return (
    <div>
      <h1>KASI TV by Paul4Asa</h1>
      <ReactPlayer
        url={videoUrls[currentVideoIndex]}
        playing
        controls
        width="100%"
        height="100%"
        onEnded={handleEnded}
      />
    </div>
  );
};

export default VideoPlayer;
