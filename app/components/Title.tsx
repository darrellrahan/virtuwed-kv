import React from "react";
import { lora } from "../font";

function Title() {
  return (
    <section id="title" className={lora.className}>
      <h1 className="text-3xl font-bold mb-2">Fajar & Tiara's</h1>
      <h3 className="text-2xl mb-8">Memories</h3>
    </section>
  );
}

export default Title;
