import getDefaultTagStructureForMode from './getDefaultTagStructureForMode.js';
import {
  closureTags,
  jsdocTags,
  typeScriptTags,
} from './tagNames.js';
import {
  hasReturnValue,
  hasValueOrExecutorHasNonEmptyResolveValue,
} from './utils/hasReturnValue.js';
import WarnSettings from './WarnSettings.js';
import {
  tryParse,
} from '@es-joy/jsdoccomment';

/**
 * @typedef {number} Integer
 */
/**
 * @typedef {import('./utils/hasReturnValue.js').ESTreeOrTypeScriptNode} ESTreeOrTypeScriptNode
 */

/**
 * @typedef {"jsdoc"|"typescript"|"closure"|"permissive"} ParserMode
 */

/**
 * @type {import('./getDefaultTagStructureForMode.js').TagStructure}
 */
let tagStructure;

/**
 * @param {ParserMode} mode
 * @returns {void}
 */
const setTagStructure = (mode) => {
  tagStructure = getDefaultTagStructureForMode(mode);
};

/**
 * @typedef {undefined|string|{
 *   name: Integer,
 *   restElement: boolean
 * }|{
 *   isRestProperty: boolean|undefined,
 *   name: string,
 *   restElement: boolean
 * }|{
 *   name: string,
 *   restElement: boolean
 * }} ParamCommon
 */
/**
 * @typedef {ParamCommon|[string|undefined, (FlattendRootInfo & {
 *   annotationParamName?: string,
 * })]|NestedParamInfo} ParamNameInfo
 */

/**
 * @typedef {{
 *   hasPropertyRest: boolean,
 *   hasRestElement: boolean,
 *   names: string[],
 *   rests: boolean[],
 * }} FlattendRootInfo
 */
/**
 * @typedef {[string, (string[]|ParamInfo[])]} NestedParamInfo
 */
/**
 * @typedef {ParamCommon|
 * [string|undefined, (FlattendRootInfo & {
 *   annotationParamName?: string
 * })]|
 * NestedParamInfo} ParamInfo
 */

/**
 * Given a nested array of property names, reduce them to a single array,
 * appending the name of the root element along the way if present.
 * @callback FlattenRoots
 * @param {ParamInfo[]} params
 * @param {string} [root]
 * @returns {FlattendRootInfo}
 */

/** @type {FlattenRoots} */
const flattenRoots = (params, root = '') => {
  let hasRestElement = false;
  let hasPropertyRest = false;

  /**
   * @type {boolean[]}
   */
  const rests = [];

  const names = params.reduce(
    /**
     * @param {string[]} acc
     * @param {ParamInfo} cur
     * @returns {string[]}
     */
    (acc, cur) => {
      if (Array.isArray(cur)) {
        let nms;
        if (Array.isArray(cur[1])) {
          nms = cur[1];
        } else {
          if (cur[1].hasRestElement) {
            hasRestElement = true;
          }

          if (cur[1].hasPropertyRest) {
            hasPropertyRest = true;
          }

          nms = cur[1].names;
        }

        const flattened = flattenRoots(nms, root ? `${root}.${cur[0]}` : cur[0]);
        if (flattened.hasRestElement) {
          hasRestElement = true;
        }

        if (flattened.hasPropertyRest) {
          hasPropertyRest = true;
        }

        const inner = /** @type {string[]} */ ([
          root ? `${root}.${cur[0]}` : cur[0],
          ...flattened.names,
        ].filter(Boolean));
        rests.push(false, ...flattened.rests);

        return acc.concat(inner);
      }

      if (typeof cur === 'object') {
        if ('isRestProperty' in cur && cur.isRestProperty) {
          hasPropertyRest = true;
          rests.push(true);
        } else {
          rests.push(false);
        }

        if ('restElement' in cur && cur.restElement) {
          hasRestElement = true;
        }

        acc.push(root ? `${root}.${String(cur.name)}` : String(cur.name));
      } else if (typeof cur !== 'undefined') {
        rests.push(false);
        acc.push(root ? `${root}.${cur}` : cur);
      }

      return acc;
    }, [],
  );

  return {
    hasPropertyRest,
    hasRestElement,
    names,
    rests,
  };
};

/**
 * @param {import('@typescript-eslint/types').TSESTree.TSIndexSignature|
 *  import('@typescript-eslint/types').TSESTree.TSConstructSignatureDeclaration|
 *  import('@typescript-eslint/types').TSESTree.TSCallSignatureDeclaration|
 *  import('@typescript-eslint/types').TSESTree.TSPropertySignature} propSignature
 * @returns {undefined|string|[string, string[]]}
 */
const getPropertiesFromPropertySignature = (propSignature) => {
  if (
    propSignature.type === 'TSIndexSignature' ||
    propSignature.type === 'TSConstructSignatureDeclaration' ||
    propSignature.type === 'TSCallSignatureDeclaration'
  ) {
    return undefined;
  }

  if (propSignature.typeAnnotation && propSignature.typeAnnotation.typeAnnotation.type === 'TSTypeLiteral') {
    return [
      /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
        propSignature.key
      ).name,
      propSignature.typeAnnotation.typeAnnotation.members.map((member) => {
        return /** @type {string} */ (
          getPropertiesFromPropertySignature(
            /** @type {import('@typescript-eslint/types').TSESTree.TSPropertySignature} */ (
              member
            ),
          )
        );
      }),
    ];
  }

  return /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
    propSignature.key
  ).name;
};

/**
 * @param {ESTreeOrTypeScriptNode|null} functionNode
 * @param {boolean} [checkDefaultObjects]
 * @throws {Error}
 * @returns {ParamNameInfo[]}
 */
const getFunctionParameterNames = (
  functionNode, checkDefaultObjects,
) => {
  /* eslint-disable complexity -- Temporary */
  /**
   * @param {import('estree').Identifier|import('estree').AssignmentPattern|
   *   import('estree').ObjectPattern|import('estree').Property|
   *   import('estree').RestElement|import('estree').ArrayPattern|
   *   import('@typescript-eslint/types').TSESTree.TSParameterProperty|
   *   import('@typescript-eslint/types').TSESTree.Property|
   *   import('@typescript-eslint/types').TSESTree.RestElement|
   *   import('@typescript-eslint/types').TSESTree.Identifier|
   *   import('@typescript-eslint/types').TSESTree.ObjectPattern|
   *   import('@typescript-eslint/types').TSESTree.BindingName|
   *   import('@typescript-eslint/types').TSESTree.Parameter
   * } param
   * @param {boolean} [isProperty]
   * @returns {ParamNameInfo|[string, ParamNameInfo[]]}
   */
  const getParamName = (param, isProperty) => {
    /* eslint-enable complexity -- Temporary */
    const hasLeftTypeAnnotation = 'left' in param && 'typeAnnotation' in param.left;

    if ('typeAnnotation' in param || hasLeftTypeAnnotation) {
      const typeAnnotation = hasLeftTypeAnnotation ?
        /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
          param.left
        ).typeAnnotation :
        /** @type {import('@typescript-eslint/types').TSESTree.Identifier|import('@typescript-eslint/types').TSESTree.ObjectPattern} */
        (param).typeAnnotation;

      if (typeAnnotation?.typeAnnotation?.type === 'TSTypeLiteral') {
        const propertyNames = typeAnnotation.typeAnnotation.members.map((member) => {
          return getPropertiesFromPropertySignature(
            /** @type {import('@typescript-eslint/types').TSESTree.TSPropertySignature} */
            (member),
          );
        });

        const flattened = {
          ...flattenRoots(propertyNames),
          annotationParamName: 'name' in param ? param.name : undefined,
        };
        const hasLeftName = 'left' in param && 'name' in param.left;

        if ('name' in param || hasLeftName) {
          return [
            hasLeftName ?
              /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
                param.left
              ).name :
              /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
                param
              ).name,
            flattened,
          ];
        }

        return [
          undefined, flattened,
        ];
      }
    }

    if ('name' in param) {
      return param.name;
    }

    if ('left' in param && 'name' in param.left) {
      return param.left.name;
    }

    if (
      param.type === 'ObjectPattern' ||
      ('left' in param &&
      (
        param
      ).left.type === 'ObjectPattern')
    ) {
      const properties = /** @type {import('@typescript-eslint/types').TSESTree.ObjectPattern} */ (
        param
      ).properties ||
        /** @type {import('estree').ObjectPattern} */
        (
          /** @type {import('@typescript-eslint/types').TSESTree.AssignmentPattern} */ (
            param
          ).left
        )?.properties;
      const roots = properties.map((prop) => {
        return getParamName(prop, true);
      });

      return [
        undefined, flattenRoots(roots),
      ];
    }

    if (param.type === 'Property') {
      switch (param.value.type) {
      case 'ArrayPattern': {
        return [
          /** @type {import('estree').Identifier} */
          (param.key).name,
          /** @type {import('estree').ArrayPattern} */ (
            param.value
          ).elements.map((prop, idx) => {
            return {
              name: idx,
              restElement: prop?.type === 'RestElement',
            };
          }),
        ];
      }

      case 'ObjectPattern': {
        return [
          /** @type {import('estree').Identifier} */ (param.key).name,
          /** @type {import('estree').ObjectPattern} */ (
            param.value
          ).properties.map((prop) => {
            return /** @type {string|[string, string[]]} */ (getParamName(prop, isProperty));
          }),
        ];
      }

      case 'AssignmentPattern': {
        switch (param.value.left.type) {
        case 'Identifier':
          // Default parameter
          if (checkDefaultObjects && param.value.right.type === 'ObjectExpression') {
            return [
              /** @type {import('estree').Identifier} */ (
                param.key
              ).name,
              /** @type {import('estree').AssignmentPattern} */ (
                param.value
              ).right.properties.map((prop) => {
                return /** @type {string} */ (getParamName(
                  /** @type {import('estree').Property} */
                  (prop),
                  isProperty,
                ));
              }),
            ];
          }

          break;
        case 'ObjectPattern':
          return [
            /** @type {import('estree').Identifier} */
            (param.key).name,
            /** @type {import('estree').ObjectPattern} */ (
              param.value.left
            ).properties.map((prop) => {
              return getParamName(prop, isProperty);
            }),
          ];
        case 'ArrayPattern':
          return [
            /** @type {import('estree').Identifier} */
            (param.key).name,
            /** @type {import('estree').ArrayPattern} */ (
              param.value.left
            ).elements.map((prop, idx) => {
              return {
                name: idx,
                restElement: prop?.type === 'RestElement',
              };
            }),
          ];
        }
      }
      }

      switch (param.key.type) {
      case 'Identifier':
        return param.key.name;

      // The key of an object could also be a string or number
      case 'Literal':
        /* c8 ignore next 2 -- `raw` may not be present in all parsers */
        return /** @type {string} */ (param.key.raw ||
          param.key.value);

      // case 'MemberExpression':
      default:
        // Todo: We should really create a structure (and a corresponding
        //   option analogous to `checkRestProperty`) which allows for
        //   (and optionally requires) dynamic properties to have a single
        //   line of documentation
        return undefined;
      }
    }

    if (
      param.type === 'ArrayPattern' ||
      /** @type {import('estree').AssignmentPattern} */ (
        param
      ).left?.type === 'ArrayPattern'
    ) {
      const elements = /** @type {import('estree').ArrayPattern} */ (
        param
      ).elements || /** @type {import('estree').ArrayPattern} */ (
        /** @type {import('estree').AssignmentPattern} */ (
          param
        ).left
      )?.elements;
      const roots = elements.map((prop, idx) => {
        return {
          name: `"${idx}"`,
          restElement: prop?.type === 'RestElement',
        };
      });

      return [
        undefined, flattenRoots(roots),
      ];
    }

    if ([
      'RestElement', 'ExperimentalRestProperty',
    ].includes(param.type)) {
      return {
        isRestProperty: isProperty,
        name: /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
          /** @type {import('@typescript-eslint/types').TSESTree.RestElement} */ (
            param
          // @ts-expect-error Ok
          ).argument).name ?? param?.argument?.elements?.map(({name}) => {
            return name;
          }),
        restElement: true,
      };
    }

    if (param.type === 'TSParameterProperty') {
      return getParamName(
        /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
          /** @type {import('@typescript-eslint/types').TSESTree.TSParameterProperty} */ (
            param
          ).parameter
        ),
        true,
      );
    }

    throw new Error(`Unsupported function signature format: \`${param.type}\`.`);
  };

  if (!functionNode) {
    return [];
  }

  return (/** @type {import('@typescript-eslint/types').TSESTree.FunctionDeclaration} */ (
    functionNode
  ).params || /** @type {import('@typescript-eslint/types').TSESTree.MethodDefinition} */ (
    functionNode
  ).value?.params || []).map((param) => {
    return getParamName(param);
  });
};

/**
 * @param {ESTreeOrTypeScriptNode} functionNode
 * @returns {Integer}
 */
const hasParams = (functionNode) => {
  // Should also check `functionNode.value.params` if supporting `MethodDefinition`
  return /** @type {import('@typescript-eslint/types').TSESTree.FunctionDeclaration} */ (
    functionNode
  ).params.length;
};

/**
 * Gets all names of the target type, including those that refer to a path, e.g.
 * `foo` or `foo.bar`.
 * @param {import('comment-parser').Block} jsdoc
 * @param {string} targetTagName
 * @returns {{
 *   idx: Integer,
 *   name: string,
 *   type: string
 * }[]}
 */
const getJsdocTagsDeep = (jsdoc, targetTagName) => {
  const ret = [];
  for (const [
    idx,
    {
      name,
      tag,
      type,
    },
  ] of jsdoc.tags.entries()) {
    if (tag !== targetTagName) {
      continue;
    }

    ret.push({
      idx,
      name,
      type,
    });
  }

  return ret;
};

const modeWarnSettings = WarnSettings();

/**
 * @param {ParserMode|undefined} mode
 * @param {Reporter} context
 * @returns {import('./tagNames.js').AliasedTags}
 */
const getTagNamesForMode = (mode, context) => {
  switch (mode) {
  case 'jsdoc':
    return jsdocTags;
  case 'typescript':
    return typeScriptTags;
  case 'closure': case 'permissive':
    return closureTags;
  default:
    if (!modeWarnSettings.hasBeenWarned(context, 'mode')) {
      context.report({
        loc: {
          end: {
            column: 1,
            line: 1,
          },
          start: {
            column: 1,
            line: 1,
          },
        },
        message: `Unrecognized value \`${mode}\` for \`settings.jsdoc.mode\`.`,
      });
      modeWarnSettings.markSettingAsWarned(context, 'mode');
    }

    // We'll avoid breaking too many other rules
    return jsdocTags;
  }
};

/**
 * @param {import('comment-parser').Spec} tg
 * @param {boolean} [returnArray]
 * @returns {string[]|string}
 */
const getTagDescription = (tg, returnArray) => {
    /**
     * @type {string[]}
     */
    const descriptions = [];
    tg.source.some(({
      tokens: {
        end,
        lineEnd,
        postDelimiter,
        tag,
        postTag,
        name,
        type,
        description,
      },
    }) => {
      const desc = (
        tag && postTag ||
        !tag && !name && !type && postDelimiter || ''

      // Remove space
      ).slice(1) +
        (description || '') + (lineEnd || '');

      if (end) {
        if (desc) {
          descriptions.push(desc);
        }

        return true;
      }

      descriptions.push(desc);

      return false;
    });

    return returnArray ? descriptions : descriptions.join('\n');
};

/**
 * @typedef {{
 *   report: (descriptor: import('eslint').Rule.ReportDescriptor) => void
 * }} Reporter
 */

/**
 * @param {string} name
 * @param {ParserMode|undefined} mode
 * @param {TagNamePreference} tagPreference
 * @param {Reporter} context
 * @returns {string|false|{
 *   message: string;
 *   replacement?: string|undefined;
 * }}
 */
const getPreferredTagNameSimple = (
  name,
  mode,
  tagPreference = {},
  context = {
    report () {
      // No-op
    }
  },
) => {
  const prefValues = Object.values(tagPreference);
  if (prefValues.includes(name) || prefValues.some((prefVal) => {
    return prefVal && typeof prefVal === 'object' && prefVal.replacement === name;
  })) {
    return name;
  }

  // Allow keys to have a 'tag ' prefix to avoid upstream bug in ESLint
  // that disallows keys that conflict with Object.prototype,
  // e.g. 'tag constructor' for 'constructor':
  // https://github.com/eslint/eslint/issues/13289
  // https://github.com/gajus/eslint-plugin-jsdoc/issues/537
  const tagPreferenceFixed = Object.fromEntries(
    Object
      .entries(tagPreference)
      .map(([
        key,
        value,
      ]) => {
        return [
          key.replace(/^tag /u, ''), value,
        ];
      }),
  );

  if (Object.prototype.hasOwnProperty.call(tagPreferenceFixed, name)) {
    return tagPreferenceFixed[name];
  }

  const tagNames = getTagNamesForMode(mode, context);

  const preferredTagName = Object.entries(tagNames).find(([
    , aliases,
  ]) => {
    return aliases.includes(name);
  })?.[0];
  if (preferredTagName) {
    return preferredTagName;
  }

  return name;
};

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {ParserMode|undefined} mode
 * @param {string} name
 * @param {string[]} definedTags
 * @returns {boolean}
 */
const isValidTag = (
  context,
  mode,
  name,
  definedTags,
) => {
  const tagNames = getTagNamesForMode(mode, context);

  const validTagNames = Object.keys(tagNames).concat(Object.values(tagNames).flat());
  const additionalTags = definedTags;
  const allTags = validTagNames.concat(additionalTags);

  return allTags.includes(name);
};

/**
 * @param {import('./iterateJsdoc.js').JsdocBlockWithInline} jsdoc
 * @param {string} targetTagName
 * @returns {boolean}
 */
const hasTag = (jsdoc, targetTagName) => {
  const targetTagLower = targetTagName.toLowerCase();

  return jsdoc.tags.some((doc) => {
    return doc.tag.toLowerCase() === targetTagLower;
  });
};

/**
 * @param {import('./iterateJsdoc.js').JsdocBlockWithInline} jsdoc
 * @param {(tag: import('@es-joy/jsdoccomment').JsdocTagWithInline) => boolean} filter
 * @returns {import('@es-joy/jsdoccomment').JsdocTagWithInline[]}
 */
const filterTags = (jsdoc, filter) => {
  return jsdoc.tags.filter((tag) => {
    return filter(tag);
  });
};

/**
 * @param {import('./iterateJsdoc.js').JsdocBlockWithInline} jsdoc
 * @param {string} tagName
 * @returns {import('comment-parser').Spec[]}
 */
const getTags = (jsdoc, tagName) => {
  return filterTags(jsdoc, (item) => {
    return item.tag === tagName;
  });
};

/**
 * @param {import('./iterateJsdoc.js').JsdocBlockWithInline} jsdoc
 * @param {{
 *   tagName: string,
 *   context?: import('eslint').Rule.RuleContext,
 *   mode?: ParserMode,
 *   report?: import('./iterateJsdoc.js').Report
 *   tagNamePreference?: TagNamePreference
 *   skipReportingBlockedTag?: boolean,
 *   allowObjectReturn?: boolean,
 *   defaultMessage?: string,
 * }} cfg
 * @returns {string|undefined|false|{
 *   message: string;
 *   replacement?: string|undefined;
 * }|{
 *   blocked: true,
 *   tagName: string
 * }}
 */
const getPreferredTagName = (jsdoc, {
  tagName,
  context, mode,
  tagNamePreference,
  report = () => {},
  skipReportingBlockedTag = false,
  allowObjectReturn = false,
  defaultMessage = `Unexpected tag \`@${tagName}\``,
}) => {
  const ret = getPreferredTagNameSimple(tagName, mode, tagNamePreference, context);
  const isObject = ret && typeof ret === 'object';
  if (hasTag(jsdoc, tagName) && (ret === false || isObject && !ret.replacement)) {
    if (skipReportingBlockedTag) {
      return {
        blocked: true,
        tagName,
      };
    }

    const message = isObject && ret.message || defaultMessage;
    report(message, null, getTags(jsdoc, tagName)[0]);

    return false;
  }

  return isObject && !allowObjectReturn ? ret.replacement : ret;
};

/**
 * @param {import('./iterateJsdoc.js').JsdocBlockWithInline} jsdoc
 * @param {string} tagName
 * @param {(
 *   matchingJsdocTag: import('@es-joy/jsdoccomment').JsdocTagWithInline,
 *   targetTagName: string
 * ) => void} arrayHandler
 * @param {object} cfg
 * @param {import('eslint').Rule.RuleContext} [cfg.context]
 * @param {ParserMode} [cfg.mode]
 * @param {import('./iterateJsdoc.js').Report} [cfg.report]
 * @param {TagNamePreference} [cfg.tagNamePreference]
 * @param {boolean} [cfg.skipReportingBlockedTag]
 * @returns {void}
 */
const forEachPreferredTag = (
  jsdoc, tagName, arrayHandler,
  {
    context, mode, report,
    tagNamePreference,
    skipReportingBlockedTag = false,
  } = {}
) => {
  const targetTagName = /** @type {string|false} */ (
    getPreferredTagName(jsdoc, {
      skipReportingBlockedTag,
      tagName,
      context, mode, report, tagNamePreference
    })
  );
  if (!targetTagName ||
    skipReportingBlockedTag && targetTagName && typeof targetTagName === 'object'
  ) {
    return;
  }

  const matchingJsdocTags = jsdoc.tags.filter(({
    tag,
  }) => {
    return tag === targetTagName;
  });

  for (const matchingJsdocTag of matchingJsdocTags) {
    arrayHandler(
      /**
       * @type {import('@es-joy/jsdoccomment').JsdocTagWithInline}
       */ (
        matchingJsdocTag
      ), targetTagName,
    );
  }
};

/**
 * Get all tags, inline tags and inline tags in tags
 * @param {import('./iterateJsdoc.js').JsdocBlockWithInline} jsdoc
 * @returns {(import('comment-parser').Spec|
 *   import('@es-joy/jsdoccomment').JsdocInlineTagNoType)[]}
 */
const getAllTags = (jsdoc) => {
  return [
    ...jsdoc.tags,
    ...jsdoc.inlineTags.map((inlineTag) => {
      // Tags don't have source or line numbers, so add before returning
      let line = -1;
      for (const {
        tokens: {
          description,
        },
      } of jsdoc.source) {
        line++;
        if (description && description.includes(`{@${inlineTag.tag}`)) {
          break;
        }
      }

      inlineTag.line = line;

      return inlineTag;
    }),
    ...jsdoc.tags.flatMap((tag) => {
      let tagBegins = -1;
      for (const {
        tokens: {
          tag: tg,
        },
      } of jsdoc.source) {
        tagBegins++;
        if (tg) {
          break;
        }
      }

      for (const inlineTag of tag.inlineTags) {
        /** @type {import('./iterateJsdoc.js').Integer} */
        let line = 0;
        for (const {
          number,
          tokens: {
            description,
          },
        } of tag.source) {
          if (description && description.includes(`{@${inlineTag.tag}`)) {
            line = number;
            break;
          }
        }

        inlineTag.line = tagBegins + line - 1;
      }

      return (
        /**
         * @type {import('comment-parser').Spec & {
         *   inlineTags: import('@es-joy/jsdoccomment').JsdocInlineTagNoType[]
         * }}
         */ (
          tag
        ).inlineTags
      );
    }),
  ];
};

/**
 * @param {import('./iterateJsdoc.js').JsdocBlockWithInline} jsdoc
 * @param {string[]} targetTagNames
 * @returns {boolean}
 */
const hasATag = (jsdoc, targetTagNames) => {
  return targetTagNames.some((targetTagName) => {
    return hasTag(jsdoc, targetTagName);
  });
};

/**
 * Checks if the JSDoc comment has an undefined type.
 * @param {import('comment-parser').Spec|null|undefined} tag
 *   the tag which should be checked.
 * @param {ParserMode} mode
 * @returns {boolean}
 *   true in case a defined type is undeclared; otherwise false.
 */
const mayBeUndefinedTypeTag = (tag, mode) => {
  // The function should not continue in the event the type is not defined...
  if (typeof tag === 'undefined' || tag === null) {
    return true;
  }

  // .. same applies if it declares an `{undefined}` or `{void}` type
  const tagType = tag.type.trim();

  // Exit early if matching
  if (
    tagType === 'undefined' || tagType === 'void' ||
    tagType === '*' || tagType === 'any'
  ) {
    return true;
  }

  let parsedTypes;
  try {
    parsedTypes = tryParse(
      tagType,
      mode === 'permissive' ? undefined : [
        mode,
      ],
    );
  } catch {
    // Ignore
  }

  if (
    // We do not traverse deeply as it could be, e.g., `Promise<void>`
    parsedTypes &&
    parsedTypes.type === 'JsdocTypeUnion' &&
    parsedTypes.elements.find((elem) => {
      return elem.type === 'JsdocTypeUndefined' ||
        elem.type === 'JsdocTypeName' && elem.value === 'void';
    })) {
    return true;
  }

  // In any other case, a type is present
  return false;
};

/**
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} map
 * @param {string} tag
 * @returns {Map<string, string|string[]|boolean|undefined>}
 */
const ensureMap = (map, tag) => {
  if (!map.has(tag)) {
    map.set(tag, new Map());
  }

  return /** @type {Map<string, string | boolean>} */ (map.get(tag));
};

/**
 * @param {import('./iterateJsdoc.js').StructuredTags} structuredTags
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {void}
 */
const overrideTagStructure = (structuredTags, tagMap = tagStructure) => {
  for (const [
    tag,
    {
      name,
      type,
      required = [],
    },
  ] of Object.entries(structuredTags)) {
    const tagStruct = ensureMap(tagMap, tag);

    tagStruct.set('namepathRole', name);
    tagStruct.set('typeAllowed', type);

    const requiredName = required.includes('name');
    if (requiredName && name === false) {
      throw new Error('Cannot add "name" to `require` with the tag\'s `name` set to `false`');
    }

    tagStruct.set('nameRequired', requiredName);

    const requiredType = required.includes('type');
    if (requiredType && type === false) {
      throw new Error('Cannot add "type" to `require` with the tag\'s `type` set to `false`');
    }

    tagStruct.set('typeRequired', requiredType);

    const typeOrNameRequired = required.includes('typeOrNameRequired');
    if (typeOrNameRequired && name === false) {
      throw new Error('Cannot add "typeOrNameRequired" to `require` with the tag\'s `name` set to `false`');
    }

    if (typeOrNameRequired && type === false) {
      throw new Error('Cannot add "typeOrNameRequired" to `require` with the tag\'s `type` set to `false`');
    }

    tagStruct.set('typeOrNameRequired', typeOrNameRequired);
  }
};

/**
 * @param {ParserMode} mode
 * @param {import('./iterateJsdoc.js').StructuredTags} structuredTags
 * @returns {import('./getDefaultTagStructureForMode.js').TagStructure}
 */
const getTagStructureForMode = (mode, structuredTags) => {
  const tagStruct = getDefaultTagStructureForMode(mode);

  try {
    overrideTagStructure(structuredTags, tagStruct);
  /* c8 ignore next 3 */
  } catch {
    //
  }

  return tagStruct;
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean}
 */
const isNamepathDefiningTag = (tag, tagMap = tagStructure) => {
  const tagStruct = ensureMap(tagMap, tag);

  return tagStruct.get('namepathRole') === 'namepath-defining';
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean}
 */
const isNamepathReferencingTag = (tag, tagMap = tagStructure) => {
  const tagStruct = ensureMap(tagMap, tag);
  return tagStruct.get('namepathRole') === 'namepath-referencing';
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean}
 */
const isNamepathOrUrlReferencingTag = (tag, tagMap = tagStructure) => {
  const tagStruct = ensureMap(tagMap, tag);
  return tagStruct.get('namepathRole') === 'namepath-or-url-referencing';
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean|undefined}
 */
const tagMustHaveTypePosition = (tag, tagMap = tagStructure) => {
  const tagStruct = ensureMap(tagMap, tag);

  return /** @type {boolean|undefined} */ (tagStruct.get('typeRequired'));
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean|string}
 */
const tagMightHaveTypePosition = (tag, tagMap = tagStructure) => {
  if (tagMustHaveTypePosition(tag, tagMap)) {
    return true;
  }

  const tagStruct = ensureMap(tagMap, tag);

  const ret = /** @type {boolean|undefined} */ (tagStruct.get('typeAllowed'));

  return ret === undefined ? true : ret;
};

const namepathTypes = new Set([
  'namepath-defining', 'namepath-referencing',
]);

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean}
 */
const tagMightHaveNamePosition = (tag, tagMap = tagStructure) => {
  const tagStruct = ensureMap(tagMap, tag);

  const ret = tagStruct.get('namepathRole');

  return ret === undefined ? true : Boolean(ret);
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean}
 */
const tagMightHaveNamepath = (tag, tagMap = tagStructure) => {
  const tagStruct = ensureMap(tagMap, tag);

  const nampathRole = tagStruct.get('namepathRole');

  return nampathRole !== false &&
    namepathTypes.has(/** @type {string} */ (nampathRole));
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean|undefined}
 */
const tagMustHaveNamePosition = (tag, tagMap = tagStructure) => {
  const tagStruct = ensureMap(tagMap, tag);

  return /** @type {boolean|undefined} */ (tagStruct.get('nameRequired'));
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean}
 */
const tagMightHaveEitherTypeOrNamePosition = (tag, tagMap) => {
  return Boolean(tagMightHaveTypePosition(tag, tagMap)) || tagMightHaveNamepath(tag, tagMap);
};

/**
 * @param {string} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean|undefined}
 */
const tagMustHaveEitherTypeOrNamePosition = (tag, tagMap) => {
  const tagStruct = ensureMap(tagMap, tag);

  return /** @type {boolean} */ (tagStruct.get('typeOrNameRequired'));
};

/**
 * @param {import('comment-parser').Spec} tag
 * @param {import('./getDefaultTagStructureForMode.js').TagStructure} tagMap
 * @returns {boolean|undefined}
 */
const tagMissingRequiredTypeOrNamepath = (tag, tagMap = tagStructure) => {
  const mustHaveTypePosition = tagMustHaveTypePosition(tag.tag, tagMap);
  const mightHaveTypePosition = tagMightHaveTypePosition(tag.tag, tagMap);
  const hasTypePosition = mightHaveTypePosition && Boolean(tag.type);
  const hasNameOrNamepathPosition = (
    tagMustHaveNamePosition(tag.tag, tagMap) ||
    tagMightHaveNamepath(tag.tag, tagMap)
  ) && Boolean(tag.name);
  const mustHaveEither = tagMustHaveEitherTypeOrNamePosition(tag.tag, tagMap);
  const hasEither = tagMightHaveEitherTypeOrNamePosition(tag.tag, tagMap) &&
    (hasTypePosition || hasNameOrNamepathPosition);

  return mustHaveEither && !hasEither && !mustHaveTypePosition;
};

/* eslint-disable complexity -- Temporary */
/**
 * @param {ESTreeOrTypeScriptNode|null|undefined} node
 * @param {boolean} [checkYieldReturnValue]
 * @returns {boolean}
 */
const hasNonFunctionYield = (node, checkYieldReturnValue) => {
  /* eslint-enable complexity -- Temporary */
  if (!node) {
    return false;
  }

  switch (node.type) {
  case 'BlockStatement': {
    return node.body.some((bodyNode) => {
      return ![
        'ArrowFunctionExpression',
        'FunctionDeclaration',
        'FunctionExpression',
      ].includes(bodyNode.type) && hasNonFunctionYield(
        bodyNode, checkYieldReturnValue,
      );
    });
  }

  /* c8 ignore next 2 -- In Babel? */
  // @ts-expect-error In Babel?
  case 'OptionalCallExpression':
  case 'CallExpression':
    return node.arguments.some((element) => {
      return hasNonFunctionYield(element, checkYieldReturnValue);
    });
  case 'ChainExpression':
  case 'ExpressionStatement': {
    return hasNonFunctionYield(node.expression, checkYieldReturnValue);
  }

  case 'LabeledStatement':
  case 'WhileStatement':
  case 'DoWhileStatement':
  case 'ForStatement':
  case 'ForInStatement':
  case 'ForOfStatement':
  case 'WithStatement': {
    return hasNonFunctionYield(node.body, checkYieldReturnValue);
  }

  case 'ConditionalExpression':
  case 'IfStatement': {
    return hasNonFunctionYield(node.test, checkYieldReturnValue) ||
      hasNonFunctionYield(node.consequent, checkYieldReturnValue) ||
      hasNonFunctionYield(node.alternate, checkYieldReturnValue);
  }

  case 'TryStatement': {
    return hasNonFunctionYield(node.block, checkYieldReturnValue) ||
      hasNonFunctionYield(
        node.handler && node.handler.body, checkYieldReturnValue,
      ) ||
      hasNonFunctionYield(
        /** @type {import('@typescript-eslint/types').TSESTree.BlockStatement} */
        (node.finalizer),
        checkYieldReturnValue,
      );
  }

  case 'SwitchStatement': {
    return node.cases.some(
      (someCase) => {
        return someCase.consequent.some((nde) => {
          return hasNonFunctionYield(nde, checkYieldReturnValue);
        });
      },
    );
  }

  case 'ArrayPattern':
  case 'ArrayExpression':
    return node.elements.some((element) => {
      return hasNonFunctionYield(element, checkYieldReturnValue);
    });
  case 'AssignmentPattern':
    return hasNonFunctionYield(node.right, checkYieldReturnValue);

  case 'VariableDeclaration': {
    return node.declarations.some((nde) => {
      return hasNonFunctionYield(nde, checkYieldReturnValue);
    });
  }

  case 'VariableDeclarator': {
    return hasNonFunctionYield(node.id, checkYieldReturnValue) ||
      hasNonFunctionYield(node.init, checkYieldReturnValue);
  }

  case 'AssignmentExpression':
  case 'BinaryExpression':
  case 'LogicalExpression': {
    return hasNonFunctionYield(node.left, checkYieldReturnValue) ||
      hasNonFunctionYield(node.right, checkYieldReturnValue);
  }

  // Comma
  case 'SequenceExpression':
  case 'TemplateLiteral':
    return node.expressions.some((subExpression) => {
      return hasNonFunctionYield(subExpression, checkYieldReturnValue);
    });

  case 'ObjectPattern':
  case 'ObjectExpression':
    return node.properties.some((property) => {
      return hasNonFunctionYield(property, checkYieldReturnValue);
    });

  /* c8 ignore next -- In Babel? */
  case 'PropertyDefinition':
  /* eslint-disable no-fallthrough */
  /* c8 ignore next 2 -- In Babel? */
  // @ts-expect-error In Babel?
  case 'ObjectProperty':
  /* c8 ignore next 2 -- In Babel? */
  // @ts-expect-error In Babel?
  case 'ClassProperty':
  case 'Property':
  /* eslint-enable no-fallthrough */
    return node.computed && hasNonFunctionYield(node.key, checkYieldReturnValue) ||
      hasNonFunctionYield(node.value, checkYieldReturnValue);
  /* c8 ignore next 2 -- In Babel? */
  // @ts-expect-error In Babel?
  case 'ObjectMethod':
    /* c8 ignore next 6 -- In Babel? */
    // @ts-expect-error In Babel?
    return node.computed && hasNonFunctionYield(node.key, checkYieldReturnValue) ||
      // @ts-expect-error In Babel?
      node.arguments.some((nde) => {
        return hasNonFunctionYield(nde, checkYieldReturnValue);
      });

  case 'SpreadElement':
  case 'UnaryExpression':
    return hasNonFunctionYield(node.argument, checkYieldReturnValue);

  case 'TaggedTemplateExpression':
    return hasNonFunctionYield(node.quasi, checkYieldReturnValue);

  // ?.
  /* c8 ignore next 2 -- In Babel? */
  // @ts-expect-error In Babel?
  case 'OptionalMemberExpression':
  case 'MemberExpression':
    return hasNonFunctionYield(node.object, checkYieldReturnValue) ||
      hasNonFunctionYield(node.property, checkYieldReturnValue);

  /* c8 ignore next 2 -- In Babel? */
  // @ts-expect-error In Babel?
  case 'Import':
  case 'ImportExpression':
    return hasNonFunctionYield(node.source, checkYieldReturnValue);

  case 'ReturnStatement': {
    if (node.argument === null) {
      return false;
    }

    return hasNonFunctionYield(node.argument, checkYieldReturnValue);
  }

  case 'YieldExpression': {
    if (checkYieldReturnValue) {
      if (
        /** @type {import('eslint').Rule.Node} */ (
          node
        ).parent.type === 'VariableDeclarator'
      ) {
        return true;
      }

      return false;
    }

    // void return does not count.
    if (node.argument === null) {
      return false;
    }

    return true;
  }

  default: {
    return false;
  }
  }
};

/**
 * Checks if a node has a return statement. Void return does not count.
 * @param {ESTreeOrTypeScriptNode} node
 * @param {boolean} [checkYieldReturnValue]
 * @returns {boolean}
 */
const hasYieldValue = (node, checkYieldReturnValue) => {
  return /** @type {import('@typescript-eslint/types').TSESTree.FunctionDeclaration} */ (
    node
  ).generator && (
    /** @type {import('@typescript-eslint/types').TSESTree.FunctionDeclaration} */ (
      node
    ).expression || hasNonFunctionYield(
      /** @type {import('@typescript-eslint/types').TSESTree.FunctionDeclaration} */
      (node).body,
      checkYieldReturnValue,
    )
  );
};

/**
 * Checks if a node has a throws statement.
 * @param {ESTreeOrTypeScriptNode|null|undefined} node
 * @param {boolean} [innerFunction]
 * @returns {boolean}
 */
// eslint-disable-next-line complexity
const hasThrowValue = (node, innerFunction) => {
  if (!node) {
    return false;
  }

  // There are cases where a function may execute its inner function which
  //   throws, but we're treating functions atomically rather than trying to
  //   follow them
  switch (node.type) {
  case 'FunctionExpression':
  case 'FunctionDeclaration':
  case 'ArrowFunctionExpression': {
    return !innerFunction && !node.async && hasThrowValue(node.body, true);
  }

  case 'BlockStatement': {
    return node.body.some((bodyNode) => {
      return bodyNode.type !== 'FunctionDeclaration' && hasThrowValue(bodyNode);
    });
  }

  case 'LabeledStatement':
  case 'WhileStatement':
  case 'DoWhileStatement':
  case 'ForStatement':
  case 'ForInStatement':
  case 'ForOfStatement':
  case 'WithStatement': {
    return hasThrowValue(node.body);
  }

  case 'IfStatement': {
    return hasThrowValue(node.consequent) || hasThrowValue(node.alternate);
  }

  // We only consider it to throw an error if the catch or finally blocks throw an error.
  case 'TryStatement': {
    return hasThrowValue(node.handler && node.handler.body) ||
        hasThrowValue(node.finalizer);
  }

  case 'SwitchStatement': {
    return node.cases.some(
      (someCase) => {
        return someCase.consequent.some((nde) => {
          return hasThrowValue(nde);
        });
      },
    );
  }

  case 'ThrowStatement': {
    return true;
  }

  default: {
    return false;
  }
  }
};

/**
 * @param {string} tag
 */
/*
const isInlineTag = (tag) => {
  return /^(@link|@linkcode|@linkplain|@tutorial) /u.test(tag);
};
*/

/**
 * Parses GCC Generic/Template types
 * @see {@link https://github.com/google/closure-compiler/wiki/Generic-Types}
 * @see {@link https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#template}
 * @param {import('comment-parser').Spec} tag
 * @returns {string[]}
 */
const parseClosureTemplateTag = (tag) => {
  return tag.name
    .split(',')
    .map((type) => {
      return type.trim().replace(/^\[(?<name>.*?)=.*\]$/u, '$<name>');
    });
};

/**
 * @typedef {true|string[]} DefaultContexts
 */

/**
 * Checks user option for `contexts` array, defaulting to
 * contexts designated by the rule. Returns an array of
 * ESTree AST types, indicating allowable contexts.
 * @param {import('eslint').Rule.RuleContext} context
 * @param {DefaultContexts|undefined} defaultContexts
 * @param {{
 *   contexts?: import('./iterateJsdoc.js').Context[]
 * }} settings
 * @returns {(string|import('./iterateJsdoc.js').ContextObject)[]}
 */
const enforcedContexts = (context, defaultContexts, settings) => {
  const contexts = context.options[0]?.contexts || settings.contexts || (defaultContexts === true ? [
    'ArrowFunctionExpression',
    'FunctionDeclaration',
    'FunctionExpression',
    'TSDeclareFunction',
  ] : defaultContexts);

  return contexts;
};

/**
 * @param {import('./iterateJsdoc.js').Context[]} contexts
 * @param {import('./iterateJsdoc.js').CheckJsdoc} checkJsdoc
 * @param {import('@es-joy/jsdoccomment').CommentHandler} [handler]
 * @returns {import('eslint').Rule.RuleListener}
 */
const getContextObject = (contexts, checkJsdoc, handler) => {
  /** @type {import('eslint').Rule.RuleListener} */
  const properties = {};

  for (const [
    idx,
    prop,
  ] of contexts.entries()) {
    /** @type {string} */
    let property;

    /** @type {(node: import('eslint').Rule.Node) => void} */
    let value;

    if (typeof prop === 'object') {
      const selInfo = {
        lastIndex: idx,
        selector: prop.context,
      };
      if (prop.comment) {
        property = /** @type {string} */ (prop.context);
        value = checkJsdoc.bind(
          null,
          {
            ...selInfo,
            comment: prop.comment,
          },
          /**
           * @type {(jsdoc: import('@es-joy/jsdoccomment').JsdocBlockWithInline) => boolean}
           */
          (/** @type {import('@es-joy/jsdoccomment').CommentHandler} */ (
            handler
          ).bind(null, prop.comment)),
        );
      } else {
        property = /** @type {string} */ (prop.context);
        value = checkJsdoc.bind(null, selInfo, null);
      }
    } else {
      const selInfo = {
        lastIndex: idx,
        selector: prop,
      };
      property = prop;
      value = checkJsdoc.bind(null, selInfo, null);
    }

    const old = /**
                 * @type {((node: import('eslint').Rule.Node) => void)}
                 */ (properties[property]);
    properties[property] = old ?
      /**
       * @type {((node: import('eslint').Rule.Node) => void)}
       */
      function (node) {
        old(node);
        value(node);
      } :
      value;
  }

  return properties;
};

const tagsWithNamesAndDescriptions = new Set([
  'param', 'arg', 'argument', 'property', 'prop',
  'template',

  // These two are parsed by our custom parser as though having a `name`
  'returns', 'return',
]);

/**
 * @typedef {{
 *   [key: string]: false|string|
 *     {message: string, replacement?: string}
 * }} TagNamePreference
 */

/**
 * @param {import('eslint').Rule.RuleContext} context
 * @param {ParserMode|undefined} mode
 * @param {import('comment-parser').Spec[]} tags
 * @returns {{
 *   tagsWithNames: import('comment-parser').Spec[],
 *   tagsWithoutNames: import('comment-parser').Spec[]
 * }}
 */
const getTagsByType = (context, mode, tags) => {
  /**
   * @type {import('comment-parser').Spec[]}
   */
  const tagsWithoutNames = [];
  const tagsWithNames = tags.filter((tag) => {
    const {
      tag: tagName,
    } = tag;
    const tagWithName = tagsWithNamesAndDescriptions.has(tagName);
    if (!tagWithName) {
      tagsWithoutNames.push(tag);
    }

    return tagWithName;
  });

  return {
    tagsWithNames,
    tagsWithoutNames,
  };
};

/**
 * @param {import('eslint').SourceCode|{
 *   text: string
 * }} sourceCode
 * @returns {string}
 */
const getIndent = (sourceCode) => {
  return (sourceCode.text.match(/^\n*([ \t]+)/u)?.[1] ?? '') + ' ';
};

/**
 * @param {import('eslint').Rule.Node|null} node
 * @returns {boolean}
 */
const isConstructor = (node) => {
  return node?.type === 'MethodDefinition' && node.kind === 'constructor' ||
  /** @type {import('@typescript-eslint/types').TSESTree.MethodDefinition} */ (
    node?.parent
  )?.kind === 'constructor';
};

/**
 * @param {import('eslint').Rule.Node|null} node
 * @returns {boolean}
 */
const isGetter = (node) => {
  return node !== null &&
  /**
   * @type {import('@typescript-eslint/types').TSESTree.MethodDefinition|
   *   import('@typescript-eslint/types').TSESTree.Property}
   */ (
    node.parent
  )?.kind === 'get';
};

/**
 * @param {import('eslint').Rule.Node|null} node
 * @returns {boolean}
 */
const isSetter = (node) => {
  return node !== null &&
  /**
   * @type {import('@typescript-eslint/types').TSESTree.MethodDefinition|
   *   import('@typescript-eslint/types').TSESTree.Property}
   */(
    node.parent
  )?.kind === 'set';
};

/**
 * @param {import('eslint').Rule.Node} node
 * @returns {boolean}
 */
const hasAccessorPair = (node) => {
  const {
    type,
    kind: sourceKind,
    key,
  } =
    /**
     * @type {import('@typescript-eslint/types').TSESTree.MethodDefinition|
     *   import('@typescript-eslint/types').TSESTree.Property}
     */ (node);

  const sourceName =
    /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
      key
    ).name;

  const oppositeKind = sourceKind === 'get' ? 'set' : 'get';

  const sibling = type === 'MethodDefinition' ?
    /** @type {import('@typescript-eslint/types').TSESTree.ClassBody} */ (
      node.parent
    ).body :
    /** @type {import('@typescript-eslint/types').TSESTree.ObjectExpression} */ (
      node.parent
    ).properties;

  return (
    sibling.some((child) => {
      const {
        kind,
        key: ky,
      } = /**
           * @type {import('@typescript-eslint/types').TSESTree.MethodDefinition|
           *   import('@typescript-eslint/types').TSESTree.Property}
           */ (child);

      const name =
        /** @type {import('@typescript-eslint/types').TSESTree.Identifier} */ (
          ky
        ).name;

      return kind === oppositeKind && name === sourceName;
    })
  );
};

/**
 * @param {import('./iterateJsdoc.js').JsdocBlockWithInline} jsdoc
 * @param {import('eslint').Rule.Node|null} node
 * @param {import('eslint').Rule.RuleContext} context
 * @param {import('json-schema').JSONSchema4} schema
 * @returns {boolean}
 */
const exemptSpeciaMethods = (jsdoc, node, context, schema) => {
  /**
   * @param {"checkGetters"|"checkSetters"|"checkConstructors"} prop
   * @returns {boolean|"no-setter"|"no-getter"}
   */
  const hasSchemaOption = (prop) => {
    const schemaProperties = schema[0].properties;

    return context.options[0]?.[prop] ??
      (schemaProperties[prop] && schemaProperties[prop].default);
  };

  const checkGetters = hasSchemaOption('checkGetters');
  const checkSetters = hasSchemaOption('checkSetters');

  return !hasSchemaOption('checkConstructors') &&
    (
      isConstructor(node) ||
      hasATag(jsdoc, [
        'class',
        'constructor',
      ])) ||
  isGetter(node) && (
    !checkGetters ||
    checkGetters === 'no-setter' && hasAccessorPair(/** @type {import('./iterateJsdoc.js').Node} */ (node).parent)
  ) ||
  isSetter(node) && (
    !checkSetters ||
    checkSetters === 'no-getter' && hasAccessorPair(/** @type {import('./iterateJsdoc.js').Node} */ (node).parent)
  );
};

/**
 * Since path segments may be unquoted (if matching a reserved word,
 * identifier or numeric literal) or single or double quoted, in either
 * the `@param` or in source, we need to strip the quotes to give a fair
 * comparison.
 * @param {string} str
 * @returns {string}
 */
const dropPathSegmentQuotes = (str) => {
  return str.replaceAll(/\.(['"])(.*)\1/gu, '.$2');
};

/**
 * @param {string} name
 * @returns {(otherPathName: string) => boolean}
 */
const comparePaths = (name) => {
  return (otherPathName) => {
    return otherPathName === name ||
      dropPathSegmentQuotes(otherPathName) === dropPathSegmentQuotes(name);
  };
};

/**
 * @callback PathDoesNotBeginWith
 * @param {string} name
 * @param {string} otherPathName
 * @returns {boolean}
 */

/** @type {PathDoesNotBeginWith} */
const pathDoesNotBeginWith = (name, otherPathName) => {
  return !name.startsWith(otherPathName) &&
    !dropPathSegmentQuotes(name).startsWith(dropPathSegmentQuotes(otherPathName));
};

/**
 * @param {string} regexString
 * @param {string} [requiredFlags]
 * @returns {RegExp}
 */
const getRegexFromString = (regexString, requiredFlags) => {
  const match = regexString.match(/^\/(.*)\/([gimyus]*)$/us);
  let flags = 'u';
  let regex = regexString;
  if (match) {
    [
      , regex,
      flags,
    ] = match;
    if (!flags) {
      flags = 'u';
    }
  }

  const uniqueFlags = [
    ...new Set(flags + (requiredFlags || '')),
  ];
  flags = uniqueFlags.join('');

  return new RegExp(regex, flags);
};

export {
  comparePaths,
  dropPathSegmentQuotes,
  enforcedContexts,
  exemptSpeciaMethods,
  filterTags,
  flattenRoots,
  forEachPreferredTag,
  getAllTags,
  getContextObject,
  getFunctionParameterNames,
  getIndent,
  getJsdocTagsDeep,
  getPreferredTagName,
  getPreferredTagNameSimple,
  getRegexFromString,
  getTagDescription,
  getTags,
  getTagsByType,
  getTagStructureForMode,
  hasATag,
  hasParams,
  hasReturnValue,
  hasTag,
  hasThrowValue,
  hasValueOrExecutorHasNonEmptyResolveValue,
  hasYieldValue,
  isConstructor,
  isGetter,
  isNamepathDefiningTag,
  isNamepathOrUrlReferencingTag,
  isNamepathReferencingTag,
  isSetter,
  isValidTag,
  mayBeUndefinedTypeTag,
  overrideTagStructure,
  parseClosureTemplateTag,
  pathDoesNotBeginWith,
  setTagStructure,
  tagMightHaveEitherTypeOrNamePosition,
  tagMightHaveNamepath,
  tagMightHaveNamePosition,
  tagMightHaveTypePosition,
  tagMissingRequiredTypeOrNamepath,
  tagMustHaveNamePosition,
  tagMustHaveTypePosition,
};
