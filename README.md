# Character Counter

### A simple, real-time text analyzer.

Paste or type text and instantly see character, word, and sentence counts, reading-time estimates, and letter frequency. Switch themes and adjust the character-count options as you write.

**Built with React, TypeScript, Tailwind CSS, and Zustand.**

---

## On this page

- [Features](#features)
- [Get started](#get-started)
- [Using the app](#using-the-app)
- [How the counts work](#how-the-counts-work)
- [Project structure](#project-structure)
- [Available commands](#available-commands)

## Features

- **Live analysis:** statistics update as you type or paste.
- **Character, word, and sentence counts:** displayed in colorful cards.
- **Exclude spaces:** omit whitespace from the character total.
- **Character limit:** choose a limit and see how many characters remain, or how far you have gone over.
- **Reading-time estimate:** based on an average reading speed of 200 words per minute.
- **Letter density:** view the frequency and percentage of each letter.
- **Light and dark themes:** switch themes with the header button.
- **Responsive layout:** adapts to smaller screens.

## Get started

### Requirements

- Node.js
- pnpm

### Install and run

From the `vite-project` directory:

```bash
pnpm install
pnpm run dev
```

Open the local URL printed by Vite in your terminal.

## Using the app

1. Type or paste text into the large text box.
2. Read the updated counts and letter-density results below.
3. Select **Exclude spaces** to leave spaces, tabs, and line breaks out of the character count.
4. Select **Set character limit** to show the limit field. Set a positive number to see remaining or excess characters.
5. Use the sun/moon button in the header to switch between dark and light themes.

The character limit is a visual indicator; it does not prevent typing.

## How the counts work

- **Characters:** counts Unicode code points. When **Exclude spaces** is selected, all whitespace characters are omitted.
- **Words:** counts non-empty groups separated by whitespace.
- **Sentences:** counts text segments ending in `.`, `!`, or `?`, including a final segment without punctuation.
- **Reading time:** rounds up at 200 words per minute; empty text shows zero minutes.
- **Letter density:** ignores case and counts English letters (`A`–`Z`); spaces, punctuation, and numbers are ignored. Percentages are relative to the total counted letters.

## Project structure

```text
src/
├── assets/                 # Light and dark background images
├── components/
│   ├── CountsCard.tsx      # Character, word, and sentence cards
│   ├── HeaderComponent.tsx # App title and theme toggle
│   ├── LetterDensityComponent.tsx
│   └── TextArea.tsx        # Text input and analysis options
├── store/
│   └── TextStore.tsx       # Shared text, options, and theme state
├── App.tsx
└── index.css
```

## Available commands

| Command | Description |
| --- | --- |
| `pnpm run dev` | Start the local development server |
| `pnpm run build` | Type-check and create a production build |
| `pnpm run preview` | Preview the production build locally |
| `pnpm run lint` | Run ESLint |

---

<p align="center">
  Made for clearer writing, one character at a time.
</p>
