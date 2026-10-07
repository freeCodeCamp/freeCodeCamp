import iterateJsdoc from '../iterateJsdoc.js';

/**
 * @param {string} description
 * @returns {import('../iterateJsdoc.js').Integer}
 */
const checkDescription = (description) => {
  return description
    .trim()
    .split('\n')
    .filter(Boolean)
    .length;
};

export default iterateJsdoc(({
  jsdoc,
  report,
  utils,
  context,
}) => {
  if (utils.avoidDocs()) {
    return;
  }

  const {
    descriptionStyle = 'body',
  } = context.options[0] || {};

  let targetTagName = utils.getPreferredTagName({
    // We skip reporting except when `@description` is essential to the rule,
    //  so user can block the tag and still meaningfully use this rule
    //  even if the tag is present (and `check-tag-names` is the one to
    //  normally report the fact that it is blocked but present)
    skipReportingBlockedTag: descriptionStyle !== 'tag',
    tagName: 'description',
  });
  if (!targetTagName) {
    return;
  }

  const isBlocked = typeof targetTagName === 'object' && 'blocked' in targetTagName && targetTagName.blocked;
  if (isBlocked) {
    targetTagName = /** @type {{blocked: true; tagName: string;}} */ (
      targetTagName
    ).tagName;
  }

  if (descriptionStyle !== 'tag') {
    const {
      description,
    } = utils.getDescription();
    if (checkDescription(description || '')) {
      return;
    }

    if (descriptionStyle === 'body') {
      const descTags = utils.getPresentTags([
        'desc', 'description',
      ]);
      if (descTags.length) {
        const [
          {
            tag: tagName,
          },
        ] = descTags;
        report(`Remove the @${tagName} tag to leave a plain block description or add additional description text above the @${tagName} line.`);
      } else {
        report('Missing JSDoc block description.');
      }

      return;
    }
  }

  const functionExamples = isBlocked ?
    [] :
    jsdoc.tags.filter(({
      tag,
    }) => {
      return tag === targetTagName;
    });

  if (!functionExamples.length) {
    report(
      descriptionStyle === 'any' ?
        `Missing JSDoc block description or @${targetTagName} declaration.` :
        `Missing JSDoc @${targetTagName} declaration.`,
    );

    return;
  }

  for (const example of functionExamples) {
    if (!checkDescription(`${example.name} ${utils.getTagDescription(example)}`)) {
      report(`Missing JSDoc @${targetTagName} description.`, null, example);
    }
  }
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Requires that all functions have a description.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header',
    },
    schema: [
      {
        additionalProperties: false,
        properties: {
          checkConstructors: {
            default: true,
            type: 'boolean',
          },
          checkGetters: {
            default: true,
            type: 'boolean',
          },
          checkSetters: {
            default: true,
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
          descriptionStyle: {
            enum: [
              'body', 'tag', 'any',
            ],
            type: 'string',
          },
          exemptedBy: {
            items: {
              type: 'string',
            },
            type: 'array',
          },
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
