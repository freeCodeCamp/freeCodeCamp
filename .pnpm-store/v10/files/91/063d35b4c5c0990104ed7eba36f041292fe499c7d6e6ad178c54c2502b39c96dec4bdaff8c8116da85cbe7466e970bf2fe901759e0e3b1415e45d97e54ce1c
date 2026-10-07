"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _iterateJsdoc.default)(({
  context,
  report,
  settings,
  utils
}) => {
  const {
    defaultDestructuredRootType = 'object',
    setDefaultDestructuredRootType = false
  } = context.options[0] || {};
  const functionParameterNames = utils.getFunctionParameterNames();
  let rootCount = -1;
  utils.forEachPreferredTag('param', (jsdocParameter, targetTagName) => {
    rootCount += jsdocParameter.name.includes('.') ? 0 : 1;
    if (!jsdocParameter.type) {
      if (Array.isArray(functionParameterNames[rootCount])) {
        if (settings.exemptDestructuredRootsFromChecks) {
          return;
        }
        if (setDefaultDestructuredRootType) {
          utils.reportJSDoc(`Missing root type for @${targetTagName}.`, jsdocParameter, () => {
            utils.changeTag(jsdocParameter, {
              postType: ' ',
              type: `{${defaultDestructuredRootType}}`
            });
          });
          return;
        }
      }
      report(`Missing JSDoc @${targetTagName} "${jsdocParameter.name}" type.`, null, jsdocParameter);
    }
  });
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Requires that each `@param` tag has a `type` value.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header'
    },
    fixable: 'code',
    schema: [{
      additionalProperties: false,
      properties: {
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
        defaultDestructuredRootType: {
          type: 'string'
        },
        setDefaultDestructuredRootType: {
          type: 'boolean'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=requireParamType.cjs.map