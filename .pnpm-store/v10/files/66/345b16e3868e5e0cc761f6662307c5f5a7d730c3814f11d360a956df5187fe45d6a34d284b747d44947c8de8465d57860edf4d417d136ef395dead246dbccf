/**
 * @fileoverview Prevent usage of Array index in keys
 * @author Joe Lencioni
 */

'use strict';

const has = require('hasown');
const astUtil = require('../util/ast');
const docsUrl = require('../util/docsUrl');
const pragma = require('../util/pragma');
const report = require('../util/report');
const variableUtil = require('../util/variable');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function isCreateCloneElement(node, context) {
  if (!node) {
    return false;
  }

  if (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') {
    return node.object
      && node.object.name === pragma.getFromContext(context)
      && ['createElement', 'cloneElement'].indexOf(node.property.name) !== -1;
  }

  if (node.type === 'Identifier') {
    const variable = variableUtil.findVariableByName(context, node, node.name);
    if (variable && variable.type === 'ImportSpecifier') {
      return variable.parent.source.value === 'react';
    }
  }

  return false;
}

const messages = {
  noArrayIndex: 'Do not use Array index in keys',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow usage of Array index in keys',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('no-array-index-key'),
    },

    messages,

    schema: [],
  },

  create(context) {
    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------
    const indexParamNames = [];
    const iteratorFunctionsToIndexParamPosition = {
      every: 1,
      filter: 1,
      find: 1,
      findIndex: 1,
      flatMap: 1,
      forEach: 1,
      map: 1,
      reduce: 2,
      reduceRight: 2,
      some: 1,
    };

    function isArrayIndex(node) {
      return node.type === 'Identifier'
        && indexParamNames.indexOf(node.name) !== -1;
    }

    function isUsingReactChildren(node) {
      const callee = node.callee;
      if (
        !callee
        || !callee.property
        || !callee.object
      ) {
        return null;
      }

      const isReactChildMethod = ['map', 'forEach'].indexOf(callee.property.name) > -1;
      if (!isReactChildMethod) {
        return null;
      }

      const obj = callee.object;
      if (obj && obj.name === 'Children') {
        return true;
      }
      if (obj && obj.object && obj.object.name === pragma.getFromContext(context)) {
        return true;
      }

      return false;
    }

    function getMapIndexParamName(node) {
      const callee = node.callee;
      if (callee.type !== 'MemberExpression' && callee.type !== 'OptionalMemberExpression') {
        return null;
      }
      if (callee.property.type !== 'Identifier') {
        return null;
      }
      if (!has(iteratorFunctionsToIndexParamPosition, callee.property.name)) {
        return null;
      }

      const name = /** @type {keyof iteratorFunctionsToIndexParamPosition} */ (callee.property.name);

      const callbackArg = isUsingReactChildren(node)
        ? node.arguments[1]
        : node.arguments[0];

      if (!callbackArg) {
        return null;
      }

      if (!astUtil.isFunctionLikeExpression(callbackArg)) {
        return null;
      }

      const params = callbackArg.params;

      const indexParamPosition = iteratorFunctionsToIndexParamPosition[name];
      if (params.length < indexParamPosition + 1) {
        return null;
      }

      return params[indexParamPosition].name;
    }

    function getIdentifiersFromBinaryExpression(side) {
      if (side.type === 'Identifier') {
        return side;
      }

      if (side.type === 'BinaryExpression') {
        // recurse
        const left = getIdentifiersFromBinaryExpression(side.left);
        const right = getIdentifiersFromBinaryExpression(side.right);
        return [].concat(left, right).filter(Boolean);
      }

      return null;
    }

    function checkPropValue(node) {
      if (isArrayIndex(node)) {
        // key={bar}
        report(context, messages.noArrayIndex, 'noArrayIndex', {
          node,
        });
        return;
      }

      if (node.type === 'TemplateLiteral') {
        // key={`foo-${bar}`}
        node.expressions.filter(isArrayIndex).forEach(() => {
          report(context, messages.noArrayIndex, 'noArrayIndex', {
            node,
          });
        });

        return;
      }

      if (node.type === 'BinaryExpression') {
        // key={'foo' + bar}
        const identifiers = getIdentifiersFromBinaryExpression(node);

        identifiers.filter(isArrayIndex).forEach(() => {
          report(context, messages.noArrayIndex, 'noArrayIndex', {
            node,
          });
        });

        return;
      }

      if (
        astUtil.isCallExpression(node)
        && node.callee
        && node.callee.type === 'MemberExpression'
        && node.callee.object
        && isArrayIndex(node.callee.object)
        && node.callee.property
        && node.callee.property.type === 'Identifier'
        && node.callee.property.name === 'toString'
      ) {
        // key={bar.toString()}
        report(context, messages.noArrayIndex, 'noArrayIndex', {
          node,
        });
        return;
      }

      if (
        astUtil.isCallExpression(node)
        && node.callee
        && node.callee.type === 'Identifier'
        && node.callee.name === 'String'
        && Array.isArray(node.arguments)
        && node.arguments.length > 0
        && isArrayIndex(node.arguments[0])
      ) {
        // key={String(bar)}
        report(context, messages.noArrayIndex, 'noArrayIndex', {
          node: node.arguments[0],
        });
      }
    }

    function popIndex(node) {
      const mapIndexParamName = getMapIndexParamName(node);
      if (!mapIndexParamName) {
        return;
      }

      indexParamNames.pop();
    }

    return {
      'CallExpression, OptionalCallExpression'(node) {
        if (isCreateCloneElement(node.callee, context) && node.arguments.length > 1) {
          // React.createElement
          if (!indexParamNames.length) {
            return;
          }

          const props = node.arguments[1];

          if (props.type !== 'ObjectExpression') {
            return;
          }

          props.properties.forEach((prop) => {
            if (!prop.key || prop.key.name !== 'key') {
              // { ...foo }
              // { foo: bar }
              return;
            }

            checkPropValue(prop.value);
          });

          return;
        }

        const mapIndexParamName = getMapIndexParamName(node);
        if (!mapIndexParamName) {
          return;
        }

        indexParamNames.push(mapIndexParamName);
      },

      JSXAttribute(node) {
        if (node.name.name !== 'key') {
          // foo={bar}
          return;
        }

        if (!indexParamNames.length) {
          // Not inside a call expression that we think has an index param.
          return;
        }

        const value = node.value;
        if (!value || value.type !== 'JSXExpressionContainer') {
          // key='foo' or just simply 'key'
          return;
        }

        checkPropValue(value.expression);
      },

      'CallExpression:exit': popIndex,
      'OptionalCallExpression:exit': popIndex,
    };
  },
};
