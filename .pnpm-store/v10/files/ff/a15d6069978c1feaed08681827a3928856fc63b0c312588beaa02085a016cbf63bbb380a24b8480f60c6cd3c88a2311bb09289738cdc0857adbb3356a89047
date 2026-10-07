/**
 * @fileOverview Enforce all defaultProps are defined in propTypes
 * @author Vitor Balocco
 * @author Roy Sutton
 */

'use strict';

const values = require('object.values');

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  requiredHasDefault: 'defaultProp "{{name}}" defined for isRequired propType.',
  defaultHasNoType: 'defaultProp "{{name}}" has no corresponding propTypes declaration.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce all defaultProps have a corresponding non-required PropType',
      category: 'Best Practices',
      url: docsUrl('default-props-match-prop-types'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        allowRequiredDefaults: {
          default: false,
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create: Components.detect((context, components) => {
    const configuration = context.options[0] || {};
    const allowRequiredDefaults = configuration.allowRequiredDefaults || false;

    /**
     * Reports all defaultProps passed in that don't have an appropriate propTypes counterpart.
     * @param  {Object[]} propTypes    Array of propTypes to check.
     * @param  {Object}   defaultProps Object of defaultProps to check. Keys are the props names.
     * @return {void}
     */
    function reportInvalidDefaultProps(propTypes, defaultProps) {
      // If this defaultProps is "unresolved" or the propTypes is undefined, then we should ignore
      // this component and not report any errors for it, to avoid false-positives with e.g.
      // external defaultProps/propTypes declarations or spread operators.
      if (defaultProps === 'unresolved' || !propTypes || Object.keys(propTypes).length === 0) {
        return;
      }

      Object.keys(defaultProps).forEach((defaultPropName) => {
        const defaultProp = defaultProps[defaultPropName];
        const prop = propTypes[defaultPropName];

        if (prop && (allowRequiredDefaults || !prop.isRequired)) {
          return;
        }

        if (prop) {
          report(context, messages.requiredHasDefault, 'requiredHasDefault', {
            node: defaultProp.node,
            data: {
              name: defaultPropName,
            },
          });
        } else {
          report(context, messages.defaultHasNoType, 'defaultHasNoType', {
            node: defaultProp.node,
            data: {
              name: defaultPropName,
            },
          });
        }
      });
    }

    // --------------------------------------------------------------------------
    // Public API
    // --------------------------------------------------------------------------

    return {
      'Program:exit'() {
        // If no defaultProps could be found, we don't report anything.
        values(components.list())
          .filter((component) => component.defaultProps)
          .forEach((component) => {
            reportInvalidDefaultProps(
              component.declaredPropTypes,
              component.defaultProps || {}
            );
          });
      },
    };
  }),
};
