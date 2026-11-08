import { useTextStore } from "../store/TextStore";

const TextArea = () => {
  const text = useTextStore((state) => state.text);
  const setText = useTextStore((state) => state.setText);
  const excludeSpaces = useTextStore((state) => state.excludeSpaces);
  const setExcludeSpaces = useTextStore((state) => state.setExcludeSpaces);
  const characterLimitEnabled = useTextStore(
    (state) => state.characterLimitEnabled,
  );
  const setCharacterLimitEnabled = useTextStore(
    (state) => state.setCharacterLimitEnabled,
  );
  const characterLimit = useTextStore((state) => state.characterLimit);
  const setCharacterLimit = useTextStore((state) => state.setCharacterLimit);
  const characterCount = Array.from(text).filter(
    (character) => !excludeSpaces || !/\s/u.test(character),
  ).length;
  const limitExceeded =
    characterLimitEnabled && characterCount > characterLimit;
  const wordCount = text.trim() ? text.trim().split(/\s+/u).length : 0;
  const readingMinutes = Math.ceil(wordCount / 200);

  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-zinc-900 md:text-5xl dark:text-zinc-100">
        Analyze your text in real-time
      </h1>

      <label htmlFor="text-input" className="sr-only">
        Text to analyze
      </label>
      <textarea
        id="text-input"
        rows={6}
        value={text}
        onChange={(event) => setText(event.target.value)}
        aria-describedby={characterLimitEnabled ? "character-limit-status" : undefined}
        placeholder="Start typing here... (or paste your text)"
        className={`block w-full resize-y rounded-lg border bg-zinc-100 p-4 text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-[#24252f] dark:text-zinc-100 dark:placeholder:text-zinc-400 ${
          limitExceeded
            ? "border-red-500 dark:border-red-400"
            : "border-zinc-300 dark:border-[#343541]"
        }`}
      />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex flex-wrap justify-between gap-x-6">
          <label
            htmlFor="exclude-spaces"
            className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200"
          >
            <input
              type="checkbox"
              id="exclude-spaces"
              name="excludeSpaces"
              checked={excludeSpaces}
              onChange={(event) => setExcludeSpaces(event.target.checked)}
              className="size-4 accent-purple-400"
            />
            Exclude spaces
          </label>

          <label
            htmlFor="character-limit"
            className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200"
          >
            <input
              type="checkbox"
              id="character-limit"
              name="setCharacterLimit"
              checked={characterLimitEnabled}
              onChange={(event) =>
                setCharacterLimitEnabled(event.target.checked)
              }
              className="size-4 accent-purple-400"
            />
            Set character limit
          </label>
          {characterLimitEnabled && (
            <label className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
              <span className="sr-only">Character limit</span>
              <input
                type="number"
                min={1}
                value={characterLimit}
                onChange={(event) => {
                  const nextLimit = Number(event.target.value);
                  if (Number.isInteger(nextLimit) && nextLimit > 0) {
                    setCharacterLimit(nextLimit);
                  }
                }}
                className="w-20 rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:border-[#343541] dark:bg-[#24252f] dark:text-zinc-100"
              />
            </label>
          )}
        </div>
        <div>
          <p className="text-zinc-500 dark:text-zinc-400">
            Approx. reading time:{" "}
            {readingMinutes === 0
              ? "0 minutes"
              : `${readingMinutes} ${readingMinutes === 1 ? "minute" : "minutes"}`}
          </p>
        </div>
      </div>
      {characterLimitEnabled && (
        <p
          id="character-limit-status"
          aria-live="polite"
          className={`mt-3 text-sm ${
            limitExceeded
              ? "text-red-600 dark:text-red-400"
              : "text-zinc-500 dark:text-zinc-400"
          }`}
        >
          {limitExceeded
            ? `${characterCount - characterLimit} characters over the limit`
            : `${characterLimit - characterCount} characters remaining`}
        </p>
      )}
    </section>
  );
};

export default TextArea;
