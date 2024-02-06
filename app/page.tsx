import { Suspense } from "react";
import Place from "./compontents/Place";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading Image...</p>}>
        <Place />
      </Suspense>
    </main>
  );
}
