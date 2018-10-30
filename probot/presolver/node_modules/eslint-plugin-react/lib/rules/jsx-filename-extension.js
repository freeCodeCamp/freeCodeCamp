/**
 * @fileoverview Restrict file extensions that may contain JSX
 * @author Joe Lencioni
 */
'use strict';

var path = require('path');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DEFAULTS = {
  extensions: ['.jsx']
};

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Restrict file extensions that may contain JSX',
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


    function getExtensionsConfig() {
      return context.options[0] && context.options[0].extensions || DEFAULTS.extensions;
    }

    var invalidExtension;
    var invalidNode;

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXElement: function(node) {
        var filename = context.getFilename();
        if (filename === '<text>') {
          return;
        }

        if (invalidNode) {
          return;
        }

        var allowedExtensions = getExtensionsConfig();
        var isAllowedExtension = allowedExtensions.some(function (extension) {
          return filename.slice(-extension.length) === extension;
        });

        if (isAllowedExtension) {
          return;
        }

        invalidNode = node;
        invalidExtension = path.extname(filename);
      },

      'Program:exit': function() {
        if (!invalidNode) {
          return;
        }

        context.report({
          node: invalidNode,
          message: 'JSX not allowed in files with extension \'' + invalidExtension + '\''
        });
      }
    };

  }
};
