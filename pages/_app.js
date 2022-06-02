import * as React from "react";
import {
  ChakraProvider,
  theme,
  ColorModeProvider,
  toggleColorMode,
  useColorMode,
} from "@chakra-ui/react";
import { purpleTheme, orangeTheme } from "../styles/theme";
import { ThemeColor } from "../components/themeColor";
import { useThemeBkm } from "../store";

function MyApp({ Component, pageProps }) {
  const { themebkm } = useThemeBkm();
  const [th, setth] = React.useState(themebkm);
  const { toggleColorMode } = useColorMode();

  console.log("app ==>", themebkm.theme);

  React.useEffect(() => {
    if (themebkm.theme === "orangeTheme") {
      setth(orangeTheme);
    }
    if (themebkm.theme === "purpleTheme") {
      setth(purpleTheme);
    }
  }, [themebkm]);

  return (
    <>
      <ThemeColor />

      <ChakraProvider theme={th}>
        <ColorModeProvider>
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
