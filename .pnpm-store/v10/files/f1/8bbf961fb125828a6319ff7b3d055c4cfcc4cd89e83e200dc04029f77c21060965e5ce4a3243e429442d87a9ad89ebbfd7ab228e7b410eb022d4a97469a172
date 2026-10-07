import iterateJsdoc from '../iterateJsdoc.js';

/**
 * @param {import('../iterateJsdoc.js').Utils} utils
 * @param {import('../iterateJsdoc.js').Settings} settings
 * @returns {boolean}
 */
const canSkip = (utils, settings) => {
  const voidingTags = [
    // An abstract function is by definition incomplete
    // so it is perfectly fine if a yield is documented but
    // not present within the function.
    // A subclass may inherit the doc and implement the
    // missing yield.
    'abstract',
    'virtual',

    // Constructor functions do not have a yield value
    //  so we can bail here, too.
    'class',
    'constructor',

    // This seems to imply a class as well
    'interface',
  ];

  if (settings.mode === 'closure') {
    // Structural Interface in GCC terms, equivalent to @interface tag as far as this rule is concerned
    voidingTags.push('record');
  }

  return utils.hasATag(voidingTags) ||
    utils.isConstructor() ||
    utils.classHasTag('interface') ||
    settings.mode === 'closure' && utils.classHasTag('record');
};

/**
 * @param {import('../iterateJsdoc.js').Utils} utils
 * @param {import('../iterateJsdoc.js').Report} report
 * @param {string} tagName
 * @returns {[]|[preferredTagName: string, tag: import('comment-parser').Spec]}
 */
const checkTagName = (utils, report, tagName) => {
  const preferredTagName = /** @type {string} */ (utils.getPreferredTagName({
    tagName,
  }));
  if (!preferredTagName) {
    return [];
  }

  const tags = utils.getTags(preferredTagName);

  if (tags.length === 0) {
    return [];
  }

  if (tags.length > 1) {
    report(`Found more than one @${preferredTagName} declaration.`);

    return [];
  }

  return [
    preferredTagName, tags[0],
  ];
};

export default iterateJsdoc(({
  context,
  report,
  settings,
  utils,
}) => {
  if (canSkip(utils, settings)) {
    return;
  }

  const {
    next = false,
    checkGeneratorsOnly = false,
  } = context.options[0] || {};

  const [
    preferredYieldTagName,
    yieldTag,
  ] = checkTagName(
    utils, report, 'yields',
  );
  if (preferredYieldTagName) {
    const shouldReportYields = () => {
      if (
        /** @type {import('comment-parser').Spec} */ (
          yieldTag
        ).type.trim() === 'never'
      ) {
        if (utils.hasYieldValue()) {
          report(`JSDoc @${preferredYieldTagName} declaration set with "never" but yield expression is present in function.`);
        }

        return false;
      }

      if (checkGeneratorsOnly && !utils.isGenerator()) {
        return true;
      }

      return !utils.mayBeUndefinedTypeTag(
        /** @type {import('comment-parser').Spec} */
        (yieldTag),
      ) && !utils.hasYieldValue();
    };

    // In case a yield value is declared in JSDoc, we also expect one in the code.
    if (shouldReportYields()) {
      report(`JSDoc @${preferredYieldTagName} declaration present but yield expression not available in function.`);
    }
  }

  if (next) {
    const [
      preferredNextTagName,
      nextTag,
    ] = checkTagName(
      utils, report, 'next',
    );
    if (preferredNextTagName) {
      const shouldReportNext = () => {
        if (
          /** @type {import('comment-parser').Spec} */ (
            nextTag
          ).type.trim() === 'never'
        ) {
          if (utils.hasYieldReturnValue()) {
            report(`JSDoc @${preferredNextTagName} declaration set with "never" but yield expression with return value is present in function.`);
          }

          return false;
        }

        if (checkGeneratorsOnly && !utils.isGenerator()) {
          return true;
        }

        return !utils.mayBeUndefinedTypeTag(
          /** @type {import('comment-parser').Spec} */
          (nextTag),
        ) && !utils.hasYieldReturnValue();
      };

      if (shouldReportNext()) {
        report(`JSDoc @${preferredNextTagName} declaration present but yield expression with return value not available in function.`);
      }
    }
  }
}, {
  meta: {
    docs: {
      description: 'Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header',
    },
    schema: [
      {
        additionalProperties: false,
        properties: {
          checkGeneratorsOnly: {
            default: false,
            type: 'boolean',
          },
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
          next: {
            default: false,
            type: 'boolean',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
