import { create } from "zustand";
type TextStore = {
  text: string;
  setText: (newText: string) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
};
export const useTextStore = create<TextStore>((set) => ({
  text: "",
  setText: (newText: string) => set({ text: newText }),
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
