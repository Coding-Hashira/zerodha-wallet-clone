import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Chart from "@/components/Chart";
import { accountData, sectorData, stockData } from "@/data";

const ChartTab = ({ tabIndex }) => {
  return (
    <Tabs>
      <TabList>
        <Tab paddingX="14">
          {tabIndex === 0 ? "Personal" : "Family"} Overview
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <div className="justify-between flex">
            <div className="w-72 h-72">
              <Chart data={accountData} cutout={60} />
            </div>
            <div className="w-80 h-80">
              <Chart data={sectorData} cutout={60} />
            </div>
            <div className="w-[22rem] h-[22rem]">
              <Chart data={stockData} />
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ChartTab;
