"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

function Youtube360() {
  const clickToStart = useRef<HTMLDivElement>(null);
  const [video, setVideo] = useState({
    muted: false,
    playing: false,
  });
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="h-screen relative">
      <div
        ref={clickToStart}
        onClick={() => {
          setVideo({
            muted: true,
            playing: true,
          });
          clickToStart.current!.style.display = "none";
          setOverlay(true);
        }}
        className="absolute inset-0 bg-white flex items-center justify-center cursor-pointer"
      >
        <p>Click anywhere on the page to start playing the video.</p>
      </div>
      {overlay && (
        <div className="absolute top-0 inset-x-0 h-32 bg-black flex justify-center items-center text-white text-xl font-semibold">
          360 Youtube Video
        </div>
      )}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=f2vpuTU7sio"
        width="100%"
        height="100%"
        muted={video.muted}
        playing={video.playing}
      />
      {overlay && (
        <div className="absolute bottom-0 inset-x-0 h-32 bg-black flex justify-between items-center text-white text-xl font-semibold px-16">
          <Link href="/gallery">Back to Gallery</Link>
          <button onClick={() => setVideo({ ...video, muted: !video.muted })}>
            {video.muted ? "Unmute" : "Mute"} Video
          </button>
        </div>
      )}
    </div>
  );
}

export default Youtube360;
