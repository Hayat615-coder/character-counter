import { useTextStore } from "../store/TextStore";

const CountsCard = () => {
  const text = useTextStore((state) => state.text);
  const excludeSpaces = useTextStore((state) => state.excludeSpaces);
  const characterCount = Array.from(text).filter(
    (character) => !excludeSpaces || !/\s/u.test(character),
  ).length;
  const words = text.trim() ? text.trim().split(/\s+/u).length : 0;
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/gu)?.length ?? 0;
  const cards = [
    {
      label: "Total Characters",
      count: characterCount,
      background: "bg-purple-400",
      pattern: (
        <g fill="white">
          <circle cx="18" cy="18" r="11" />
          <circle cx="50" cy="18" r="11" />
          <circle cx="82" cy="18" r="11" />
          <circle cx="18" cy="50" r="11" />
          <circle cx="50" cy="50" r="11" />
          <circle cx="82" cy="50" r="11" />
          <circle cx="18" cy="82" r="11" />
          <circle cx="50" cy="82" r="11" />
          <circle cx="82" cy="82" r="11" />
          <circle cx="18" cy="114" r="11" />
          <circle cx="50" cy="114" r="11" />
          <circle cx="82" cy="114" r="11" />
        </g>
      ),
    },
    {
      label: "Word Count",
      count: words,
      background: "bg-amber-500",
      pattern: (
        <g fill="white">
          <rect x="4" y="4" width="32" height="32" />
          <rect x="44" y="4" width="32" height="32" />
          <rect x="84" y="4" width="32" height="32" />
          <rect x="4" y="44" width="32" height="32" />
          <rect x="44" y="44" width="32" height="32" />
          <rect x="84" y="44" width="32" height="32" />
          <rect x="4" y="84" width="32" height="32" />
          <rect x="44" y="84" width="32" height="32" />
          <rect x="84" y="84" width="32" height="32" />
        </g>
      ),
    },
    {
      label: "Sentence Count",
      count: sentences,
      background: "bg-[#ff8066]",
      pattern: (
        <g fill="none" stroke="white" strokeLinecap="round" strokeWidth="12">
          <path d="M4 28h108M58 4v108M4 92h108" />
        </g>
      ),
    },
  ];

  return (
    <section
      className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Text counts"
    >
      {cards.map((card) => (
        <article
          key={card.label}
          className={`relative isolate min-h-36 overflow-hidden rounded-xl p-5 text-gray-950 ${card.background}`}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-3 h-36 w-28 opacity-25"
            viewBox="0 0 120 120"
          >
            {card.pattern}
          </svg>
          <p className="relative text-5xl font-bold leading-none tracking-tight">
            {String(card.count).padStart(2, "0")}
          </p>
          <h2 className="relative mt-3 text-base font-medium">{card.label}</h2>
        </article>
      ))}
    </section>
  );
};

export default CountsCard;
