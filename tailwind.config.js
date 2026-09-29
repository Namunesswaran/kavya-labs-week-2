/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kavya-bg": "#1C1A22",
        "kavya-panel": "#24212B",
        "kavya-fg": "#F3EFE7",
        "kavya-muted": "#A79FAE",
        "kavya-accent": "#E8A33D",
        "kavya-violet": "#6E56CF",
        "kavya-line": "rgba(243,239,231,0.14)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
