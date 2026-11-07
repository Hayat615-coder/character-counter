import { useTextStore } from "../store/TextStore";
const TextArea = () => {
  const text = useTextStore((state) => state.text);
  const setText = useTextStore((state) => state.setText);
  console.log(text);
  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
        Analyze your text in real-time
      </h1>

      <label htmlFor="text-input" className="sr-only">
        Text to analyze
      </label>
      <textarea
        id="text-input"
        rows={6}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Start typing here... (or paste your text)"
        className="block w-full resize-y rounded-lg border border-gray-600 bg-gray-900 p-4 text-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex flex-wrap justify-between gap-x-6">
          <label
            htmlFor="exclude-spaces"
            className="flex items-center gap-2 text-gray-300"
          >
            <input
              type="checkbox"
              id="exclude-spaces"
              name="excludeSpaces"
              className="size-4 accent-purple-400"
            />
            Exclude spaces
          </label>

          <label
            htmlFor="character-limit"
            className="flex items-center gap-2 text-gray-300"
          >
            <input
              type="checkbox"
              id="character-limit"
              name="setCharacterLimit"
              className="size-4 accent-purple-400"
            />
            Set character limit
          </label>
        </div>
        <div>
          <p className="text-gray-400">
            Approx read time: <span>0</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
