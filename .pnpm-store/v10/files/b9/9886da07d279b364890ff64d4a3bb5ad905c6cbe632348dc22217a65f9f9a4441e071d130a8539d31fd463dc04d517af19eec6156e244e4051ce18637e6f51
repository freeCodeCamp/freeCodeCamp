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

/**
 * Checks if the given `node` is a `CallExpression` representing the calling
 * of an `includes`-like method that can be 'fixed' (using `toContain`).
 *
 * @param {CallExpression} node
 *
 * @return {node is FixableIncludesCallExpression}
 */
const isFixableIncludesCallExpression = node => node.type === _experimentalUtils.AST_NODE_TYPES.CallExpression && node.callee.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression && (0, _utils.isSupportedAccessor)(node.callee.property, 'includes') && (0, _utils.hasOnlyOneArgument)(node); // expect(array.includes(<value>)[not.]{toBe,toEqual}(<boolean>)


var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Suggest using `toContain()`',
      recommended: false
    },
    messages: {
      useToContain: 'Use toContain() instead'
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
            arguments: [includesCall],
            range: [, expectCallEnd]
          },
          matcher,
          modifier
        } = (0, _utils.parseExpectCall)(node);

        if (!matcher || !includesCall || modifier && modifier.name !== _utils.ModifierName.not || !isBooleanEqualityMatcher(matcher) || !isFixableIncludesCallExpression(includesCall)) {
          return;
        }

        context.report({
          fix(fixer) {
            const sourceCode = context.getSourceCode(); // we need to negate the expectation if the current expected
            // value is itself negated by the "not" modifier

            const addNotModifier = (0, _utils.followTypeAssertionChain)(matcher.arguments[0]).value === !!modifier;
            return [// remove the "includes" call entirely
            fixer.removeRange([includesCall.callee.property.range[0] - 1, includesCall.range[1]]), // replace the current matcher with "toContain", adding "not" if needed
            fixer.replaceTextRange([expectCallEnd, matcher.node.range[1]], addNotModifier ? `.${_utils.ModifierName.not}.toContain` : '.toContain'), // replace the matcher argument with the value from the "includes"
            fixer.replaceText(matcher.arguments[0], sourceCode.getText(includesCall.arguments[0]))];
          },

          messageId: 'useToContain',
          node: (modifier || matcher).node.property
        });
      }

    };
  }

});

exports.default = _default;