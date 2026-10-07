import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { createSyncFn } from 'synckit';
import {
  getJSDocComment,
  parse as parseType,
  traverse,
  tryParse as tryParseType,
} from '@es-joy/jsdoccomment';
import iterateJsdoc, {
  parseComment,
} from '../iterateJsdoc.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathName = join(__dirname, '../import-worker.mjs');

const extraTypes = [
  'null', 'undefined', 'void', 'string', 'boolean', 'object',
  'function', 'symbol',
  'number', 'bigint', 'NaN', 'Infinity',
  'any', '*', 'never', 'unknown', 'const',
  'this', 'true', 'false',
  'Array', 'Object', 'RegExp', 'Date', 'Function',
];

const typescriptGlobals = [
  // https://www.typescriptlang.org/docs/handbook/utility-types.html
  'Awaited',
  'Partial',
  'Required',
  'Readonly',
  'Record',
  'Pick',
  'Omit',
  'Exclude',
  'Extract',
  'NonNullable',
  'Parameters',
  'ConstructorParameters',
  'ReturnType',
  'InstanceType',
  'ThisParameterType',
  'OmitThisParameter',
  'ThisType',
  'Uppercase',
  'Lowercase',
  'Capitalize',
  'Uncapitalize',
];

/**
 * @param {string|false|undefined} [str]
 * @returns {undefined|string|false}
 */
const stripPseudoTypes = (str) => {
  return str && str.replace(/(?:\.|<>|\.<>|\[\])$/u, '');
};

export default iterateJsdoc(({
  context,
  node,
  report,
  settings,
  sourceCode,
  utils,
}) => {
  const {
    scopeManager,
  } = sourceCode;

  // When is this ever `null`?
  const globalScope = /** @type {import('eslint').Scope.Scope} */ (
    scopeManager.globalScope
  );

  const
    /**
     * @type {{
     *   definedTypes: string[],
     *   disableReporting: boolean,
     *   markVariablesAsUsed: boolean
     * }}
     */ {
      definedTypes = [],
      disableReporting = false,
      markVariablesAsUsed = true,
    } = context.options[0] || {};

  /** @type {(string|undefined)[]} */
  let definedPreferredTypes = [];
  const {
    preferredTypes,
    structuredTags,
    mode,
  } = settings;
  if (Object.keys(preferredTypes).length) {
    definedPreferredTypes = /** @type {string[]} */ (Object.values(preferredTypes).map((preferredType) => {
      if (typeof preferredType === 'string') {
        // May become an empty string but will be filtered out below
        return stripPseudoTypes(preferredType);
      }

      if (!preferredType) {
        return undefined;
      }

      if (typeof preferredType !== 'object') {
        utils.reportSettings(
          'Invalid `settings.jsdoc.preferredTypes`. Values must be falsy, a string, or an object.',
        );
      }

      return stripPseudoTypes(preferredType.replacement);
    })
      .filter(Boolean));
  }

  const comments = sourceCode.getAllComments()
    .filter((comment) => {
      return (/^\*\s/u).test(comment.value);
    })
    .map((commentNode) => {
      return parseComment(commentNode, '');
    });

  const typedefDeclarations = comments
    .flatMap((doc) => {
      return doc.tags.filter(({
        tag,
      }) => {
        return utils.isNamepathDefiningTag(tag);
      });
    })
    .map((tag) => {
      return tag.name;
    });


  const importTags = settings.mode === 'typescript' ? /** @type {string[]} */ (comments.flatMap((doc) => {
    return doc.tags.filter(({
      tag,
    }) => {
      return tag === 'import';
    });
  }).flatMap((tag) => {
    const {
      type, name, description
    } = tag;
    const typePart = type ? `{${type}} `: '';
    const imprt = 'import ' + (description
      ? `${typePart}${name} ${description}`
      : `${typePart}${name}`);

    const getImports = createSyncFn(pathName);
    const imports = /** @type {import('parse-imports').Import[]} */ (getImports(imprt));
    if (!imports) {
      return null;
    }

    return imports.flatMap(({importClause}) => {
      /* c8 ignore next */
      const {default: dflt, named, namespace} = importClause || {};
      const types = [];
      if (dflt) {
        types.push(dflt);
      }
      if (namespace) {
        types.push(namespace);
      }
      if (named) {
        for (const {binding} of named) {
          types.push(binding);
        }
      }

      return types;
    });
  }).filter(Boolean)) : [];

  const ancestorNodes = [];

  let currentNode = node;
  // No need for Program node?
  while (currentNode?.parent) {
    ancestorNodes.push(currentNode);
    currentNode = currentNode.parent;
  }

  /**
   * @param {import('eslint').Rule.Node} ancestorNode
   * @returns {import('comment-parser').Spec[]}
   */
  const getTemplateTags = function (ancestorNode) {
    const commentNode = getJSDocComment(sourceCode, ancestorNode, settings);
    if (!commentNode) {
      return [];
    }

    const jsdoc = parseComment(commentNode, '');

    return jsdoc.tags.filter((tag) => {
      return tag.tag === 'template';
    });
  };

  // `currentScope` may be `null` or `Program`, so in such a case,
  //  we look to present tags instead
  const templateTags = ancestorNodes.length ?
    ancestorNodes.flatMap((ancestorNode) => {
      return getTemplateTags(ancestorNode);
    }) :
    utils.getPresentTags([
      'template',
    ]);

  const closureGenericTypes = templateTags.flatMap((tag) => {
    return utils.parseClosureTemplateTag(tag);
  });

  // In modules, including Node, there is a global scope at top with the
  //  Program scope inside
  const cjsOrESMScope = globalScope.childScopes[0]?.block?.type === 'Program';

  const allDefinedTypes = new Set(globalScope.variables.map(({
    name,
  }) => {
    return name;
  })

    // If the file is a module, concat the variables from the module scope.
    .concat(
      cjsOrESMScope ?
        globalScope.childScopes.flatMap(({
          variables,
        }) => {
          return variables;
        }).map(({
          name,
        }) => {
          return name;
        /* c8 ignore next */
        }) : [],
    )
    .concat(extraTypes)
    .concat(typedefDeclarations)
    .concat(importTags)
    .concat(definedTypes)
    .concat(/** @type {string[]} */ (definedPreferredTypes))
    .concat(
      settings.mode === 'jsdoc' ?
        [] :
        [
          ...settings.mode === 'typescript' ? typescriptGlobals : [],
          ...closureGenericTypes,
        ],
    ));

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
  const tagToParsedType = (propertyName) => {
    return (tag) => {
      try {
        const potentialType = tag[
          /** @type {"type"|"name"|"namepathOrURL"} */ (propertyName)
        ];
        return {
          parsedType: mode === 'permissive' ?
            tryParseType(/** @type {string} */ (potentialType)) :
            parseType(/** @type {string} */ (potentialType), mode),
          tag,
        };
      } catch {
        return undefined;
      }
    };
  };

  const typeTags = utils.filterTags(({
    tag,
  }) => {
    return tag !== 'import' && utils.tagMightHaveTypePosition(tag) && (tag !== 'suppress' || settings.mode !== 'closure');
  }).map(tagToParsedType('type'));

  const namepathReferencingTags = utils.filterTags(({
    tag,
  }) => {
    return utils.isNamepathReferencingTag(tag);
  }).map(tagToParsedType('name'));

  const namepathOrUrlReferencingTags = utils.filterAllTags(({
    tag,
  }) => {
    return utils.isNamepathOrUrlReferencingTag(tag);
  }).map(tagToParsedType('namepathOrURL'));

  const tagsWithTypes = /** @type {TypeAndTagInfo[]} */ ([
    ...typeTags,
    ...namepathReferencingTags,
    ...namepathOrUrlReferencingTags,
    // Remove types which failed to parse
  ].filter(Boolean));

  for (const {
    tag,
    parsedType,
  } of tagsWithTypes) {
    traverse(parsedType, (nde) => {
      const {
        type,
        value,
      } = /** @type {import('jsdoc-type-pratt-parser').NameResult} */ (nde);

      if (type === 'JsdocTypeName') {
        const structuredTypes = structuredTags[tag.tag]?.type;
        if (!allDefinedTypes.has(value) &&
          (!Array.isArray(structuredTypes) || !structuredTypes.includes(value))
        ) {
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
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header',
    },
    schema: [
      {
        additionalProperties: false,
        properties: {
          definedTypes: {
            items: {
              type: 'string',
            },
            type: 'array',
          },
          disableReporting: {
            type: 'boolean',
          },
          markVariablesAsUsed: {
            type: 'boolean',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
