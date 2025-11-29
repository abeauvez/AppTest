import js from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
    js.configs.recommended, // équivalent de "eslint:recommended"
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...jestPlugin.environments.globals.globals, // équivalent de "env: { jest: true }"
                process: "readonly", // env: { node: true }
                module: "readonly",
                require: "readonly",
                __dirname: "readonly",
                console: "readonly"
            }
        },
        plugins: {
            jest: jestPlugin
        },
        rules: {
            // Règles Jest recommandées
            ...jestPlugin.configs.recommended.rules
        }
    }
];