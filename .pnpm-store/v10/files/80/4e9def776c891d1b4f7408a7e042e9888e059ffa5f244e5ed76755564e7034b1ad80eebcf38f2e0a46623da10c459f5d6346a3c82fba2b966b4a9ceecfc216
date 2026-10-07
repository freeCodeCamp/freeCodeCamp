/** @import {RuleModule} from "../types" */
const {
  noObsoleteTags,
  NO_OBSOLETE_TAGS_MESSAGE_IDS,
} = require("@html-eslint/core");
const { AST_NODE_TYPES } = require("../constants/node-types");
const { createElementAdapter } = require("../adapters/element/factory");

/**
 * @type {RuleModule<
 *   [{ allow?: { tag: string; attr: string; valuePattern?: string }[] }]
 * >}
 */
module.exports = {
  meta: {
    type: "code",
    docs: {
      description: "Disallow use of obsolete elements in HTML5",
      category: "Best Practice",
      recommended: true,
    },
    fixable: null,
    schema: [],
    messages: {
      [NO_OBSOLETE_TAGS_MESSAGE_IDS.unexpected]:
        "Unexpected use of obsolete tag <{{tag}}>",
    },
  },

  create(context) {
    const ruleCore = noObsoleteTags();

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
        const result = ruleCore.checkElement(adapter);
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
