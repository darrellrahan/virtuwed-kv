import Place from "@/app/components/Place";
import React, { Suspense } from "react";

function page() {
  return (
    <Suspense fallback={<p>Loading Image...</p>}>
      <Place />
    </Suspense>
  );
}

export default page;
