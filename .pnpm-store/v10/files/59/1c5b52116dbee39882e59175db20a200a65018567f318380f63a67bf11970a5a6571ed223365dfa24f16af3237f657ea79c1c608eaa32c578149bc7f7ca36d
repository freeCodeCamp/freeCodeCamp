import iterateJsdoc from '../iterateJsdoc.js';

export default iterateJsdoc(({
  jsdoc,
  report,
  settings,
}) => {
  const {
    mode,
  } = settings;

  // Don't check for "permissive" and "closure"
  if (mode === 'jsdoc' || mode === 'typescript') {
    for (const tag of jsdoc.tags) {
      if (tag.type.slice(-1) === '=') {
        report('Syntax should not be Google Closure Compiler style.', null, tag);
        break;
      }
    }
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header',
    },
    type: 'suggestion',
  },
});
