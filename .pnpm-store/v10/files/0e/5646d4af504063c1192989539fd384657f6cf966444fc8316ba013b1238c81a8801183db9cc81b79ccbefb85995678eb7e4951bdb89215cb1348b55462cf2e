"use strict";
module.exports = {
  // This isn't really meant for use in browsers, but some dependents such as nookie are.
  // So, stick with ES5 (at least for the CJS version) to be nice. See #44
  parserOptions: { ecmaVersion: 5 },
  env: {
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prefer-const": "error",
    strict: "error",
    eqeqeq: "error",
  },
};
