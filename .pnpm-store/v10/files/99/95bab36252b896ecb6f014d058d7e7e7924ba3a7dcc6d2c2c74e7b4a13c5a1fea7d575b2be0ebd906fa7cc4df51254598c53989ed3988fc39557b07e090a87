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
    defaultDestructuredRootDescription = 'The root object',
    setDefaultDestructuredRootDescription = false
  } = context.options[0] || {};
  const functionParameterNames = utils.getFunctionParameterNames();
  let rootCount = -1;
  utils.forEachPreferredTag('param', (jsdocParameter, targetTagName) => {
    rootCount += jsdocParameter.name.includes('.') ? 0 : 1;
    if (!jsdocParameter.description.trim()) {
      if (Array.isArray(functionParameterNames[rootCount])) {
        if (settings.exemptDestructuredRootsFromChecks) {
          return;
        }
        if (setDefaultDestructuredRootDescription) {
          utils.reportJSDoc(`Missing root description for @${targetTagName}.`, jsdocParameter, () => {
            utils.changeTag(jsdocParameter, {
              description: defaultDestructuredRootDescription,
              postName: ' '
            });
          });
          return;
        }
      }
      report(`Missing JSDoc @${targetTagName} "${jsdocParameter.name}" description.`, null, jsdocParameter);
    }
  });
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Requires that each `@param` tag has a `description` value.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header'
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
        defaultDestructuredRootDescription: {
          type: 'string'
        },
        setDefaultDestructuredRootDescription: {
          type: 'boolean'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=requireParamDescription.cjs.map