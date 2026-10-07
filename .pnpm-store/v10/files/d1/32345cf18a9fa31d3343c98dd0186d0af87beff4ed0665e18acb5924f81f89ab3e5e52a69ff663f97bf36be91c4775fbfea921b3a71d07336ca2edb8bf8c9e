import iterateJsdoc from '../iterateJsdoc.js';
import {
  getSettings,
} from '../iterateJsdoc.js';
import {
  getIndent,
  getContextObject,
  enforcedContexts,
} from '../jsdocUtils.js';
import {
  getNonJsdocComment,
  getDecorator,
  getReducedASTNode,
  getFollowingComment,
} from '@es-joy/jsdoccomment';

/** @type {import('eslint').Rule.RuleModule} */
export default {
  create (context) {
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
      sourceCode = context.getSourceCode(),
    } = context;
    const settings = getSettings(context);
    if (!settings) {
      return {};
    }

    const {
      contexts = settings.contexts || [],
      contextsAfter = /** @type {string[]} */ ([]),
      contextsBeforeAndAfter = [
        'VariableDeclarator', 'TSPropertySignature', 'PropertyDefinition'
      ],
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
      const loc = {
        end: {
          column: 0,
          /* c8 ignore next 2 -- Guard */
          // @ts-expect-error Ok
          line: (comment.loc?.start?.line ?? 1),
        },
        start: {
          column: 0,
          /* c8 ignore next 2 -- Guard */
          // @ts-expect-error Ok
          line: (comment.loc?.start?.line ?? 1)
        },
      };

      context.report({
        fix: enableFixer ? fixer : null,
        loc,
        messageId,
        node,
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
      return /** @type {import('eslint').Rule.ReportFixer} */ (fixer) => {
        // Default to one line break if the `minLines`/`maxLines` settings allow
        const lines = settings.minLines === 0 && settings.maxLines >= 1 ? 1 : settings.minLines;
        let baseNode =
          /**
           * @type {import('@typescript-eslint/types').TSESTree.Node|import('eslint').Rule.Node}
           */ (
            getReducedASTNode(node, sourceCode)
          );

        const decorator = getDecorator(
          /** @type {import('eslint').Rule.Node} */
          (baseNode)
        );
        if (decorator) {
          baseNode = /** @type {import('@typescript-eslint/types').TSESTree.Decorator} */ (
            decorator
          );
        }

        const indent = getIndent({
          text: sourceCode.getText(
            /** @type {import('eslint').Rule.Node} */ (baseNode),
            /** @type {import('eslint').AST.SourceLocation} */
            (
              /** @type {import('eslint').Rule.Node} */ (baseNode).loc
            ).start.column,
          ),
        });

        const {
          inlineCommentBlock,
        } =
          /**
           * @type {{
           *     context: string,
           *     inlineCommentBlock: boolean,
           *     minLineCount: import('../iterateJsdoc.js').Integer
           *   }[]}
           */ (ctxts).find((contxt) => {
            if (typeof contxt === 'string') {
              return false;
            }

            const {
              context: ctxt,
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
      const comment = getNonJsdocComment(sourceCode, node, settings);

      if (
        !comment ||
        /** @type {string[]} */
        (allowedPrefixes).some((prefix) => {
          return comment.value.trimStart().startsWith(prefix);
        })
      ) {
        return;
      }

      reportingNonJsdoc = true;

      /** @type {AddComment} */
      const addComment = (inlineCommentBlock, comment, indent, lines, fixer) => {
        const insertion = (
          inlineCommentBlock || enforceJsdocLineStyle === 'single'
            ? `/** ${comment.value.trim()} `
            : `/**\n${indent}*${comment.value.trimEnd()}\n${indent}`
        ) +
            `*/${'\n'.repeat((lines || 1) - 1)}`;

        return fixer.replaceText(
          /** @type {import('eslint').AST.Token} */
          (comment),
          insertion,
        );
      };

      reportings(comment, node, addComment, contexts);
    };

    /**
     * @param {import('eslint').Rule.Node} node
     * @param {import('../iterateJsdoc.js').Context[]} ctxts
     */
    const checkNonJsdocAfter = (node, ctxts) => {
      const comment = getFollowingComment(sourceCode, node);

      if (
        !comment ||
        comment.value.startsWith('*') ||
        /** @type {string[]} */
        (allowedPrefixes).some((prefix) => {
          return comment.value.trimStart().startsWith(prefix);
        })
      ) {
        return;
      }

      /** @type {AddComment} */
      const addComment = (inlineCommentBlock, comment, indent, lines, fixer) => {
        const insertion = (
          inlineCommentBlock || enforceJsdocLineStyle === 'single'
            ? `/** ${comment.value.trim()} `
            : `/**\n${indent}*${comment.value.trimEnd()}\n${indent}`
        ) +
            `*/${'\n'.repeat((lines || 1) - 1)}${lines ? `\n${indent.slice(1)}` : ' '}`;

        return [fixer.remove(
          /** @type {import('eslint').AST.Token} */
          (comment)
        ), fixer.insertTextBefore(
          node.type === 'VariableDeclarator' ? node.parent : node,
          insertion,
        )];
      };

      reportings(comment, node, addComment, ctxts);
    };

    // Todo: add contexts to check after (and handle if want both before and after)
    return {
      ...getContextObject(
        enforcedContexts(context, true, settings),
        checkNonJsdoc,
      ),
      ...getContextObject(
        contextsAfter,
        (_info, _handler, node) => {
          checkNonJsdocAfter(node, contextsAfter);
        },
      ),
      ...getContextObject(
        contextsBeforeAndAfter,
        (_info, _handler, node) => {
          checkNonJsdoc({}, null, node);
          if (!reportingNonJsdoc) {
            checkNonJsdocAfter(node, contextsBeforeAndAfter);
          }
        }
      )
    };
  },
  meta: {
    fixable: 'code',

    messages: {
      blockCommentsJsdocStyle: 'Block comments should be JSDoc-style.',
      lineCommentsJsdocStyle: 'Line comments should be JSDoc-style.',
    },

    docs: {
      description: 'Converts non-JSDoc comments preceding or following nodes into JSDoc ones',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md#repos-sticky-header',
    },
    schema: [
      {
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
              anyOf: [
                {
                  type: 'string',
                },
                {
                  additionalProperties: false,
                  properties: {
                    context: {
                      type: 'string',
                    },
                    inlineCommentBlock: {
                      type: 'boolean',
                    },
                  },
                  type: 'object',
                },
              ],
            },
            type: 'array',
          },
          contextsAfter: {
            items: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  additionalProperties: false,
                  properties: {
                    context: {
                      type: 'string',
                    },
                    inlineCommentBlock: {
                      type: 'boolean',
                    },
                  },
                  type: 'object',
                },
              ],
            },
            type: 'array',
          },
          contextsBeforeAndAfter: {
            items: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  additionalProperties: false,
                  properties: {
                    context: {
                      type: 'string',
                    },
                    inlineCommentBlock: {
                      type: 'boolean',
                    },
                  },
                  type: 'object',
                },
              ],
            },
            type: 'array',
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
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
};
