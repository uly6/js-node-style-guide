module.exports = {
  extends: [
    "airbnb-base",
    "plugin:node/recommended-module",
    "plugin:promise/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["import"],
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": 0,
  },
};
