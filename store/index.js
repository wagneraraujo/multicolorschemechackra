import create from "zustand";
import { purpleTheme, orangeTheme } from "../styles/theme";

export const useThemeBkm = create((set) => ({
  themebkmuser: orangeTheme,
  updateThemeLocal: () => set((state) => ({ themebkmuser: state.state })),
}));
