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
    <Flex flexDir="column" gap="1">
      <Text fontSize="sm" color="gray.500">
        {label}
      </Text>
      <Text fontSize="2xl" color={color}>
        {amount}
      </Text>
    </Flex>
  );
};

const InfoCard = () => {
  return (
    <Card display="flex" flexDirection="column">
      <CardHeader paddingX="10">
        <Flex alignItems="center" gap="8">
          <Heading size="lg" fontWeight="medium">
            Sub-accounts
          </Heading>
          <Flex alignSelf="end" color="gray.500" alignItems="center" gap="3">
            <Text fontSize="sm" fontWeight="medium">
              2/2 Selected
            </Text>
            <AiOutlineDown />
          </Flex>
        </Flex>
      </CardHeader>
      <Divider color="#dfdfdf" w="95%" alignSelf="center" />
      <CardBody px="10">
        <Flex pb="4" justifyContent="space-between" pr="40">
          <CardStat label="Invested" amount="8,38,669.75" />
          <CardStat label="Present Value" amount="8,10,669.75" />
          <CardStat label="Unrealized P&L" amount="-28,300.92" color="red" />
        </Flex>
        <Flex alignSelf="end" color="blue.500" alignItems="center" gap="3">
          <Text
            fontSize="sm"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            fontWeight="medium"
          >
            View sub-accounts
          </Text>
          <AiOutlineDown />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default InfoCard;
