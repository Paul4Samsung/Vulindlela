import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const videoUrls = [
    "https://tg-fsb-ma2p.onrender.com/stream/35?hash=ecba79",
    "https://tg-fsb-ma2p.onrender.com/stream/36?hash=1016b2",
    "https://tg-fsb-ma2p.onrender.com/stream/38?hash=a19028",
    "https://tg-fsb-ma2p.onrender.com/stream/39?hash=725c4d",
    "https://tg-fsb-ma2p.onrender.com/stream/40?hash=654c6b",
    "https://tg-fsb-ma2p.onrender.com/stream/42?hash=315f04",
    "https://tg-fsb-ma2p.onrender.com/stream/42?hash=63a1ff",
    "https://tg-fsb-ma2p.onrender.com/stream/43?hash=0ee8fd",
    "https://tg-fsb-ma2p.onrender.com/stream/44?hash=aa3875",
    "https://tg-fsb-ma2p.onrender.com/stream/45?hash=7a12fe",
    "https://tg-fsb-ma2p.onrender.com/stream/46?hash=643995",
    "https://tg-fsb-ma2p.onrender.com/stream/47?hash=46eac7",
    "https://tg-fsb-ma2p.onrender.com/stream/48?hash=a19726",
    "https://tg-fsb-ma2p.onrender.com/stream/49?hash=2353b0",
    "https://tg-fsb-ma2p.onrender.com/stream/50?hash=ffacff",
    "https://tg-fsb-ma2p.onrender.com/stream/51?hash=2e48c3",
    "https://tg-fsb-ma2p.onrender.com/stream/52?hash=cb9186",
    "https://tg-fsb-ma2p.onrender.com/stream/53?hash=a43e3a",
    "https://tg-fsb-ma2p.onrender.com/stream/54?hash=6e5f26",
    "https://tg-fsb-ma2p.onrender.com/stream/55?hash=fba935",
    "https://tg-fsb-ma2p.onrender.com/stream/56?hash=18afe7",
    "https://tg-fsb-ma2p.onrender.com/stream/57?hash=4890db",
    "https://tg-fsb-ma2p.onrender.com/stream/58?hash=56cc12",
    "https://tg-fsb-ma2p.onrender.com/stream/59?hash=404d98",
    "https://tg-fsb-ma2p.onrender.com/stream/60?hash=bb74f5",
    "https://tg-fsb-ma2p.onrender.com/stream/61?hash=313cc1",
    "https://tg-fsb-ma2p.onrender.com/stream/62?hash=a0592b",
    "https://tg-fsb-ma2p.onrender.com/stream/63?hash=644496",
    "https://tg-fsb-ma2p.onrender.com/stream/262?hash=e527f7",
    "https://tg-fsb-ma2p.onrender.com/stream/263?hash=d48c60",
  ];

  const [currentVideo, setCurrentVideo] = useState(videoUrls[0]);

  return (
    <div>
      <h1>ITHONGA EPISODE 1 - 30</h1>
      <h1>By PAUL X</h1>
      <ReactPlayer
        url={currentVideo}
        playing={true}
        controls={true}
        width="100%" // Set width
        height="100%" // Set height
      />
      <div>
        {videoUrls.map((url, index) => (
          <button key={index} onClick={() => setCurrentVideo(url)}>
            Video {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
