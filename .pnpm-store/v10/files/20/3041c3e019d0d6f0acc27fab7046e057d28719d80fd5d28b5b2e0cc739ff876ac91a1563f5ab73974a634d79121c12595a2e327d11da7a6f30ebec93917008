/**
 * @fileoverview Prevent missing props validation in a React component definition
 * @author Yannick Croissant
 */

'use strict';

// As for exceptions for props.children or props.className (and alike) look at
// https://github.com/jsx-eslint/eslint-plugin-react/issues/7

const values = require('object.values');

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  missingPropType: '\'{{name}}\' is missing in props validation',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow missing props validation in a React component definition',
      category: 'Best Practices',
      recommended: true,
      url: docsUrl('prop-types'),
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
        },
        customValidators: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        skipUndeclared: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create: Components.detect((context, components) => {
    const configuration = context.options[0] || {};
    const ignored = configuration.ignore || [];
    const skipUndeclared = configuration.skipUndeclared || false;

    /**
     * Checks if the prop is ignored
     * @param {string} name Name of the prop to check.
     * @returns {boolean} True if the prop is ignored, false if not.
     */
    function isIgnored(name) {
      return ignored.indexOf(name) !== -1;
    }

    /**
     * Checks if the component must be validated
     * @param {Object} component The component to process
     * @returns {boolean} True if the component must be validated, false if not.
     */
    function mustBeValidated(component) {
      const isSkippedByConfig = skipUndeclared && typeof component.declaredPropTypes === 'undefined';
      return !!(
        component
        && component.usedPropTypes
        && !component.ignorePropsValidation
        && !isSkippedByConfig
      );
    }

    /**
     * Internal: Checks if the prop is declared
     * @param {Object} declaredPropTypes Description of propTypes declared in the current component
     * @param {string[]} keyList Dot separated name of the prop to check.
     * @returns {boolean} True if the prop is declared, false if not.
     */
    function internalIsDeclaredInComponent(declaredPropTypes, keyList) {
      for (let i = 0, j = keyList.length; i < j; i++) {
        const key = keyList[i];
        const propType = (
          declaredPropTypes && (
            // Check if this key is declared
            (declaredPropTypes[key] // If not, check if this type accepts any key
            || declaredPropTypes.__ANY_KEY__) // eslint-disable-line no-underscore-dangle
          )
        );

        if (!propType) {
          // If it's a computed property, we can't make any further analysis, but is valid
          return key === '__COMPUTED_PROP__';
        }
        if (typeof propType === 'object' && !propType.type) {
          return true;
        }
        // Consider every children as declared
        if (propType.children === true || propType.containsUnresolvedSpread || propType.containsIndexers) {
          return true;
        }
        if (propType.acceptedProperties) {
          return key in propType.acceptedProperties;
        }
        if (propType.type === 'union') {
          // If we fall in this case, we know there is at least one complex type in the union
          if (i + 1 >= j) {
            // this is the last key, accept everything
            return true;
          }
          // non trivial, check all of them
          const unionTypes = propType.children;
          const unionPropType = {};
          for (let k = 0, z = unionTypes.length; k < z; k++) {
            unionPropType[key] = unionTypes[k];
            const isValid = internalIsDeclaredInComponent(
              unionPropType,
              keyList.slice(i)
            );
            if (isValid) {
              return true;
            }
          }

          // every possible union were invalid
          return false;
        }
        declaredPropTypes = propType.children;
      }
      return true;
    }

    /**
     * Checks if the prop is declared
     * @param {ASTNode} node The AST node being checked.
     * @param {string[]} names List of names of the prop to check.
     * @returns {boolean} True if the prop is declared, false if not.
     */
    function isDeclaredInComponent(node, names) {
      while (node) {
        const component = components.get(node);

        const isDeclared = component && component.confidence >= 2
          && internalIsDeclaredInComponent(component.declaredPropTypes || {}, names);

        if (isDeclared) {
          return true;
        }

        node = node.parent;
      }
      return false;
    }

    /**
     * Reports undeclared proptypes for a given component
     * @param {Object} component The component to process
     */
    function reportUndeclaredPropTypes(component) {
      const undeclareds = component.usedPropTypes.filter((propType) => (
        propType.node
        && !isIgnored(propType.allNames[0])
        && !isDeclaredInComponent(component.node, propType.allNames)
      ));
      undeclareds.forEach((propType) => {
        report(context, messages.missingPropType, 'missingPropType', {
          node: propType.node,
          data: {
            name: propType.allNames.join('.').replace(/\.__COMPUTED_PROP__/g, '[]'),
          },
        });
      });
    }

    /**
     * @param {Object} component The current component to process
     * @param {Array} list The all components to process
     * @returns {boolean} True if the component is nested False if not.
     */
    function checkNestedComponent(component, list) {
      const componentIsMemo = component.node.callee && component.node.callee.name === 'memo';
      const argumentIsForwardRef = component.node.arguments && component.node.arguments[0].callee && component.node.arguments[0].callee.name === 'forwardRef';
      if (componentIsMemo && argumentIsForwardRef) {
        const forwardComponent = list.find(
          (innerComponent) => (
            innerComponent.node.range[0] === component.node.arguments[0].range[0]
            && innerComponent.node.range[0] === component.node.arguments[0].range[0]
          ));

        const isValidated = mustBeValidated(forwardComponent);
        const isIgnorePropsValidation = forwardComponent.ignorePropsValidation;

        return isIgnorePropsValidation || isValidated;
      }
    }

    return {
      'Program:exit'() {
        const list = components.list();
        // Report undeclared proptypes for all classes
        values(list)
          .filter((component) => mustBeValidated(component))
          .forEach((component) => {
            if (checkNestedComponent(component, values(list))) return;
            reportUndeclaredPropTypes(component);
          });
      },
    };
  }),
};
