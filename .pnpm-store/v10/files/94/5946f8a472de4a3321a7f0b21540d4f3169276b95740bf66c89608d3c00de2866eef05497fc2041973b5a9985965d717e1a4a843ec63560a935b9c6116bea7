import iterateJsdoc from '../iterateJsdoc.js';

export default iterateJsdoc(({
  report,
  utils,
}) => {
  utils.forEachPreferredTag('property', (jsdoc, targetTagName) => {
    if (!jsdoc.type) {
      report(
        `Missing JSDoc @${targetTagName} "${jsdoc.name}" type.`,
        null,
        jsdoc,
      );
    }
  });
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Requires that each `@property` tag has a `type` value.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header',
    },
    type: 'suggestion',
  },
});
