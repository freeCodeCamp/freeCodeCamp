"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

const toThrowMatchers = ['toThrow', 'toThrowError', 'toThrowErrorMatchingSnapshot', 'toThrowErrorMatchingInlineSnapshot'];

const isJestExpectToThrowCall = node => {
  if (!(0, _utils.isExpectCall)(node)) {
    return false;
  }

  const {
    matcher
  } = (0, _utils.parseExpectCall)(node);

  if (!matcher) {
    return false;
  }

  return !toThrowMatchers.includes(matcher.name);
};

const baseRule = (() => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const TSESLintPlugin = require('@typescript-eslint/eslint-plugin');

    return TSESLintPlugin.rules['unbound-method'];
  } catch (e) {
    const error = e;

    if (error.code === 'MODULE_NOT_FOUND') {
      return null;
    }

    throw error;
  }
})();

const tryCreateBaseRule = context => {
  try {
    return baseRule === null || baseRule === void 0 ? void 0 : baseRule.create(context);
  } catch {
    return null;
  }
};

const DEFAULT_MESSAGE = 'This rule requires `@typescript-eslint/eslint-plugin`';

var _default = (0, _utils.createRule)({
  defaultOptions: [{
    ignoreStatic: false
  }],
  ...baseRule,
  name: __filename,
  meta: {
    messages: {
      unbound: DEFAULT_MESSAGE,
      unboundWithoutThisAnnotation: DEFAULT_MESSAGE
    },
    schema: [],
    type: 'problem',
    ...(baseRule === null || baseRule === void 0 ? void 0 : baseRule.meta),
    docs: {
      category: 'Best Practices',
      description: 'Enforces unbound methods are called with their expected scope',
      requiresTypeChecking: true,
      ...(baseRule === null || baseRule === void 0 ? void 0 : baseRule.meta.docs),
      recommended: false
    }
  },

  create(context) {
    const baseSelectors = tryCreateBaseRule(context);

    if (!baseSelectors) {
      return {};
    }

    let inExpectToThrowCall = false;
    return { ...baseSelectors,

      CallExpression(node) {
        inExpectToThrowCall = isJestExpectToThrowCall(node);
      },

      'CallExpression:exit'(node) {
        if (inExpectToThrowCall && isJestExpectToThrowCall(node)) {
          inExpectToThrowCall = false;
        }
      },

      MemberExpression(node) {
        var _baseSelectors$Member;

        if (inExpectToThrowCall) {
          return;
        }

        (_baseSelectors$Member = baseSelectors.MemberExpression) === null || _baseSelectors$Member === void 0 ? void 0 : _baseSelectors$Member.call(baseSelectors, node);
      }

    };
  }

});

exports.default = _default;