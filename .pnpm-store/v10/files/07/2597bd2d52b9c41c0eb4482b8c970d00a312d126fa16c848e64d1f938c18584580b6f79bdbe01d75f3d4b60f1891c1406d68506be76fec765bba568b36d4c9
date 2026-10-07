/**
 * @import {ClassSpacingResult} from "@html-eslint/core"
 * @import {AST} from "eslint"
 * @import {
 *   ConditionalExpression,
 *   JSXExpressionContainer,
 *   Literal,
 *   LogicalExpression,
 *   NodeOrToken,
 *   RuleModule,
 *   TemplateLiteral
 * } from "../types"
 * @typedef {Object} Option
 * @property {string[]} [Option.callees]
 */
const {
  classSpacing,
  CLASS_SPACING_MESSAGE_IDS,
} = require("@html-eslint/core");
const { AST_NODE_TYPES } = require("../constants/node-types");
const {
  isLiteral,
  isTemplateLiteral,
  isLogicalExpression,
  isConditionalExpression,
} = require("./utils/node");
const {
  createAttributeValueAdapter,
} = require("../adapters/attribute-value/factory");

/** @type {RuleModule<[Option]>} */
module.exports = {
  meta: {
    type: "layout",

    docs: {
      description: "Disallow extra spacing in className values",
      category: "Stylistic Issues",
      recommended: true,
      url: "https://html-eslint.org/docs/react/rules/classname-spacing",
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
      [CLASS_SPACING_MESSAGE_IDS.extraSpacing]:
        "Unexpected extra spacing in className value",
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const callees = options.callees || [];
    const ruleCore = classSpacing();

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
      const result = ruleCore.checkClassValue(adapter);
      for (const { loc, messageId, range } of result) {
        context.report({
          loc,
          messageId,
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

    /**
     * Check if node is a checkable expression and process it
     *
     * @param {NodeOrToken} node
     */
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
