import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "@/components/Header";
import Info from "@/components/Info";
function depoimentos() {
  return (
    <Flex direction="column" mt="0">
      <Header />
      <Info />
    </Flex>
  );
}

export default depoimentos;
