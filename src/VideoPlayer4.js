import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
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

  const [currentVideo, setCurrentVideo] = useState(videos[0].url);

  const handleVideoChange = (url) => {
    setCurrentVideo(url);
  };

  return (
    <div>
      <h1>My Video Player</h1>
      <ReactPlayer url={currentVideo} controls />

      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <button onClick={() => handleVideoChange(video.url)}>
              {video.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayer;
