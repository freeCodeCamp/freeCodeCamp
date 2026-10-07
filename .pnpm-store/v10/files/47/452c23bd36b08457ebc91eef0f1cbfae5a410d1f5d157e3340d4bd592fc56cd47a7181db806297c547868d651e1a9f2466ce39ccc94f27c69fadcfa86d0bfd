/**
 * @fileoverview HTML special characters should be escaped.
 * @author Patrick Hayes
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const getSourceCode = require('../util/eslint').getSourceCode;
const jsxUtil = require('../util/jsx');
const report = require('../util/report');
const getMessageData = require('../util/message');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

// NOTE: '<' and '{' are also problematic characters, but they do not need
// to be included here because it is a syntax error when these characters are
// included accidentally.
const DEFAULTS = [{
  char: '>',
  alternatives: ['&gt;'],
}, {
  char: '"',
  alternatives: ['&quot;', '&ldquo;', '&#34;', '&rdquo;'],
}, {
  char: '\'',
  alternatives: ['&apos;', '&lsquo;', '&#39;', '&rsquo;'],
}, {
  char: '}',
  alternatives: ['&#125;'],
}];

const messages = {
  unescapedEntity: 'HTML entity, `{{entity}}` , must be escaped.',
  unescapedEntityAlts: '`{{entity}}` can be escaped with {{alts}}.',
  replaceWithAlt: 'Replace with `{{alt}}`.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    hasSuggestions: true,
    docs: {
      description: 'Disallow unescaped HTML entities from appearing in markup',
      category: 'Possible Errors',
      recommended: true,
      url: docsUrl('no-unescaped-entities'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        forbid: {
          type: 'array',
          items: {
            anyOf: [{
              type: 'string',
            }, {
              type: 'object',
              properties: {
                char: {
                  type: 'string',
                },
                alternatives: {
                  type: 'array',
                  uniqueItems: true,
                  items: {
                    type: 'string',
                  },
                },
              },
            }],
          },
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    function reportInvalidEntity(node) {
      const configuration = context.options[0] || {};
      const entities = configuration.forbid || DEFAULTS;

      // HTML entities are already escaped in node.value (as well as node.raw),
      // so pull the raw text from getSourceCode(context)
      for (let i = node.loc.start.line; i <= node.loc.end.line; i++) {
        let rawLine = getSourceCode(context).lines[i - 1];
        let start = 0;
        let end = rawLine.length;
        if (i === node.loc.start.line) {
          start = node.loc.start.column;
        }
        if (i === node.loc.end.line) {
          end = node.loc.end.column;
        }
        rawLine = rawLine.slice(start, end);
        for (let j = 0; j < entities.length; j++) {
          for (let index = 0; index < rawLine.length; index++) {
            const c = rawLine[index];
            if (typeof entities[j] === 'string') {
              if (c === entities[j]) {
                report(context, messages.unescapedEntity, 'unescapedEntity', {
                  node,
                  loc: { line: i, column: start + index },
                  data: {
                    entity: entities[j],
                  },
                });
              }
            } else if (c === entities[j].char) {
              report(context, messages.unescapedEntityAlts, 'unescapedEntityAlts', {
                node,
                loc: { line: i, column: start + index },
                data: {
                  entity: entities[j].char,
                  alts: entities[j].alternatives.map((alt) => `\`${alt}\``).join(', '),
                },
                suggest: entities[j].alternatives.map((alt) => Object.assign(
                  getMessageData('replaceWithAlt', messages.replaceWithAlt),
                  {
                    data: { alt },
                    fix(fixer) {
                      const lineToChange = i - node.loc.start.line;

                      const newText = node.raw.split('\n').map((line, idx) => {
                        if (idx === lineToChange) {
                          return line.slice(0, index) + alt + line.slice(index + 1);
                        }

                        return line;
                      }).join('\n');

                      return fixer.replaceText(node, newText);
                    },
                  }
                )),
              });
            }
          }
        }
      }
    }

    return {
      'Literal, JSXText'(node) {
        if (jsxUtil.isJSX(node.parent)) {
          reportInvalidEntity(node);
        }
      },
    };
  },
};
