import { useTextStore } from "../store/TextStore";

const LetterDensityComponent = () => {
  const text = useTextStore((state) => state.text);
  const letters = Array.from(text.normalize("NFD").toLocaleLowerCase()).filter(
    (char) => /[a-z]/.test(char),
  );
  const totalLetters = letters.length;
  const counts = new Map<string, number>();

  for (const letter of letters) {
    counts.set(letter, (counts.get(letter) ?? 0) + 1);
  }

  const density = [...counts.entries()].sort(
    ([letterA, countA], [letterB, countB]) =>
      countB - countA || letterA.localeCompare(letterB),
  );
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-6">
      <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        Letter Density
      </h2>

      {totalLetters === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">
          No characters found. Start typing to see letter density.
        </p>
      ) : (
        <ul className="space-y-3">
          {density.map(([letter, count]) => {
            const percentage = (count / totalLetters) * 100;

            return (
              <li
                key={letter}
                className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-3 text-zinc-700 dark:text-zinc-200"
              >
                <span>{letter.toUpperCase()}</span>

                <div
                  className="h-3 overflow-hidden rounded-full bg-zinc-200 dark:bg-[#343541]"
                  role="progressbar"
                  aria-label={`${letter} frequency`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(percentage)}
                >
                  <div
                    className="h-full rounded-full bg-purple-400"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {count} ({percentage.toFixed(1)}%)
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default LetterDensityComponent;
