import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
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
  ];

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0); // Loop back to the first video if needed
    }
  };

  return (
    <div>
      <ReactPlayer
        url={videos[currentVideoIndex].url}
        playing
        controls
        width="100%"
        height="100%"
        onEnded={handleVideoEnd}
      />
      <div>
        {videos.map((video, index) => (
          <button key={index} onClick={() => setCurrentVideoIndex(index)}>
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
