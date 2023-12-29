/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  // Base config
  extends: ["eslint:recommended"],

  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
    },

    // Node
    {
      files: [".eslintrc.js"],
      env: {
        node: true,
      },
    },

    // eslint-import-resolver-typescript
    {
      "plugins": ["import"],
      "rules": {
        // turn on errors for missing imports
        "import/no-unresolved": "error"
      },
      "settings": {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
          "typescript": {
            "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
    
            // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
    
            // use <root>/path/to/folder/tsconfig.json
            "project": "path/to/folder",
    
            // Multiple tsconfigs (Useful for monorepos)
    
            // use a glob pattern
            "project": "packages/*/tsconfig.json",
    
            // use an array
            "project": [
              "packages/module-a/tsconfig.json",
              "packages/module-b/tsconfig.json"
            ],
    
            // use an array of glob patterns
            "project": [
              "packages/*/tsconfig.json",
              "other-packages/*/tsconfig.json"
            ]
          }
        }
      }
    }
  ],
};
