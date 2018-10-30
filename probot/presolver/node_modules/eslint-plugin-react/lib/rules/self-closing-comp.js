/**
 * @fileoverview Prevent extra closing tags for components without children
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent extra closing tags for components without children',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      type: 'object',
      properties: {
        component: {
          default: true,
          type: 'boolean'
        },
        html: {
          default: true,
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var tagConvention = /^[a-z]|\-/;
    function isTagName(name) {
      return tagConvention.test(name);
    }

    function isComponent(node) {
      return node.name && node.name.type === 'JSXIdentifier' && !isTagName(node.name.name);
    }

    function hasChildren(node) {
      var childrens = node.parent.children;
      if (
        !childrens.length ||
        (childrens.length === 1 && childrens[0].type === 'Literal' && !childrens[0].value.replace(/(?!\xA0)\s/g, ''))
      ) {
        return false;
      }
      return true;
    }

    function isShouldBeSelfClosed(node) {
      var configuration = context.options[0] || {component: true, html: true};
      return (
        configuration.component && isComponent(node) ||
        configuration.html && isTagName(node.name.name)
      ) && !node.selfClosing && !hasChildren(node);
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      JSXOpeningElement: function(node) {

        if (!isShouldBeSelfClosed(node)) {
          return;
        }
        context.report({
          node: node,
          message: 'Empty components are self-closing',
          fix: function(fixer) {
            // Represents the last character of the JSXOpeningElement, the '>' character
            var openingElementEnding = node.end - 1;
            // Represents the last character of the JSXClosingElement, the '>' character
            var closingElementEnding = node.parent.closingElement.end;

            // Replace />.*<\/.*>/ with '/>'
            var range = [openingElementEnding, closingElementEnding];
            return fixer.replaceTextRange(range, ' />');
          }
        });
      }
    };

  }
};
