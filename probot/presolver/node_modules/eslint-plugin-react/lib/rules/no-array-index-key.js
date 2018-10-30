/**
 * @fileoverview Prevent usage of Array index in keys
 * @author Joe Lencioni
 */
'use strict';

var has = require('has');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of Array index in keys',
      category: 'Best Practices',
      recommended: false
    },

    schema: []
  },

  create: function(context) {
    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------
    var indexParamNames = [];
    var iteratorFunctionsToIndexParamPosition = {
      every: 1,
      filter: 1,
      find: 1,
      findIndex: 1,
      forEach: 1,
      map: 1,
      reduce: 2,
      reduceRight: 2,
      some: 1
    };
    var ERROR_MESSAGE = 'Do not use Array index in keys';

    function isArrayIndex(node) {
      return node.type === 'Identifier'
        && indexParamNames.indexOf(node.name) !== -1;
    }

    function getMapIndexParamName(node) {
      var callee = node.callee;
      if (callee.type !== 'MemberExpression') {
        return null;
      }
      if (callee.property.type !== 'Identifier') {
        return null;
      }
      if (!has(iteratorFunctionsToIndexParamPosition, callee.property.name)) {
        return null;
      }

      var firstArg = node.arguments[0];
      if (!firstArg) {
        return null;
      }

      var isFunction = [
        'ArrowFunctionExpression',
        'FunctionExpression'
      ].indexOf(firstArg.type) !== -1;
      if (!isFunction) {
        return null;
      }

      var params = firstArg.params;

      var indexParamPosition = iteratorFunctionsToIndexParamPosition[callee.property.name];
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
        var left = getIdentifiersFromBinaryExpression(side.left);
        var right = getIdentifiersFromBinaryExpression(side.right);
        return [].concat(left, right).filter(Boolean);
      }

      return null;
    }

    function checkPropValue(node) {
      if (isArrayIndex(node)) {
        // key={bar}
        context.report({
          node: node,
          message: ERROR_MESSAGE
        });
        return;
      }

      if (node.type === 'TemplateLiteral') {
        // key={`foo-${bar}`}
        node.expressions.filter(isArrayIndex).forEach(function() {
          context.report({node: node, message: ERROR_MESSAGE});
        });

        return;
      }

      if (node.type === 'BinaryExpression') {
        // key={'foo' + bar}
        var identifiers = getIdentifiersFromBinaryExpression(node);

        identifiers.filter(isArrayIndex).forEach(function() {
          context.report({node: node, message: ERROR_MESSAGE});
        });

        return;
      }
    }

    return {
      CallExpression: function(node) {
        if (
          node.callee
          && node.callee.type === 'MemberExpression'
          && ['createElement', 'cloneElement'].indexOf(node.callee.property.name) !== -1
          && node.arguments.length > 1
        ) {
          // React.createElement
          if (!indexParamNames.length) {
            return;
          }

          var props = node.arguments[1];

          if (props.type !== 'ObjectExpression') {
            return;
          }

          props.properties.forEach(function (prop) {
            if (!prop.key || prop.key.name !== 'key') {
              // { ...foo }
              // { foo: bar }
              return;
            }

            checkPropValue(prop.value);
          });

          return;
        }

        var mapIndexParamName = getMapIndexParamName(node);
        if (!mapIndexParamName) {
          return;
        }

        indexParamNames.push(mapIndexParamName);
      },

      JSXAttribute: function(node) {
        if (node.name.name !== 'key') {
          // foo={bar}
          return;
        }

        if (!indexParamNames.length) {
          // Not inside a call expression that we think has an index param.
          return;
        }

        var value = node.value;
        if (value.type !== 'JSXExpressionContainer') {
          // key='foo'
          return;
        }

        checkPropValue(value.expression);
      },

      'CallExpression:exit': function(node) {
        var mapIndexParamName = getMapIndexParamName(node);
        if (!mapIndexParamName) {
          return;
        }

        indexParamNames.pop();
      }
    };

  }
};
