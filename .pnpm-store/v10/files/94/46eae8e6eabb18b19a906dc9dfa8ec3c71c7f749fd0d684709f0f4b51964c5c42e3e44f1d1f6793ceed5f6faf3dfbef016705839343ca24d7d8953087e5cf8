/**
 * @fileoverview Prevent definitions of unused prop types
 * @author Evgueni Naverniouk
 */

'use strict';

const values = require('object.values');

// As for exceptions for props.children or props.className (and alike) look at
// https://github.com/jsx-eslint/eslint-plugin-react/issues/7

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

/**
 * Checks if the component must be validated
 * @param {Object} component The component to process
 * @returns {boolean} True if the component must be validated, false if not.
 */
function mustBeValidated(component) {
  return !!component && !component.ignoreUnusedPropTypesValidation;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  unusedPropType: '\'{{name}}\' PropType is defined but prop is never used',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow definitions of unused propTypes',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('no-unused-prop-types'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        ignore: {
          type: 'array',
          items: {
            type: 'string',
          },
          uniqueItems: true,
        },
        customValidators: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        skipShapeProps: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create: Components.detect((context, components) => {
    const defaults = { skipShapeProps: true, customValidators: [], ignore: [] };
    const configuration = Object.assign({}, defaults, context.options[0] || {});

    /**
     * Checks if the prop is ignored
     * @param {string} name Name of the prop to check.
     * @returns {boolean} True if the prop is ignored, false if not.
     */
    function isIgnored(name) {
      return configuration.ignore.indexOf(name) !== -1;
    }

    /**
     * Checks if a prop is used
     * @param {ASTNode} node The AST node being checked.
     * @param {Object} prop Declared prop object
     * @returns {boolean} True if the prop is used, false if not.
     */
    function isPropUsed(node, prop) {
      const usedPropTypes = node.usedPropTypes || [];
      for (let i = 0, l = usedPropTypes.length; i < l; i++) {
        const usedProp = usedPropTypes[i];
        if (
          prop.type === 'shape'
          || prop.type === 'exact'
          || prop.name === '__ANY_KEY__'
          || usedProp.name === prop.name
        ) {
          return true;
        }
      }

      return false;
    }

    /**
     * Used to recursively loop through each declared prop type
     * @param {Object} component The component to process
     * @param {ASTNode[]|true} props List of props to validate
     */
    function reportUnusedPropType(component, props) {
      // Skip props that check instances
      if (props === true) {
        return;
      }

      Object.keys(props || {}).forEach((key) => {
        const prop = props[key];
        // Skip props that check instances
        if (prop === true) {
          return;
        }

        if ((prop.type === 'shape' || prop.type === 'exact') && configuration.skipShapeProps) {
          return;
        }

        if (prop.node && prop.node.typeAnnotation && prop.node.typeAnnotation.typeAnnotation
          && prop.node.typeAnnotation.typeAnnotation.type === 'TSNeverKeyword') {
          return;
        }

        if (prop.node && !isIgnored(prop.fullName) && !isPropUsed(component, prop)) {
          report(context, messages.unusedPropType, 'unusedPropType', {
            node: prop.node.key || prop.node,
            data: {
              name: prop.fullName,
            },
          });
        }

        if (prop.children) {
          reportUnusedPropType(component, prop.children);
        }
      });
    }

    /**
     * Reports unused proptypes for a given component
     * @param {Object} component The component to process
     */
    function reportUnusedPropTypes(component) {
      reportUnusedPropType(component, component.declaredPropTypes);
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      'Program:exit'() {
        // Report undeclared proptypes for all classes
        values(components.list())
          .filter((component) => mustBeValidated(component))
          .forEach((component) => {
            reportUnusedPropTypes(component);
          });
      },
    };
  }),
};
