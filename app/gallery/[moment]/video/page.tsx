import Youtube360 from "@/app/components/Youtube";
import React, { Suspense } from "react";

function page() {
  return (
    <Suspense fallback={<p>Loading Video...</p>}>
      <Youtube360 />
    </Suspense>
  );
}

export default page;
