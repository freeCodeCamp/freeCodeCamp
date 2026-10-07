/** @import {RuleModule} from "../types" */
const { NO_INVALID_ATTR_VALUE_MESSAGE_IDS } = require("@html-eslint/core");
const { noInvalidAttrValue } = require("@html-eslint/core");
const { AST_NODE_TYPES } = require("../constants/node-types");
const { createElementAdapter } = require("../adapters/element/factory");
/**
 * @type {RuleModule<
 *   [{ allow?: { tag: string; attr: string; valuePattern?: string }[] }]
 * >}
 */
module.exports = {
  meta: {
    type: "problem",

    docs: {
      description:
        "Disallow invalid attribute values according to HTML standards",
      category: "Best Practice",
      recommended: true,
      url: "https://html-eslint.org/docs/react/rules/no-invalid-attr-value",
    },

    fixable: null,
    schema: [
      {
        type: "object",
        properties: {
          allow: {
            type: "array",
            items: {
              type: "object",
              properties: {
                tag: {
                  type: "string",
                },
                attr: {
                  type: "string",
                },
                valuePattern: {
                  type: "string",
                },
              },
              required: ["tag", "attr"],
              additionalProperties: false,
            },
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      [NO_INVALID_ATTR_VALUE_MESSAGE_IDS.invalid]:
        "Invalid value '{{value}}' for attribute '{{attr}}' on <{{element}}>. {{suggestion}}",
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const { checkAttributes } = noInvalidAttrValue(options);
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
