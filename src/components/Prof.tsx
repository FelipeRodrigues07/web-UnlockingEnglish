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
  List,
  ListIcon,
  ListItem
} from "@chakra-ui/react";
import { RiSpeakFill } from "react-icons/ri";
import { FaRegAddressBook } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";

function Prof(): React.JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex direction="column" mt="0px">
      <Flex
        w="100%"
        justifyContent="center"
        mt={{ base: "40px", sm: "50px", md: "50px", lg: "50px" }}
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
              <Avatar src="/leticia7.jpeg" w="180px" h="180px" ml="27px" />
              <Text textAlign="center" fontSize="20px" mt="5px" mb="5px">
                Letícia Santiago
              </Text>
              <List textAlign="start" mt="5px">
                <ListItem fontSize="10px">
                  <ListIcon
                    as={FaRegAddressBook }
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                  Criadora do Curso UnockingEnglish.
                </ListItem>
              </List>
              <List  mt="0px">
                <ListItem fontSize="10px">
                  <ListIcon
                    as={PiStudentFill}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                 Advogada
                </ListItem>
              </List>
              <List textAlign="start" mt="0px">
                <ListItem fontSize="10px">
                  <ListIcon
                    as={RiSpeakFill }
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                 Fluente em Inglês desde os 17 anos de idade.  
                </ListItem>
              </List>
              <List textAlign="start" mt="0px">
                <ListItem fontSize="10px">
                  <ListIcon
                    as={GrCertificate  }
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                 Possui certificado de competência em Inglês pela Universidade de Michigan.  
                </ListItem>
              </List>
              <List textAlign="start" mt="0px">
                <ListItem fontSize="10px">
                  <ListIcon
                    as={GiNotebook }
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                 Dá aulas de inglês para crianças, adolescentes e adultos há mais de 6 anos. 
                </ListItem>
              </List>
              <Flex direction="row" justifyContent="center" mt="7px">

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
          <Card
            w="270px"
            h="400px"
            boxShadow="2xl"
            backgroundColor={isDark ? "#161B22" : "#ffffff"}
            _hover={{ boxShadow: isDark ? " " : "dark-lg" }}
          >
            <CardBody>
              <Avatar src="/joao_neto.JPG" w="180px" h="180px" ml="27px" />
              <Text textAlign="center" fontSize="20px" mt="15px" mb="5px">
                João Neto
              </Text>
              <List textAlign="start" mt="10px">
                <ListItem fontSize="11px">
                  <ListIcon
                    as={FaRegAddressBook }
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                  Criador do Curso UnockingEnglish.
                </ListItem>
              </List>
              <List  mt="3px">
                <ListItem fontSize="11px">
                  <ListIcon
                    as={RiSpeakFill }
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                 Se tornou fluente em Inglês aos 15 anos de idade. 
                </ListItem>
              </List>
              <List textAlign="start" mt="3px">
                <ListItem fontSize="11px">
                  <ListIcon
                    as={GiNotebook  }
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                 Dá aulas de Inglês desde os 17 anos de idade. 
                </ListItem>
              </List>

              <Flex direction="row" justifyContent="center" mt="5px">

                <IconButton
                  
                  icon={<BsInstagram />}
                  isRound={true}
                  aria-label="Instagram"
                  onClick={() =>
                    window.open("https://www.instagram.com/joaosantiagoneto/")
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
