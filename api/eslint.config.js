import { configTypeChecked, tsFiles } from '@freecodecamp/eslint-config/base';

import jsdoc from 'eslint-plugin-jsdoc';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  ...configTypeChecked,
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
    files: tsFiles
  }
];
