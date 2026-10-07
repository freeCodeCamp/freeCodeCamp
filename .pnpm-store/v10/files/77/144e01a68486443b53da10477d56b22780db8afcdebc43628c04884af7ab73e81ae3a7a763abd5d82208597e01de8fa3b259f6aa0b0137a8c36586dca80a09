/**
 * @fileoverview Prevent multiple component definition per file
 * @author Yannick Croissant
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
  onlyOneComponent: 'Declare only one React component per file',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow multiple component definition per file',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('no-multi-comp'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        ignoreStateless: {
          default: false,
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create: Components.detect((context, components, utils) => {
    const configuration = context.options[0] || {};
    const ignoreStateless = configuration.ignoreStateless || false;

    /**
     * Checks if the component is ignored
     * @param {Object} component The component being checked.
     * @returns {boolean} True if the component is ignored, false if not.
     */
    function isIgnored(component) {
      return (
        ignoreStateless && (
          /Function/.test(component.node.type)
          || utils.isPragmaComponentWrapper(component.node)
        )
      );
    }

    return {
      'Program:exit'() {
        if (components.length() <= 1) {
          return;
        }

        values(components.list())
          .filter((component) => !isIgnored(component))
          .slice(1)
          .forEach((component) => {
            report(context, messages.onlyOneComponent, 'onlyOneComponent', {
              node: component.node,
            });
          });
      },
    };
  }),
};
