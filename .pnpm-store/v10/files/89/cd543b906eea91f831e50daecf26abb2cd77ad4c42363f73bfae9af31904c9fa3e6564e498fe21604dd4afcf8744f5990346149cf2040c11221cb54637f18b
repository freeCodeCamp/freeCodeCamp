import globals from 'globals';
import jsdoc from './src/index.js';
// import canonical from 'eslint-config-canonical';
// import canonicalJsdoc from 'eslint-config-canonical/jsdoc.js';

const common = {
  linterOptions: {
    reportUnusedDisableDirectives: 'off'
  },
  plugins: {
    jsdoc
  },
};

export default [
  // canonical,
  // canonicalJsdoc,
  ...jsdoc.configs['examples-and-default-expressions'],
  {
    // Must be by itself
    ignores: ['dist/**', '.ignore/**/*.js'],
  },
  {
    ...common,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node
    },
    settings: {
      jsdoc: {
        mode: 'typescript'
      }
    },
    rules: {
      'array-element-newline': 0,
      'filenames/match-regex': 0,
      'import/extensions': 0,
      'import/no-useless-path-segments': 0,
      'prefer-named-capture-group': 0,
      'unicorn/no-array-reduce': 0,
      'unicorn/no-unsafe-regex': 0,
      'unicorn/prefer-array-some': 0,
      'unicorn/prevent-abbreviations': 0,
      'unicorn/import-index': 0,
      'linebreak-style': 0,
      'no-inline-comments': 0,
      'no-extra-parens': 0
    }
  },
  {
    ...common,
    files: ['.ncurc.cjs'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: false
        },
      },
      sourceType: 'script'
    },
    rules: {
      'import/no-commonjs': 0,
      strict: [
        'error',
        'global'
      ]
    }
  },
  {
    ...common,
    files: ['test/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-restricted-syntax': 0,
      'unicorn/prevent-abbreviations': 0
    }
  },
];
