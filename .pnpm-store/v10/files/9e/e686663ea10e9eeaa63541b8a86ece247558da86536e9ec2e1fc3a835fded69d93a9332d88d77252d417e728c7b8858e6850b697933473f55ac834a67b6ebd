import iterateJsdoc from '../iterateJsdoc.js';

export default iterateJsdoc(({
  utils,
}) => {
  const propertyAssociatedTags = utils.filterTags(({
    tag,
  }) => {
    return [
      'typedef', 'namespace',
    ].includes(tag);
  });
  if (!propertyAssociatedTags.length) {
    return;
  }

  const targetTagName = /** @type {string} */ (utils.getPreferredTagName({
    tagName: 'property',
  }));

  if (utils.hasATag([
    targetTagName,
  ])) {
    return;
  }

  for (const propertyAssociatedTag of propertyAssociatedTags) {
    if (![
      'object', 'Object', 'PlainObject',
    ].includes(propertyAssociatedTag.type)) {
      continue;
    }

    utils.reportJSDoc(`Missing JSDoc @${targetTagName}.`, null, () => {
      utils.addTag(targetTagName);
    });
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header',
    },
    fixable: 'code',
    type: 'suggestion',
  },
});
