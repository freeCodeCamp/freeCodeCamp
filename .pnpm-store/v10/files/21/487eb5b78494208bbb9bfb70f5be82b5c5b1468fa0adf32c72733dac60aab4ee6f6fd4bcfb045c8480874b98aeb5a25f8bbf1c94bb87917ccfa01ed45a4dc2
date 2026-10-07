import {
  parse as parseType,
  traverse,
  tryParse as tryParseType,
} from '@es-joy/jsdoccomment';
import iterateJsdoc from '../iterateJsdoc.js';

export default iterateJsdoc(({
  context,
  utils,
  node,
  settings,
  report,
}) => {
  const {
    mode
  } = settings;

  const templateTags = utils.getTags('template');

  const usedNames = new Set();
  /**
   * @param {string} potentialType
   */
  const checkForUsedTypes = (potentialType) => {
    let parsedType;
    try {
      parsedType = mode === 'permissive' ?
        tryParseType(/** @type {string} */ (potentialType)) :
        parseType(/** @type {string} */ (potentialType), mode);
    } catch {
      return;
    }

    traverse(parsedType, (nde) => {
      const {
        type,
        value,
      } = /** @type {import('jsdoc-type-pratt-parser').NameResult} */ (nde);
      if (type === 'JsdocTypeName' && (/^[A-Z]$/).test(value)) {
        usedNames.add(value);
      }
    });
  };

  const checkParamsAndReturnsTags = () => {
    const paramName = /** @type {string} */ (utils.getPreferredTagName({
      tagName: 'param',
    }));
    const paramTags = utils.getTags(paramName);
    for (const paramTag of paramTags) {
      checkForUsedTypes(paramTag.type);
    }

    const returnsName = /** @type {string} */ (utils.getPreferredTagName({
      tagName: 'returns',
    }));
    const returnsTags = utils.getTags(returnsName);
    for (const returnsTag of returnsTags) {
      checkForUsedTypes(returnsTag.type);
    }
  };

  const checkTemplateTags = () => {
    for (const tag of templateTags) {
      const {name} = tag;
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
    const {params} = aliasDeclaration.typeParameters ?? {params: []};
    for (const {name: {name}} of params) {
      usedNames.add(name);
    }
    if (checkParamsAndReturns) {
      checkParamsAndReturnsTags();
    }

    checkTemplateTags();
  };

  const handleTypeAliases = () => {
    const nde = /** @type {import('@typescript-eslint/types').TSESTree.Node} */ (
      node
    );
    if (!nde) {
      return;
    }
    switch (nde.type) {
    case 'ExportDefaultDeclaration':
    case 'ExportNamedDeclaration':
      switch (nde.declaration?.type) {
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

  const propertyName = /** @type {string} */ (utils.getPreferredTagName({
    tagName: 'property',
  }));
  const propertyTags = utils.getTags(propertyName);
  for (const propertyTag of propertyTags) {
    checkForUsedTypes(propertyTag.type);
  }

  for (const tag of templateTags) {
    const {name} = tag;
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
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md#repos-sticky-header',
    },
    schema: [],
    type: 'suggestion',
  },
});
