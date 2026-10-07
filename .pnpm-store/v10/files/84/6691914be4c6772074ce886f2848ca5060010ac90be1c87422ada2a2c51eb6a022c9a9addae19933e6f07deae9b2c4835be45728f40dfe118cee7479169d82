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
 */
const {
  noIneffectiveAttrs,
  NO_INEFFECTIVE_ATTRS_MESSAGE_IDS,
} = require("@html-eslint/core");
const { AST_NODE_TYPES } = require("../constants/node-types");
const { createElementAdapter } = require("../adapters/element/factory");

/** @type {RuleModule<[]>} */
module.exports = {
  meta: {
    type: "problem",

    docs: {
      description:
        "Disallow HTML attributes that have no effect in their context",
      category: "Best Practice",
      recommended: true,
      url: "https://html-eslint.org/docs/react/rules/no-ineffective-attrs",
    },

    fixable: null,
    schema: [],
    messages: {
      [NO_INEFFECTIVE_ATTRS_MESSAGE_IDS.ineffective]: "{{ message }}",
    },
  },

  create(context) {
    const ruleCore = /** @type {ReturnType<typeof noIneffectiveAttrs>} */ (
      noIneffectiveAttrs()
    );
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
        const result = ruleCore.checkAttributes(adapter);

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
