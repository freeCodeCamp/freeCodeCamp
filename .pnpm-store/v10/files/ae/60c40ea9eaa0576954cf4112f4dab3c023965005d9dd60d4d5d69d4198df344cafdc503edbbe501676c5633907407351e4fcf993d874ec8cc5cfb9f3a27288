/**
 * @fileoverview Restrict file extensions that may contain JSX
 * @author Joe Lencioni
 */

'use strict';

const path = require('path');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

const DEFAULTS = {
  allow: 'always',
  extensions: ['.jsx'],
  ignoreFilesWithoutCode: false,
};

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noJSXWithExtension: 'JSX not allowed in files with extension \'{{ext}}\'',
  extensionOnlyForJSX: 'Only files containing JSX may use the extension \'{{ext}}\'',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow file extensions that may contain JSX',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-filename-extension'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        allow: {
          enum: ['always', 'as-needed'],
        },
        extensions: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        ignoreFilesWithoutCode: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    const filename = context.getFilename();

    let jsxNode;

    if (filename === '<text>') {
      // No need to traverse any nodes.
      return {};
    }

    const allow = (context.options[0] && context.options[0].allow) || DEFAULTS.allow;
    const allowedExtensions = (context.options[0] && context.options[0].extensions) || DEFAULTS.extensions;
    const ignoreFilesWithoutCode = (context.options[0] && context.options[0].ignoreFilesWithoutCode)
      || DEFAULTS.ignoreFilesWithoutCode;
    const isAllowedExtension = allowedExtensions.some((extension) => filename.slice(-extension.length) === extension);

    function handleJSX(node) {
      if (!jsxNode) {
        jsxNode = node;
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXElement: handleJSX,
      JSXFragment: handleJSX,

      'Program:exit'(node) {
        if (jsxNode) {
          if (!isAllowedExtension) {
            report(context, messages.noJSXWithExtension, 'noJSXWithExtension', {
              node: jsxNode,
              data: {
                ext: path.extname(filename),
              },
            });
          }
          return;
        }

        if (isAllowedExtension && allow === 'as-needed') {
          if (ignoreFilesWithoutCode && node.body.length === 0) {
            return;
          }
          report(context, messages.extensionOnlyForJSX, 'extensionOnlyForJSX', {
            node,
            data: {
              ext: path.extname(filename),
            },
          });
        }
      },
    };
  },
};
