import { config } from '@freecodecamp/eslint-config/base';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import jsdoc from 'eslint-plugin-jsdoc';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  ...config,
  {
    languageOptions: {
      parser: tsParser,

      parserOptions: {
        projectService: true
      }
    }
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    ...jsdoc.configs['flat/recommended-typescript-error'],
    rules: {
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            ArrowFunctionExpression: true,
            ClassDeclaration: true,
            ClassExpression: true,
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true
          },

          publicOnly: true
        }
      ],

      'jsdoc/require-description-complete-sentence': 'error',
      'jsdoc/tag-lines': 'off'
    },
    files: ['src/**/*.ts']
  }
];
