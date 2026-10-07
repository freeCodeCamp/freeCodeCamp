"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _iterateJsdoc.default)(({
  context,
  jsdoc,
  report,
  utils
}) => {
  if (utils.avoidDocs()) {
    return;
  }
  const {
    enableFixer = true,
    exemptNoArguments = false
  } = context.options[0] || {};
  const targetTagName = 'example';
  const functionExamples = jsdoc.tags.filter(({
    tag
  }) => {
    return tag === targetTagName;
  });
  if (!functionExamples.length) {
    if (exemptNoArguments && utils.isIteratingFunction() && !utils.hasParams()) {
      return;
    }
    utils.reportJSDoc(`Missing JSDoc @${targetTagName} declaration.`, null, () => {
      if (enableFixer) {
        utils.addTag(targetTagName);
      }
    });
    return;
  }
  for (const example of functionExamples) {
    const exampleContent = `${example.name} ${utils.getTagDescription(example)}`.trim().split('\n').filter(Boolean);
    if (!exampleContent.length) {
      report(`Missing JSDoc @${targetTagName} description.`, null, example);
    }
  }
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Requires that all functions have examples.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header'
    },
    fixable: 'code',
    schema: [{
      additionalProperties: false,
      properties: {
        checkConstructors: {
          default: true,
          type: 'boolean'
        },
        checkGetters: {
          default: false,
          type: 'boolean'
        },
        checkSetters: {
          default: false,
          type: 'boolean'
        },
        contexts: {
          items: {
            anyOf: [{
              type: 'string'
            }, {
              additionalProperties: false,
              properties: {
                comment: {
                  type: 'string'
                },
                context: {
                  type: 'string'
                }
              },
              type: 'object'
            }]
          },
          type: 'array'
        },
        enableFixer: {
          default: true,
          type: 'boolean'
        },
        exemptedBy: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        exemptNoArguments: {
          default: false,
          type: 'boolean'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=requireExample.cjs.map