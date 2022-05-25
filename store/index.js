import create from "zustand";
import { purpleTheme, orangeTheme } from "../styles/theme";
import { persist } from "zustand/middleware";

export const useThemeBkm = create(
  persist(
    (set, get) => ({
      themebkm: "purpleTheme",

      updatetheme: (themes) => set((state) => ({ themebkm: themes })),
    }),
    {
      name: "themebkmlocal",
    }
  )
);
