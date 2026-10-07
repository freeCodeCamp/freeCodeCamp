"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsdoccomment = require("@es-joy/jsdoccomment");
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _iterateJsdoc.default)(({
  context,
  utils,
  node,
  settings,
  report
}) => {
  const {
    requireSeparateTemplates = false
  } = context.options[0] || {};
  const {
    mode
  } = settings;
  const usedNames = new Set();
  const templateTags = utils.getTags('template');
  const templateNames = templateTags.flatMap(({
    name
  }) => {
    return name.split(/,\s*/);
  });
  for (const tag of templateTags) {
    const {
      name
    } = tag;
    const names = name.split(/,\s*/);
    if (requireSeparateTemplates && names.length > 1) {
      report(`Missing separate @template for ${names[1]}`, null, tag);
    }
  }

  /**
   * @param {import('@typescript-eslint/types').TSESTree.FunctionDeclaration|
   *   import('@typescript-eslint/types').TSESTree.ClassDeclaration|
   *   import('@typescript-eslint/types').TSESTree.TSInterfaceDeclaration|
   *   import('@typescript-eslint/types').TSESTree.TSTypeAliasDeclaration} aliasDeclaration
   */
  const checkTypeParams = aliasDeclaration => {
    /* c8 ignore next -- Guard */
    const {
      params
    } = aliasDeclaration.typeParameters ?? {
      params: []
    };
    for (const {
      name: {
        name
      }
    } of params) {
      usedNames.add(name);
    }
    for (const usedName of usedNames) {
      if (!templateNames.includes(usedName)) {
        report(`Missing @template ${usedName}`);
      }
    }
  };
  const handleTypes = () => {
    var _nde$declaration, _nde$declaration2;
    const nde = /** @type {import('@typescript-eslint/types').TSESTree.Node} */
    node;
    if (!nde) {
      return;
    }
    switch (nde.type) {
      case 'ExportDefaultDeclaration':
        switch ((_nde$declaration = nde.declaration) === null || _nde$declaration === void 0 ? void 0 : _nde$declaration.type) {
          case 'ClassDeclaration':
          case 'FunctionDeclaration':
          case 'TSInterfaceDeclaration':
            checkTypeParams(nde.declaration);
            break;
        }
        break;
      case 'ExportNamedDeclaration':
        switch ((_nde$declaration2 = nde.declaration) === null || _nde$declaration2 === void 0 ? void 0 : _nde$declaration2.type) {
          case 'ClassDeclaration':
          case 'FunctionDeclaration':
          case 'TSTypeAliasDeclaration':
          case 'TSInterfaceDeclaration':
            checkTypeParams(nde.declaration);
            break;
        }
        break;
      case 'ClassDeclaration':
      case 'FunctionDeclaration':
      case 'TSTypeAliasDeclaration':
      case 'TSInterfaceDeclaration':
        checkTypeParams(nde);
        break;
    }
  };
  const usedNameToTag = new Map();

  /**
   * @param {import('comment-parser').Spec} potentialTag
   */
  const checkForUsedTypes = potentialTag => {
    let parsedType;
    try {
      parsedType = mode === 'permissive' ? (0, _jsdoccomment.tryParse)( /** @type {string} */potentialTag.type) : (0, _jsdoccomment.parse)( /** @type {string} */potentialTag.type, mode);
    } catch {
      return;
    }
    (0, _jsdoccomment.traverse)(parsedType, nde => {
      const {
        type,
        value
      } = /** @type {import('jsdoc-type-pratt-parser').NameResult} */nde;
      if (type === 'JsdocTypeName' && /^[A-Z]$/.test(value)) {
        usedNames.add(value);
        if (!usedNameToTag.has(value)) {
          usedNameToTag.set(value, potentialTag);
        }
      }
    });
  };

  /**
   * @param {string[]} tagNames
   */
  const checkTagsAndTemplates = tagNames => {
    for (const tagName of tagNames) {
      const preferredTagName = /** @type {string} */utils.getPreferredTagName({
        tagName
      });
      const matchingTags = utils.getTags(preferredTagName);
      for (const matchingTag of matchingTags) {
        checkForUsedTypes(matchingTag);
      }
    }

    // Could check against whitelist/blacklist
    for (const usedName of usedNames) {
      if (!templateNames.includes(usedName)) {
        report(`Missing @template ${usedName}`, null, usedNameToTag.get(usedName));
      }
    }
  };
  const callbackTags = utils.getTags('callback');
  const functionTags = utils.getTags('function');
  if (callbackTags.length || functionTags.length) {
    checkTagsAndTemplates(['param', 'returns']);
    return;
  }
  const typedefTags = utils.getTags('typedef');
  if (!typedefTags.length || typedefTags.length >= 2) {
    handleTypes();
    return;
  }
  const potentialTypedef = typedefTags[0];
  checkForUsedTypes(potentialTypedef);
  checkTagsAndTemplates(['property']);
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Requires template tags for each generic type parameter',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md#repos-sticky-header'
    },
    schema: [{
      additionalProperties: false,
      properties: {
        requireSeparateTemplates: {
          type: 'boolean'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=requireTemplate.cjs.map