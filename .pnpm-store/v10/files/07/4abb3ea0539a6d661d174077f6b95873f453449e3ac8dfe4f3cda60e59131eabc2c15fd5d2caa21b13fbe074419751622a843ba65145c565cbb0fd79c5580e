"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _iterateJsdoc.default)(({
  context,
  utils
}) => {
  const {
    noOptionalParamNames
  } = context.options[0] || {};
  const paramTags = utils.getPresentTags(['param', 'arg', 'argument']);
  for (const tag of paramTags) {
    if (noOptionalParamNames && tag.optional) {
      utils.reportJSDoc(`Optional param names are not permitted on @${tag.tag}.`, tag, () => {
        utils.changeTag(tag, {
          name: tag.name.replace(/([^=]*)(=.+)?/u, '$1')
        });
      });
    } else if (tag.default) {
      utils.reportJSDoc(`Defaults are not permitted on @${tag.tag}.`, tag, () => {
        utils.changeTag(tag, {
          name: tag.name.replace(/([^=]*)(=.+)?/u, '[$1]')
        });
      });
    }
  }
  const defaultTags = utils.getPresentTags(['default', 'defaultvalue']);
  for (const tag of defaultTags) {
    if (tag.description.trim()) {
      utils.reportJSDoc(`Default values are not permitted on @${tag.tag}.`, tag, () => {
        utils.changeTag(tag, {
          description: '',
          postTag: ''
        });
      });
    }
  }
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'This rule reports defaults being used on the relevant portion of `@param` or `@default`.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header'
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
        noOptionalParamNames: {
          type: 'boolean'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=noDefaults.cjs.map