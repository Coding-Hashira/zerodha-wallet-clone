import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Stack,
  Heading,
  Divider,
  Text,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";

const CardStat = ({ label, amount, color = "black" }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-500">{label}</span>
      <span
        className={`text-2xl ${
          color === "black" ? "text-black" : "text-red-600"
        }`}
      >
        {amount}
      </span>
    </div>
  );
};

const InfoCard = () => {
  return (
    <Card display="flex" flexDirection="column">
      <CardHeader paddingX="10">
        <div className="flex items-center gap-8">
          <span className="text-xl font-medium" size="lg" fontWeight="medium">
            Sub-accounts
          </span>
          <div className="flex self-end text-gray-500 gap-3 items-center">
            <span className="text-sm font-medium">2/2 Selected</span>
            <AiOutlineDown />
          </div>
        </div>
      </CardHeader>
      <Divider color="#dfdfdf" w="95%" alignSelf="center" />
      <CardBody px="10">
        <div className="flex pb-4 justify-between pr-40">
          <CardStat label="Invested" amount="8,38,669.75" />
          <CardStat label="Present Value" amount="8,10,669.75" />
          <CardStat
            label="Unrealized P&L"
            amount="-28,300.92"
            color="red-600"
          />
        </div>
        <div className="flex self-end text-blue-500 gap-3 items-center">
          <span className="text-sm hover:underline cursor-pointer font-medium">
            View sub-accounts
          </span>
          <AiOutlineDown />
        </div>
      </CardBody>
    </Card>
  );
};

export default InfoCard;
