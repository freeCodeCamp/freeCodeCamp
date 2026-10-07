"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
var _jsdoccomment = require("@es-joy/jsdoccomment");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const strictNativeTypes = ['undefined', 'null', 'boolean', 'number', 'bigint', 'string', 'symbol', 'object', 'Array', 'Function', 'Date', 'RegExp'];

/**
 * Adjusts the parent type node `meta` for generic matches (or type node
 * `type` for `JsdocTypeAny`) and sets the type node `value`.
 * @param {string} type The actual type
 * @param {string} preferred The preferred type
 * @param {boolean} isGenericMatch
 * @param {string} typeNodeName
 * @param {import('jsdoc-type-pratt-parser').NonRootResult} node
 * @param {import('jsdoc-type-pratt-parser').NonRootResult|undefined} parentNode
 * @returns {void}
 */
const adjustNames = (type, preferred, isGenericMatch, typeNodeName, node, parentNode) => {
  let ret = preferred;
  if (isGenericMatch) {
    const parentMeta = /** @type {import('jsdoc-type-pratt-parser').GenericResult} */parentNode.meta;
    if (preferred === '[]') {
      parentMeta.brackets = 'square';
      parentMeta.dot = false;
      ret = 'Array';
    } else {
      const dotBracketEnd = preferred.match(/\.(?:<>)?$/u);
      if (dotBracketEnd) {
        parentMeta.brackets = 'angle';
        parentMeta.dot = true;
        ret = preferred.slice(0, -dotBracketEnd[0].length);
      } else {
        const bracketEnd = preferred.endsWith('<>');
        if (bracketEnd) {
          parentMeta.brackets = 'angle';
          parentMeta.dot = false;
          ret = preferred.slice(0, -2);
        } else if ((parentMeta === null || parentMeta === void 0 ? void 0 : parentMeta.brackets) === 'square' && (typeNodeName === '[]' || typeNodeName === 'Array')) {
          parentMeta.brackets = 'angle';
          parentMeta.dot = false;
        }
      }
    }
  } else if (type === 'JsdocTypeAny') {
    node.type = 'JsdocTypeName';
  }

  /** @type {import('jsdoc-type-pratt-parser').NameResult} */
  node.value = ret.replace(/(?:\.|<>|\.<>|\[\])$/u, '');

  // For bare pseudo-types like `<>`
  if (!ret) {
    /** @type {import('jsdoc-type-pratt-parser').NameResult} */node.value = typeNodeName;
  }
};

/**
 * @param {boolean} [upperCase]
 * @returns {string}
 */
const getMessage = upperCase => {
  return 'Use object shorthand or index signatures instead of ' + '`' + (upperCase ? 'O' : 'o') + 'bject`, e.g., `{[key: string]: string}`';
};
var _default = exports.default = (0, _iterateJsdoc.default)(({
  jsdocNode,
  sourceCode,
  report,
  utils,
  settings,
  context
}) => {
  const jsdocTagsWithPossibleType = utils.filterTags(tag => {
    return Boolean(utils.tagMightHaveTypePosition(tag.tag));
  });
  const
  /**
   * @type {{
   *   preferredTypes: import('../iterateJsdoc.js').PreferredTypes,
   *   structuredTags: import('../iterateJsdoc.js').StructuredTags,
   *   mode: import('../jsdocUtils.js').ParserMode
   * }}
   */
  {
    preferredTypes: preferredTypesOriginal,
    structuredTags,
    mode
  } = settings;
  const injectObjectPreferredTypes = !('Object' in preferredTypesOriginal || 'object' in preferredTypesOriginal || 'object.<>' in preferredTypesOriginal || 'Object.<>' in preferredTypesOriginal || 'object<>' in preferredTypesOriginal);

  /**
   * @type {{
   *   message: string,
   *   replacement: false
   * }}
   */
  const info = {
    message: getMessage(),
    replacement: false
  };

  /**
   * @type {{
   *   message: string,
   *   replacement: false
   * }}
   */
  const infoUC = {
    message: getMessage(true),
    replacement: false
  };

  /** @type {import('../iterateJsdoc.js').PreferredTypes} */
  const typeToInject = mode === 'typescript' ? {
    Object: 'object',
    'object.<>': info,
    'Object.<>': infoUC,
    'object<>': info,
    'Object<>': infoUC
  } : {
    Object: 'object',
    'object.<>': 'Object<>',
    'Object.<>': 'Object<>',
    'object<>': 'Object<>'
  };

  /** @type {import('../iterateJsdoc.js').PreferredTypes} */
  const preferredTypes = {
    ...(injectObjectPreferredTypes ? typeToInject : {}),
    ...preferredTypesOriginal
  };
  const
  /**
   * @type {{
   *   noDefaults: boolean,
   *   unifyParentAndChildTypeChecks: boolean,
   *   exemptTagContexts: ({
   *     tag: string,
   *     types: true|string[]
   *   })[]
   * }}
   */
  {
    noDefaults,
    unifyParentAndChildTypeChecks,
    exemptTagContexts = []
  } = context.options[0] || {};

  /**
   * Gets information about the preferred type: whether there is a matching
   * preferred type, what the type is, and whether it is a match to a generic.
   * @param {string} _type Not currently in use
   * @param {string} typeNodeName
   * @param {import('jsdoc-type-pratt-parser').NonRootResult|undefined} parentNode
   * @param {string|undefined} property
   * @returns {[hasMatchingPreferredType: boolean, typeName: string, isGenericMatch: boolean]}
   */
  const getPreferredTypeInfo = (_type, typeNodeName, parentNode, property) => {
    let hasMatchingPreferredType = false;
    let isGenericMatch = false;
    let typeName = typeNodeName;
    const isNameOfGeneric = parentNode !== undefined && parentNode.type === 'JsdocTypeGeneric' && property === 'left';
    if (unifyParentAndChildTypeChecks || isNameOfGeneric) {
      var _parentNode$meta, _parentNode$meta2;
      const brackets = /** @type {import('jsdoc-type-pratt-parser').GenericResult} */parentNode === null || parentNode === void 0 || (_parentNode$meta = parentNode.meta) === null || _parentNode$meta === void 0 ? void 0 : _parentNode$meta.brackets;
      const dot = /** @type {import('jsdoc-type-pratt-parser').GenericResult} */parentNode === null || parentNode === void 0 || (_parentNode$meta2 = parentNode.meta) === null || _parentNode$meta2 === void 0 ? void 0 : _parentNode$meta2.dot;
      if (brackets === 'angle') {
        const checkPostFixes = dot ? ['.', '.<>'] : ['<>'];
        isGenericMatch = checkPostFixes.some(checkPostFix => {
          if ((preferredTypes === null || preferredTypes === void 0 ? void 0 : preferredTypes[typeNodeName + checkPostFix]) !== undefined) {
            typeName += checkPostFix;
            return true;
          }
          return false;
        });
      }
      if (!isGenericMatch && property && /** @type {import('jsdoc-type-pratt-parser').NonRootResult} */parentNode.type === 'JsdocTypeGeneric') {
        const checkPostFixes = dot ? ['.', '.<>'] : [brackets === 'angle' ? '<>' : '[]'];
        isGenericMatch = checkPostFixes.some(checkPostFix => {
          if ((preferredTypes === null || preferredTypes === void 0 ? void 0 : preferredTypes[checkPostFix]) !== undefined) {
            typeName = checkPostFix;
            return true;
          }
          return false;
        });
      }
    }
    const directNameMatch = (preferredTypes === null || preferredTypes === void 0 ? void 0 : preferredTypes[typeNodeName]) !== undefined && !Object.values(preferredTypes).includes(typeNodeName);
    const unifiedSyntaxParentMatch = property && directNameMatch && unifyParentAndChildTypeChecks;
    isGenericMatch = isGenericMatch || Boolean(unifiedSyntaxParentMatch);
    hasMatchingPreferredType = isGenericMatch || directNameMatch && !property;
    return [hasMatchingPreferredType, typeName, isGenericMatch];
  };

  /**
   * Iterates strict types to see if any should be added to `invalidTypes` (and
   * the the relevant strict type returned as the new preferred type).
   * @param {string} typeNodeName
   * @param {string|undefined} preferred
   * @param {import('jsdoc-type-pratt-parser').NonRootResult|undefined} parentNode
   * @param {(string|false|undefined)[][]} invalidTypes
   * @returns {string|undefined} The `preferred` type string, optionally changed
   */
  const checkNativeTypes = (typeNodeName, preferred, parentNode, invalidTypes) => {
    let changedPreferred = preferred;
    for (const strictNativeType of strictNativeTypes) {
      var _parentNode$elements, _parentNode$left, _parentNode$left2;
      if (strictNativeType === 'object' && (
      // This is not set to remap with exact type match (e.g.,
      //   `object: 'Object'`), so can ignore (including if circular)
      !(preferredTypes !== null && preferredTypes !== void 0 && preferredTypes[typeNodeName]) ||
      // Although present on `preferredTypes` for remapping, this is a
      //   parent object without a parent match (and not
      //   `unifyParentAndChildTypeChecks`) and we don't want
      //   `object<>` given TypeScript issue https://github.com/microsoft/TypeScript/issues/20555
      /**
       * @type {import('jsdoc-type-pratt-parser').GenericResult}
       */
      parentNode !== null && parentNode !== void 0 && (_parentNode$elements = parentNode.elements) !== null && _parentNode$elements !== void 0 && _parentNode$elements.length && (
      /**
       * @type {import('jsdoc-type-pratt-parser').GenericResult}
       */
      (parentNode === null || parentNode === void 0 || (_parentNode$left = parentNode.left) === null || _parentNode$left === void 0 ? void 0 : _parentNode$left.type) === 'JsdocTypeName' &&
      /**
       * @type {import('jsdoc-type-pratt-parser').GenericResult}
       */
      (parentNode === null || parentNode === void 0 || (_parentNode$left2 = parentNode.left) === null || _parentNode$left2 === void 0 ? void 0 : _parentNode$left2.value) === 'Object'))) {
        continue;
      }
      if (strictNativeType !== typeNodeName && strictNativeType.toLowerCase() === typeNodeName.toLowerCase() && (
      // Don't report if user has own map for a strict native type
      !preferredTypes || (preferredTypes === null || preferredTypes === void 0 ? void 0 : preferredTypes[strictNativeType]) === undefined)) {
        changedPreferred = strictNativeType;
        invalidTypes.push([typeNodeName, changedPreferred]);
        break;
      }
    }
    return changedPreferred;
  };

  /**
   * Collect invalid type info.
   * @param {string} type
   * @param {string} value
   * @param {string} tagName
   * @param {string} nameInTag
   * @param {number} idx
   * @param {string|undefined} property
   * @param {import('jsdoc-type-pratt-parser').NonRootResult} node
   * @param {import('jsdoc-type-pratt-parser').NonRootResult|undefined} parentNode
   * @param {(string|false|undefined)[][]} invalidTypes
   * @returns {void}
   */
  const getInvalidTypes = (type, value, tagName, nameInTag, idx, property, node, parentNode, invalidTypes) => {
    let typeNodeName = type === 'JsdocTypeAny' ? '*' : value;
    const [hasMatchingPreferredType, typeName, isGenericMatch] = getPreferredTypeInfo(type, typeNodeName, parentNode, property);
    let preferred;
    let types;
    if (hasMatchingPreferredType) {
      const preferredSetting = preferredTypes[typeName];
      typeNodeName = typeName === '[]' ? typeName : typeNodeName;
      if (!preferredSetting) {
        invalidTypes.push([typeNodeName]);
      } else if (typeof preferredSetting === 'string') {
        preferred = preferredSetting;
        invalidTypes.push([typeNodeName, preferred]);
      } else if (preferredSetting && typeof preferredSetting === 'object') {
        const nextItem = preferredSetting.skipRootChecking && jsdocTagsWithPossibleType[idx + 1];
        if (!nextItem || !nextItem.name.startsWith(`${nameInTag}.`)) {
          preferred = preferredSetting.replacement;
          invalidTypes.push([typeNodeName, preferred, preferredSetting.message]);
        }
      } else {
        utils.reportSettings('Invalid `settings.jsdoc.preferredTypes`. Values must be falsy, a string, or an object.');
        return;
      }
    } else if (Object.entries(structuredTags).some(([tag, {
      type: typs
    }]) => {
      types = typs;
      return tag === tagName && Array.isArray(types) && !types.includes(typeNodeName);
    })) {
      invalidTypes.push([typeNodeName, types]);
    } else if (!noDefaults && type === 'JsdocTypeName') {
      preferred = checkNativeTypes(typeNodeName, preferred, parentNode, invalidTypes);
    }

    // For fixer
    if (preferred) {
      adjustNames(type, preferred, isGenericMatch, typeNodeName, node, parentNode);
    }
  };
  for (const [idx, jsdocTag] of jsdocTagsWithPossibleType.entries()) {
    /** @type {(string|false|undefined)[][]} */
    const invalidTypes = [];
    let typeAst;
    try {
      typeAst = mode === 'permissive' ? (0, _jsdoccomment.tryParse)(jsdocTag.type) : (0, _jsdoccomment.parse)(jsdocTag.type, mode);
    } catch {
      continue;
    }
    const {
      tag: tagName,
      name: nameInTag
    } = jsdocTag;
    (0, _jsdoccomment.traverse)(typeAst, (node, parentNode, property) => {
      const {
        type,
        value
      } =
      /**
       * @type {import('jsdoc-type-pratt-parser').NameResult}
       */
      node;
      if (!['JsdocTypeName', 'JsdocTypeAny'].includes(type)) {
        return;
      }
      getInvalidTypes(type, value, tagName, nameInTag, idx, property, node, parentNode, invalidTypes);
    });
    if (invalidTypes.length) {
      const fixedType = (0, _jsdoccomment.stringify)(typeAst);

      /**
       * @type {import('eslint').Rule.ReportFixer}
       */
      const fix = fixer => {
        return fixer.replaceText(jsdocNode, sourceCode.getText(jsdocNode).replace(`{${jsdocTag.type}}`, `{${fixedType}}`));
      };
      for (const [badType, preferredType = '', msg] of invalidTypes) {
        const tagValue = jsdocTag.name ? ` "${jsdocTag.name}"` : '';
        if (exemptTagContexts.some(({
          tag,
          types
        }) => {
          return tag === tagName && (types === true || types.includes(jsdocTag.type));
        })) {
          continue;
        }
        report(msg || `Invalid JSDoc @${tagName}${tagValue} type "${badType}"` + (preferredType ? '; ' : '.') + (preferredType ? `prefer: ${JSON.stringify(preferredType)}.` : ''), preferredType ? fix : null, jsdocTag, msg ? {
          tagName,
          tagValue
        } : undefined);
      }
    }
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Reports invalid types.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header'
    },
    fixable: 'code',
    schema: [{
      additionalProperties: false,
      properties: {
        exemptTagContexts: {
          items: {
            additionalProperties: false,
            properties: {
              tag: {
                type: 'string'
              },
              types: {
                oneOf: [{
                  type: 'boolean'
                }, {
                  items: {
                    type: 'string'
                  },
                  type: 'array'
                }]
              }
            },
            type: 'object'
          },
          type: 'array'
        },
        noDefaults: {
          type: 'boolean'
        },
        unifyParentAndChildTypeChecks: {
          type: 'boolean'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=checkTypes.cjs.map