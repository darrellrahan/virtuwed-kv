"use client";

import React, { useEffect } from "react";
import Memory from "../components/Memory";
import Search from "../components/Search";
import Title from "../components/Title";
import { useApiContext } from "../context/ApiProvider";
import { useRestoreScrollContext } from "../context/RestoreScrollProvider";
var _ = require("lodash");

function page() {
  const { data } = useApiContext();
  const { scrollY, setScrollY } = useRestoreScrollContext();

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  }, []);

  if (!data) return null;

  return (
    <main className="p-8 lg:p-16 lg:pb-96 pb-72 relative overflow-hidden">
      <Title />
      <Search />
      <div className="space-y-8 lg:space-y-0 lg:grid grid-cols-4 gap-8 mt-16">
        {data.data.wedding.kenangan_virtual.map((data: any) => {
          const photos = data.kenangan_photos.map((photo: any) => {
            return {
              bg: `https://sgp1.vultrobjects.com/virtuwed-storage/${photo.thumbnail}`,
            };
          });
          const videos = data.kenangan_youtube_url.map((video: any) => {
            return {
              bg: `https://sgp1.vultrobjects.com/virtuwed-storage/${video.thumbnail}`,
            };
          });
          return (
            <Memory
              key={data.kenangan_name}
              assets={photos.concat(videos)}
              title={data.kenangan_name}
              url={`/gallery/${_.kebabCase(data.kenangan_name)}`}
            />
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[250px] lg:h-[450px] bg-[url('/footer-accent-sm.png')] lg:bg-[url('/footer-accent.png')] bg-cover"></div>
    </main>
  );
}

export default page;
