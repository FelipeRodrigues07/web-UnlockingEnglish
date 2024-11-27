import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
       <Head>
        <meta name="description" content="Mega desconto especial de Blackfriday" />
        <meta
          property="og:title"
          content="UnlockingEnglish - Curso de Inglês"
        />
      </Head>
      <body>
        <Main />
        <NextScript /> 
      </body>
    </Html>
  );
}
