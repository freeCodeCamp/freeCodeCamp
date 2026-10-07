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
    mode
  } = settings;
  const templateTags = utils.getTags('template');
  const usedNames = new Set();
  /**
   * @param {string} potentialType
   */
  const checkForUsedTypes = potentialType => {
    let parsedType;
    try {
      parsedType = mode === 'permissive' ? (0, _jsdoccomment.tryParse)( /** @type {string} */potentialType) : (0, _jsdoccomment.parse)( /** @type {string} */potentialType, mode);
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
      }
    });
  };
  const checkParamsAndReturnsTags = () => {
    const paramName = /** @type {string} */utils.getPreferredTagName({
      tagName: 'param'
    });
    const paramTags = utils.getTags(paramName);
    for (const paramTag of paramTags) {
      checkForUsedTypes(paramTag.type);
    }
    const returnsName = /** @type {string} */utils.getPreferredTagName({
      tagName: 'returns'
    });
    const returnsTags = utils.getTags(returnsName);
    for (const returnsTag of returnsTags) {
      checkForUsedTypes(returnsTag.type);
    }
  };
  const checkTemplateTags = () => {
    for (const tag of templateTags) {
      const {
        name
      } = tag;
      const names = name.split(/,\s*/);
      for (const name of names) {
        if (!usedNames.has(name)) {
          report(`@template ${name} not in use`, null, tag);
        }
      }
    }
  };

  /**
   * @param {import('@typescript-eslint/types').TSESTree.FunctionDeclaration|
   *   import('@typescript-eslint/types').TSESTree.ClassDeclaration|
   *   import('@typescript-eslint/types').TSESTree.TSInterfaceDeclaration|
   *   import('@typescript-eslint/types').TSESTree.TSTypeAliasDeclaration} aliasDeclaration
   * @param {boolean} [checkParamsAndReturns]
   */
  const checkParameters = (aliasDeclaration, checkParamsAndReturns) => {
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
    if (checkParamsAndReturns) {
      checkParamsAndReturnsTags();
    }
    checkTemplateTags();
  };
  const handleTypeAliases = () => {
    var _nde$declaration;
    const nde = /** @type {import('@typescript-eslint/types').TSESTree.Node} */
    node;
    if (!nde) {
      return;
    }
    switch (nde.type) {
      case 'ExportDefaultDeclaration':
      case 'ExportNamedDeclaration':
        switch ((_nde$declaration = nde.declaration) === null || _nde$declaration === void 0 ? void 0 : _nde$declaration.type) {
          case 'FunctionDeclaration':
            checkParameters(nde.declaration, true);
            break;
          case 'ClassDeclaration':
          case 'TSTypeAliasDeclaration':
          case 'TSInterfaceDeclaration':
            checkParameters(nde.declaration);
            break;
        }
        break;
      case 'FunctionDeclaration':
        checkParameters(nde, true);
        break;
      case 'ClassDeclaration':
      case 'TSTypeAliasDeclaration':
      case 'TSInterfaceDeclaration':
        checkParameters(nde);
        break;
    }
  };
  const callbackTags = utils.getTags('callback');
  const functionTags = utils.getTags('function');
  if (callbackTags.length || functionTags.length) {
    checkParamsAndReturnsTags();
    checkTemplateTags();
    return;
  }
  const typedefTags = utils.getTags('typedef');
  if (!typedefTags.length || typedefTags.length >= 2) {
    handleTypeAliases();
    return;
  }
  const potentialTypedefType = typedefTags[0].type;
  checkForUsedTypes(potentialTypedefType);
  const propertyName = /** @type {string} */utils.getPreferredTagName({
    tagName: 'property'
  });
  const propertyTags = utils.getTags(propertyName);
  for (const propertyTag of propertyTags) {
    checkForUsedTypes(propertyTag.type);
  }
  for (const tag of templateTags) {
    const {
      name
    } = tag;
    const names = name.split(/,\s*/);
    for (const name of names) {
      if (!usedNames.has(name)) {
        report(`@template ${name} not in use`, null, tag);
      }
    }
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Checks that any `@template` names are actually used in the connected `@typedef` or type alias.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md#repos-sticky-header'
    },
    schema: [],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=checkTemplateNames.cjs.map