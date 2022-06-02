import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
// 2. Call `extendTheme` and pass your custom values

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const orangeTheme = extendTheme({
  config,
  colors: {
    primary: "#F55D24",
    secondary: "#F76E3C",

    purple: {
      500: "#BE58EE",
      100: "rgba(190, 88, 238, 0.12)",
    },
    darkTheme: {
      500: "#1F1F1F",
      800: "#070707",
    },
    lightTheme: {
      400: "",
      500: "",
    },
    gray: {
      50: "#f7fafc",
      200: "#2E2E2E",
      700: "#141414",
      800: "#070707",
      900: "#000000",
    },
    bgBody: {
      light: "#F7F6F9",
      dark: "#111111",
    },

    purpleTheme: {
      primary: "#BE58EE",
    },
    orangeTheme: {
      primary: "#F55D24",
    },
  },
});

const purpleTheme = extendTheme({
  colors: {
    primary: "#BE58EE",
    secondary: "rgba(190, 88, 238, 0.12)",

    darkTheme: {
      500: "#1F1F1F",
      800: "#070707",
    },
    lightTheme: {
      400: "",
      500: "",
    },
    gray: {
      50: "#f7fafc",
      200: "#2E2E2E",
      700: "#141414",
      800: "#070707",
      900: "#000000",
    },
    bgBody: {
      light: "#F7F6F9",
      dark: "#111111",
    },
  },
});

export { orangeTheme, purpleTheme };
