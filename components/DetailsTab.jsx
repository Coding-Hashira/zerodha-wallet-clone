import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import InfoCard from "@/components/InfoCard";

const DetailsTab = ({ tabIndex, handleCardTabsChange }) => {
  return (
    <Tabs index={tabIndex} onChange={handleCardTabsChange}>
      <TabList>
        <Tab className="md:px-14">Personal</Tab>
        <Tab className="md:px-14">Family</Tab>
      </TabList>

      <TabPanels className="md:pt-8 pt-4">
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
