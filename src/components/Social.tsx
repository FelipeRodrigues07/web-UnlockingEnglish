import {
    Card,
    CardBody,
    Flex,
    Text,
    Button,
    IconButton,
    useColorMode,
  } from "@chakra-ui/react";
  import React from "react";
  import { BsSend } from "react-icons/bs";
  import { FaInstagram} from "react-icons/fa";
  import { AiOutlineMail } from "react-icons/ai";
  import { IoLogoWhatsapp } from "react-icons/io";
  import { useRouter } from "next/router";
  
  function Social() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
  
    const router = useRouter();
  
    return (
      <Flex direction="column">
        <Flex
          justifyContent="center"
          mt={{ base: "80px", sm: "50px", md: "80px", lg: "150px" }}
        >
          <Card
            w="880px"
            h={{ base: "340px", sm: "300px", md: "270px", lg: "270px" }}
            ml="35px"
            mr="35px"
            // boxShadow="2xl"
          >
            <CardBody>
            <Flex  justifyContent="center" >
              <Text
                fontSize={{ base: "22px", sm: "25px", md: "25px", lg: "25px" }}
                mt="10px"
                mb="5px"
              >
                Entre em contato
              </Text>
            </Flex>
            <Flex  justifyContent="center" >
              <Text fontSize="14px" mt="10px" mb="5px">
              Se precisar de mais informações ou tiver qualquer dúvida sobre o curso, não hesite em nos contatar. Estamos aqui para apoiar sua jornada no aprendizado de inglês!
              </Text>
            </Flex>
              <Flex  justifyContent="center">
              <Button
                size="sm"
                mt={5}
                backgroundColor="#050A30"
                // colorScheme="blue"
                color="white"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5564996767061"
                  )
                }
                fontSize="13px"
              >
                <Text mr="5px">Fale Comigo</Text>
                {<BsSend fontSize="20px" />}
              </Button>
              </Flex>
              <Flex boxShadow=" 0 1px 0 #fff" w="100%" h="15px"></Flex>
              <Flex direction="row" justifyContent="center" mt="12px">
                <IconButton
                  icon={<FaInstagram />}
                  isRound={true}
                  size="lg"
                  aria-label="Instagram"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/lets.santiago/"
                    )
                  }
                ></IconButton>
                <IconButton
                  aria-label="Email"
                   size="lg"
                  ml={3}
                  icon={<AiOutlineMail />}
                  isRound={true}
                  onClick={() =>
                    window.open(
                      "mailto:feliperodriguesrs07@outlook.com?subject=&body=Ol%C3%A1%2C%20tudo%20bem%3F"
                    )
                  }
                ></IconButton>
                <IconButton
                 size="lg"
                  ml={3}
                  icon={<IoLogoWhatsapp />}
                  isRound={true}
                  aria-label="Whatsapp"
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5564996767061"
                    )
                  }
                ></IconButton>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    );
  }
  
  export default Social;