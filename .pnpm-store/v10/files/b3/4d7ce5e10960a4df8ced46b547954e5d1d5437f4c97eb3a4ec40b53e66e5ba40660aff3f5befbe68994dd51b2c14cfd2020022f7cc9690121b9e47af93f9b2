"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const isBooleanLiteral = node => node.type === _experimentalUtils.AST_NODE_TYPES.Literal && typeof node.value === 'boolean';

/**
 * Checks if the given `ParsedExpectMatcher` is a call to one of the equality matchers,
 * with a boolean literal as the sole argument.
 *
 * @example javascript
 * toBe(true);
 * toEqual(false);
 *
 * @param {ParsedExpectMatcher} matcher
 *
 * @return {matcher is ParsedBooleanEqualityMatcher}
 */
const isBooleanEqualityMatcher = matcher => (0, _utils.isParsedEqualityMatcherCall)(matcher) && isBooleanLiteral((0, _utils.followTypeAssertionChain)(matcher.arguments[0]));

const isString = node => {
  return (0, _utils.isStringNode)(node) || node.type === _experimentalUtils.AST_NODE_TYPES.TemplateLiteral;
};

const isComparingToString = expression => {
  return isString(expression.left) || isString(expression.right);
};

const invertOperator = operator => {
  switch (operator) {
    case '>':
      return '<=';

    case '<':
      return '>=';

    case '>=':
      return '<';

    case '<=':
      return '>';
  }

  return null;
};

const determineMatcher = (operator, negated) => {
  const op = negated ? invertOperator(operator) : operator;

  switch (op) {
    case '>':
      return 'toBeGreaterThan';

    case '<':
      return 'toBeLessThan';

    case '>=':
      return 'toBeGreaterThanOrEqual';

    case '<=':
      return 'toBeLessThanOrEqual';
  }

  return null;
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Suggest using the built-in comparison matchers',
      recommended: false
    },
    messages: {
      useToBeComparison: 'Prefer using `{{ preferredMatcher }}` instead'
    },
    fixable: 'code',
    type: 'suggestion',
    schema: []
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        if (!(0, _utils.isExpectCall)(node)) {
          return;
        }

        const {
          expect: {
            arguments: [comparison],
            range: [, expectCallEnd]
          },
          matcher,
          modifier
        } = (0, _utils.parseExpectCall)(node);

        if (!matcher || (comparison === null || comparison === void 0 ? void 0 : comparison.type) !== _experimentalUtils.AST_NODE_TYPES.BinaryExpression || isComparingToString(comparison) || !isBooleanEqualityMatcher(matcher)) {
          return;
        }

        const preferredMatcher = determineMatcher(comparison.operator, (0, _utils.followTypeAssertionChain)(matcher.arguments[0]).value === !!modifier);

        if (!preferredMatcher) {
          return;
        }

        context.report({
          fix(fixer) {
            const sourceCode = context.getSourceCode();
            return [// replace the comparison argument with the left-hand side of the comparison
            fixer.replaceText(comparison, sourceCode.getText(comparison.left)), // replace the current matcher & modifier with the preferred matcher
            fixer.replaceTextRange([expectCallEnd, matcher.node.range[1]], `.${preferredMatcher}`), // replace the matcher argument with the right-hand side of the comparison
            fixer.replaceText(matcher.arguments[0], sourceCode.getText(comparison.right))];
          },

          messageId: 'useToBeComparison',
          data: {
            preferredMatcher
          },
          node: (modifier || matcher).node.property
        });
      }

    };
  }

});

exports.default = _default;