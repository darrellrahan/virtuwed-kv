import Place from "@/app/components/Place";
import Youtube from "@/app/components/Youtube";
import React, { Suspense } from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<p>Loading Image...</p>}>
      {params.id === "3" ? <Youtube /> : <Place id={params.id} />}
    </Suspense>
  );
}

export default page;
