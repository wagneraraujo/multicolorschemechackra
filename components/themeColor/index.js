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
  const updatetheme = useThemeBkm((state) => state.updateThemeLocal);
  const thb = useThemeBkm((state) => state.themebkmuser);
  console.log("update theme name", thb);
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

      <Button onClick={updatetheme} theme="purpleTheme" mt={6}>
        roxo
      </Button>
    </Flex>
  );
};
