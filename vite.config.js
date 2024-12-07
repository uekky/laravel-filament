import { defineConfig } from 'vite';
import laravel, { refreshPaths } from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: [...refreshPaths, "app/**/*"],
        }),
        react(),
    ],
});
