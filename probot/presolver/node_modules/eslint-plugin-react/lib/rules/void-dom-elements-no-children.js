/**
 * @fileoverview Prevent void elements (e.g. <img />, <br />) from receiving
 *   children
 * @author Joe Lencioni
 */
'use strict';

var find = require('array.prototype.find');
var has = require('has');

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

// Using an object here to avoid array scan. We should switch to Set once
// support is good enough.
var VOID_DOM_ELEMENTS = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  menuitem: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

function isVoidDOMElement(elementName) {
  return has(VOID_DOM_ELEMENTS, elementName);
}

function errorMessage(elementName) {
  return 'Void DOM element <' + elementName + ' /> cannot receive children.';
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent passing of children to void DOM elements (e.g. <br />).',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },

  create: Components.detect(function(context, components, utils) {
    return {
      JSXElement: function(node) {
        var elementName = node.openingElement.name.name;

        if (!isVoidDOMElement(elementName)) {
          // e.g. <div />
          return;
        }

        if (node.children.length > 0) {
          // e.g. <br>Foo</br>
          context.report({
            node: node,
            message: errorMessage(elementName)
          });
        }

        var attributes = node.openingElement.attributes;

        var hasChildrenAttributeOrDanger = !!find(attributes, function(attribute) {
          if (!attribute.name) {
            return false;
          }

          return attribute.name.name === 'children' || attribute.name.name === 'dangerouslySetInnerHTML';
        });

        if (hasChildrenAttributeOrDanger) {
          // e.g. <br children="Foo" />
          context.report({
            node: node,
            message: errorMessage(elementName)
          });
        }
      },

      CallExpression: function(node) {
        if (node.callee.type !== 'MemberExpression' && node.callee.type !== 'Identifier') {
          return;
        }

        if (!utils.hasDestructuredReactCreateElement() && !utils.isReactCreateElement(node)) {
          return;
        }

        var args = node.arguments;
        var elementName = args[0].value;

        if (!isVoidDOMElement(elementName)) {
          // e.g. React.createElement('div');
          return;
        }

        if (args.length < 2) {
          return;
        }

        var firstChild = args[2];
        if (firstChild) {
          // e.g. React.createElement('br', undefined, 'Foo')
          context.report({
            node: node,
            message: errorMessage(elementName)
          });
        }

        var props = args[1].properties;

        var hasChildrenPropOrDanger = !!find(props, function(prop) {
          if (!prop.key) {
            return false;
          }

          return prop.key.name === 'children' || prop.key.name === 'dangerouslySetInnerHTML';
        });

        if (hasChildrenPropOrDanger) {
          // e.g. React.createElement('br', { children: 'Foo' })
          context.report({
            node: node,
            message: errorMessage(elementName)
          });
        }
      }
    };
  })
};
