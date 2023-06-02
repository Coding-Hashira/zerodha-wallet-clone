"use client";

import { useState } from "react";
import DetailsTab from "@/components/DetailsTab";
import ChartTab from "@/components/ChartTab";
import Charts from "@/components/Charts";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleCardTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <div className="lg:px-16 px-0 space-y-16 py-5">
      <div className="px-4 md:px-16 lg:md-0">
        <DetailsTab
          tabIndex={tabIndex}
          handleCardTabsChange={handleCardTabsChange}
        />
      </div>

      <ChartTab tabIndex={tabIndex} />
      <div className="flex justify-center max-w-screen md:hidden">
        <Charts />
      </div>
    </div>
  );
}
