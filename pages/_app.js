import { ChakraProvider } from "@chakra-ui/react";
import { purpleTheme, orangeTheme } from "../styles/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={purpleTheme}>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}

export default MyApp;
