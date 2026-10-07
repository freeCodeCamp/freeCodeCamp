/**
 * @fileoverview Prevent void elements (e.g. <img />, <br />) from receiving
 *   children
 * @author Joe Lencioni
 */

'use strict';

const has = require('hasown');

const docsUrl = require('../util/docsUrl');
const isCreateElement = require('../util/isCreateElement');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

// Using an object here to avoid array scan. We should switch to Set once
// support is good enough.
const VOID_DOM_ELEMENTS = {
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
  wbr: true,
};

function isVoidDOMElement(elementName) {
  return has(VOID_DOM_ELEMENTS, elementName);
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const noChildrenInVoidEl = 'Void DOM element <{{element}} /> cannot receive children.';

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('void-dom-elements-no-children'),
    },

    messages: {
      noChildrenInVoidEl,
    },

    schema: [],
  },

  create: (context) => ({
    JSXElement(node) {
      const elementName = node.openingElement.name.name;

      if (!isVoidDOMElement(elementName)) {
        // e.g. <div />
        return;
      }

      if (node.children.length > 0) {
        // e.g. <br>Foo</br>
        report(context, noChildrenInVoidEl, 'noChildrenInVoidEl', {
          node,
          data: {
            element: elementName,
          },
        });
      }

      const attributes = node.openingElement.attributes;

      const hasChildrenAttributeOrDanger = attributes.some((attribute) => {
        if (!attribute.name) {
          return false;
        }

        return attribute.name.name === 'children' || attribute.name.name === 'dangerouslySetInnerHTML';
      });

      if (hasChildrenAttributeOrDanger) {
        // e.g. <br children="Foo" />
        report(context, noChildrenInVoidEl, 'noChildrenInVoidEl', {
          node,
          data: {
            element: elementName,
          },
        });
      }
    },

    CallExpression(node) {
      if (node.callee.type !== 'MemberExpression' && node.callee.type !== 'Identifier') {
        return;
      }

      if (!isCreateElement(context, node)) {
        return;
      }

      const args = node.arguments;

      if (args.length < 1) {
        // React.createElement() should not crash linter
        return;
      }

      const elementName = 'value' in args[0] ? args[0].value : undefined;

      if (!isVoidDOMElement(elementName)) {
        // e.g. React.createElement('div');
        return;
      }

      if (args.length < 2 || args[1].type !== 'ObjectExpression') {
        return;
      }

      const firstChild = args[2];
      if (firstChild) {
        // e.g. React.createElement('br', undefined, 'Foo')
        report(context, noChildrenInVoidEl, 'noChildrenInVoidEl', {
          node,
          data: {
            element: elementName,
          },
        });
      }

      const props = args[1].properties;

      const hasChildrenPropOrDanger = props.some((prop) => {
        if (!('key' in prop) || !prop.key || !('name' in prop.key)) {
          return false;
        }

        return prop.key.name === 'children' || prop.key.name === 'dangerouslySetInnerHTML';
      });

      if (hasChildrenPropOrDanger) {
        // e.g. React.createElement('br', { children: 'Foo' })
        report(context, noChildrenInVoidEl, 'noChildrenInVoidEl', {
          node,
          data: {
            element: elementName,
          },
        });
      }
    },
  }),
};
