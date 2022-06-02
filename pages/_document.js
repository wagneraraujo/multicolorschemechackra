// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { purpleTheme, orangeTheme } from "../styles/theme";
import { ThemeColor } from "../components/themeColor";
import * as React from "react";
import { useThemeSelect } from "../components/themeColor";
import { useThemeBkm } from "../store";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <ColorModeScript
          initialColorMode={orangeTheme.config.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
