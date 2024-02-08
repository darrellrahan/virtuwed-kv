import Link from "next/link";
import React from "react";

function page() {
  return (
    <main>
      <h1>gallery</h1>
      <div className="flex gap-4 my-8">
        <Link href="/gallery/scene/1" className="underline hover:no-underline">
          Scene 1
        </Link>
        <Link href="/gallery/scene/2" className="underline hover:no-underline">
          Scene 2
        </Link>
        <Link href="/gallery/scene/3" className="underline hover:no-underline">
          Scene 3
        </Link>
      </div>
    </main>
  );
}

export default page;
