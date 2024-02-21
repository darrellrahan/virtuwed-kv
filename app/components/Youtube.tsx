"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { lora } from "../font";
import { useRouter } from "next/navigation";
import { useAsset360Context } from "../context/Asset360Provider";

function Youtube360() {
  const clickToStart = useRef<HTMLDivElement>(null);
  const [videoSettings, setVideoSettings] = useState({
    muted: true,
    playing: true,
  });
  const [overlay, setOverlay] = useState(false);
  const router = useRouter();
  const { video } = useAsset360Context();

  return (
    <div className="h-screen relative">
      <div
        ref={clickToStart}
        className="absolute inset-0 bg-[#FFF9F9] flex items-center justify-center p-8"
      >
        <div
          className={`${lora.className} flex flex-col gap-8 items-center gap-8 z-10 relative`}
        >
          <h3 className="text-2xl text-center">
            Click The Button To Start Playing The Video
          </h3>
          <hr className="w-[1.5px] h-[180px] bg-black" />
          <button
            onClick={() => {
              if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                return router.push(video);
              }
              setVideoSettings({
                muted: true,
                playing: true,
              });
              clickToStart.current!.style.display = "none";
              setOverlay(true);
            }}
            className="bg-[#F66F6F] text-white text-lg flex items-center gap-4 rounded-md px-4 py-3"
          >
            <span>Watch now</span>
            <Image
              src="/ic-link.svg"
              alt="link"
              width={16}
              height={16}
              priority
            />
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[250px] lg:h-[600px] bg-[url('/footer-accent-sm.png')] lg:bg-[url('/footer-accent.png')] bg-cover"></div>
      </div>
      {overlay && (
        <div
          className={`${lora.className} absolute top-0 inset-x-0 h-24 bg-[#FFF9F9] flex items-center justify-center text-center text-[#F66F6F]`}
        >
          <div>
            <h4 className="mb-1 font-medium">The Wedding</h4>
            <h1 className="text-3xl font-bold">AGY & YORIKO</h1>
          </div>
        </div>
      )}
      <ReactPlayer
        url={video}
        width="100%"
        height="100%"
        muted={videoSettings.muted}
        playing={videoSettings.playing}
        loop={true}
      />
      {overlay && (
        <div
          className={`${lora.className} absolute bottom-0 inset-x-0 h-16 bg-[#FFF9F9] flex items-center text-[#F66F6F] rounded-tl-[45px] font-medium px-8 text-lg`}
        >
          <Link href="/gallery" className="flex items-center gap-2">
            <Image
              src="/ic-back-pink.svg"
              alt="link"
              width={24}
              height={24}
              priority
            />
            <span>Back to gallery</span>
          </Link>
          <Image
            src="/flower.png"
            alt="flower"
            width={120}
            height={120}
            priority
            className="absolute bottom-0 right-0"
          />
        </div>
      )}
    </div>
  );
}

export default Youtube360;
