import { Flex, Text, Avatar, Image } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      w="100%"
      mx="auto"
      h="216px"
      backgroundColor="#050A30"
      mt={{ base: "100px", sm: "50px", md: "80px", lg: "200px" }}
    >
      <Text
        fontSize={{ base: "8px", sm: "15px", md: "15px", lg: "15px" }}
        color="white"
        textAlign="center"
      >
        © 2024 UnlockingEnglish. All Rights Reserved.
      </Text>
      <Flex justifyContent="center" mt="10px">
        <Avatar src="/logo2.jpeg" />
      </Flex>
    </Flex>
  );
}

export default Footer;
