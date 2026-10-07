"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireWildcard(require("../iterateJsdoc.cjs"));
var _jsdocUtils = require("../jsdocUtils.cjs");
var _jsdoccomment = require("@es-joy/jsdoccomment");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/** @type {import('eslint').Rule.RuleModule} */
var _default = exports.default = {
  create(context) {
    /**
     * @typedef {import('eslint').AST.Token | import('estree').Comment | {
     *   type: import('eslint').AST.TokenType|"Line"|"Block"|"Shebang",
     *   range: [number, number],
     *   value: string
     * }} Token
     */

    /**
     * @callback AddComment
     * @param {boolean|undefined} inlineCommentBlock
     * @param {Token} comment
     * @param {string} indent
     * @param {number} lines
     * @param {import('eslint').Rule.RuleFixer} fixer
     */

    /* c8 ignore next -- Fallback to deprecated method */
    const {
      sourceCode = context.getSourceCode()
    } = context;
    const settings = (0, _iterateJsdoc.getSettings)(context);
    if (!settings) {
      return {};
    }
    const {
      contexts = settings.contexts || [],
      contextsAfter = ( /** @type {string[]} */[]),
      contextsBeforeAndAfter = ['VariableDeclarator', 'TSPropertySignature', 'PropertyDefinition'],
      enableFixer = true,
      enforceJsdocLineStyle = 'multi',
      lineOrBlockStyle = 'both',
      allowedPrefixes = ['@ts-', 'istanbul ', 'c8 ', 'v8 ', 'eslint', 'prettier-']
    } = context.options[0] ?? {};
    let reportingNonJsdoc = false;

    /**
     * @param {string} messageId
     * @param {import('estree').Comment|Token} comment
     * @param {import('eslint').Rule.Node} node
     * @param {import('eslint').Rule.ReportFixer} fixer
     */
    const report = (messageId, comment, node, fixer) => {
      var _comment$loc, _comment$loc2;
      const loc = {
        end: {
          column: 0,
          /* c8 ignore next 2 -- Guard */
          // @ts-expect-error Ok
          line: ((_comment$loc = comment.loc) === null || _comment$loc === void 0 || (_comment$loc = _comment$loc.start) === null || _comment$loc === void 0 ? void 0 : _comment$loc.line) ?? 1
        },
        start: {
          column: 0,
          /* c8 ignore next 2 -- Guard */
          // @ts-expect-error Ok
          line: ((_comment$loc2 = comment.loc) === null || _comment$loc2 === void 0 || (_comment$loc2 = _comment$loc2.start) === null || _comment$loc2 === void 0 ? void 0 : _comment$loc2.line) ?? 1
        }
      };
      context.report({
        fix: enableFixer ? fixer : null,
        loc,
        messageId,
        node
      });
    };

    /**
     * @param {import('eslint').Rule.Node} node
     * @param {import('eslint').AST.Token | import('estree').Comment | {
     *   type: import('eslint').AST.TokenType|"Line"|"Block"|"Shebang",
     *   range: [number, number],
     *   value: string
     * }} comment
     * @param {AddComment} addComment
     * @param {import('../iterateJsdoc.js').Context[]} ctxts
     */
    const getFixer = (node, comment, addComment, ctxts) => {
      return /** @type {import('eslint').Rule.ReportFixer} */fixer => {
        // Default to one line break if the `minLines`/`maxLines` settings allow
        const lines = settings.minLines === 0 && settings.maxLines >= 1 ? 1 : settings.minLines;
        let baseNode =
        /**
         * @type {import('@typescript-eslint/types').TSESTree.Node|import('eslint').Rule.Node}
         */
        (0, _jsdoccomment.getReducedASTNode)(node, sourceCode);
        const decorator = (0, _jsdoccomment.getDecorator)( /** @type {import('eslint').Rule.Node} */
        baseNode);
        if (decorator) {
          baseNode = /** @type {import('@typescript-eslint/types').TSESTree.Decorator} */
          decorator;
        }
        const indent = (0, _jsdocUtils.getIndent)({
          text: sourceCode.getText( /** @type {import('eslint').Rule.Node} */baseNode, /** @type {import('eslint').AST.SourceLocation} */
          ( /** @type {import('eslint').Rule.Node} */baseNode.loc).start.column)
        });
        const {
          inlineCommentBlock
        } =
        /**
         * @type {{
         *     context: string,
         *     inlineCommentBlock: boolean,
         *     minLineCount: import('../iterateJsdoc.js').Integer
         *   }[]}
         */
        ctxts.find(contxt => {
          if (typeof contxt === 'string') {
            return false;
          }
          const {
            context: ctxt
          } = contxt;
          return ctxt === node.type;
        }) || {};
        return addComment(inlineCommentBlock, comment, indent, lines, fixer);
      };
    };

    /**
     * @param {import('eslint').AST.Token | import('estree').Comment | {
     *   type: import('eslint').AST.TokenType|"Line"|"Block"|"Shebang",
     *   range: [number, number],
     *   value: string
     * }} comment
     * @param {import('eslint').Rule.Node} node
     * @param {AddComment} addComment
     * @param {import('../iterateJsdoc.js').Context[]} ctxts
     */
    const reportings = (comment, node, addComment, ctxts) => {
      const fixer = getFixer(node, comment, addComment, ctxts);
      if (comment.type === 'Block') {
        if (lineOrBlockStyle === 'line') {
          return;
        }
        report('blockCommentsJsdocStyle', comment, node, fixer);
        return;
      }
      if (comment.type === 'Line') {
        if (lineOrBlockStyle === 'block') {
          return;
        }
        report('lineCommentsJsdocStyle', comment, node, fixer);
      }
    };

    /**
     * @type {import('../iterateJsdoc.js').CheckJsdoc}
     */
    const checkNonJsdoc = (_info, _handler, node) => {
      const comment = (0, _jsdoccomment.getNonJsdocComment)(sourceCode, node, settings);
      if (!comment || /** @type {string[]} */
      allowedPrefixes.some(prefix => {
        return comment.value.trimStart().startsWith(prefix);
      })) {
        return;
      }
      reportingNonJsdoc = true;

      /** @type {AddComment} */
      const addComment = (inlineCommentBlock, comment, indent, lines, fixer) => {
        const insertion = (inlineCommentBlock || enforceJsdocLineStyle === 'single' ? `/** ${comment.value.trim()} ` : `/**\n${indent}*${comment.value.trimEnd()}\n${indent}`) + `*/${'\n'.repeat((lines || 1) - 1)}`;
        return fixer.replaceText( /** @type {import('eslint').AST.Token} */
        comment, insertion);
      };
      reportings(comment, node, addComment, contexts);
    };

    /**
     * @param {import('eslint').Rule.Node} node
     * @param {import('../iterateJsdoc.js').Context[]} ctxts
     */
    const checkNonJsdocAfter = (node, ctxts) => {
      const comment = (0, _jsdoccomment.getFollowingComment)(sourceCode, node);
      if (!comment || comment.value.startsWith('*') || /** @type {string[]} */
      allowedPrefixes.some(prefix => {
        return comment.value.trimStart().startsWith(prefix);
      })) {
        return;
      }

      /** @type {AddComment} */
      const addComment = (inlineCommentBlock, comment, indent, lines, fixer) => {
        const insertion = (inlineCommentBlock || enforceJsdocLineStyle === 'single' ? `/** ${comment.value.trim()} ` : `/**\n${indent}*${comment.value.trimEnd()}\n${indent}`) + `*/${'\n'.repeat((lines || 1) - 1)}${lines ? `\n${indent.slice(1)}` : ' '}`;
        return [fixer.remove( /** @type {import('eslint').AST.Token} */
        comment), fixer.insertTextBefore(node.type === 'VariableDeclarator' ? node.parent : node, insertion)];
      };
      reportings(comment, node, addComment, ctxts);
    };

    // Todo: add contexts to check after (and handle if want both before and after)
    return {
      ...(0, _jsdocUtils.getContextObject)((0, _jsdocUtils.enforcedContexts)(context, true, settings), checkNonJsdoc),
      ...(0, _jsdocUtils.getContextObject)(contextsAfter, (_info, _handler, node) => {
        checkNonJsdocAfter(node, contextsAfter);
      }),
      ...(0, _jsdocUtils.getContextObject)(contextsBeforeAndAfter, (_info, _handler, node) => {
        checkNonJsdoc({}, null, node);
        if (!reportingNonJsdoc) {
          checkNonJsdocAfter(node, contextsBeforeAndAfter);
        }
      })
    };
  },
  meta: {
    fixable: 'code',
    messages: {
      blockCommentsJsdocStyle: 'Block comments should be JSDoc-style.',
      lineCommentsJsdocStyle: 'Line comments should be JSDoc-style.'
    },
    docs: {
      description: 'Converts non-JSDoc comments preceding or following nodes into JSDoc ones',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md#repos-sticky-header'
    },
    schema: [{
      additionalProperties: false,
      properties: {
        allowedPrefixes: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        contexts: {
          items: {
            anyOf: [{
              type: 'string'
            }, {
              additionalProperties: false,
              properties: {
                context: {
                  type: 'string'
                },
                inlineCommentBlock: {
                  type: 'boolean'
                }
              },
              type: 'object'
            }]
          },
          type: 'array'
        },
        contextsAfter: {
          items: {
            anyOf: [{
              type: 'string'
            }, {
              additionalProperties: false,
              properties: {
                context: {
                  type: 'string'
                },
                inlineCommentBlock: {
                  type: 'boolean'
                }
              },
              type: 'object'
            }]
          },
          type: 'array'
        },
        contextsBeforeAndAfter: {
          items: {
            anyOf: [{
              type: 'string'
            }, {
              additionalProperties: false,
              properties: {
                context: {
                  type: 'string'
                },
                inlineCommentBlock: {
                  type: 'boolean'
                }
              },
              type: 'object'
            }]
          },
          type: 'array'
        },
        enableFixer: {
          type: 'boolean'
        },
        enforceJsdocLineStyle: {
          type: 'string',
          enum: ['multi', 'single']
        },
        lineOrBlockStyle: {
          type: 'string',
          enum: ['block', 'line', 'both']
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
};
module.exports = exports.default;
//# sourceMappingURL=convertToJsdocComments.cjs.map