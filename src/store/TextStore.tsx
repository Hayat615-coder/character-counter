import { create } from "zustand";
type TextStore = {
  text: string;
  setText: (newText: string) => void;
  excludeSpaces: boolean;
  setExcludeSpaces: (exclude: boolean) => void;
  characterLimitEnabled: boolean;
  setCharacterLimitEnabled: (enabled: boolean) => void;
  characterLimit: number;
  setCharacterLimit: (limit: number) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
};
export const useTextStore = create<TextStore>((set) => ({
  text: "",
  setText: (newText: string) => set({ text: newText }),
  excludeSpaces: false,
  setExcludeSpaces: (excludeSpaces) => set({ excludeSpaces }),
  characterLimitEnabled: false,
  setCharacterLimitEnabled: (characterLimitEnabled) =>
    set({ characterLimitEnabled }),
  characterLimit: 280,
  setCharacterLimit: (characterLimit) => set({ characterLimit }),
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
