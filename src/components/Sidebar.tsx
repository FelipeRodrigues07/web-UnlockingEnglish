import React from "react";
import {
  Link as ChakraLink,
  Flex,
  Stack,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";

function SidebarNav() {
  const router = useRouter();

  const { asPath } = useRouter();

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";



  const irParaHomeEDescer = () => {
    router.push('/').then(() => 
      window.scrollTo({
        top: 700,
        behavior: "smooth"
      })
    )
  }

  return (
    <Stack spacing="6">
      <Stack>
        <Text fontSize="md" fontWeight="bold">
          Seções:
        </Text>
        <Stack></Stack>
        <ChakraLink
          onClick={() => {
            router.push("/");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          boxShadow={
            asPath === "/" ? (isDark ? " 0 1px 0 #fff" : "0 1px 0 #000000") : ""
          }
        >
          <Text fontSize="xl" fontWeight="medium">
            Home
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={() => {
            router.push("/metodologia");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          boxShadow={
            asPath === "/about"
              ? isDark
                ? " 0 1px 0 #fff"
                : "0 1px 0 #000000"
              : ""
          }
        >
          <Text fontSize="xl" fontWeight="medium">
            Metodologia
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={irParaHomeEDescer}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          boxShadow={
            asPath === "/depoimentos"
              ? isDark
                ? " 0 1px 0 #fff"
                : "0 1px 0 #000000"
              : ""
          }
        >
          <Text fontSize="xl" fontWeight="medium">
            Depoimentos
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={() => {
            router.push("/");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          boxShadow={
            asPath === "/projects"
              ? isDark
                ? " 0 1px 0 #fff"
                : "0 1px 0 #000000"
              : ""
          }
        >
          <Text fontSize="xl" fontWeight="medium">
            Contatos
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={() => {
            router.push("/");
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
        >
          <Text fontSize="xl" fontWeight="medium">
            Blogs
          </Text>
        </ChakraLink>
      </Stack>
      <Stack>
        <Text fontSize="sm" fontWeight="bold">
          Social Links:
        </Text>
        <Flex>
          <Flex direction="row">
            
            <IconButton
              ml={2}
              icon={<FaInstagram />}
              isRound={true}
              aria-label="Instagram"
              onClick={() =>
                window.open("https://www.instagram.com/lets.santiago/")
              }
            ></IconButton>
            <IconButton
              ml={2}
              icon={<BsYoutube />}
              isRound={true}
              aria-label="Github"
              onClick={() =>
                window.open("https://github.com/FelipeRodrigues07")
              }
            ></IconButton>
            <IconButton
              ml={2}
              icon={<AiOutlineMail />}
              isRound={true}
              aria-label="Email"
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
        </Flex>
      </Stack>
    </Stack>
  );
}

export default SidebarNav;
