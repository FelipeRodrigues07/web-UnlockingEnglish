"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};
/*gray.100*/
export default function Info() {
  return (
    <Box bg={useColorModeValue("", "")}>
      <Container maxW={1200} py={16}>
        <Flex justifyContent="center" mt="40px">
          <SimpleGrid
            columnGap="35px"
            rowGap="20px"
            columns={[1, 1, 2, 3]}
            w="100"
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar src={"/leticia.jpeg"} name={"Jane Cooper"} />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Intuitive Design</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar src={"/neto2.jpeg"} name={"Jane Cooper"} />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar src={"/leticia.jpeg"} name={"Jane Cooper"} />
            </Testimonial>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
}
