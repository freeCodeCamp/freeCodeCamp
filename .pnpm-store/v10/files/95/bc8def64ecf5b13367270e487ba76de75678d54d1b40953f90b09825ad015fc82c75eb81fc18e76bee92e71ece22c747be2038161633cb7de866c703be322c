'use strict';

const fromEntries = require('object.fromentries');
const entries = require('object.entries');

const allRules = require('./lib/rules');

function filterRules(rules, predicate) {
  return fromEntries(entries(rules).filter((entry) => predicate(entry[1])));
}

/**
 * @param {object} rules - rules object mapping rule name to rule module
 * @returns {Record<string, SEVERITY_ERROR | 'error'>}
 */
function configureAsError(rules) {
  return fromEntries(Object.keys(rules).map((key) => [`react/${key}`, 2]));
}

/** @type {Partial<typeof allRules>} */
const activeRules = filterRules(allRules, (rule) => !rule.meta.deprecated);
/** @type {Record<keyof typeof activeRules, 2 | 'error'>} */
const activeRulesConfig = configureAsError(activeRules);

/** @type {Partial<typeof allRules>} */
const deprecatedRules = filterRules(allRules, (rule) => rule.meta.deprecated);

/** @type {['react']} */
// for legacy config system
const plugins = [
  'react',
];

// TODO: with TS 4.5+, inline this
const SEVERITY_ERROR = /** @type {2} */ (2);
const SEVERITY_OFF = /** @type {0} */ (0);

const configs = {
  recommended: {
    plugins,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'react/display-name': SEVERITY_ERROR,
      'react/jsx-key': SEVERITY_ERROR,
      'react/jsx-no-comment-textnodes': SEVERITY_ERROR,
      'react/jsx-no-duplicate-props': SEVERITY_ERROR,
      'react/jsx-no-target-blank': SEVERITY_ERROR,
      'react/jsx-no-undef': SEVERITY_ERROR,
      'react/jsx-uses-react': SEVERITY_ERROR,
      'react/jsx-uses-vars': SEVERITY_ERROR,
      'react/no-children-prop': SEVERITY_ERROR,
      'react/no-danger-with-children': SEVERITY_ERROR,
      'react/no-deprecated': SEVERITY_ERROR,
      'react/no-direct-mutation-state': SEVERITY_ERROR,
      'react/no-find-dom-node': SEVERITY_ERROR,
      'react/no-is-mounted': SEVERITY_ERROR,
      'react/no-render-return-value': SEVERITY_ERROR,
      'react/no-string-refs': SEVERITY_ERROR,
      'react/no-unescaped-entities': SEVERITY_ERROR,
      'react/no-unknown-property': SEVERITY_ERROR,
      'react/no-unsafe': SEVERITY_OFF,
      'react/prop-types': SEVERITY_ERROR,
      'react/react-in-jsx-scope': SEVERITY_ERROR,
      'react/require-render-return': SEVERITY_ERROR,
    },
  },
  all: {
    plugins,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: activeRulesConfig,
  },
  'jsx-runtime': {
    plugins,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null, // for @typescript/eslint-parser
    },
    rules: {
      'react/react-in-jsx-scope': SEVERITY_OFF,
      'react/jsx-uses-react': SEVERITY_OFF,
    },
  },
  flat: /** @type {Record<string, ReactFlatConfig>} */ ({
    __proto__: null,
  }),
};

/** @typedef {{ plugins: { react: typeof plugin }, rules: import('eslint').Linter.RulesRecord, languageOptions: { parserOptions: import('eslint').Linter.ParserOptions } }} ReactFlatConfig */

/** @type {{ deprecatedRules: typeof deprecatedRules, rules: typeof allRules, configs: typeof configs & { flat: Record<string, ReactFlatConfig> }}} */
const plugin = {
  deprecatedRules,
  rules: allRules,
  configs,
};

Object.assign(configs.flat, {
  recommended: {
    plugins: { react: plugin },
    rules: configs.recommended.rules,
    languageOptions: { parserOptions: configs.recommended.parserOptions },
  },
  all: {
    plugins: { react: plugin },
    rules: configs.all.rules,
    languageOptions: { parserOptions: configs.all.parserOptions },
  },
  'jsx-runtime': {
    plugins: { react: plugin },
    rules: configs['jsx-runtime'].rules,
    languageOptions: { parserOptions: configs['jsx-runtime'].parserOptions },
  },
});

module.exports = plugin;
