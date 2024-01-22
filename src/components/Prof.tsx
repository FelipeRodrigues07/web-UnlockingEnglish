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

function Prof(): React.JSX.Element {
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
          Professores
        </Text>
      </Flex>

      <Flex justifyContent="center" mt="40px">
        <SimpleGrid
          columnGap="55px"
          rowGap="50px"
          columns={[1, 2, 2, 2]}
          w="100"
        >
          <Card
            w="270px"
            h="400px"
            boxShadow="2xl"
            backgroundColor={isDark ? "#161B22" : "#ffffff"}
            _hover={{ boxShadow: isDark ? " " : "dark-lg" }}
          >
            <CardBody>
              <Avatar src="/neto2.jpeg" w="180px" h="180px" ml="27px" />
              <Text textAlign="center" fontSize="20px" mt="15px" mb="5px">
                João Neto
              </Text>
              <Flex direction="row" justifyContent="center" mt="42px">

                <IconButton
                  
                  icon={<BsInstagram />}
                  isRound={true}
                  aria-label="Github"
                  onClick={() =>
                    window.open("https://www.instagram.com/joaoneto.b10/")
                  }
                ></IconButton>
                <IconButton
                  aria-label="Email"
                  ml={2}
                  icon={<AiOutlineMail />}
                  isRound={true}
                  onClick={() =>
                    window.open(
                      "mailto:feliperodriguesrs07@outlook.com?subject=&body=Ol%C3%A1%2C%20tudo%20bem%3F"
                    )
                  }
                ></IconButton>
                <IconButton
                  ml={2}
                  icon={<IoLogoWhatsapp />}
                  isRound={true}
                  aria-label="Whatsapp"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5564999094004&text=Ol%C3%A1%20Felipe,%20tudo%20bem?"
                    )
                  }
                ></IconButton>
              </Flex>
            </CardBody>
          </Card>
          <Card
            w="270px"
            h="400px"
            boxShadow="2xl"
            backgroundColor={isDark ? "#161B22" : "#ffffff"}
            _hover={{ boxShadow: isDark ? " " : "dark-lg" }}
          >
            <CardBody>
              <Avatar src="/leticia.jpeg" w="180px" h="180px" ml="27px" />
              <Text textAlign="center" fontSize="20px" mt="15px" mb="5px">
                Letícia Santiago
              </Text>
              <Flex direction="row" justifyContent="center" mt="42px">

                <IconButton
                  
                  icon={<BsInstagram />}
                  isRound={true}
                  aria-label="Github"
                  onClick={() =>
                    window.open("https://www.instagram.com/lets.santiago/")
                  }
                ></IconButton>
                <IconButton
                  aria-label="Email"
                  ml={2}
                  icon={<AiOutlineMail />}
                  isRound={true}
                  onClick={() =>
                    window.open(
                      "mailto:feliperodriguesrs07@outlook.com?subject=&body=Ol%C3%A1%2C%20tudo%20bem%3F"
                    )
                  }
                ></IconButton>
                <IconButton
                  ml={2}
                  icon={<IoLogoWhatsapp />}
                  isRound={true}
                  aria-label="Whatsapp"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5564999094004&text=Ol%C3%A1%20Felipe,%20tudo%20bem?"
                    )
                  }
                ></IconButton>
              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Prof;
