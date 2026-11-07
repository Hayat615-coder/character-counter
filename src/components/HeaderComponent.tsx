import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const HeaderComponent = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4">
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
          <path d="M16 5a11 11 0 0 0 0 22V5Z" fill="#1e1e27" />
        </svg>
        <h1 className="text-white text-2xl">Character Counter</h1>
      </div>
      <button
        type="button"
        aria-label="Toggle color theme"
        title="Toggle color theme"
        className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg"
      >
        <FontAwesomeIcon icon={faSun} aria-hidden="true" />
      </button>
    </header>
  );
};

export default HeaderComponent;
