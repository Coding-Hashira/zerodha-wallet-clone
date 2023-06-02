import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Charts from "./Charts";

const ChartTab = ({ tabIndex }) => {
  return (
    <div className="hidden md:block">
      <Tabs>
        <TabList>
          <Tab paddingX="14">
            {tabIndex === 0 ? "Personal" : "Family"} Overview
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Charts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default ChartTab;
