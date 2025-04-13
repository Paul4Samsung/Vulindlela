import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [videoIndex, setVideoIndex] = useState(0);
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

    // Add more videos here
  ];

  return (
    <div>
      <ReactPlayer
        url={videos[videoIndex].url}
        controls
        width="100%"
        height="100%"
      />
      <ul>
        {videos.map((video, index) => (
          <li key={index} onClick={() => setVideoIndex(index)}>
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayer;
