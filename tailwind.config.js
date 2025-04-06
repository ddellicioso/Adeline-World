/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#B8B0D5", // Mute Purple //
          2: "#7298CE", // Dark Blue //
          3: "#F6CFEA", // Pink //
          4: "#DEEBFB", // Light Blue //
          5: "#EFEDFB", // Light Purple //
          6: "#FFFFFF" // White //
        },
        n: {
          1: "rgba(255, 255, 255, 0.5)", // Semi-translucent white
          2: "rgba(255, 255, 255, 0.1)", //Translucent white
          3: "rgba(255, 255, 255, 0.2)", // Translucent white - more solid
          4: "rgba(75, 75, 75, 0.2)", // Translucent dark grey
        },
      },

      backgroundImage: {
        "gradient-1": "radial-gradient(circle, #B8B0D5, #7298CE )"
      },

      backgroundColor: {
        "constant": "#B8B0D5",
      },

      animation: {
        "gradient": "animateGradient 5s ease-in-out infinite alternate",
      },

      keyframes: {
        animateGradient: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "25% 50%" },
          "100%": { backgroundPosition: "50% 25%" },
        },
      },

      boxShadow: {
        inner:
          "rgb(0, 28, 177, .1) 2px 2px 5px 0px inset, rgb(92, 207, 223, .1) -2px -2px 5px 0px inset;", //Iridescent inner shadow
        dropShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
      },

      fontFamily: {
        instrumentSerifItalic: "var(--font-instrumentSerifItalic)",
        inter: "var(--font-inter)",
        interItalic: "var(--font-interItalic)",
        leagueGothic: "var(--font-leagueGothic)",
        louiseGeorgeCafe: "var(--font-louiseGeorgeCafe)",
      },

      textAlign: {
        lastJustify: "text-align-last: justify;",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".h1-1": {
          "@apply font-instrumentSerifItalic text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h1-2": {
          "@apply font-leagueGothic uppercase text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply font-instrumentSerifItalic text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply font-instrumentSerifItalic text-[1rem] leading-normal md:text-[1.5rem]":
            {},
        },
        ".h4": {
          "@apply font-leagueGothic text-[1rem] leading-normal md:text-[1.5rem]":
            {},
        },
        ".h5": {
          "@apply font-louiseGeorgeCafe text-[3rem] leading-[4rem] md:text-[3rem]":
          {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
      });
    }),
  ],
};
