/**
 * @fileoverview Report when a DOM element is using both children and dangerouslySetInnerHTML
 * @author David Petersen
 */

'use strict';

const variableUtil = require('../util/variable');
const jsxUtil = require('../util/jsx');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
const messages = {
  dangerWithChildren: 'Only set one of `children` or `props.dangerouslySetInnerHTML`',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow when a DOM element is using both children and dangerouslySetInnerHTML',
      category: 'Possible Errors',
      recommended: true,
      url: docsUrl('no-danger-with-children'),
    },

    messages,

    schema: [], // no options
  },
  create(context) {
    function findSpreadVariable(node, name) {
      return variableUtil.getVariableFromContext(context, node, name);
    }
    /**
     * Takes a ObjectExpression and returns the value of the prop if it has it
     * @param {object} node - ObjectExpression node
     * @param {string} propName - name of the prop to look for
     * @param {string[]} seenProps
     * @returns {object | boolean}
     */
    function findObjectProp(node, propName, seenProps) {
      if (!node.properties) {
        return false;
      }
      return node.properties.find((prop) => {
        if (prop.type === 'Property') {
          return prop.key.name === propName;
        }
        if (prop.type === 'ExperimentalSpreadProperty' || prop.type === 'SpreadElement') {
          const variable = findSpreadVariable(node, prop.argument.name);
          if (variable && variable.defs.length && variable.defs[0].node.init) {
            if (seenProps.indexOf(prop.argument.name) > -1) {
              return false;
            }
            const newSeenProps = seenProps.concat(prop.argument.name || []);
            return findObjectProp(variable.defs[0].node.init, propName, newSeenProps);
          }
        }
        return false;
      });
    }

    /**
     * Takes a JSXElement and returns the value of the prop if it has it
     * @param {object} node - JSXElement node
     * @param {string} propName - name of the prop to look for
     * @returns {object | boolean}
     */
    function findJsxProp(node, propName) {
      const attributes = node.openingElement.attributes;
      return attributes.find((attribute) => {
        if (attribute.type === 'JSXSpreadAttribute') {
          const variable = findSpreadVariable(node, attribute.argument.name);
          if (variable && variable.defs.length && variable.defs[0].node.init) {
            return findObjectProp(variable.defs[0].node.init, propName, []);
          }
        }
        return attribute.name && attribute.name.name === propName;
      });
    }

    /**
     * Checks to see if a node is a line break
     * @param {ASTNode} node The AST node being checked
     * @returns {boolean} True if node is a line break, false if not
     */
    function isLineBreak(node) {
      const isLiteral = node.type === 'Literal' || node.type === 'JSXText';
      const isMultiline = node.loc.start.line !== node.loc.end.line;
      const isWhiteSpaces = jsxUtil.isWhiteSpaces(node.value);

      return isLiteral && isMultiline && isWhiteSpaces;
    }

    return {
      JSXElement(node) {
        let hasChildren = false;

        if (node.children.length && !isLineBreak(node.children[0])) {
          hasChildren = true;
        } else if (findJsxProp(node, 'children')) {
          hasChildren = true;
        }

        if (
          node.openingElement.attributes
          && hasChildren
          && findJsxProp(node, 'dangerouslySetInnerHTML')
        ) {
          report(context, messages.dangerWithChildren, 'dangerWithChildren', {
            node,
          });
        }
      },
      CallExpression(node) {
        if (
          node.callee
          && node.callee.type === 'MemberExpression'
          && 'name' in node.callee.property
          && node.callee.property.name === 'createElement'
          && node.arguments.length > 1
        ) {
          let hasChildren = false;

          let props = node.arguments[1];

          if (props.type === 'Identifier') {
            const variable = variableUtil.getVariableFromContext(context, node, props.name);
            if (variable && variable.defs.length && variable.defs[0].node.init) {
              props = variable.defs[0].node.init;
            }
          }

          const dangerously = findObjectProp(props, 'dangerouslySetInnerHTML', []);

          if (node.arguments.length === 2) {
            if (findObjectProp(props, 'children', [])) {
              hasChildren = true;
            }
          } else {
            hasChildren = true;
          }

          if (dangerously && hasChildren) {
            report(context, messages.dangerWithChildren, 'dangerWithChildren', {
              node,
            });
          }
        }
      },
    };
  },
};
