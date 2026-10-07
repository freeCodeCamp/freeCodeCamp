import exportParser from '../exportParser.js';
import {
  getSettings,
} from '../iterateJsdoc.js';
import {
  exemptSpeciaMethods,
  isConstructor,
  getFunctionParameterNames,
  hasReturnValue,
  getIndent,
  getContextObject,
  enforcedContexts,
} from '../jsdocUtils.js';
import {
  getDecorator,
  getJSDocComment,
  getReducedASTNode,
} from '@es-joy/jsdoccomment';

/**
 * @typedef {{
 *   ancestorsOnly: boolean,
 *   esm: boolean,
 *   initModuleExports: boolean,
 *   initWindow: boolean
 * }} RequireJsdocOpts
 */

/**
 * @typedef {import('eslint').Rule.Node|
 *   import('@typescript-eslint/types').TSESTree.Node} ESLintOrTSNode
 */

/** @type {import('json-schema').JSONSchema4} */
const OPTIONS_SCHEMA = {
  additionalProperties: false,
  properties: {
    checkConstructors: {
      default: true,
      type: 'boolean',
    },
    checkGetters: {
      anyOf: [
        {
          type: 'boolean',
        },
        {
          enum: [
            'no-setter',
          ],
          type: 'string',
        },
      ],
      default: true,
    },
    checkSetters: {
      anyOf: [
        {
          type: 'boolean',
        },
        {
          enum: [
            'no-getter',
          ],
          type: 'string',
        },
      ],
      default: true,
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
              minLineCount: {
                type: 'integer',
              },
            },
            type: 'object',
          },
        ],
      },
      type: 'array',
    },
    enableFixer: {
      default: true,
      type: 'boolean',
    },
    exemptEmptyConstructors: {
      default: false,
      type: 'boolean',
    },
    exemptEmptyFunctions: {
      default: false,
      type: 'boolean',
    },
    fixerMessage: {
      default: '',
      type: 'string',
    },
    minLineCount: {
      type: 'integer',
    },
    publicOnly: {
      oneOf: [
        {
          default: false,
          type: 'boolean',
        },
        {
          additionalProperties: false,
          default: {},
          properties: {
            ancestorsOnly: {
              type: 'boolean',
            },
            cjs: {
              type: 'boolean',
            },
            esm: {
              type: 'boolean',
            },
            window: {
              type: 'boolean',
            },
          },
          type: 'object',
        },
      ],
    },
    require: {
      additionalProperties: false,
      default: {},
      properties: {
        ArrowFunctionExpression: {
          default: false,
          type: 'boolean',
        },
        ClassDeclaration: {
          default: false,
          type: 'boolean',
        },
        ClassExpression: {
          default: false,
          type: 'boolean',
        },
        FunctionDeclaration: {
          default: true,
          type: 'boolean',
        },
        FunctionExpression: {
          default: false,
          type: 'boolean',
        },
        MethodDefinition: {
          default: false,
          type: 'boolean',
        },
      },
      type: 'object',
    },
  },
  type: 'object',
};

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('json-schema').JSONSchema4Object} baseObject
 * @param {string} option
 * @param {string} key
 * @returns {boolean|undefined}
 */
const getOption = (context, baseObject, option, key) => {
  if (context.options[0] && option in context.options[0] &&
    // Todo: boolean shouldn't be returning property, but
    //   tests currently require
    (typeof context.options[0][option] === 'boolean' ||
    key in context.options[0][option])
  ) {
    return context.options[0][option][key];
  }

  return /** @type {{[key: string]: {default?: boolean|undefined}}} */ (
    baseObject.properties
  )[key].default;
};

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('../iterateJsdoc.js').Settings} settings
 * @returns {{
 *   contexts: (string|{
 *     context: string,
 *     inlineCommentBlock: boolean,
 *     minLineCount: import('../iterateJsdoc.js').Integer
 *   })[],
 *   enableFixer: boolean,
 *   exemptEmptyConstructors: boolean,
 *   exemptEmptyFunctions: boolean,
 *   fixerMessage: string,
 *   minLineCount: undefined|import('../iterateJsdoc.js').Integer,
 *   publicOnly: boolean|{[key: string]: boolean|undefined}
 *   require: {[key: string]: boolean|undefined}
 * }}
 */
const getOptions = (context, settings) => {
  const {
    publicOnly,
    contexts = settings.contexts || [],
    exemptEmptyConstructors = true,
    exemptEmptyFunctions = false,
    enableFixer = true,
    fixerMessage = '',
    minLineCount = undefined,
  } = context.options[0] || {};

  return {
    contexts,
    enableFixer,
    exemptEmptyConstructors,
    exemptEmptyFunctions,
    fixerMessage,
    minLineCount,
    publicOnly: ((baseObj) => {
      if (!publicOnly) {
        return false;
      }

      /** @type {{[key: string]: boolean|undefined}} */
      const properties = {};
      for (const prop of Object.keys(
        /** @type {import('json-schema').JSONSchema4Object} */ (
        /** @type {import('json-schema').JSONSchema4Object} */ (
            baseObj
          ).properties),
      )) {
        const opt = getOption(
          context,
          /** @type {import('json-schema').JSONSchema4Object} */ (baseObj),
          'publicOnly',
          prop,
        );

        properties[prop] = opt;
      }

      return properties;
    })(
      /** @type {import('json-schema').JSONSchema4Object} */
      (
        /** @type {import('json-schema').JSONSchema4Object} */
        (
          /** @type {import('json-schema').JSONSchema4Object} */
          (
            OPTIONS_SCHEMA.properties
          ).publicOnly
        ).oneOf
      )[1],
    ),
    require: ((baseObj) => {
      /** @type {{[key: string]: boolean|undefined}} */
      const properties = {};
      for (const prop of Object.keys(
        /** @type {import('json-schema').JSONSchema4Object} */ (
        /** @type {import('json-schema').JSONSchema4Object} */ (
            baseObj
          ).properties),
      )) {
        const opt = getOption(
          context,
          /** @type {import('json-schema').JSONSchema4Object} */
          (baseObj),
          'require',
          prop,
        );
        properties[prop] = opt;
      }

      return properties;
    })(
      /** @type {import('json-schema').JSONSchema4Object} */
      (OPTIONS_SCHEMA.properties).require,
    ),
  };
};

/** @type {import('eslint').Rule.RuleModule} */
export default {
  create (context) {
    /* c8 ignore next -- Fallback to deprecated method */
    const {
      sourceCode = context.getSourceCode(),
    } = context;
    const settings = getSettings(context);
    if (!settings) {
      return {};
    }

    const opts = getOptions(context, settings);

    const {
      require: requireOption,
      contexts,
      exemptEmptyFunctions,
      exemptEmptyConstructors,
      enableFixer,
      fixerMessage,
      minLineCount,
    } = opts;

    const publicOnly =

      /**
       * @type {{
       *   [key: string]: boolean | undefined;
       * }}
       */ (
        opts.publicOnly
      );

    /**
     * @type {import('../iterateJsdoc.js').CheckJsdoc}
     */
    const checkJsDoc = (info, _handler, node) => {
      if (
        // Optimize
        minLineCount !== undefined || contexts.some((ctxt) => {
          if (typeof ctxt === 'string') {
            return false;
          }

          const {
            minLineCount: count,
          } = ctxt;
          return count !== undefined;
        })
      ) {
        /**
         * @param {undefined|import('../iterateJsdoc.js').Integer} count
         */
        const underMinLine = (count) => {
          return count !== undefined && count >
            (sourceCode.getText(node).match(/\n/gu)?.length ?? 0) + 1;
        };

        if (underMinLine(minLineCount)) {
          return;
        }

        const {
          minLineCount: contextMinLineCount,
        } =
          /**
           * @type {{
           *   context: string;
           *   inlineCommentBlock: boolean;
           *   minLineCount: number;
           * }}
           */ (contexts.find((ctxt) => {
            if (typeof ctxt === 'string') {
              return false;
            }

            const {
              context: ctx,
            } = ctxt;
            return ctx === (info.selector || node.type);
          })) || {};
        if (underMinLine(contextMinLineCount)) {
          return;
        }
      }

      const jsDocNode = getJSDocComment(sourceCode, node, settings);

      if (jsDocNode) {
        return;
      }

      // For those who have options configured against ANY constructors (or
      //  setters or getters) being reported
      if (exemptSpeciaMethods(
        {
          description: '',
          inlineTags: [],
          problems: [],
          source: [],
          tags: [],
        },
        node,
        context,
        [
          OPTIONS_SCHEMA,
        ],
      )) {
        return;
      }

      if (
        // Avoid reporting param-less, return-less functions (when
        //  `exemptEmptyFunctions` option is set)
        exemptEmptyFunctions && info.isFunctionContext ||

        // Avoid reporting  param-less, return-less constructor methods (when
        //  `exemptEmptyConstructors` option is set)
        exemptEmptyConstructors && isConstructor(node)
      ) {
        const functionParameterNames = getFunctionParameterNames(node);
        if (!functionParameterNames.length && !hasReturnValue(node)) {
          return;
        }
      }

      const fix = /** @type {import('eslint').Rule.ReportFixer} */ (fixer) => {
        // Default to one line break if the `minLines`/`maxLines` settings allow
        const lines = settings.minLines === 0 && settings.maxLines >= 1 ? 1 : settings.minLines;
        /** @type {ESLintOrTSNode|import('@typescript-eslint/types').TSESTree.Decorator} */
        let baseNode = getReducedASTNode(node, sourceCode);

        const decorator = getDecorator(
          /** @type {import('eslint').Rule.Node} */
          (baseNode)
        );
        if (decorator) {
          baseNode = decorator;
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
           *   }}
           */ (contexts.find((contxt) => {
            if (typeof contxt === 'string') {
              return false;
            }

            const {
              context: ctxt,
            } = contxt;
            return ctxt === node.type;
          })) || {};
        const insertion = (inlineCommentBlock ?
          `/** ${fixerMessage}` :
          `/**\n${indent}*${fixerMessage}\n${indent}`) +
            `*/${'\n'.repeat(lines)}${indent.slice(0, -1)}`;

        return fixer.insertTextBefore(
          /** @type {import('eslint').Rule.Node} */
          (baseNode),
          insertion,
        );
      };

      const report = () => {
        const {
          start,
        } = /** @type {import('eslint').AST.SourceLocation} */ (node.loc);
        const loc = {
          end: {
            column: 0,
            line: start.line + 1,
          },
          start,
        };
        context.report({
          fix: enableFixer ? fix : null,
          loc,
          messageId: 'missingJsDoc',
          node,
        });
      };

      if (publicOnly) {
        /** @type {RequireJsdocOpts} */
        const opt = {
          ancestorsOnly: Boolean(publicOnly?.ancestorsOnly ?? false),
          esm: Boolean(publicOnly?.esm ?? true),
          initModuleExports: Boolean(publicOnly?.cjs ?? true),
          initWindow: Boolean(publicOnly?.window ?? false),
        };
        const exported = exportParser.isUncommentedExport(node, sourceCode, opt, settings);

        if (exported) {
          report();
        }
      } else {
        report();
      }
    };

    /**
     * @param {string} prop
     * @returns {boolean}
     */
    const hasOption = (prop) => {
      return requireOption[prop] || contexts.some((ctxt) => {
        return typeof ctxt === 'object' ? ctxt.context === prop : ctxt === prop;
      });
    };

    return {
      ...getContextObject(
        enforcedContexts(context, [], settings),
        checkJsDoc,
      ),
      ArrowFunctionExpression (node) {
        if (!hasOption('ArrowFunctionExpression')) {
          return;
        }

        if (
          [
            'VariableDeclarator', 'AssignmentExpression', 'ExportDefaultDeclaration',
          ].includes(node.parent.type) ||
          [
            'Property', 'ObjectProperty', 'ClassProperty', 'PropertyDefinition',
          ].includes(node.parent.type) &&
            node ===
              /**
               * @type {import('@typescript-eslint/types').TSESTree.Property|
               *   import('@typescript-eslint/types').TSESTree.PropertyDefinition
               * }
               */
              (node.parent).value
        ) {
          checkJsDoc({
            isFunctionContext: true,
          }, null, node);
        }
      },

      ClassDeclaration (node) {
        if (!hasOption('ClassDeclaration')) {
          return;
        }

        checkJsDoc({
          isFunctionContext: false,
        }, null, node);
      },

      ClassExpression (node) {
        if (!hasOption('ClassExpression')) {
          return;
        }

        checkJsDoc({
          isFunctionContext: false,
        }, null, node);
      },

      FunctionDeclaration (node) {
        if (!hasOption('FunctionDeclaration')) {
          return;
        }

        checkJsDoc({
          isFunctionContext: true,
        }, null, node);
      },

      FunctionExpression (node) {
        if (!hasOption('FunctionExpression')) {
          return;
        }

        if (
          [
            'VariableDeclarator', 'AssignmentExpression', 'ExportDefaultDeclaration',
          ].includes(node.parent.type) ||
          [
            'Property', 'ObjectProperty', 'ClassProperty', 'PropertyDefinition',
          ].includes(node.parent.type) &&
            node ===
              /**
               * @type {import('@typescript-eslint/types').TSESTree.Property|
               *   import('@typescript-eslint/types').TSESTree.PropertyDefinition
               * }
               */
              (node.parent).value
        ) {
          checkJsDoc({
            isFunctionContext: true,
          }, null, node);
        }
      },

      MethodDefinition (node) {
        if (!hasOption('MethodDefinition')) {
          return;
        }

        checkJsDoc({
          isFunctionContext: true,
          selector: 'MethodDefinition',
        }, null, /** @type {import('eslint').Rule.Node} */ (node.value));
      },
    };
  },
  meta: {
    docs: {
      category: 'Stylistic Issues',
      description: 'Require JSDoc comments',
      recommended: true,
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header',
    },

    fixable: 'code',

    messages: {
      missingJsDoc: 'Missing JSDoc comment.',
    },

    schema: [
      OPTIONS_SCHEMA,
    ],

    type: 'suggestion',
  },
};
