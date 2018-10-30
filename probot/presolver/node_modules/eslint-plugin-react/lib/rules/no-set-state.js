/**
 * @fileoverview Prevent usage of setState
 * @author Mark Dalgleish
 */
'use strict';

var has = require('has');
var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of setState',
      category: 'Stylistic Issues',
      recommended: false
    },
    schema: []
  },

  create: Components.detect(function(context, components, utils) {

    /**
     * Checks if the component is valid
     * @param {Object} component The component to process
     * @returns {Boolean} True if the component is valid, false if not.
     */
    function isValid(component) {
      return Boolean(component && !component.useSetState);
    }

    /**
     * Reports usages of setState for a given component
     * @param {Object} component The component to process
     */
    function reportSetStateUsages(component) {
      var setStateUsage;
      for (var i = 0, j = component.setStateUsages.length; i < j; i++) {
        setStateUsage = component.setStateUsages[i];
        context.report({
          node: setStateUsage,
          message: 'Do not use setState'
        });
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;
        if (
          callee.type !== 'MemberExpression' ||
          callee.object.type !== 'ThisExpression' ||
          callee.property.name !== 'setState'
        ) {
          return;
        }
        var component = components.get(utils.getParentComponent());
        var setStateUsages = component && component.setStateUsages || [];
        setStateUsages.push(callee);
        components.set(node, {
          useSetState: true,
          setStateUsages: setStateUsages
        });
      },

      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (!has(list, component) || isValid(list[component])) {
            continue;
          }
          reportSetStateUsages(list[component]);
        }
      }
    };
  })
};
