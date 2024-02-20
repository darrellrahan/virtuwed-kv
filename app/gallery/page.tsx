import React from "react";
import Memory from "../components/Memory";
import Search from "../components/Search";
import Title from "../components/Title";

function page() {
  return (
    <main className="p-8 lg:p-16 lg:pb-96 pb-72 relative overflow-hidden">
      <Title />
      <Search />
      <div className="space-y-48">
        <Memory
          assets={[
            {
              bg: "bg-[url('/carousel-1.png')]",
              url: "/gallery/scene/1",
            },
            {
              bg: "bg-[url('/carousel-2.png')]",
              url: "/gallery/scene/2",
            },
            {
              bg: "bg-[url('/carousel-3.png')]",
              url: "/gallery/scene/3",
            },
          ]}
          title="Prewedding"
          date="20 Desember 2023"
        />
        <Memory
          assets={[
            {
              bg: "bg-[url('/carousel-3.png')]",
              url: "/gallery/scene/3",
            },
            {
              bg: "bg-[url('/carousel-2.png')]",
              url: "/gallery/scene/2",
            },
            {
              bg: "bg-[url('/carousel-1.png')]",
              url: "/gallery/scene/1",
            },
          ]}
          title="TheDay"
          date="4 Januari 2024"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[250px] lg:h-[600px] bg-[url('/footer-accent-sm.png')] lg:bg-[url('/footer-accent.png')] bg-cover"></div>
    </main>
  );
}

export default page;
