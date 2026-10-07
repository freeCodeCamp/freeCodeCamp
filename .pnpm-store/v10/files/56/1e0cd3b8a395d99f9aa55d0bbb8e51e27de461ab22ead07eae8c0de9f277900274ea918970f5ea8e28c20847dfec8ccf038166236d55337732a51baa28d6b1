import iterateJsdoc from '../iterateJsdoc.js';

/**
 * @param {string} targetTagName
 * @param {boolean} allowExtraTrailingParamDocs
 * @param {boolean} checkDestructured
 * @param {boolean} checkRestProperty
 * @param {RegExp} checkTypesRegex
 * @param {boolean} disableExtraPropertyReporting
 * @param {boolean} disableMissingParamChecks
 * @param {boolean} enableFixer
 * @param {import('../jsdocUtils.js').ParamNameInfo[]} functionParameterNames
 * @param {import('comment-parser').Block} jsdoc
 * @param {import('../iterateJsdoc.js').Utils} utils
 * @param {import('../iterateJsdoc.js').Report} report
 * @returns {boolean}
 */
const validateParameterNames = (
  targetTagName,
  allowExtraTrailingParamDocs,
  checkDestructured,
  checkRestProperty,
  checkTypesRegex,
  disableExtraPropertyReporting,
  disableMissingParamChecks,
  enableFixer,
  functionParameterNames, jsdoc, utils, report,
) => {
  const paramTags = Object.entries(jsdoc.tags).filter(([
    , tag,
  ]) => {
    return tag.tag === targetTagName;
  });
  const paramTagsNonNested = paramTags.filter(([
    , tag,
  ]) => {
    return !tag.name.includes('.');
  });

  let dotted = 0;
  let thisOffset = 0;

  // eslint-disable-next-line complexity
  return paramTags.some(([
    , tag,
  ], index) => {
    /** @type {import('../iterateJsdoc.js').Integer} */
    let tagsIndex;
    const dupeTagInfo = paramTags.find(([
      tgsIndex,
      tg,
    ], idx) => {
      tagsIndex = Number(tgsIndex);

      return tg.name === tag.name && idx !== index;
    });
    if (dupeTagInfo) {
      utils.reportJSDoc(`Duplicate @${targetTagName} "${tag.name}"`, dupeTagInfo[1], enableFixer ? () => {
        utils.removeTag(tagsIndex);
      } : null);

      return true;
    }

    if (tag.name.includes('.')) {
      dotted++;

      return false;
    }

    let functionParameterName = functionParameterNames[index - dotted + thisOffset];
    if (functionParameterName === 'this' && tag.name.trim() !== 'this') {
      ++thisOffset;
      functionParameterName = functionParameterNames[index - dotted + thisOffset];
    }

    if (!functionParameterName) {
      if (allowExtraTrailingParamDocs) {
        return false;
      }

      report(
        `@${targetTagName} "${tag.name}" does not match an existing function parameter.`,
        null,
        tag,
      );

      return true;
    }
    if (
      typeof functionParameterName === 'object' &&
        'name' in functionParameterName &&
        Array.isArray(functionParameterName.name)
    ) {
      const actualName = tag.name.trim();
      const expectedName = functionParameterName.name[index];
      if (actualName === expectedName) {
        thisOffset--;
        return false;
      }
      report(
        `Expected @${targetTagName} name to be "${expectedName}". Got "${actualName}".`,
        null,
        tag,
      );
      return true;
    }

    if (Array.isArray(functionParameterName)) {
      if (!checkDestructured) {
        return false;
      }

      if (tag.type && tag.type.search(checkTypesRegex) === -1) {
        return false;
      }

      const [
        parameterName,
        {
          names: properties,
          hasPropertyRest,
          rests,
          annotationParamName,
        },
      ] =
        /**
         * @type {[string | undefined, import('../jsdocUtils.js').FlattendRootInfo & {
         *   annotationParamName?: string | undefined;
          }]} */ (functionParameterName);
      if (annotationParamName !== undefined) {
        const name = tag.name.trim();
        if (name !== annotationParamName) {
          report(`@${targetTagName} "${name}" does not match parameter name "${annotationParamName}"`, null, tag);
        }
      }

      const tagName = parameterName === undefined ? tag.name.trim() : parameterName;
      const expectedNames = properties.map((name) => {
        return `${tagName}.${name}`;
      });
      const actualNames = paramTags.map(([
        , paramTag,
      ]) => {
        return paramTag.name.trim();
      });
      const actualTypes = paramTags.map(([
        , paramTag,
      ]) => {
        return paramTag.type;
      });

      const missingProperties = [];

      /** @type {string[]} */
      const notCheckingNames = [];

      for (const [
        idx,
        name,
      ] of expectedNames.entries()) {
        if (notCheckingNames.some((notCheckingName) => {
          return name.startsWith(notCheckingName);
        })) {
          continue;
        }

        const actualNameIdx = actualNames.findIndex((actualName) => {
          return utils.comparePaths(name)(actualName);
        });
        if (actualNameIdx === -1) {
          if (!checkRestProperty && rests[idx]) {
            continue;
          }

          const missingIndex = actualNames.findIndex((actualName) => {
            return utils.pathDoesNotBeginWith(name, actualName);
          });
          const line = tag.source[0].number - 1 + (missingIndex > -1 ? missingIndex : actualNames.length);
          missingProperties.push({
            name,
            tagPlacement: {
              line: line === 0 ? 1 : line,
            },
          });
        } else if (actualTypes[actualNameIdx].search(checkTypesRegex) === -1 && actualTypes[actualNameIdx] !== '') {
          notCheckingNames.push(name);
        }
      }

      const hasMissing = missingProperties.length;
      if (hasMissing) {
        for (const {
          tagPlacement,
          name: missingProperty,
        } of missingProperties) {
          report(`Missing @${targetTagName} "${missingProperty}"`, null, tagPlacement);
        }
      }

      if (!hasPropertyRest || checkRestProperty) {
        /** @type {[string, import('comment-parser').Spec][]} */
        const extraProperties = [];
        for (const [
          idx,
          name,
        ] of actualNames.entries()) {
          const match = name.startsWith(tag.name.trim() + '.');
          if (
            match && !expectedNames.some(
              utils.comparePaths(name),
            ) && !utils.comparePaths(name)(tag.name) &&
            (!disableExtraPropertyReporting || properties.some((prop) => {
              return prop.split('.').length >= name.split('.').length - 1;
            }))
          ) {
            extraProperties.push([
              name, paramTags[idx][1],
            ]);
          }
        }

        if (extraProperties.length) {
          for (const [
            extraProperty,
            tg,
          ] of extraProperties) {
            report(`@${targetTagName} "${extraProperty}" does not exist on ${tag.name}`, null, tg);
          }

          return true;
        }
      }

      return hasMissing;
    }

    let funcParamName;
    if (typeof functionParameterName === 'object') {
      const {
        name,
      } = functionParameterName;
      funcParamName = name;
    } else {
      funcParamName = functionParameterName;
    }

    if (funcParamName !== tag.name.trim()) {
      // Todo: Improve for array or object child items
      const actualNames = paramTagsNonNested.map(([
        , {
          name,
        },
      ]) => {
        return name.trim();
      });

      const expectedNames = functionParameterNames.map((item, idx) => {
        if (/**
             * @type {[string|undefined, (import('../jsdocUtils.js').FlattendRootInfo & {
             *   annotationParamName?: string,
              })]} */ (item)?.[1]?.names) {
          return actualNames[idx];
        }

        return item;
      }).filter((item) => {
        return item !== 'this';
      });

      // When disableMissingParamChecks is true tag names can be omitted.
      // Report when the tag names do not match the expected names or they are used out of order.
      if (disableMissingParamChecks) {
        const usedExpectedNames = expectedNames.map(a => a?.toString()).filter(expectedName => expectedName && actualNames.includes(expectedName));
        const usedInOrder = actualNames.every((actualName, idx) => actualName === usedExpectedNames[idx]);
        if (usedInOrder) {
          return false;
        }
      }

      report(
        `Expected @${targetTagName} names to be "${
          expectedNames.map((expectedName) => {
            return typeof expectedName === 'object' &&
              'name' in expectedName &&
              expectedName.restElement
              ? '...' + expectedName.name
              : expectedName;
          }).join(', ')
        }". Got "${actualNames.join(', ')}".`,
        null,
        tag,
      );

      return true;
    }

    return false;
  });
};

/**
 * @param {string} targetTagName
 * @param {boolean} _allowExtraTrailingParamDocs
 * @param {{
 *   name: string,
 *   idx: import('../iterateJsdoc.js').Integer
 * }[]} jsdocParameterNames
 * @param {import('comment-parser').Block} jsdoc
 * @param {Function} report
 * @returns {boolean}
 */
const validateParameterNamesDeep = (
  targetTagName, _allowExtraTrailingParamDocs,
  jsdocParameterNames, jsdoc, report,
) => {
  /** @type {string} */
  let lastRealParameter;

  return jsdocParameterNames.some(({
    name: jsdocParameterName,
    idx,
  }) => {
    const isPropertyPath = jsdocParameterName.includes('.');

    if (isPropertyPath) {
      if (!lastRealParameter) {
        report(`@${targetTagName} path declaration ("${jsdocParameterName}") appears before any real parameter.`, null, jsdoc.tags[idx]);

        return true;
      }

      let pathRootNodeName = jsdocParameterName.slice(0, jsdocParameterName.indexOf('.'));

      if (pathRootNodeName.endsWith('[]')) {
        pathRootNodeName = pathRootNodeName.slice(0, -2);
      }

      if (pathRootNodeName !== lastRealParameter) {
        report(
          `@${targetTagName} path declaration ("${jsdocParameterName}") root node name ("${pathRootNodeName}") ` +
          `does not match previous real parameter name ("${lastRealParameter}").`,
          null,
          jsdoc.tags[idx],
        );

        return true;
      }
    } else {
      lastRealParameter = jsdocParameterName;
    }

    return false;
  });
};

export default iterateJsdoc(({
  context,
  jsdoc,
  report,
  utils,
}) => {
  const {
    allowExtraTrailingParamDocs,
    checkDestructured = true,
    checkRestProperty = false,
    checkTypesPattern = '/^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$/',
    enableFixer = false,
    useDefaultObjectProperties = false,
    disableExtraPropertyReporting = false,
    disableMissingParamChecks = false,
  } = context.options[0] || {};

  const checkTypesRegex = utils.getRegexFromString(checkTypesPattern);

  const jsdocParameterNamesDeep = utils.getJsdocTagsDeep('param');
  if (!jsdocParameterNamesDeep || !jsdocParameterNamesDeep.length) {
    return;
  }

  const functionParameterNames = utils.getFunctionParameterNames(useDefaultObjectProperties);

  const targetTagName = /** @type {string} */ (utils.getPreferredTagName({
    tagName: 'param',
  }));
  const isError = validateParameterNames(
    targetTagName,
    allowExtraTrailingParamDocs,
    checkDestructured,
    checkRestProperty,
    checkTypesRegex,
    disableExtraPropertyReporting,
    disableMissingParamChecks,
    enableFixer,
    functionParameterNames,
    jsdoc,
    utils,
    report,
  );

  if (isError || !checkDestructured) {
    return;
  }

  validateParameterNamesDeep(
    targetTagName, allowExtraTrailingParamDocs, jsdocParameterNamesDeep, jsdoc, report,
  );
}, {
  contextDefaults: [
    'ArrowFunctionExpression', 'FunctionDeclaration', 'FunctionExpression', 'TSDeclareFunction',
    // Add this to above defaults
    'TSMethodSignature'
  ],
  meta: {
    docs: {
      description: 'Ensures that parameter names in JSDoc match those in the function declaration.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header',
    },
    fixable: 'code',
    schema: [
      {
        additionalProperties: false,
        properties: {
          allowExtraTrailingParamDocs: {
            type: 'boolean',
          },
          checkDestructured: {
            type: 'boolean',
          },
          checkRestProperty: {
            type: 'boolean',
          },
          checkTypesPattern: {
            type: 'string',
          },
          disableExtraPropertyReporting: {
            type: 'boolean',
          },
          disableMissingParamChecks: {
            type: 'boolean',
          },
          enableFixer: {
            type: 'boolean',
          },
          useDefaultObjectProperties: {
            type: 'boolean',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
