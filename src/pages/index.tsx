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
import Pricing from "@/components/Pricing";
import { Slide } from "@/components/Slide";
import Publi from "@/components/Publi";
import Social from "@/components/Social";

export default function Home() {
  return (
    <Flex direction="column" mt="0">
      <title>UnlockingEnglish</title>
      <Header />
      <Section />
      <Slide/>
      <Publi/>
      <Prof />
      <Pricing/>
      <Questions />
      <Social/>
      <Footer />
    </Flex>
  );
}
