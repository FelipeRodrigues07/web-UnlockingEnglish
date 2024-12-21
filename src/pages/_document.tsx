import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
       <Head>
       <meta
          property="og:title"
          content="UnlockingEnglish - Curso de Inglês"
        />
        <meta name="description" content="Aprenda inglês de forma prática e rápida com o curso da Unlocking English. Acelere seu aprendizado!" />
        <meta name="google-site-verification" content="SJXlJs950ldzEyNWWSGBmDtoFdN3rwHZdkcHlukPaws" />
      </Head>
      <body>
        <Main />
        <NextScript /> 
      </body>
    </Html>
  );
}
