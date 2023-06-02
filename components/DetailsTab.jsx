import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import InfoCard from "@/components/InfoCard";

const DetailsTab = ({ tabIndex, handleCardTabsChange }) => {
  return (
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
  );
};

export default DetailsTab;
