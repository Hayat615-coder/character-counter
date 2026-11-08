import CountsCard from "./components/CountsCard";
import HeaderComponent from "./components/HeaderComponent";
import LetterDensityComponent from "./components/LetterDensityComponent";
import TextArea from "./components/TextArea";
import { useTextStore } from "./store/TextStore";
import darkBackground from "./assets/bg-dark-theme.png";
import lightBackground from "./assets/bg-light-theme.png";
import "./index.css";

function App() {
  const theme = useTextStore((state) => state.theme);

  return (
    <main
      className="min-h-screen bg-cover bg-top bg-fixed font-sans text-zinc-900 transition-colors duration-200 dark:bg-[#12131a] dark:text-zinc-100"
      data-theme={theme}
      style={{
        backgroundImage: `url(${theme === "dark" ? darkBackground : lightBackground})`,
      }}
    >
      <div className="min-h-screen md:mx-12">
        <HeaderComponent />
        <TextArea />
        <CountsCard />
        <LetterDensityComponent />
      </div>
    </main>
  );
}

export default App;
