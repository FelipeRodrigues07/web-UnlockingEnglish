import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    breakpoints: {
      xl: "96em", // Valor maior que "lg"
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    colors: {
      mode: {
        dark: "#010409",
        light: "#ffffff", // substitua por sua cor de modo claro
      },
    },
    styles: {
      global: (props: { colorMode: string }) => ({
        body: {
          bg: props.colorMode === "dark" ? "mode.dark" : "mode.light",
        },
      }),
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
