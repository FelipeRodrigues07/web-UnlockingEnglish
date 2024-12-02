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



function SidebarNav({ onCloseSidebar }: { onCloseSidebar: () => void }) {
  const router = useRouter();

  const { asPath } = useRouter();

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";


  // const home = () => {
  //   router.push('/').then(() => 
  //     window.scrollTo({
  //       top: 700,
  //       behavior: "smooth"
  //     })
  //   ).finally(() => {
  //     onCloseSidebar(); 
  //   });
  // }

  const irParaHomeEDescer = () => {
    router.push('/').then(() => 
      window.scrollTo({
        top: 570,  //600
        behavior: "smooth"
      })
    ).finally(() => {
      onCloseSidebar(); 
    });
  }

  const sobreoCurso = () => {
    router.push('/').then(() => 
      window.scrollTo({
        top: 2610, //2650
        behavior: "auto"
      })
    ).finally(() => {
      onCloseSidebar(); 
    });
  }


  const perguntasFrequentes = () => {
    router.push('/').then(() => 
      window.scrollTo({
        top: 3290, //3330
        behavior: "auto"
      })
    ).finally(() => {
      onCloseSidebar(); 
    });
  }

  const contact = () => {
    router.push('/').then(() => 
      window.scrollTo({
        top: 3810, //3900
        behavior: "auto"
      })
    ).finally(() => {
      onCloseSidebar(); 
    });
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
            router.push("/"),
            onCloseSidebar();
          }}
          _hover={{ bg: "gray.100" }} // underline é para efeito
          px="4"
          py="2"
          borderRadius={5}
          // boxShadow={
          //   asPath === "/" ? (isDark ? " 0 1px 0 #fff" : "0 1px 0 #000000") : ""
          // }
        >
          <Text fontSize="xl" fontWeight="medium">
            Home
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={sobreoCurso}
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
            Sobre o curso
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
          Feedbacks
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={perguntasFrequentes}
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
            Perguntas frequentes
          </Text>
        </ChakraLink>
        <ChakraLink
          onClick={contact}
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
              icon={<AiOutlineMail />}
              isRound={true}
              aria-label="Email"
              onClick={() =>
                window.open(
                  "mailto:joaobatistasantiagonetoo@gmail.com"
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
                  "https://api.whatsapp.com/send?phone=5564996767061"
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
