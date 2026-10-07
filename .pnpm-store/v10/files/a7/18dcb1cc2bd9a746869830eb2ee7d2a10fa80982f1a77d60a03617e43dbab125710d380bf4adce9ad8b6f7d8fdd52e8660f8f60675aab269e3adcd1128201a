import iterateJsdoc from '../iterateJsdoc.js';

/**
 * We can skip checking for a yield value, in case the documentation is inherited
 * or the method has a constructor or abstract tag.
 *
 * In either of these cases the yield value is optional or not defined.
 * @param {import('../iterateJsdoc.js').Utils} utils a reference to the utils which are used to probe if a tag is present or not.
 * @returns {boolean} true in case deep checking can be skipped; otherwise false.
 */
const canSkip = (utils) => {
  return utils.hasATag([
    // inheritdoc implies that all documentation is inherited
    // see https://jsdoc.app/tags-inheritdoc.html
    //
    // Abstract methods are by definition incomplete,
    // so it is not an error if it declares a yield value but does not implement it.
    'abstract',
    'virtual',

    // Constructors do not have a yield value
    // so we can bail out here, too.
    'class',
    'constructor',

    // Yield (and any `next`) type is specified accompanying the targeted
    //   @type
    'type',

    // This seems to imply a class as well
    'interface',
  ]) ||
    utils.avoidDocs();
};

/**
 * @param {import('../iterateJsdoc.js').Utils} utils
 * @param {import('../iterateJsdoc.js').Report} report
 * @param {string} tagName
 * @returns {[preferredTagName?: string, missingTag?: boolean]}
 */
const checkTagName = (utils, report, tagName) => {
  const preferredTagName = /** @type {string} */ (utils.getPreferredTagName({
    tagName,
  }));
  if (!preferredTagName) {
    return [];
  }

  const tags = utils.getTags(preferredTagName);

  if (tags.length > 1) {
    report(`Found more than one @${preferredTagName} declaration.`);
  }

  // In case the code yields something, we expect a yields value in JSDoc.
  const [
    tag,
  ] = tags;
  const missingTag = typeof tag === 'undefined' || tag === null;

  return [
    preferredTagName, missingTag,
  ];
};

export default iterateJsdoc(({
  report,
  utils,
  context,
}) => {
  const {
    next = false,
    nextWithGeneratorTag = false,
    forceRequireNext = false,
    forceRequireYields = false,
    withGeneratorTag = true,
  } = context.options[0] || {};

  // A preflight check. We do not need to run a deep check
  // in case the @yield comment is optional or undefined.
  if (canSkip(utils)) {
    return;
  }

  const iteratingFunction = utils.isIteratingFunction();

  const [
    preferredYieldTagName,
    missingYieldTag,
  ] = checkTagName(
    utils, report, 'yields',
  );
  if (preferredYieldTagName) {
    const shouldReportYields = () => {
      if (!missingYieldTag) {
        return false;
      }

      if (
        withGeneratorTag && utils.hasTag('generator') ||
        forceRequireYields && iteratingFunction && utils.isGenerator()
      ) {
        return true;
      }

      return iteratingFunction && utils.isGenerator() && utils.hasYieldValue();
    };

    if (shouldReportYields()) {
      report(`Missing JSDoc @${preferredYieldTagName} declaration.`);
    }
  }

  if (next || nextWithGeneratorTag || forceRequireNext) {
    const [
      preferredNextTagName,
      missingNextTag,
    ] = checkTagName(
      utils, report, 'next',
    );
    if (!preferredNextTagName) {
      return;
    }

    const shouldReportNext = () => {
      if (!missingNextTag) {
        return false;
      }

      if (
        nextWithGeneratorTag && utils.hasTag('generator')) {
        return true;
      }

      if (
        !next && !forceRequireNext ||
        !iteratingFunction ||
        !utils.isGenerator()
      ) {
        return false;
      }

      return forceRequireNext || utils.hasYieldReturnValue();
    };

    if (shouldReportNext()) {
      report(`Missing JSDoc @${preferredNextTagName} declaration.`);
    }
  }
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Requires yields are documented.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header',
    },
    schema: [
      {
        additionalProperties: false,
        properties: {
          contexts: {
            items: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  additionalProperties: false,
                  properties: {
                    comment: {
                      type: 'string',
                    },
                    context: {
                      type: 'string',
                    },
                  },
                  type: 'object',
                },
              ],
            },
            type: 'array',
          },
          exemptedBy: {
            items: {
              type: 'string',
            },
            type: 'array',
          },
          forceRequireNext: {
            default: false,
            type: 'boolean',
          },
          forceRequireYields: {
            default: false,
            type: 'boolean',
          },
          next: {
            default: false,
            type: 'boolean',
          },
          nextWithGeneratorTag: {
            default: false,
            type: 'boolean',
          },
          withGeneratorTag: {
            default: true,
            type: 'boolean',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
