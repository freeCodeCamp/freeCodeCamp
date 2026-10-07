const rules = require("./rules");
const { name, version } = require("../package.json");
const { allRules } = require("./configs");

/** @import {ESLint} from "eslint" */

/** @type {ESLint.Plugin} */
const plugin = {
  meta: {
    name,
    version,
  },
  // @ts-ignore
  rules,
  configs: {
    recommended: {
      rules: allRules,
      plugins: {
        /** @returns {ESLint.Plugin} */
        get ["@html-eslint/react"]() {
          return require(".");
        },
      },
    },
    all: {
      rules: allRules,
      plugins: {
        /** @returns {ESLint.Plugin} */
        get ["@html-eslint/react"]() {
          return require(".");
        },
      },
    },
  },
};

module.exports = plugin;
