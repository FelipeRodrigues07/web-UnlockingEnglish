import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Section from "@/components/Section";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";
import Prof from "@/components/Prof";
import Skills from "@/components/Skills";

import { Flex, Slider, Text, AspectRatio, Box } from "@chakra-ui/react";
import Depoimentos from "@/components/Depoimentos";

export default function Home() {
  return (
    <Flex direction="column" mt="0">
      <title>UnlockingEnglish</title>
      <Header />
      <Section />
      <Depoimentos/>
      <Prof />
      <Questions />
      <Footer />
    </Flex>
  );
}
