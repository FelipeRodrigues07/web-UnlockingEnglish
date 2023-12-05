import {
  Button,
  Card,
  CardBody,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  useColorMode,
} from "@chakra-ui/react";

import { FaCheckCircle } from "react-icons/fa";
import React from "react";

function Skills() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex direction="column">
      <Flex
        w="100%"
        justifyContent="center"
        mt={{ base: "70px", sm: "70px", md: "100px", lg: "150px" }}
      >
        <Text fontSize={{ base: "22px", sm: "40px", md: "50px", lg: "30px" }}>
          O melhor investimento que você pode fazer é em você mesmo
        </Text>
      </Flex>
      <Flex justifyContent="center" mt="40px">
        <SimpleGrid
          columnGap="55px"
          rowGap="20px"
          columns={[1, 2, 2, 3]}
          w="100"
        >
          <Card
            w="270px"
            h="270px"
            boxShadow="2xl"
            backgroundColor={isDark ? "#161B22" : "#ffffff"}
          >
            <CardBody>
              <Image
                src="/converstion4.png"
                h="100px"
                alt="image not available"
                borderRadius="lg"
                ml="65px"
              />
              <List textAlign="start" mt="25px">
                <ListItem>
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                  Foco no inglês prático da vida real.
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                  Aulas para assistir quando e quantas vezes quiser.
                </ListItem>
              </List>
            </CardBody>
          </Card>
          <Card
            w="270px"
            h="270px"
            boxShadow="2xl"
            backgroundColor={isDark ? "#161B22" : "#ffffff"}
          >
            <CardBody>
              <Image
                ml="65px"
                src="/converstion5.png"
                h="100px"
                alt="image not available"
                borderRadius="lg"
              />
              <List textAlign="start" mt="25px">
                <ListItem>
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                  Aulas para assistir quando e quantas vezes quiser.
                </ListItem>
              </List>
            </CardBody>
          </Card>
          <Card
            w="270px"
            boxShadow="2xl"
            h="270px"
            backgroundColor={isDark ? "#161B22" : "#ffffff"}
          >
            <CardBody>
              <Image
                src="/converstion5.png"
                h="100px"
                alt="image not available"
                borderRadius="lg"
                ml="65px"
              />
              <List textAlign="start" mt="25px">
                <ListItem>
                  <ListIcon
                    as={FaCheckCircle}
                    color={isDark ? "#ffffff" : "#050A30"}
                  />
                  Foco no inglês prático da vida real.
                </ListItem>
              </List>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Skills;
