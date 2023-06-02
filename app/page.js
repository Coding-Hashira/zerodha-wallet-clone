"use client";

import {
  Heading,
  Tabs,
  TabList,
  Flex,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import InfoCard from "@/components/InfoCard";
import { useState } from "react";
import Chart from "@/components/Chart";
import { accountData, sectorData, stockData } from "@/data";

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleCardTabsChange = (index) => {
    setTabIndex(index);
  };
  return (
    <div className="px-16 space-y-16 py-5">
      <Tabs index={tabIndex} onChange={handleCardTabsChange}>
        <TabList>
          <Tab paddingX="14">Personal</Tab>
          <Tab paddingX="14">Family</Tab>
        </TabList>

        <TabPanels className="pt-8 ">
          <TabPanel className="px-0">
            <InfoCard />
          </TabPanel>
          <TabPanel className="px-0">
            <InfoCard />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs>
        <TabList>
          <Tab paddingX="14">
            {tabIndex === 0 ? "Personal" : "Family"} Overview
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex justifyContent="space-between">
              <div className="w-72 h-72">
                <Chart data={accountData} cutout={60} />
              </div>
              <div className="w-80 h-80">
                <Chart data={sectorData} cutout={60} />
              </div>
              <div className="w-[22rem] h-[22rem]">
                <Chart data={stockData} />
              </div>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
