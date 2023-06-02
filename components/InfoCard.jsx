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
    <div className="flex flex-col gap-[2px] md:gap-1">
      <span className="text-xs text-gray-500">{label}</span>
      <span
        className={`text-xl ${
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
      <CardHeader className="md:px-10 px-5">
        <div className="flex justify-start md:justify-normal items-center gap-8">
          <span className="text-xl font-medium" size="lg" fontWeight="medium">
            Sub-accounts
          </span>
          <div className="md:flex hidden self-end text-gray-500 gap-3 items-center">
            <span className="text-sm font-medium">2/2 Selected</span>
            <AiOutlineDown />
          </div>
        </div>
      </CardHeader>
      <Divider color="#dfdfdf" w="95%" alignSelf="center" />
      <CardBody px="md:10">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between md:pr-40">
          <CardStat label="Invested" amount="8,38,669.75" />
          <CardStat label="Present Value" amount="8,10,669.75" />
          <CardStat
            label="Unrealized P&L"
            amount="-28,300.92"
            color="red-600"
          />
        </div>
        <div className="hidden md:flex self-end text-blue-500 gap-3 items-center">
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
