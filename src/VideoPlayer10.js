import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const videos = [
    {
      title: "Video 1",
      url: "https://www.youtube.com/watch?v=6psxZxo_Xc4&pp=ygUbYnVzdGEgcmh5bWVzIHdoYXQgZG8geW91IGRv",
    },
    {
      title: "Video 2",
      url: "https://www.youtube.com/watch?v=Hht6tk0IGhE&pp=ygUbYnVzdGEgcmh5bWVzIHdoYXQgZG8geW91IGRv",
    },
    {
      title: "Video 3",
      url: "https://www.youtube.com/watch?v=dDqk-ZsgZmA&pp=ygUbYnVzdGEgcmh5bWVzIHdoYXQgZG8geW91IGRv",
    },
    { title: "Video 4", url: "https://www.youtube.com/watch?v=abc" },
    { title: "Video 5", url: "https://www.youtube.com/watch?v=xyz" },
    { title: "Video 6", url: "https://www.youtube.com/watch?v=abc" },
    { title: "Video 7", url: "https://www.youtube.com/watch?v=xyz" },
    { title: "Video 8", url: "https://www.youtube.com/watch?v=abc" },
    { title: "Video 9", url: "https://www.youtube.com/watch?v=xyz" },
    { title: "Video 10", url: "https://www.youtube.com/watch?v=abc" },
    { title: "Video 11", url: "https://www.youtube.com/watch?v=xyz" },
    { title: "Video 12", url: "https://www.youtube.com/watch?v=abc" },
    // Add more videos as needed
  ];

  const handleVideoEnd = () => {
    if (repeat) {
      // If repeat is enabled, replay the current video
      return;
    } else {
      // Move to the next video
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }
  };

  return (
    <div>
      <ReactPlayer
        url={videos[currentVideoIndex].url}
        onEnded={handleVideoEnd}
        playing
        controls
      />
      <h3>{videos[currentVideoIndex].title}</h3>
      <button onClick={() => setRepeat(!repeat)}>
        {repeat ? "Disable Repeat" : "Enable Repeat"}
      </button>
    </div>
  );
};

export default VideoPlayer;
