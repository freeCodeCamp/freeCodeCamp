/**
 * @fileoverview Prevent direct mutation of this.state
 * @author David Petersen
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
      description: 'Prevent direct mutation of this.state',
      category: 'Possible Errors',
      recommended: true
    }
  },

  create: Components.detect(function(context, components, utils) {

    /**
     * Checks if the component is valid
     * @param {Object} component The component to process
     * @returns {Boolean} True if the component is valid, false if not.
     */
    function isValid(component) {
      return Boolean(component && !component.mutateSetState);
    }

    /**
     * Reports undeclared proptypes for a given component
     * @param {Object} component The component to process
     */
    function reportMutations(component) {
      var mutation;
      for (var i = 0, j = component.mutations.length; i < j; i++) {
        mutation = component.mutations[i];
        context.report({
          node: mutation,
          message: 'Do not mutate state directly. Use setState().'
        });
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      AssignmentExpression: function(node) {
        var item;
        if (!node.left || !node.left.object || !node.left.object.object) {
          return;
        }
        item = node.left.object;
        while (item.object.property) {
          item = item.object;
        }
        if (
          item.object.type === 'ThisExpression' &&
          item.property.name === 'state'
        ) {
          var component = components.get(utils.getParentComponent());
          var mutations = component && component.mutations || [];
          mutations.push(node.left.object);
          components.set(node, {
            mutateSetState: true,
            mutations: mutations
          });
        }
      },

      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (!has(list, component) || isValid(list[component])) {
            continue;
          }
          reportMutations(list[component]);
        }
      }
    };

  })
};
