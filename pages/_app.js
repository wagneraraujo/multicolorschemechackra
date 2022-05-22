import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { purpleTheme, orangeTheme } from "../styles/theme";
import { ThemeColor } from "../components/themeColor";
import react from "react";
import { useThemeSelect } from "../components/themeColor";

function MyApp({ Component, pageProps, colortheme }) {
  return (
    <>
      <ThemeColor />
      <ChakraProvider theme={orangeTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
