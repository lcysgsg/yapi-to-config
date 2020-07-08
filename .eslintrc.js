module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "standard",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-unused-vars": "warn",
    quotes: ["error", "double"],
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "never",
      exports: "never",
      functions: "never",
    }],
  },
}
