import React from 'react'
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
    ListItem,
    HStack
  } from "@chakra-ui/react";

 
import { useRouter } from "next/router";

import { FaCheckCircle } from "react-icons/fa";


  
function Pricing() {
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
            w={{ base: "270px", sm: "300px", md: "550px", lg: "800px" }}
            h={{ base: "470px", sm: "300px", md: "250px", lg: "490px" }}
            ml="35px"
            mr="35px"
            boxShadow="2xl"
            borderRadius="3xl"
            backgroundColor={isDark ? "#161B22" : "#ffffff"}
            
            
          >
           <Flex w="100%"   flexDirection="column" mt="25px">
           <Flex justifyContent="center">
           <Image
                src="/unlocking.jpg"
                h="90px"
                w="150px"
                alt="image not available"
                borderRadius="lg"
               
              />
               </Flex>
           <HStack justifyContent="center">
           <Text fontSize="12px" color="gray.500">
                12 x de
              </Text>
              <Text fontSize="25px" fontWeight="600">
                R$
              </Text>
              <Text fontSize="25px" fontWeight="900">
                 159
              </Text>
              <Text fontSize="12px" color="gray.500">
                /por mês
              </Text>
            </HStack>
            <Flex justifyContent="center">
            <Text fontSize="12px" color="gray.500">
               Ou R$ 1.596,00 à vista
              </Text>
              </Flex>
              </Flex>
             <Flex w="100%" backgroundColor={isDark ? "gray.900" : "gray.50"} h="240px"  flexDirection="column" >
             <Text fontSize="13px" mt="10px" mb="5px" ml="12px" fontWeight="bold">
             Ao se tornar aluno do UnlockingEnglish, você receberá:
              </Text>
              <List textAlign="start" mt="5px">
                <ListItem fontSize="13px" ml="12px">
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                Curso UnlockingEnglish;
                </ListItem>
                <ListItem fontSize="13px"  ml="12px">
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
            	Materiais digitais de apoio;
                </ListItem>
                <ListItem fontSize="13px"  ml="12px">
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                	Exercícios;
                </ListItem>
                <ListItem fontSize="13px"  ml="12px">
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                	Correção exclusiva dos exercícios, com análise de erros e dificuldades; 
                </ListItem>
                <ListItem fontSize="13px"  ml="12px">
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                	Acesso às aulas ao vivo 
                </ListItem>
                <ListItem fontSize="13px"  ml="12px">
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                	Suporte dos professores para atendimento de dúvidas e ajuda com traduções durante 12 meses 
                </ListItem>
              </List>
              </Flex>
              <Flex justifyContent="center">
              <Button
              rounded={"full"}
              w="150px"
              fontWeight={"normal"}
              px={6}
              color="white"
              colorScheme={"red"}
              bg={"#050A30"}
              _hover={{ bg: "gray.500" }}
              onClick={() => window.open("https://pay.hotmart.com/V82696580S")}
              mt="6px"
            
            >
              comece agora
            </Button>
            </Flex>
            
          </Card>
        </Flex>
       
      </Flex>
    );
  }

export default Pricing