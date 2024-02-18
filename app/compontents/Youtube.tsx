"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { lora } from "../font";

function Youtube360() {
  const clickToStart = useRef<HTMLDivElement>(null);
  const [video, setVideo] = useState({
    muted: true,
    playing: true,
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
        <div
          className={`${lora.className} absolute top-0 inset-x-0 h-14 bg-[rgb(24,25,38)] px-4 flex items-center justify-between text-white`}
        >
          <Link href="/gallery">
            <Image
              priority
              src="/ic-back.svg"
              alt="back to gallery"
              width={24}
              height={24}
            />
          </Link>
          <button onClick={() => setVideo({ ...video, muted: !video.muted })}>
            {video.muted ? "Unmute" : "Mute"} Video
          </button>
        </div>
      )}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=HqYhkpGgZXc"
        width="100%"
        height="100%"
        muted={video.muted}
        playing={video.playing}
        loop={true}
      />
      {overlay && (
        <div
          className={`${lora.className} absolute bottom-0 inset-x-0 h-12 bg-[rgb(24,25,38)] flex items-center justify-center text-white font-medium`}
        >
          360 video
        </div>
      )}
    </div>
  );
}

export default Youtube360;
