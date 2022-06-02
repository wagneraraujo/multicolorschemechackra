import * as React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  useColorMode,
  extendTheme,
  useStyleConfig,
  forwardRef,
  chakra,
  HTMLChakraProps,
  ThemingProps,
  Switch,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useThemeBkm } from "../../store";

export const ThemeColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [corTheme, setCortheme] = React.useState("");

  const { themebkm, updatetheme } = useThemeBkm();
  const colortheme = corTheme;
  const upTheme = (e) => {
    const theme = e.target.value;
    console.log(theme);

    updatetheme({ theme });
  };

  const linkdark = (e) => {
    const modeAtivo = localStorage.getItem("chakra-ui-color-mode");
    const switchlcaldarklight = (color) => {
      localStorage.setItem("chakra-ui-color-mode", color);
    };

    if (modeAtivo == "dark") {
      switchlcaldarklight("light");
    } else {
      switchlcaldarklight("dark");
    }
  };

  const newCOlor = React.useCallback(() => {
    const modeAtivo = localStorage.getItem("chakra-ui-color-mode");

    if (modeAtivo === "light") {
      setCortheme("dark");
      localStorage.setItem("chakra-ui-color-mode", "dark");
      window.location.reload(true);
    }
    if (modeAtivo === "dark") {
      setCortheme("light");
      localStorage.setItem("chakra-ui-color-mode", "light");
      window.location.reload(true);
    }
  }, []);

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Button onClick={newCOlor}>Toggle</Button>

      <Button onClick={upTheme} value={"purpleTheme"} mt={6}>
        roxo
      </Button>
      <Button
        onClick={upTheme}
        colorScheme={"orange"}
        value={"orangeTheme"}
        mt={6}
      >
        Laranja
      </Button>
    </Flex>
  );
};
