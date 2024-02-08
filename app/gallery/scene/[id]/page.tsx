import Place from "@/app/compontents/Place";
import VIdeo360 from "@/app/compontents/VIdeo360";
import React, { Suspense } from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<p>Loading Image...</p>}>
      {params.id === "3" ? <VIdeo360 /> : <Place id={params.id} />}
    </Suspense>
  );
}

export default page;
