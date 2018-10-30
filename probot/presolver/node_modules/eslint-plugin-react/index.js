'use strict';

var has = require('has');

var allRules = {
  'jsx-uses-react': require('./lib/rules/jsx-uses-react'),
  'no-multi-comp': require('./lib/rules/no-multi-comp'),
  'prop-types': require('./lib/rules/prop-types'),
  'require-default-props': require('./lib/rules/require-default-props'),
  'display-name': require('./lib/rules/display-name'),
  'jsx-wrap-multilines': require('./lib/rules/jsx-wrap-multilines'),
  'self-closing-comp': require('./lib/rules/self-closing-comp'),
  'jsx-no-comment-textnodes': require('./lib/rules/jsx-no-comment-textnodes'),
  'no-array-index-key': require('./lib/rules/no-array-index-key'),
  'no-danger': require('./lib/rules/no-danger'),
  'no-set-state': require('./lib/rules/no-set-state'),
  'no-is-mounted': require('./lib/rules/no-is-mounted'),
  'no-deprecated': require('./lib/rules/no-deprecated'),
  'no-did-mount-set-state': require('./lib/rules/no-did-mount-set-state'),
  'no-did-update-set-state': require('./lib/rules/no-did-update-set-state'),
  'no-render-return-value': require('./lib/rules/no-render-return-value'),
  'no-unescaped-entities': require('./lib/rules/no-unescaped-entities'),
  'react-in-jsx-scope': require('./lib/rules/react-in-jsx-scope'),
  'jsx-uses-vars': require('./lib/rules/jsx-uses-vars'),
  'jsx-handler-names': require('./lib/rules/jsx-handler-names'),
  'jsx-pascal-case': require('./lib/rules/jsx-pascal-case'),
  'jsx-no-bind': require('./lib/rules/jsx-no-bind'),
  'jsx-no-undef': require('./lib/rules/jsx-no-undef'),
  'no-unknown-property': require('./lib/rules/no-unknown-property'),
  'jsx-curly-spacing': require('./lib/rules/jsx-curly-spacing'),
  'jsx-equals-spacing': require('./lib/rules/jsx-equals-spacing'),
  'jsx-sort-props': require('./lib/rules/jsx-sort-props'),
  'sort-prop-types': require('./lib/rules/sort-prop-types'),
  'jsx-boolean-value': require('./lib/rules/jsx-boolean-value'),
  'sort-comp': require('./lib/rules/sort-comp'),
  'jsx-no-duplicate-props': require('./lib/rules/jsx-no-duplicate-props'),
  'jsx-max-props-per-line': require('./lib/rules/jsx-max-props-per-line'),
  'jsx-no-literals': require('./lib/rules/jsx-no-literals'),
  'jsx-indent-props': require('./lib/rules/jsx-indent-props'),
  'jsx-indent': require('./lib/rules/jsx-indent'),
  'jsx-closing-bracket-location': require('./lib/rules/jsx-closing-bracket-location'),
  'jsx-space-before-closing': require('./lib/rules/jsx-space-before-closing'),
  'no-direct-mutation-state': require('./lib/rules/no-direct-mutation-state'),
  'forbid-component-props': require('./lib/rules/forbid-component-props'),
  'forbid-elements': require('./lib/rules/forbid-elements'),
  'forbid-prop-types': require('./lib/rules/forbid-prop-types'),
  'forbid-foreign-prop-types': require('./lib/rules/forbid-foreign-prop-types'),
  'prefer-es6-class': require('./lib/rules/prefer-es6-class'),
  'jsx-key': require('./lib/rules/jsx-key'),
  'no-string-refs': require('./lib/rules/no-string-refs'),
  'prefer-stateless-function': require('./lib/rules/prefer-stateless-function'),
  'require-render-return': require('./lib/rules/require-render-return'),
  'jsx-first-prop-new-line': require('./lib/rules/jsx-first-prop-new-line'),
  'jsx-no-target-blank': require('./lib/rules/jsx-no-target-blank'),
  'jsx-filename-extension': require('./lib/rules/jsx-filename-extension'),
  'require-optimization': require('./lib/rules/require-optimization'),
  'no-find-dom-node': require('./lib/rules/no-find-dom-node'),
  'no-danger-with-children': require('./lib/rules/no-danger-with-children'),
  'style-prop-object': require('./lib/rules/style-prop-object'),
  'no-unused-prop-types': require('./lib/rules/no-unused-prop-types'),
  'no-children-prop': require('./lib/rules/no-children-prop'),
  'void-dom-elements-no-children': require('./lib/rules/void-dom-elements-no-children'),
  'no-comment-textnodes': require('./lib/rules/no-comment-textnodes'),
  'require-extension': require('./lib/rules/require-extension'),
  'wrap-multilines': require('./lib/rules/wrap-multilines'),
  'jsx-tag-spacing': require('./lib/rules/jsx-tag-spacing')
};

function filterRules(rules, predicate) {
  var result = {};
  for (var key in rules) {
    if (has(rules, key) && predicate(rules[key])) {
      result[key] = rules[key];
    }
  }
  return result;
}

function configureAsError(rules) {
  var result = {};
  for (var key in rules) {
    if (!has(rules, key)) {
      continue;
    }
    result['react/' + key] = 2;
  }
  return result;
}

var activeRules = filterRules(allRules, function(rule) {
  return !rule.meta.deprecated;
});
var activeRulesConfig = configureAsError(activeRules);

var deprecatedRules = filterRules(allRules, function(rule) {
  return rule.meta.deprecated;
});

module.exports = {
  deprecatedRules: deprecatedRules,
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'react'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'react/display-name': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/no-deprecated': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-unknown-property': 2,
        'react/no-render-return-value': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/require-render-return': 2
      }
    },
    all: {
      plugins: [
        'react'
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: activeRulesConfig
    }
  }
};
