/**
 * @fileoverview Prevent variables used in JSX to be marked as unused
 * @author Yannick Croissant
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const markVariableAsUsed = require('../util/eslint').markVariableAsUsed;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const isTagNameRe = /^[a-z]/;
const isTagName = (name) => isTagNameRe.test(name);

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  // eslint-disable-next-line eslint-plugin/prefer-message-ids -- https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/issues/292
  meta: {
    docs: {
      description: 'Disallow variables used in JSX to be incorrectly marked as unused',
      category: 'Best Practices',
      recommended: true,
      url: docsUrl('jsx-uses-vars'),
    },
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        let name;
        if (node.name.namespace) {
          // <Foo:Bar>
          return;
        }
        if (node.name.name) {
          // <Foo>
          name = node.name.name;
          // Exclude lowercase tag names like <div>
          if (isTagName(name)) {
            return;
          }
        } else if (node.name.object) {
          // <Foo...Bar>
          let parent = node.name.object;
          while (parent.object) {
            parent = parent.object;
          }
          name = parent.name;
        } else {
          return;
        }

        markVariableAsUsed(name, node, context);
      },

    };
  },
};
