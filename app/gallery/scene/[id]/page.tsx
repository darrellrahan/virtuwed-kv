import Place from "@/app/compontents/Place";
import VIdeo360 from "@/app/compontents/VIdeo360";
import Youtube from "@/app/compontents/Youtube";
import React, { Suspense } from "react";

function page({ params }: { params: { id: string } }) {
  if (params.id === "3") {
    return <VIdeo360 />;
  }
  if (params.id === "4") {
    return <Youtube />;
  }
  return (
    <Suspense fallback={<p>Loading Image...</p>}>
      <Place id={params.id} />
    </Suspense>
  );
}

export default page;
