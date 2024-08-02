/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                jura: ["Jura"],
            },
            boxShadow: {
                neomorph:
                    "-8px -8px 24px 0px #FFF, 8px 8px 24px 0px rgba(174, 174, 192, 0.40)",
                neomorphclicked:
                    "8px 8px 24px 0px rgba(174, 174, 192, 0.40) inset, -8px -8px 24px 0px #FFF inset",
                neomorphpb:
                    "-2px -2px 6px 0px #FFF, 3px 3px 6px 0px rgba(174, 174, 192, 0.40)",
                custominset:
                    "-2px -2px 2px 0px rgba(255, 255, 255, 0.70) inset, 2px 2px 4px 0px rgba(174, 174, 192, 0.20) inset",
            },
        },
    },
    plugins: [],
};
