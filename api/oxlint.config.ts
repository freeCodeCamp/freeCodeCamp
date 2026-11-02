import { defineConfig } from 'oxlint';
import { configTypeChecked, tsFiles } from '@freecodecamp/oxlint-config/base';

export default defineConfig({
  extends: [configTypeChecked],
  options: { typeAware: true },
  overrides: [
    {
      files: tsFiles,
      jsPlugins: [{ name: 'jsdoc-extra', specifier: 'eslint-plugin-jsdoc' }],
      rules: {
        // The previous API config replaced the preset rules with these two rules.
        'jsdoc-extra/require-jsdoc': [
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
        'jsdoc-extra/require-description-complete-sentence': 'error'
      }
    }
  ]
});
