/**
 * @import {
 *   ConditionalExpression,
 *   JSXExpressionContainer,
 *   Literal,
 *   LogicalExpression,
 *   Node,
 *   NodeOrToken,
 *   RuleModule,
 *   TemplateLiteral
 * } from "../types"
 * @typedef {Object} Option
 * @property {string[]} [Option.callees]
 */
const {
  noDuplicateClass,
  NO_DUPLICATE_CLASS_MESSAGE_IDS,
} = require("@html-eslint/core");
const { AST_NODE_TYPES } = require("../constants/node-types");
const {
  isTemplateLiteral,
  isLiteral,
  isLogicalExpression,
  isConditionalExpression,
} = require("./utils/node");
const {
  createAttributeValueAdapter,
} = require("../adapters/attribute-value/factory");

/** @type {RuleModule<[Option]>} */
module.exports = {
  meta: {
    type: "code",

    docs: {
      description: "Disallow duplicate class names in className",
      category: "Best Practices",
      recommended: true,
      url: "https://html-eslint.org/docs/react/rules/no-duplicate-classname",
    },

    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          callees: {
            type: "array",
            items: {
              type: "string",
            },
            uniqueItems: true,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      [NO_DUPLICATE_CLASS_MESSAGE_IDS.duplicateClass]:
        "The class '{{className}}' is duplicated.",
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const callees = options.callees || [];
    const { checkClassValue } = noDuplicateClass();

    /**
     * Check if a node matches the callees option
     *
     * @param {any} node
     * @returns {boolean}
     */
    function isTargetCallee(node) {
      if (node.callee.type === AST_NODE_TYPES.Identifier) {
        return callees.includes(node.callee.name);
      }

      return false;
    }

    /** @param {Literal | TemplateLiteral} node */
    function checkLiteral(node) {
      const adapter = createAttributeValueAdapter(node);
      const result = checkClassValue(adapter);
      for (const { loc, messageId, range, data } of result) {
        context.report({
          loc,
          messageId,
          data,
          fix(fixer) {
            return fixer.removeRange(range);
          },
        });
      }
    }

    /** @param {LogicalExpression} node */
    function checkLogicalExpression(node) {
      [node.left, node.right].forEach((n) => {
        if (isLiteral(n) || isTemplateLiteral(n)) {
          checkLiteral(n);
        } else if (isLogicalExpression(n)) {
          checkLogicalExpression(n);
        } else if (isConditionalExpression(n)) {
          checkConditionalExpression(n);
        }
      });
    }

    /** @param {ConditionalExpression} node */
    function checkConditionalExpression(node) {
      [node.consequent, node.alternate].forEach((n) => {
        if (isLiteral(n) || isTemplateLiteral(n)) {
          checkLiteral(n);
        } else if (isLogicalExpression(n)) {
          checkLogicalExpression(n);
        } else if (isConditionalExpression(n)) {
          checkConditionalExpression(n);
        }
      });
    }

    /** @param {NodeOrToken} node */
    function checkExpression(node) {
      if (isLiteral(node) || isTemplateLiteral(node)) {
        checkLiteral(node);
      } else if (isLogicalExpression(node)) {
        checkLogicalExpression(node);
      } else if (isConditionalExpression(node)) {
        checkConditionalExpression(node);
      }
    }

    /** @param {JSXExpressionContainer} node */
    function checkJSXExpressionContainer(node) {
      checkExpression(node.expression);
    }

    return {
      CallExpression(node) {
        if (!isTargetCallee(node)) {
          return;
        }

        for (const arg of node.arguments) {
          checkExpression(arg);
        }
      },
      JSXAttribute(node) {
        if (
          node.name.type !== AST_NODE_TYPES.JSXIdentifier ||
          node.name.name.toLowerCase() !== "classname" ||
          !node.value
        ) {
          return;
        }

        if (isLiteral(node.value)) {
          checkLiteral(node.value);
        } else if (node.value.type === AST_NODE_TYPES.JSXExpressionContainer) {
          checkJSXExpressionContainer(node.value);
        }
      },
    };
  },
};
