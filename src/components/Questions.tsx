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
        mt={{ base: "20px", sm: "50px", md: "50px", lg: "150px" }}
      >
        <Text fontSize={{ base: "22px", sm: "30px", md: "30px", lg: "30px" }}>
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
                  Para que serve o curso?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              O curso serve para que, mesmo pessoas que sentem muita dificuldade com a língua inglesa, possam estudar e se tornarem fluentes no idioma.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Para quem é o curso?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Para toda e qualquer pessoa, acima de 12 anos, que deseja ter conhecimento de Inglês para se comunicar; garantir vagas em bons empregos; viajar ou morar em países que possuem o Inglês como idioma oficial ou segunda língua; perder a dificuldade para entender documentos, filmes, músicas, programas, materiais ou manuais em Inglês; fazer do Inglês uma carreira e se tornar um professor da língua; ter à disposição o conhecimento da língua global de comunicação.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Como funciona o curso?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Após adquirir o curso, o aluno receberá login e senha para acessar as aulas e materiais na Plataforma. Na plataforma estarão as aulas gravadas, materiais e exercícios que o aluno irá consumir durante 12 meses e garantir a fluência. Durante o estudo da língua, o aluno também participará de aulas de conversação para praticar o uso do idioma com um professor que o ajudará em qualquer erro ou dificuldade.
            </AccordionPanel>
          </AccordionItem>
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
              O curso é dividido em:
              <br />
              - Aulas gravadas, que você poderá assistir a qualquer hora, dia e lugar, desde que tenha um dispositivo com internet.
              <br />
              - Aulas de conversação ao vivo e particular, que serão todas marcadas com o aluno, que poderá escolher entre os dias e horários disponíveis.

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
            Com a aquisição do curso, o aluno adquire também acesso ao contato e e-mail dos professores, que estarão disponíveis durante 12 meses a todos os alunos do UnlockingEnglish.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default Questions;
