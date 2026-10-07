/**
 * @fileoverview Forbid certain props on components
 * @author Joe Lencioni
 */

'use strict';

const minimatch = require('minimatch');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

const DEFAULTS = ['className', 'style'];

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  propIsForbidden: 'Prop "{{prop}}" is forbidden on Components',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow certain props on components',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('forbid-component-props'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        forbid: {
          type: 'array',
          items: {
            anyOf: [
              { type: 'string' },
              {
                type: 'object',
                properties: {
                  propName: { type: 'string' },
                  allowedFor: {
                    type: 'array',
                    uniqueItems: true,
                    items: { type: 'string' },
                  },
                  allowedForPatterns: {
                    type: 'array',
                    uniqueItems: true,
                    items: { type: 'string' },
                  },
                  message: { type: 'string' },
                },
                additionalProperties: false,
              },
              {
                type: 'object',
                properties: {
                  propName: { type: 'string' },
                  disallowedFor: {
                    type: 'array',
                    uniqueItems: true,
                    minItems: 1,
                    items: { type: 'string' },
                  },
                  disallowedForPatterns: {
                    type: 'array',
                    uniqueItems: true,
                    minItems: 1,
                    items: { type: 'string' },
                  },
                  message: { type: 'string' },
                },
                anyOf: [
                  { required: ['disallowedFor'] },
                  { required: ['disallowedForPatterns'] },
                ],
                additionalProperties: false,
              },
              {
                type: 'object',
                properties: {
                  propNamePattern: { type: 'string' },
                  allowedFor: {
                    type: 'array',
                    uniqueItems: true,
                    items: { type: 'string' },
                  },
                  allowedForPatterns: {
                    type: 'array',
                    uniqueItems: true,
                    items: { type: 'string' },
                  },
                  message: { type: 'string' },
                },
                additionalProperties: false,
              },
              {
                type: 'object',
                properties: {
                  propNamePattern: { type: 'string' },
                  disallowedFor: {
                    type: 'array',
                    uniqueItems: true,
                    minItems: 1,
                    items: { type: 'string' },
                  },
                  disallowedForPatterns: {
                    type: 'array',
                    uniqueItems: true,
                    minItems: 1,
                    items: { type: 'string' },
                  },
                  message: { type: 'string' },
                },
                anyOf: [
                  { required: ['disallowedFor'] },
                  { required: ['disallowedForPatterns'] },
                ],
                additionalProperties: false,
              },
            ],
          },
        },
      },
    }],
  },

  create(context) {
    const configuration = context.options[0] || {};
    const forbid = new Map((configuration.forbid || DEFAULTS).map((value) => {
      const propName = typeof value === 'string' ? value : value.propName;
      const propPattern = value.propNamePattern;
      const prop = propName || propPattern;
      const options = {
        allowList: [].concat(value.allowedFor || []),
        allowPatternList: [].concat(value.allowedForPatterns || []),
        disallowList: [].concat(value.disallowedFor || []),
        disallowPatternList: [].concat(value.disallowedForPatterns || []),
        message: typeof value === 'string' ? null : value.message,
        isPattern: !!value.propNamePattern,
      };
      return [prop, options];
    }));

    function getPropOptions(prop) {
      // Get config options having pattern
      const propNamePatternArray = Array.from(forbid.entries()).filter((propEntry) => propEntry[1].isPattern);
      // Match current prop with pattern options, return if matched
      const propNamePattern = propNamePatternArray.find((propPatternVal) => minimatch(prop, propPatternVal[0]));
      // Get options for matched propNamePattern
      const propNamePatternOptions = propNamePattern && propNamePattern[1];

      const options = forbid.get(prop) || propNamePatternOptions;
      return options;
    }

    function isForbidden(prop, tagName) {
      const options = getPropOptions(prop);
      if (!options) {
        return false;
      }

      function checkIsTagForbiddenByAllowOptions() {
        if (options.allowList.indexOf(tagName) !== -1) {
          return false;
        }

        if (options.allowPatternList.length === 0) {
          return true;
        }

        return options.allowPatternList.every(
          (pattern) => !minimatch(tagName, pattern)
        );
      }

      function checkIsTagForbiddenByDisallowOptions() {
        if (options.disallowList.indexOf(tagName) !== -1) {
          return true;
        }

        if (options.disallowPatternList.length === 0) {
          return false;
        }

        return options.disallowPatternList.some(
          (pattern) => minimatch(tagName, pattern)
        );
      }

      const hasDisallowOptions = options.disallowList.length > 0 || options.disallowPatternList.length > 0;

      // disallowList should have a least one item (schema configuration)
      const isTagForbidden = hasDisallowOptions
        ? checkIsTagForbiddenByDisallowOptions()
        : checkIsTagForbiddenByAllowOptions();

      // if the tagName is undefined (`<this.something>`), we assume it's a forbidden element
      return typeof tagName === 'undefined' || isTagForbidden;
    }

    return {
      JSXAttribute(node) {
        const parentName = node.parent.name;
        // Extract a component name when using a "namespace", e.g. `<AntdLayout.Content />`.
        const tag = parentName.name || `${parentName.object.name}.${parentName.property.name}`;
        const componentName = parentName.name || parentName.property.name;
        if (componentName && typeof componentName[0] === 'string' && componentName[0] !== componentName[0].toUpperCase()) {
          // This is a DOM node, not a Component, so exit.
          return;
        }

        const prop = node.name.name;

        if (!isForbidden(prop, tag)) {
          return;
        }

        const customMessage = getPropOptions(prop).message;

        report(context, customMessage || messages.propIsForbidden, !customMessage && 'propIsForbidden', {
          node,
          data: {
            prop,
          },
        });
      },
    };
  },
};
