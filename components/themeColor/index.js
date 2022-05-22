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

export const ThemeColor = ({ colortheme }) => {
  const [value, setValue] = React.useState("purpleTheme");
  const { toggleColorMode } = useColorMode();
  const [themecolor, setThemecolor] = React.useState(colortheme);

  const SelectColorScheme = (value) => {
    window.localStorage.setItem("themecolorbkm", value);
    setThemecolor(value);
  };

  React.useEffect(() => {
    const valueTheme = window.localStorage.getItem("themecolorbkm");
    const the = valueTheme;
    console.log("th", the);
  }, [colortheme, themecolor]);

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      {/* Remove the variant to see the other custom styling */}
      <Button onClick={toggleColorMode} mt={6}>
        Modo dark ou light
      </Button>

      <RadioGroup onChange={SelectColorScheme} value={themecolor}>
        <Stack direction="row">
          <Radio value="orangeTheme">Tema Laranjado</Radio>
          <Radio value="purpleTheme">Tema Roxo</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};
