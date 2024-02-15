import React from "react";
import Memory from "../compontents/Memory";
import Search from "../compontents/Search";
import Title from "../compontents/Title";

function page() {
  return (
    <main className="p-8 lg:p-16">
      <Title />
      <Search />
      <div className="space-y-48">
        <Memory
          assets={[
            {
              bg: "bg-[url('/carousel-1.svg')]",
              url: "/gallery/scene/1",
            },
            {
              bg: "bg-[url('/carousel-2.svg')]",
              url: "/gallery/scene/2",
            },
            {
              bg: "bg-[url('/carousel-3.svg')]",
              url: "/gallery/scene/3",
            },
            {
              bg: "bg-[url('/carousel-4.svg')]",
              url: "/gallery/scene/4",
            },
          ]}
          title="Prewedding"
          date="20 Desember 2023"
        />
        <Memory
          assets={[
            {
              bg: "bg-[url('/carousel-4.svg')]",
              url: "/gallery/scene/4",
            },
            {
              bg: "bg-[url('/carousel-3.svg')]",
              url: "/gallery/scene/3",
            },
            {
              bg: "bg-[url('/carousel-2.svg')]",
              url: "/gallery/scene/2",
            },
            {
              bg: "bg-[url('/carousel-1.svg')]",
              url: "/gallery/scene/1",
            },
          ]}
          title="TheDay"
          date="4 Januari 2024"
        />
      </div>
    </main>
  );
}

export default page;
