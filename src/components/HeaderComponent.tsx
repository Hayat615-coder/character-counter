import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTextStore } from "../store/TextStore";

const HeaderComponent = () => {
  const theme = useTextStore((state) => state.theme);
  const toggleTheme = useTextStore((state) => state.toggleTheme);

  return (
    <header className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row gap-2">
        <svg
          aria-hidden="true"
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M3 2h13v28H3z" fill="#c084fc" />
          <path d="M16 5a11 11 0 1 1 0 22V5Z" fill="#c084fc" />
          <path
            d="M16 5a11 11 0 0 0 0 22V5Z"
            className="fill-white dark:fill-[#12131a]"
          />
        </svg>
        <h1 className="text-2xl text-zinc-900 dark:text-zinc-100">
          Character Counter
        </h1>
      </div>
      <button
        type="button"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        aria-pressed={theme === "light"}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        onClick={toggleTheme}
        className="rounded-lg bg-zinc-100 p-3 text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-[#24252f] dark:text-zinc-100 dark:hover:bg-[#343541]"
      >
        <FontAwesomeIcon
          icon={theme === "dark" ? faSun : faMoon}
          aria-hidden="true"
        />
      </button>
    </header>
  );
};

export default HeaderComponent;
