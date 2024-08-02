import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/memory-cards/",
    plugins: [react()],
    css: {
        postcss: "./postcss.config.js",
    },
});
