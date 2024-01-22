import React from "react";
import {
  Image,
  Card,
  CardBody,
  Flex,
  SimpleGrid,
  Button,
  Text,
  useColorMode,
  Avatar,
  IconButton,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

function Depoimentos(): React.JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex direction="column" mt="0px">
      <Flex
        w="100%"
        justifyContent="center"
        mt={{ base: "70px", sm: "70px", md: "100px", lg: "150px" }}
      >
        <Text fontSize={{ base: "22px", sm: "40px", md: "50px", lg: "30px" }}>
          Feedbacks
        </Text>
      </Flex>

      <Flex justifyContent="center" mt="20px">
        <SimpleGrid
          columnGap="55px"
          rowGap="50px"
          columns={[1, 2, 2, 2]}
          w="100"
        >
         
          <Card
            w="270px"
            h="450px"
            boxShadow="none"
            backgroundColor={isDark ? "#010409" : "#ffffff"}
            _hover={{ boxShadow: isDark ? " " : "" }}
          >
            
              <Image src="/depoimento3.png" w="100%" h="100%"  alt="descrição da imagem" ></Image>
            
          </Card>
          <Card
            w="270px"
            h="450px"
            boxShadow="none"
            backgroundColor={isDark ? "#010409" : "#ffffff"}
            _hover={{ boxShadow: isDark ? " " : "" }}
          >
             <Image src="/depoimento4.png" w="100%" h="100%"  alt="descrição da imagem" ></Image>
             
          </Card>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Depoimentos;
