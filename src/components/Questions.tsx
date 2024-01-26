import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

function Questions() {
  return (
    <Flex direction="column" mt="115px">
      <Flex
        w="100%"
        justifyContent="center"
        mt={{ base: "20px", sm: "70px", md: "100px", lg: "150px" }}
      >
        <Text fontSize={{ base: "22px", sm: "40px", md: "50px", lg: "30px" }}>
          Perguntas frequentes.
        </Text>
      </Flex>

      <Flex mx="auto" maxW={900} mt="45px">
        <Accordion
          allowToggle
          w={{ base: "300px", sm: "400px", md: "700px", lg: "900px" }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                	Preciso saber alguma coisa de Inglês para aproveitar o curso?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            No UnlockingEnglish, serão ensinadas todas as regras gramaticais e os vocabulários mais importantes e utilizados, assim, o aluno será exposto ao conteúdo mais básico até o mais avançado. Por isso, não é necessário ter conhecimento do idioma para entender o conteúdo das aulas. 
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                Quais os dias das aulas?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            O UnlockingEnglish é um curso com duração de 12 meses, dividido entre aulas gravadas, ao vivo e suporte para correção das atividades e atendimento de dúvidas durante os 12 meses de estudo. 
Toda semana, serão liberadas duas aulas gravadas. Com as aulas gravada, será liberado um material de apoio para que o aluno não se perca durante a explicação e, ao final, haverá um exercício sobre o conteúdo explicado na aula para que o aluno coloque em prática o que estudou. Toda terça-feira, às 20h, é iniciada uma live, nesse momento, será reforçado o conteúdo das aulas gravadas e o aluno poderá interagir com o professor, utilizando o chat para tirar dúvidas

            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                Se eu não conseguir assistir ao vivo, como posso acessar às aulas de terça-feira?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            As aulas ao vivo ficarão gravadas e serão disponibilizadas dentro da plataforma para que você possa assistir ou reassistir. 
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
              	Por quanto tempo terei acesso ao curso?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            O curso tem duração de 12 meses, após esse período, o acesso às aulas será expirado, porém o aluno continuará com todos os materiais disponibilizados. 
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                	Tem certificado?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Sim, para retirar certificado, é preciso assistir às aulas gravadas disponibilizadas e realizar as atividades. 
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                	Em quanto tempo fico fluente?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Isso depende do nível de esforço e dedicação, bem como do tempo que o aluno tem disponível para estudar. Quanto mais tempo dedicado ao estudo dos conteúdos ensinados, mais rápido você garante a fluência.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                	Como posso tirar minhas dúvidas?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Ao adquirir o curso, você terá acesso ao email e WhatsApp dos professores, assim, se surgirem dúvidas, estaremos à disposição para saná-las. 
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default Questions;
