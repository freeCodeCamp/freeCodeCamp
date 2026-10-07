"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// If supporting Node >= 10, we could loosen the default to this for the
//   initial letter: \\p{Upper}
const matchDescriptionDefault = '^\n?([A-Z`\\d_][\\s\\S]*[.?!`]\\s*)?$';

/**
 * @param {string} value
 * @param {string} userDefault
 * @returns {string}
 */
const stringOrDefault = (value, userDefault) => {
  return typeof value === 'string' ? value : userDefault || matchDescriptionDefault;
};
var _default = exports.default = (0, _iterateJsdoc.default)(({
  jsdoc,
  report,
  context,
  utils
}) => {
  const {
    mainDescription,
    matchDescription,
    message,
    nonemptyTags = true,
    tags = {}
  } = context.options[0] || {};

  /**
   * @param {string} desc
   * @param {import('comment-parser').Spec} [tag]
   * @returns {void}
   */
  const validateDescription = (desc, tag) => {
    let mainDescriptionMatch = mainDescription;
    let errorMessage = message;
    if (typeof mainDescription === 'object') {
      mainDescriptionMatch = mainDescription.match;
      errorMessage = mainDescription.message;
    }
    if (mainDescriptionMatch === false && (!tag || !Object.prototype.hasOwnProperty.call(tags, tag.tag))) {
      return;
    }
    let tagValue = mainDescriptionMatch;
    if (tag) {
      const tagName = tag.tag;
      if (typeof tags[tagName] === 'object') {
        tagValue = tags[tagName].match;
        errorMessage = tags[tagName].message;
      } else {
        tagValue = tags[tagName];
      }
    }
    const regex = utils.getRegexFromString(stringOrDefault(tagValue, matchDescription));
    if (!regex.test(desc)) {
      report(errorMessage || 'JSDoc description does not satisfy the regex pattern.', null, tag || {
        // Add one as description would typically be into block
        line: jsdoc.source[0].number + 1
      });
    }
  };
  const {
    description
  } = utils.getDescription();
  if (description) {
    validateDescription(description);
  }

  /**
   * @param {string} tagName
   * @returns {boolean}
   */
  const hasNoTag = tagName => {
    return !tags[tagName];
  };
  for (const tag of ['description', 'summary', 'file', 'classdesc']) {
    utils.forEachPreferredTag(tag, (matchingJsdocTag, targetTagName) => {
      const desc = (matchingJsdocTag.name + ' ' + utils.getTagDescription(matchingJsdocTag)).trim();
      if (hasNoTag(targetTagName)) {
        validateDescription(desc, matchingJsdocTag);
      }
    }, true);
  }
  if (nonemptyTags) {
    for (const tag of ['copyright', 'example', 'see', 'todo']) {
      utils.forEachPreferredTag(tag, (matchingJsdocTag, targetTagName) => {
        const desc = (matchingJsdocTag.name + ' ' + utils.getTagDescription(matchingJsdocTag)).trim();
        if (hasNoTag(targetTagName) && !/.+/u.test(desc)) {
          report('JSDoc description must not be empty.', null, matchingJsdocTag);
        }
      });
    }
  }
  if (!Object.keys(tags).length) {
    return;
  }

  /**
   * @param {string} tagName
   * @returns {boolean}
   */
  const hasOptionTag = tagName => {
    return Boolean(tags[tagName]);
  };
  const whitelistedTags = utils.filterTags(({
    tag: tagName
  }) => {
    return hasOptionTag(tagName);
  });
  const {
    tagsWithNames,
    tagsWithoutNames
  } = utils.getTagsByType(whitelistedTags);
  tagsWithNames.some(tag => {
    const desc = /** @type {string} */utils.getTagDescription(tag).replace(/^[- ]*/u, '').trim();
    return validateDescription(desc, tag);
  });
  tagsWithoutNames.some(tag => {
    const desc = (tag.name + ' ' + utils.getTagDescription(tag)).trim();
    return validateDescription(desc, tag);
  });
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Enforces a regular expression pattern on descriptions.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header'
    },
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
        mainDescription: {
          oneOf: [{
            format: 'regex',
            type: 'string'
          }, {
            type: 'boolean'
          }, {
            additionalProperties: false,
            properties: {
              match: {
                oneOf: [{
                  format: 'regex',
                  type: 'string'
                }, {
                  type: 'boolean'
                }]
              },
              message: {
                type: 'string'
              }
            },
            type: 'object'
          }]
        },
        matchDescription: {
          format: 'regex',
          type: 'string'
        },
        message: {
          type: 'string'
        },
        nonemptyTags: {
          type: 'boolean'
        },
        tags: {
          patternProperties: {
            '.*': {
              oneOf: [{
                format: 'regex',
                type: 'string'
              }, {
                enum: [true],
                type: 'boolean'
              }, {
                additionalProperties: false,
                properties: {
                  match: {
                    oneOf: [{
                      format: 'regex',
                      type: 'string'
                    }, {
                      enum: [true],
                      type: 'boolean'
                    }]
                  },
                  message: {
                    type: 'string'
                  }
                },
                type: 'object'
              }]
            }
          },
          type: 'object'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=matchDescription.cjs.map