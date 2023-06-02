"use client";

import { useState } from "react";
import DetailsTab from "@/components/DetailsTab";
import ChartTab from "@/components/ChartTab";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleCardTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <div className="px-16 space-y-16 py-5">
      <DetailsTab
        tabIndex={tabIndex}
        handleCardTabsChange={handleCardTabsChange}
      />

      <ChartTab tabIndex={tabIndex} />
    </div>
  );
}
