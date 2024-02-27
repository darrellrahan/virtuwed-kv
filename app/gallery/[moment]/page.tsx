"use client";

import Search from "@/app/components/Search";
import Title from "@/app/components/Title";
import { useApiContext } from "@/app/context/ApiProvider";
import { useSinglePageValueContext } from "@/app/context/SinglePageValueProvider";
import { lora } from "@/app/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
var _ = require("lodash");
import { useRouter } from "next/navigation";

function page({ params }: { params: { moment: string } }) {
  const heights = [
    "350",
    "250",
    "400",
    "300",
    "250",
    "350",
    "450",
    "350",
    "250",
    "400",
    "350",
    "250",
    "400",
    "300",
    "250",
    "350",
    "450",
    "350",
    "250",
    "400",
  ];
  const { data } = useApiContext();
  const { setPhoto, setVideo } = useSinglePageValueContext();
  const router = useRouter();

  if (!data) return;

  const filteredData = data.data.wedding.kenangan_virtual.find(
    (data: any) => params.moment === _.kebabCase(data.kenangan_name)
  );

  return (
    <main className="p-8 lg:p-16 lg:pb-96 pb-72 relative overflow-hidden">
      <Link
        href="/gallery"
        className="absolute top-9 left-8 lg:left-16 lg:top-[4.5rem]"
      >
        <Image
          priority
          src="/ic-back-black.svg"
          alt="back to gallery"
          width={32}
          height={32}
        />
      </Link>
      <Title />
      <Search />
      <div className={`${lora.className} text-center my-12`}>
        <h1 className="text-[#F66F6F] text-3xl font-semibold lg:text-4xl lg:mb-2">
          #{filteredData.kenangan_name}
        </h1>
        <h3 className="lg:text-lg">20 Desember 2023</h3>
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 900: 4 }}>
        <Masonry gutter="1rem">
          {filteredData.kenangan_photos.map((photo: any, index: any) => (
            <div
              style={{
                width: "100%",
                display: "block",
                height: `${heights[index]}px`,
                backgroundImage: `url(https://sgp1.vultrobjects.com/virtuwed-storage/${photo.thumbnail})`,
              }}
              className="bg-cover rounded-md relative cursor-pointer z-20"
              onClick={() => {
                setPhoto(photo.equirect_photo);
                router.push(`/gallery/${params.moment}/photo`);
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)]"></div>
              <Image
                priority
                src="/ic-img.svg"
                alt="media"
                width={32}
                height={32}
                className="absolute top-4 left-4"
              />
              <button className="absolute bottom-4 right-4 z-10">
                <Image
                  priority
                  src="/ic-download.svg"
                  alt="download"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          ))}
          {filteredData.kenangan_youtube_url.map((video: any, index: any) => (
            <div
              style={{
                width: "100%",
                display: "block",
                height: `${heights[index]}px`,
                backgroundImage: `url(https://sgp1.vultrobjects.com/virtuwed-storage/${video.thumbnail})`,
              }}
              className="bg-cover rounded-md relative cursor-pointer z-20"
              onClick={() => {
                setVideo(video.url);
                router.push(`/gallery/${params.moment}/video`);
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)]"></div>
              <Image
                priority
                src="/ic-video.svg"
                alt="media"
                width={32}
                height={32}
                className="absolute top-4 left-4"
              />
              <button className="absolute bottom-4 right-4 z-10">
                <Image
                  priority
                  src="/ic-download.svg"
                  alt="download"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className="absolute inset-x-0 bottom-0 h-[250px] lg:h-[600px] bg-[url('/footer-accent-sm.png')] lg:bg-[url('/footer-accent.png')] bg-cover"></div>
    </main>
  );
}

export default page;
