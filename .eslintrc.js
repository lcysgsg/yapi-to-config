module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "no-unused-vars": [
      "error",
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: ".*", args: "after-used", argsIgnorePattern: "^_" },
    ],
    quotes: ["error", "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowDestructuring": true, // Allow `const { props, state } = this`; false by default
        "allowedNames": ["self"], // Allow `const self = this`; `[]` by default
      },
    ],
  },
  overrides: [
    {
      // js 文件会被 lint 提示
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
}
