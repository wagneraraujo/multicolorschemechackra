import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { purpleTheme, orangeTheme } from "../styles/theme";
import { ThemeColor } from "../components/themeColor";
import react from "react";
import { useThemeSelect } from "../components/themeColor";
import { useThemeBkm } from "../store";
function MyApp({ Component, pageProps, colortheme }) {
  const themeUser = useThemeBkm((state) => state.themebkmuser);
  const [themedefault, setThemedefaul] = React.useState(null);

  return (
    <>
      <ThemeColor />
      <ChakraProvider theme={themeUser}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
