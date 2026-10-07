"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _path = require("path");
var _url = require("url");
var _synckit = require("synckit");
var _jsdoccomment = require("@es-joy/jsdoccomment");
var _iterateJsdoc = _interopRequireWildcard(require("../iterateJsdoc.cjs"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const _dirname = (0, _path.dirname)((0, _url.fileURLToPath)(require('url').pathToFileURL(__filename).toString()));
const pathName = (0, _path.join)(_dirname, '../import-worker.mjs');
const extraTypes = ['null', 'undefined', 'void', 'string', 'boolean', 'object', 'function', 'symbol', 'number', 'bigint', 'NaN', 'Infinity', 'any', '*', 'never', 'unknown', 'const', 'this', 'true', 'false', 'Array', 'Object', 'RegExp', 'Date', 'Function'];
const typescriptGlobals = [
// https://www.typescriptlang.org/docs/handbook/utility-types.html
'Awaited', 'Partial', 'Required', 'Readonly', 'Record', 'Pick', 'Omit', 'Exclude', 'Extract', 'NonNullable', 'Parameters', 'ConstructorParameters', 'ReturnType', 'InstanceType', 'ThisParameterType', 'OmitThisParameter', 'ThisType', 'Uppercase', 'Lowercase', 'Capitalize', 'Uncapitalize'];

/**
 * @param {string|false|undefined} [str]
 * @returns {undefined|string|false}
 */
const stripPseudoTypes = str => {
  return str && str.replace(/(?:\.|<>|\.<>|\[\])$/u, '');
};
var _default = exports.default = (0, _iterateJsdoc.default)(({
  context,
  node,
  report,
  settings,
  sourceCode,
  utils
}) => {
  var _globalScope$childSco;
  const {
    scopeManager
  } = sourceCode;

  // When is this ever `null`?
  const globalScope = /** @type {import('eslint').Scope.Scope} */
  scopeManager.globalScope;
  const
  /**
   * @type {{
   *   definedTypes: string[],
   *   disableReporting: boolean,
   *   markVariablesAsUsed: boolean
   * }}
   */
  {
    definedTypes = [],
    disableReporting = false,
    markVariablesAsUsed = true
  } = context.options[0] || {};

  /** @type {(string|undefined)[]} */
  let definedPreferredTypes = [];
  const {
    preferredTypes,
    structuredTags,
    mode
  } = settings;
  if (Object.keys(preferredTypes).length) {
    definedPreferredTypes = /** @type {string[]} */Object.values(preferredTypes).map(preferredType => {
      if (typeof preferredType === 'string') {
        // May become an empty string but will be filtered out below
        return stripPseudoTypes(preferredType);
      }
      if (!preferredType) {
        return undefined;
      }
      if (typeof preferredType !== 'object') {
        utils.reportSettings('Invalid `settings.jsdoc.preferredTypes`. Values must be falsy, a string, or an object.');
      }
      return stripPseudoTypes(preferredType.replacement);
    }).filter(Boolean);
  }
  const comments = sourceCode.getAllComments().filter(comment => {
    return /^\*\s/u.test(comment.value);
  }).map(commentNode => {
    return (0, _iterateJsdoc.parseComment)(commentNode, '');
  });
  const typedefDeclarations = comments.flatMap(doc => {
    return doc.tags.filter(({
      tag
    }) => {
      return utils.isNamepathDefiningTag(tag);
    });
  }).map(tag => {
    return tag.name;
  });
  const importTags = settings.mode === 'typescript' ? ( /** @type {string[]} */comments.flatMap(doc => {
    return doc.tags.filter(({
      tag
    }) => {
      return tag === 'import';
    });
  }).flatMap(tag => {
    const {
      type,
      name,
      description
    } = tag;
    const typePart = type ? `{${type}} ` : '';
    const imprt = 'import ' + (description ? `${typePart}${name} ${description}` : `${typePart}${name}`);
    const getImports = (0, _synckit.createSyncFn)(pathName);
    const imports = /** @type {import('parse-imports').Import[]} */getImports(imprt);
    if (!imports) {
      return null;
    }
    return imports.flatMap(({
      importClause
    }) => {
      /* c8 ignore next */
      const {
        default: dflt,
        named,
        namespace
      } = importClause || {};
      const types = [];
      if (dflt) {
        types.push(dflt);
      }
      if (namespace) {
        types.push(namespace);
      }
      if (named) {
        for (const {
          binding
        } of named) {
          types.push(binding);
        }
      }
      return types;
    });
  }).filter(Boolean)) : [];
  const ancestorNodes = [];
  let currentNode = node;
  // No need for Program node?
  while ((_currentNode = currentNode) !== null && _currentNode !== void 0 && _currentNode.parent) {
    var _currentNode;
    ancestorNodes.push(currentNode);
    currentNode = currentNode.parent;
  }

  /**
   * @param {import('eslint').Rule.Node} ancestorNode
   * @returns {import('comment-parser').Spec[]}
   */
  const getTemplateTags = function (ancestorNode) {
    const commentNode = (0, _jsdoccomment.getJSDocComment)(sourceCode, ancestorNode, settings);
    if (!commentNode) {
      return [];
    }
    const jsdoc = (0, _iterateJsdoc.parseComment)(commentNode, '');
    return jsdoc.tags.filter(tag => {
      return tag.tag === 'template';
    });
  };

  // `currentScope` may be `null` or `Program`, so in such a case,
  //  we look to present tags instead
  const templateTags = ancestorNodes.length ? ancestorNodes.flatMap(ancestorNode => {
    return getTemplateTags(ancestorNode);
  }) : utils.getPresentTags(['template']);
  const closureGenericTypes = templateTags.flatMap(tag => {
    return utils.parseClosureTemplateTag(tag);
  });

  // In modules, including Node, there is a global scope at top with the
  //  Program scope inside
  const cjsOrESMScope = ((_globalScope$childSco = globalScope.childScopes[0]) === null || _globalScope$childSco === void 0 || (_globalScope$childSco = _globalScope$childSco.block) === null || _globalScope$childSco === void 0 ? void 0 : _globalScope$childSco.type) === 'Program';
  const allDefinedTypes = new Set(globalScope.variables.map(({
    name
  }) => {
    return name;
  })

  // If the file is a module, concat the variables from the module scope.
  .concat(cjsOrESMScope ? globalScope.childScopes.flatMap(({
    variables
  }) => {
    return variables;
  }).map(({
    name
  }) => {
    return name;
    /* c8 ignore next */
  }) : []).concat(extraTypes).concat(typedefDeclarations).concat(importTags).concat(definedTypes).concat( /** @type {string[]} */definedPreferredTypes).concat(settings.mode === 'jsdoc' ? [] : [...(settings.mode === 'typescript' ? typescriptGlobals : []), ...closureGenericTypes]));

  /**
   * @typedef {{
   *   parsedType: import('jsdoc-type-pratt-parser').RootResult;
   *   tag: import('comment-parser').Spec|import('@es-joy/jsdoccomment').JsdocInlineTagNoType & {
   *     line?: import('../iterateJsdoc.js').Integer
   *   }
   * }} TypeAndTagInfo
   */

  /**
   * @param {string} propertyName
   * @returns {(tag: (import('@es-joy/jsdoccomment').JsdocInlineTagNoType & {
   *     name?: string,
   *     type?: string,
   *     line?: import('../iterateJsdoc.js').Integer
   *   })|import('comment-parser').Spec & {
   *     namepathOrURL?: string
   *   }
   * ) => undefined|TypeAndTagInfo}
   */
  const tagToParsedType = propertyName => {
    return tag => {
      try {
        const potentialType = tag[( /** @type {"type"|"name"|"namepathOrURL"} */propertyName)];
        return {
          parsedType: mode === 'permissive' ? (0, _jsdoccomment.tryParse)( /** @type {string} */potentialType) : (0, _jsdoccomment.parse)( /** @type {string} */potentialType, mode),
          tag
        };
      } catch {
        return undefined;
      }
    };
  };
  const typeTags = utils.filterTags(({
    tag
  }) => {
    return tag !== 'import' && utils.tagMightHaveTypePosition(tag) && (tag !== 'suppress' || settings.mode !== 'closure');
  }).map(tagToParsedType('type'));
  const namepathReferencingTags = utils.filterTags(({
    tag
  }) => {
    return utils.isNamepathReferencingTag(tag);
  }).map(tagToParsedType('name'));
  const namepathOrUrlReferencingTags = utils.filterAllTags(({
    tag
  }) => {
    return utils.isNamepathOrUrlReferencingTag(tag);
  }).map(tagToParsedType('namepathOrURL'));
  const tagsWithTypes = /** @type {TypeAndTagInfo[]} */[...typeTags, ...namepathReferencingTags, ...namepathOrUrlReferencingTags
  // Remove types which failed to parse
  ].filter(Boolean);
  for (const {
    tag,
    parsedType
  } of tagsWithTypes) {
    (0, _jsdoccomment.traverse)(parsedType, nde => {
      const {
        type,
        value
      } = /** @type {import('jsdoc-type-pratt-parser').NameResult} */nde;
      if (type === 'JsdocTypeName') {
        var _structuredTags$tag$t;
        const structuredTypes = (_structuredTags$tag$t = structuredTags[tag.tag]) === null || _structuredTags$tag$t === void 0 ? void 0 : _structuredTags$tag$t.type;
        if (!allDefinedTypes.has(value) && (!Array.isArray(structuredTypes) || !structuredTypes.includes(value))) {
          if (!disableReporting) {
            report(`The type '${value}' is undefined.`, null, tag);
          }
        } else if (markVariablesAsUsed && !extraTypes.includes(value)) {
          if (sourceCode.markVariableAsUsed) {
            sourceCode.markVariableAsUsed(value);
            /* c8 ignore next 3 */
          } else {
            context.markVariableAsUsed(value);
          }
        }
      }
    });
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Checks that types in jsdoc comments are defined.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header'
    },
    schema: [{
      additionalProperties: false,
      properties: {
        definedTypes: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        disableReporting: {
          type: 'boolean'
        },
        markVariablesAsUsed: {
          type: 'boolean'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=noUndefinedTypes.cjs.map