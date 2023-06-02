"use client";

import { FiBriefcase } from "react-icons/fi";
import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <div className="px-16 py-5">
      <Tabs>
        <TabList>
          <Tab paddingX="14">Personal</Tab>
          <Tab paddingX="14">Family</Tab>
        </TabList>

        <TabPanels className="pt-8 ">
          <TabPanel className="px-0">
            <InfoCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
