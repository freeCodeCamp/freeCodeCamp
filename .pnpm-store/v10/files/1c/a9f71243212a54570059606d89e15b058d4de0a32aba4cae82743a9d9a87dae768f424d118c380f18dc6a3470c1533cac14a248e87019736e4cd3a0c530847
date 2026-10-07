/**
 * @fileoverview Disallow multiple spaces between inline JSX props
 * @author Adrian Moennich
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const eslintUtil = require('../util/eslint');
const report = require('../util/report');
const propsUtil = require('../util/props');

const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noLineGap: 'Expected no line gap between “{{prop1}}” and “{{prop2}}”',
  onlyOneSpace: 'Expected only one space between “{{prop1}}” and “{{prop2}}”',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow multiple spaces between inline JSX props',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-props-no-multi-spaces'),
    },
    fixable: 'code',

    messages,

    schema: [],
  },

  create(context) {
    const sourceCode = getSourceCode(context);

    function getPropName(propNode) {
      switch (propNode.type) {
        case 'JSXSpreadAttribute':
          return getText(context, propNode.argument);
        case 'JSXIdentifier':
          return propNode.name;
        case 'JSXMemberExpression':
          return `${getPropName(propNode.object)}.${propNode.property.name}`;
        default:
          return propNode.name
            ? propNode.name.name
            : `${getText(context, propNode.object)}.${propNode.property.name}`; // needed for typescript-eslint parser
      }
    }

    // First and second must be adjacent nodes
    function hasEmptyLines(first, second) {
      const comments = sourceCode.getCommentsBefore ? sourceCode.getCommentsBefore(second) : [];
      const nodes = [].concat(first, comments, second);

      for (let i = 1; i < nodes.length; i += 1) {
        const prev = nodes[i - 1];
        const curr = nodes[i];
        if (curr.loc.start.line - prev.loc.end.line >= 2) {
          return true;
        }
      }

      return false;
    }

    function checkSpacing(prev, node) {
      if (hasEmptyLines(prev, node)) {
        report(context, messages.noLineGap, 'noLineGap', {
          node,
          data: {
            prop1: getPropName(prev),
            prop2: getPropName(node),
          },
        });
      }

      if (prev.loc.end.line !== node.loc.end.line) {
        return;
      }

      const between = getSourceCode(context).text.slice(prev.range[1], node.range[0]);

      if (between !== ' ') {
        report(context, messages.onlyOneSpace, 'onlyOneSpace', {
          node,
          data: {
            prop1: getPropName(prev),
            prop2: getPropName(node),
          },
          fix(fixer) {
            return fixer.replaceTextRange([prev.range[1], node.range[0]], ' ');
          },
        });
      }
    }

    function containsGenericType(node) {
      const nodeTypeArguments = propsUtil.getTypeArguments(node);
      if (typeof nodeTypeArguments === 'undefined') {
        return false;
      }

      return nodeTypeArguments.type === 'TSTypeParameterInstantiation';
    }

    function getGenericNode(node) {
      const name = node.name;
      if (containsGenericType(node)) {
        const nodeTypeArguments = propsUtil.getTypeArguments(node);

        return Object.assign(
          {},
          node,
          {
            range: [
              name.range[0],
              nodeTypeArguments.range[1],
            ],
          }
        );
      }

      return name;
    }

    return {
      JSXOpeningElement(node) {
        node.attributes.reduce((prev, prop) => {
          checkSpacing(prev, prop);
          return prop;
        }, getGenericNode(node));
      },
    };
  },
};
