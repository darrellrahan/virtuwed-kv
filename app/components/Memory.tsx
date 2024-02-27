"use client";

import Link from "next/link";
import React from "react";
import { lora } from "../font";

function Memory({
  assets,
  title,
  url,
}: {
  assets: { bg: string }[];
  title: string;
  url: string;
}) {
  return (
    <section id="memory" className="h-[300px] relative">
      <Link
        href={url}
        className="absolute inset-0 rounded-md bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] flex items-end p-6"
      >
        <div className="text-white">
          <h1 className={`${lora.className} font-semibold text-xl`}>
            #{title}
          </h1>
          <h3 className="mb-1">20 Desember 2023</h3>
          <p className="opacity-50">50 photos</p>
        </div>
      </Link>
      <div className="grid h-full gap-0.5 grid-cols-5">
        <div
          className="col-span-3 row-span-2 rounded-tl-md rounded-bl-md"
          style={{
            backgroundImage: `url(${assets[0].bg})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${assets[0].bg})`,
            backgroundSize: "cover",
            gridColumn: "span 2 / span 2",
          }}
          className="rounded-tr-md"
        ></div>
        <div
          style={{
            backgroundImage: `url(${assets[0].bg})`,
            backgroundSize: "cover",
            gridColumn: "span 2 / span 2",
          }}
          className="rounded-br-md"
        ></div>
      </div>
    </section>
  );
}

export default Memory;
