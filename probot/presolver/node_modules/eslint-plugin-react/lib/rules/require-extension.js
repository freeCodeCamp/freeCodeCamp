/**
 * @fileoverview Restrict file extensions that may be required
 * @author Scott Andrews
 * @deprecated
 */
'use strict';

var path = require('path');
var isWarnedForDeprecation = false;

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = {
  extensions: ['.jsx']
};

var PKG_REGEX = /^[^\.]((?!\/).)*$/;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    deprecated: true,
    docs: {
      description: 'Restrict file extensions that may be required',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        extensions: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    function isPackage(id) {
      return PKG_REGEX.test(id);
    }

    function isRequire(expression) {
      return expression.callee.name === 'require';
    }

    function getId(expression) {
      return expression.arguments[0] && expression.arguments[0].value;
    }

    function getExtension(id) {
      return path.extname(id || '');
    }

    function getExtensionsConfig() {
      return context.options[0] && context.options[0].extensions || DEFAULTS.extensions;
    }

    var forbiddenExtensions = getExtensionsConfig().reduce(function (extensions, extension) {
      extensions[extension] = true;
      return extensions;
    }, Object.create(null));

    function isForbiddenExtension(ext) {
      return ext in forbiddenExtensions;
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        if (isRequire(node)) {
          var id = getId(node);
          var ext = getExtension(id);
          if (!isPackage(id) && isForbiddenExtension(ext)) {
            context.report({
              node: node,
              message: 'Unable to require module with extension \'' + ext + '\''
            });
          }
        }
      },

      Program: function() {
        if (isWarnedForDeprecation || /\=-(f|-format)=/.test(process.argv.join('='))) {
          return;
        }

        /* eslint-disable no-console */
        console.log('The react/require-extension rule is deprecated. Please ' +
                    'use the import/extensions rule from eslint-plugin-import instead.');
        /* eslint-enable no-console */
        isWarnedForDeprecation = true;
      }

    };

  }
};
