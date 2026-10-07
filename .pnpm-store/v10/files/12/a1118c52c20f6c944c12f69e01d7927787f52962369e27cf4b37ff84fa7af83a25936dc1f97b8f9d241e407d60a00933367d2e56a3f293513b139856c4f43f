/**
 * This config:
 * 1) adds `.jsx`, `.ts`, `.cts`, `.mts`, and `.tsx` as an extension
 * 2) enables JSX/TSX parsing
 */

// Omit `.d.ts` because 1) TypeScript compilation already confirms that
// types are resolved, and 2) it would mask an unresolved
// `.ts`/`.tsx`/`.js`/`.jsx` implementation.
const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx'];

const allExtensions = [...typeScriptExtensions, '.js', '.jsx', '.mjs', '.cjs'];

module.exports = {
  settings: {
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': typeScriptExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },

  rules: {
    // analysis/correctness

    // TypeScript compilation already ensures that named imports exist in the referenced module
    'import/named': 'off',
  },
};
