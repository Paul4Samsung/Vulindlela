import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=OWs1tn7iSIM");

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
  ];

  const handleVideoSelect = (videoUrl) => {
    setUrl(videoUrl);
  };

  return (
    <div>
      <h1>My Video Player</h1>
      <ReactPlayer
        url={url}
        width="100%" // Set your desired width
        height="100%" // Set your desired height
      />
      <ul>
        {videos.map((video, index) => (
          <li key={index} onClick={() => handleVideoSelect(video.url)}>
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayer;
