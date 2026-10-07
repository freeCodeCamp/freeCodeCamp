import iterateJsdoc from '../iterateJsdoc.js';

export default iterateJsdoc(({
  report,
  utils,
}) => {
  utils.forEachPreferredTag('returns', (jsdocTag, targetTagName) => {
    const type = jsdocTag.type && jsdocTag.type.trim();

    if ([
      'void', 'undefined', 'Promise<void>', 'Promise<undefined>',
    ].includes(type)) {
      return;
    }

    if (!jsdocTag.description.trim()) {
      report(`Missing JSDoc @${targetTagName} description.`, null, jsdocTag);
    }
  });
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Requires that the `@returns` tag has a `description` value.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header',
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
        },
        type: 'object',
      },
    ],
    type: 'suggestion',
  },
});
