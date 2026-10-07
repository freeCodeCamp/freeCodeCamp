/**
 * @import {
 *   JSXAttribute,
 *   JSXIdentifier,
 *   JSXOpeningElement,
 *   JSXSpreadAttribute,
 *   Literal,
 *   RuleModule,
 *   TemplateLiteral
 * } from "../types"
 * @typedef {Object} Option
 * @property {"widely" | "newly" | number} Option.available
 */

const { useBaseline, USE_BASELINE_MESSAGE_IDS } = require("@html-eslint/core");
const { AST_NODE_TYPES } = require("../constants/node-types");
const { createElementAdapter } = require("../adapters/element/factory");

/** @type {RuleModule<[Option]>} */
module.exports = {
  meta: {
    type: "code",
    docs: {
      description: "Enforce the use of baseline features.",
      recommended: true,
      category: "Best Practice",
      url: "https://html-eslint.org/docs/react/rules/use-baseline",
    },
    fixable: null,
    schema: [
      {
        type: "object",
        properties: {
          available: {
            anyOf: [
              {
                enum: ["widely", "newly"],
              },
              {
                // baseline year
                type: "integer",
                minimum: 2000,
                maximum: new Date().getFullYear(),
              },
            ],
          },
        },
        additionalProperties: false,
      },
    ],

    messages: {
      [USE_BASELINE_MESSAGE_IDS.noBaselineElement]:
        "Element '{{element}}' is not a {{availability}} available baseline feature.",
      [USE_BASELINE_MESSAGE_IDS.notBaselineElementAttribute]:
        "Attribute '{{attr}}' on '{{element}}' is not a {{availability}} available baseline feature.",
      [USE_BASELINE_MESSAGE_IDS.notBaselineGlobalAttribute]:
        "Attribute '{{attr}}' is not a {{availability}} available baseline feature.",
    },
  },

  create(context) {
    const options = context.options[0] || { available: "widely" };
    const { checkAttributes } = useBaseline(options);

    return {
      JSXElement(node) {
        if (
          node.openingElement.name.type !== AST_NODE_TYPES.JSXIdentifier ||
          node.openingElement.name.name.toLocaleLowerCase() !==
            node.openingElement.name.name ||
          node.openingElement.name.name.includes("-")
        ) {
          return;
        }
        const adapter = createElementAdapter(node);
        const result = checkAttributes(adapter);
        for (const { loc, messageId, data } of result) {
          context.report({
            loc,
            messageId,
            data,
          });
        }
      },
    };
  },
};
