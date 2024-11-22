import {
    Box,
    Button,
    Flex,
    Heading,
    Image, Text,
    VStack,
    useColorMode,
    Card
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';

import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from 'swiper/modules';

import { Montserrat } from 'next/font/google'

import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

import { SiNextdotjs, SiChakraui, SiFirebase } from "react-icons/si";




const defaultFont = Montserrat({
    subsets: ["latin"]
})

const StyledSwiper = styled(Swiper)`
.swiper-slide {
       transition: transform 0.4s ease;
       padding: 60px 0; // Adiciona padding vertical (20px no topo e na parte inferior)
       margin-bottom: 30px;

   }

   .swiper-slide-active {
    transform: scale(${() => {
      if (typeof window !== "undefined") {
        if (window.matchMedia("(max-width: 768px)").matches) {
          // Se a tela for menor que 768px (dispositivos móveis)
          return "1.1";
        } else if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
          // Se a tela estiver entre 769px e 1024px (tablets)
          return "1.2";
        } else {
          // Se a tela for maior que 1024px (notebooks e desktops)
          return "1.3";
        }
      } else {
        // Valor padrão para renderização do lado do servidor
        return "1.0";
      }
    }});
  }
   .swiper-pagination {
       text-align: center;
   }

   .swiper-pagination-bullet {
       width: 10px;
       height: 10px;
       background: #35363A;
       opacity: 1;
       
   }

   .swiper-pagination-bullet-active {
       background: #050A30;
   }

   .swiper-button-next, .swiper-button-prev {
       color: #050A30;
       border-radius: 100%;
       width: 35px;
       height: 35px;
       transition: all 0.3s ease; /* Adiciona uma transição suave */
       
       
   }
   .swiper-button-next:hover, .swiper-button-prev:hover {
       width: 40px; /* Aumenta o tamanho dos botões */
       height: 40px;
}

   .swiper-button-next:after, .swiper-button-prev:after {
       font-size: 30px;
       font-weight: bold; /* Aumenta a grossura dos ícones */
      
   }
`;


export function Slide() {
    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark";


    const [activeModal, setActiveModal] = useState<string | number | null>(null);
    const [initialSlide, setInitialSlide] = useState(0);


    const handleOpenModal = (id: number) => {
        setActiveModal(id);
        //  Atualize o slide inicial com base no id do modal
        setInitialSlide(id - 1); // Ajuste conforme necessário
    };

    const handleCloseModal = () => {
        setActiveModal(null);
        //setInitialSlide(0) //al fechar volta ao slide 1

    };



    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById("slide-section");
        if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            if (top < window.innerHeight && bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // Definindo o componente StyledSwiper aqui, mas fora do retorno do componente


    return (
        
        <VStack
            justifyContent="center"
            id="slide-section"
            opacity={isVisible ? 1 : 0}
            transition="opacity 0.5s ease-in-out 0.2s"
            marginTop={{ base: 0, sm: 90, md: 90, lg: 200, xl: 70 }}
            padding={{ base: "0 0px", sm: "0 20px", md: "0 30px", lg: "0 40px", xl: "0 50px" }} // Adiciona padding nas laterais

        >
            <Text fontSize={{ base: "22px", sm: "30px", md: "30px", lg: "30px" }} mb={{ base: "-50px", sm: "0px", md: "0px", lg: "0px", xl: "0px"}}>
                Feedbacks
            </Text>
            
            <StyledSwiper
                navigation={true}
                pagination={true}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                centeredSlides={true} // Garante que os slides estejam sempre centralizados
                initialSlide={initialSlide} // Garante que o primeiro slide esteja selecionado por padrão
                breakpoints={{
                    640: { slidesPerView: 1 },
                    730: { slidesPerView: 2 },
                    767: { slidesPerView: 2 },
                    860: { slidesPerView: 2 },
                    945: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                    1250: { slidesPerView: 3 },
                    1450: { slidesPerView: 4 },
                }}
                style={{ width: "100%", height: '100%', margin: 20 }}
            >
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card
                        w="270px" 
                        h="450px"
                        boxShadow="none"
                        backgroundColor={isDark ? "#010409" : "#ffffff"}
                        _hover={{ boxShadow: isDark ? " " : "" }}
                    >

                        <Image src="/depoimento3.png" w="100%" h="100%" alt="descrição da imagem"  ></Image>

                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card
                        w="270px"
                        h="450px"
                        boxShadow="none"
                        backgroundColor={isDark ? "#010409" : "#ffffff"}
                        _hover={{ boxShadow: isDark ? " " : "" }}
                    >
                        <Image src="/depoimento4.png" w="100%" h="100%" alt="descrição da imagem" ></Image>

                    </Card>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card
                        w="270px"
                        h="450px"
                        boxShadow="none"
                        backgroundColor={isDark ? "#010409" : "#ffffff"}
                        _hover={{ boxShadow: isDark ? " " : "" }}
                    >
                        <Image src="/feedback6.png" w="100%" h="100%" alt="descrição da imagem" ></Image>

                    </Card>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card
                        w="270px"
                        h="450px"
                        boxShadow="none"
                        backgroundColor={isDark ? "#010409" : "#ffffff"}
                        _hover={{ boxShadow: isDark ? " " : "" }}
                    >
                        <Image src="/feedback4.png" w="100%" h="100%" alt="descrição da imagem" ></Image>

                    </Card>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card
                        w="270px"
                        h="450px"
                        boxShadow="none"
                        backgroundColor={isDark ? "#010409" : "#ffffff"}
                        _hover={{ boxShadow: isDark ? " " : "" }}
                    >
                        <Image src="/feedback3.png" w="100%" h="100%" alt="descrição da imagem" ></Image>

                    </Card>
                </SwiperSlide>

            </StyledSwiper>
            
        </VStack>

    );
}