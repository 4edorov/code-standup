## Code Standup #1

> 31.03.2025

### Issue:

- test, find, and exploit vulnerabilities on apps;

### Resources:

- [PortSwigger Burp Scanner](https://portswigger.net/burp/vulnerability-scanner);
- [Zed Attack Proxy](https://www.zaproxy.org/);

## Code Standup #2

> 25.06.2025

### Issue:

- start using flat config for eslint: requires some amount of time to update a current Next.js lint config to the new one;

### Code examples:

```
// eslint.config.ts

import eslint from "@eslint/js";
import eslintPluginNext from "@next/eslint-plugin-next";
import configPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@next/next": eslintPluginNext,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "simple-import-sort": simpleImportSort,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs["core-web-vitals"].rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ...configPrettier,
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/.vscode/**",
      "**/*.json",
    ],
  }
);
```
