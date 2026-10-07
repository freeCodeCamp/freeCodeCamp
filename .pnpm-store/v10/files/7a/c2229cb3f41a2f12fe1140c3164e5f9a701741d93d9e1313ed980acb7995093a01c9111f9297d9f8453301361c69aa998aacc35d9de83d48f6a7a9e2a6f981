/**
 * The basics.
 * @type {Object}
 */
module.exports = {
  plugins: ['import'],

  rules: {
    // analysis/correctness
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',

    // red flags (thus, warnings)
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-duplicates': 'warn',
  },

  // need all these for parsing dependencies (even if _your_ code doesn't need
  // all of them)
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
};
