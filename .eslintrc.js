module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "jest"
  ],
  rules: {
    indent: [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "single"
    ],
    semi: [
      "error",
      "always"
    ],
    "prettier/prettier": "error"
  }
};
