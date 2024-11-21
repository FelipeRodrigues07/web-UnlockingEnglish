import React from "react";
import { Playfair_Display} from "next/font/google"
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

const defautfont = Playfair_Display({
  subsets:["latin"]
})

function Header() {
  const router = useRouter();
  const { asPath } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
    md: true,
  });

  
  const irParaHomeEDescer = () => {
    router.push('/').then(() => 
      window.scrollTo({
        top: 700,
        behavior: "smooth"
      })
    )
  }

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
      backgroundColor={isDark ? "#050A30" : "#FFFFFF"}
      left="50%"
      transform="translateX(-50%)"
    >
      <Avatar
        color="#050A30"
        src="/logo2.jpeg"
        ml={{ base: "10px", sm: "8px", md: "8", lg: "8", xl: "8px" }}
        size="sm"
        onClick={() => {
          router.push("/");
        }}
        cursor="pointer"
      ></Avatar>
      <Text
        ml="3px"
        fontSize="22px"
        fontWeight="semibold"
        color={isDark ? "#ffffff" : "#050A30"}
        className={defautfont.className}
        
      >
        UnlockingEnglish
      </Text>
      <Spacer></Spacer>
      <ChakraLink
        onClick={() => {
          router.push("/");
        }}
        display={{ base: "none", lg: "flex" }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        borderBottom={
          asPath === "/" ? (isDark ? "1px solid #fff" : "1px solid #000") : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "blue.700"}
          display={{ base: "none", lg: "flex" }}
        >
          Home
        </Text>
      </ChakraLink>
      <ChakraLink
          
        onClick={() => {
          router.push("/metodologia");
        }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        display={{ base: "none", lg: "flex" }}
        borderBottom={
          asPath === "/metodologia"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "blue.700"}
          display={{ base: "none", lg: "flex" }}
        >
          Metodologia
        </Text>
      </ChakraLink>

      <ChakraLink
         onClick={irParaHomeEDescer}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        display={{ base: "none", lg: "flex" }}
        borderBottom={
          asPath === "/depoimentos"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "blue.700"}
          display={{ base: "none", lg: "flex" }}
        >
          Depoimentos
        </Text>
      </ChakraLink>
      <ChakraLink
        onClick={() => {
          router.push("/");
        }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        display={{ base: "none", lg: "flex" }}
        borderBottom={
          asPath === "/projetos"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "blue.700"}
          display={{ base: "none", lg: "flex" }}
        >
          Contatos
        </Text>
      </ChakraLink>
      <ChakraLink
        onClick={() => {
          router.push("/");
        }}
        _hover={{ bg: isDark ? "gray.800" : "gray.100" }}
        px="4"
        py="2"
        borderRadius={5}
        display={{ base: "none", lg: "flex" }}
        borderBottom={
          asPath === "/entrar"
            ? isDark
              ? "1px solid #fff"
              : "1px solid #000"
            : ""
        }
      >
        <Text
          color={isDark ? "#ffffff" : "blue.700"}
          display={{ base: "none", lg: "flex" }}
        >
          Blogs
        </Text>
      </ChakraLink>

      {isMobile && (
        <IconButton
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
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
            <SidebarNav  onCloseSidebar={onClose}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <IconButton
        display={{ base: "none", lg: "flex" }}
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

export default Header;
