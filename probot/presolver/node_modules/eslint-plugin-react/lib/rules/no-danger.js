/**
 * @fileoverview Prevent usage of dangerous JSX props
 * @author Scott Andrews
 */
'use strict';

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DANGEROUS_MESSAGE = 'Dangerous property \'{{name}}\' found';

var DANGEROUS_PROPERTY_NAMES = [
  'dangerouslySetInnerHTML'
];

var DANGEROUS_PROPERTIES = DANGEROUS_PROPERTY_NAMES.reduce(function (props, prop) {
  props[prop] = prop;
  return props;
}, Object.create(null));

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Checks if a node name match the JSX tag convention.
 * @param {String} name - Name of the node to check.
 * @returns {boolean} Whether or not the node name match the JSX tag convention.
 */
var tagConvention = /^[a-z]|\-/;
function isTagName(name) {
  return tagConvention.test(name);
}

/**
 * Checks if a JSX attribute is dangerous.
 * @param {String} name - Name of the attribute to check.
 * @returns {boolean} Whether or not the attribute is dnagerous.
 */
function isDangerous(name) {
  return name in DANGEROUS_PROPERTIES;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of dangerous JSX props',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },

  create: function(context) {

    return {

      JSXAttribute: function(node) {
        if (isTagName(node.parent.name.name) && isDangerous(node.name.name)) {
          context.report({
            node: node,
            message: DANGEROUS_MESSAGE,
            data: {
              name: node.name.name
            }
          });
        }
      }

    };

  }
};
