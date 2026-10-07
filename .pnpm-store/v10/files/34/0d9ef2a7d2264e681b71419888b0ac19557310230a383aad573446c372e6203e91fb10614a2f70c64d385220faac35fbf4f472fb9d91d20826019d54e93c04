import iterateJsdoc from '../iterateJsdoc.js';

export default iterateJsdoc(({
  report,
  utils,
}) => {
  utils.forEachPreferredTag('param', (jsdocParameter, targetTagName) => {
    if (jsdocParameter.tag && jsdocParameter.name === '') {
      report(
        `There must be an identifier after @${targetTagName} ${jsdocParameter.type === '' ? 'type' : 'tag'}.`,
        null,
        jsdocParameter,
      );
    }
  });
}, {
  contextDefaults: true,
  meta: {
    docs: {
      description: 'Requires that all function parameters have names.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header',
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
