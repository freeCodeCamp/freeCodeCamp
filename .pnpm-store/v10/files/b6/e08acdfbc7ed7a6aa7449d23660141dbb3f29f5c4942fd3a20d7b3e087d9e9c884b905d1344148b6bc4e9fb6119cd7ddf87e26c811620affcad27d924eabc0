/**
 * @fileoverview Validate JSX maximum depth
 * @author Chris<wfsr@foxmail.com>
 */

'use strict';

const has = require('hasown');
const includes = require('array-includes');
const variableUtil = require('../util/variable');
const jsxUtil = require('../util/jsx');
const docsUrl = require('../util/docsUrl');
const reportC = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  wrongDepth: 'Expected the depth of nested jsx elements to be <= {{needed}}, but found {{found}}.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce JSX maximum depth',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-max-depth'),
    },

    messages,

    schema: [
      {
        type: 'object',
        properties: {
          max: {
            type: 'integer',
            minimum: 0,
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const DEFAULT_DEPTH = 2;

    const option = context.options[0] || {};
    const maxDepth = has(option, 'max') ? option.max : DEFAULT_DEPTH;

    function isExpression(node) {
      return node.type === 'JSXExpressionContainer';
    }

    function hasJSX(node) {
      return jsxUtil.isJSX(node) || (isExpression(node) && jsxUtil.isJSX(node.expression));
    }

    function isLeaf(node) {
      const children = node.children;

      return !children || children.length === 0 || !children.some(hasJSX);
    }

    function getDepth(node) {
      let count = 0;

      while (jsxUtil.isJSX(node.parent) || isExpression(node.parent)) {
        node = node.parent;
        if (jsxUtil.isJSX(node)) {
          count += 1;
        }
      }

      return count;
    }

    function report(node, depth) {
      reportC(context, messages.wrongDepth, 'wrongDepth', {
        node,
        data: {
          found: depth,
          needed: maxDepth,
        },
      });
    }

    function findJSXElementOrFragment(startNode, name, previousReferences) {
      function find(refs, prevRefs) {
        for (let i = refs.length - 1; i >= 0; i--) {
          if (typeof refs[i].writeExpr !== 'undefined') {
            const writeExpr = refs[i].writeExpr;

            return (jsxUtil.isJSX(writeExpr)
              && writeExpr)
              || ((writeExpr && writeExpr.type === 'Identifier')
              && findJSXElementOrFragment(startNode, writeExpr.name, prevRefs));
          }
        }

        return null;
      }

      const variable = variableUtil.getVariableFromContext(context, startNode, name);
      if (variable && variable.references) {
        const containDuplicates = previousReferences.some((ref) => includes(variable.references, ref));

        // Prevent getting stuck in circular references
        if (containDuplicates) {
          return false;
        }

        return find(variable.references, previousReferences.concat(variable.references));
      }

      return false;
    }

    function checkDescendant(baseDepth, children) {
      baseDepth += 1;
      (children || []).filter((node) => hasJSX(node)).forEach((node) => {
        if (baseDepth > maxDepth) {
          report(node, baseDepth);
        } else if (!isLeaf(node)) {
          checkDescendant(baseDepth, node.children);
        }
      });
    }

    function handleJSX(node) {
      if (!isLeaf(node)) {
        return;
      }

      const depth = getDepth(node);
      if (depth > maxDepth) {
        report(node, depth);
      }
    }

    return {
      JSXElement: handleJSX,
      JSXFragment: handleJSX,

      JSXExpressionContainer(node) {
        if (node.expression.type !== 'Identifier') {
          return;
        }

        const element = findJSXElementOrFragment(node, node.expression.name, []);

        if (element) {
          const baseDepth = getDepth(node);
          checkDescendant(baseDepth, element.children);
        }
      },
    };
  },
};
