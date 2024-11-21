import React from "react";
import {
  Avatar,
  Flex,
  Spacer,
  Text,
  Link as ChakraLink,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
  IconButton,
  Icon,
  useColorMode,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SidebarNav from "./Sidebar";
import { useState } from "react";

function Header2() {
  const router = useRouter();
  const { asPath } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
    md: false,
  });

  /*
  function scrollToPosition(y) {
    window.scrollTo({
      top: y,
      behavior: "smooth", // para uma transição suave
    });
  }
*/
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // const [aberto, setAberto] = useState(false);

  return (
    <Flex
      h="65px"
      w="100%"
      mx="auto"
      maxW={1900}
      align="center"
      /* boxShadow={
        isDark
          ? "0 4px 6px rgba(255, 255, 255, 0.1)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)"
      }*/
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      position="fixed"
      zIndex="1000"
      backgroundColor={isDark ? "#050A30" : "#050A30"}
      left="50%"
      transform="translateX(-50%)"
    >
      <Avatar
        color="#050A30"
        src="/logo2.jpeg"
        ml={{ base: "3px", sm: "8px", md: "8", lg: "8", xl: "8px" }}
        size="sm"
        onClick={() => {
          router.push("/");
        }}
        cursor="pointer"
      ></Avatar>
      <Text
        ml="9px"
        fontSize="22px"
        fontWeight="semibold"
        color={isDark ? "white" : "white"}
      >
        UnlockingEnglish
      </Text>
      <Spacer></Spacer>
      <ChakraLink
        onClick={() => {
          router.push("/");
        }}
        display={{ base: "none", md: "flex" }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        borderBottom={
          asPath === "/casa"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "#ffffff"}
          display={{ base: "none", md: "flex" }}
        >
          Home
        </Text>
      </ChakraLink>
      <ChakraLink
        onClick={() => {
          router.push("/projetos");
        }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        display={{ base: "none", md: "flex" }}
        borderBottom={
          asPath === "/projetos"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "#ffffff"}
          display={{ base: "none", md: "flex" }}
        >
          Diferenciais
        </Text>
      </ChakraLink>
      <ChakraLink
        /*  onClick={() => {
          scrollToPosition(700);
        }}*/
        onClick={() => {
          router.push("/integrantes");
        }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        display={{ base: "none", md: "flex" }}
        borderBottom={
          asPath === "/integrantes"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "#ffffff"}
          display={{ base: "none", md: "flex" }}
        >
          Metodologia
        </Text>
      </ChakraLink>

      <ChakraLink
        onClick={() => {
          router.push("/curso");
        }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        display={{ base: "none", md: "flex" }}
        borderBottom={
          asPath === "/curso"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "#ffffff"}
          display={{ base: "none", md: "flex" }}
        >
          Depoimentos
        </Text>
      </ChakraLink>

      <ChakraLink
        onClick={() => {
          router.push("/entrar");
        }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        display={{ base: "none", md: "flex" }}
        borderBottom={
          asPath === "/entrar"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "#ffffff"}
          display={{ base: "none", md: "flex" }}
        >
          Blogs
        </Text>
      </ChakraLink>

      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          color="white"
          fontSize={20}
          mr="15px"
          aria-label="Abrir menu"
        ></IconButton>
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent backgroundColor={isDark ? "#161B22" : "#FFFFFF"}>
          <DrawerCloseButton size="50px" mt="20px" mr="10px" />
          <DrawerHeader>
            <IconButton
              ml={5}
              mr={5}
              icon={isDark ? <BsSun /> : <FaMoon />}
              isRound={true}
              onClick={toggleColorMode}
              aria-label="Toggle Color Mode"
            ></IconButton>
          </DrawerHeader>
          <DrawerBody>
            <SidebarNav onCloseSidebar={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <IconButton
        display={{ base: "none", md: "flex" }}
        ml={{ base: "25px", sm: "70px", md: "3", lg: "8" }}
        mr={5}
        icon={isDark ? <BsSun /> : <FaMoon />}
        isRound={true}
        onClick={toggleColorMode}
        aria-label="Toggle Color Mode"
      ></IconButton>
    </Flex>
  );
}

export default Header2;
