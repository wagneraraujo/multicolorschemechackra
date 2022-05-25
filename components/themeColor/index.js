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

export const ThemeColor = ({ colortheme }) => {
  const { toggleColorMode } = useColorMode();

  const { themebkm, updatetheme } = useThemeBkm();
  const upTheme = (e) => {
    const theme = e.target.value;
    console.log(theme);

    updatetheme({ theme });
  };
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      {/* Remove the variant to see the other custom styling */}
      <Button onClick={toggleColorMode} mt={6}>
        Modo dark ou light
      </Button>
      {/* 
      <RadioGroup onChange={updatetheme} value={updatetheme}>
        <Stack direction="row">
          <Radio value="orangeTheme">Tema Laranjado</Radio>
          <Radio value="purpleTheme">Tema Roxo</Radio>
        </Stack>
      </RadioGroup> */}

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
