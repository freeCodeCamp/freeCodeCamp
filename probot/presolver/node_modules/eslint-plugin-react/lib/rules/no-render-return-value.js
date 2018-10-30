/**
 * @fileoverview Prevent usage of the return value of React.render
 * @author Dustan Kasten
 */
'use strict';

var versionUtil = require('../util/version');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of the return value of React.render',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;
        var parent = node.parent;
        if (callee.type !== 'MemberExpression') {
          return;
        }

        var calleeObjectName = /^ReactDOM$/;
        if (versionUtil.test(context, '15.0.0')) {
          calleeObjectName = /^ReactDOM$/;
        } else if (versionUtil.test(context, '0.14.0')) {
          calleeObjectName = /^React(DOM)?$/;
        } else if (versionUtil.test(context, '0.13.0')) {
          calleeObjectName = /^React$/;
        }

        if (
          callee.object.type !== 'Identifier' ||
          !calleeObjectName.test(callee.object.name) ||
          callee.property.name !== 'render'
        ) {
          return;
        }

        if (
          parent.type === 'VariableDeclarator' ||
          parent.type === 'Property' ||
          parent.type === 'ReturnStatement' ||
          parent.type === 'ArrowFunctionExpression'
        ) {
          context.report({
            node: callee,
            message: 'Do not depend on the return value from ' + callee.object.name + '.render'
          });
        }
      }
    };

  }
};
