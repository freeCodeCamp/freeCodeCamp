import { fileURLToPath } from 'node:url';
import { defineConfig } from 'oxlint';
import eslintRecommended from 'oxlint-config-presets/@eslint/recommended.json' with { type: 'json' };
import importRecommended from 'oxlint-config-presets/import/recommended.json' with { type: 'json' };
import importTypescript from 'oxlint-config-presets/import/typescript.json' with { type: 'json' };
import prettier from 'oxlint-config-presets/prettier.json' with { type: 'json' };
import typescriptRecommended from 'oxlint-config-presets/@typescript-eslint/recommended.json' with { type: 'json' };
import typescriptTypeChecked from 'oxlint-config-presets/@typescript-eslint/recommended-type-checked.json' with { type: 'json' };
import vitestRecommended from 'oxlint-config-presets/@vitest/recommended.json' with { type: 'json' };
import reactRecommended from 'oxlint-config-presets/react/recommended.json' with { type: 'json' };
import hooksRecommended from 'oxlint-config-presets/react-hooks/recommended.json' with { type: 'json' };
import accessibilityRecommended from 'oxlint-config-presets/jsx-a11y/recommended.json' with { type: 'json' };
import testingLibrary from 'eslint-plugin-testing-library';

export { default as jsdocRecommended } from 'oxlint-config-presets/jsdoc/recommended-typescript-error.json' with { type: 'json' };

const jsFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'];
const tsFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];
const testFiles = ['**/*.test.{js,jsx,mjs,cjs,ts,tsx}'];

// When configuring oxlint, you cannot 'extend' when defining overrides.  You also cannot use overrides to
// remove plugins which have been added by 'extend', so you need to be careful.  typescriptOverride lets
// us work around these limitations by ensuring that TS specific rules only apply to TS files, so there is no need to
// try to override those rules when linting JavaScript.
const typescriptOverride = preset => ({
  files: tsFiles,
  rules: {
    ...preset.rules,
    ...Object.assign({}, ...preset.overrides.map(override => override.rules)),
    ...importTypescript.rules,
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ]
  }
});

const config = defineConfig({
  // since this config applies to both JS and TS files, we cannot extend any TS specific configurations
  // or we'd have to override each rule (defeating the purpose of using recommended sets).
  extends: [eslintRecommended, importRecommended, prettier],
  // disabling categories since we only want the recommended rules
  categories: { correctness: 'off' },
  // while the typescript plugin is enabled, the rules are not (except in overrides)
  // so js files are not impacted.
  plugins: ['typescript', 'import', 'unicorn', 'vitest'],
  jsPlugins: [
    fileURLToPath(import.meta.resolve('eslint-plugin-turbo')),
    {
      name: 'filenames-simple',
      specifier: fileURLToPath(
        import.meta.resolve('@freecodecamp/oxlint-config/filenames')
      )
    },
    fileURLToPath(import.meta.resolve('eslint-plugin-no-only-tests'))
  ],
  ignorePatterns: ['**/dist/**', '**/.turbo/**'],
  rules: {
    'turbo/no-undeclared-env-vars': 'error',
    'filenames-simple/naming-convention': 'error',
    'no-only-tests/no-only-tests': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off'
  },
  overrides: [
    { files: testFiles, rules: vitestRecommended.rules },
    { files: jsFiles, rules: { 'no-unused-expressions': 'error' } },
    typescriptOverride(typescriptRecommended)
  ]
});

const configTypeChecked = defineConfig({
  options: {
    typeAware: true
  },
  extends: [config],
  overrides: [typescriptOverride(typescriptTypeChecked)]
});

const configReact = defineConfig({
  extends: [reactRecommended, accessibilityRecommended],
  plugins: ['react', 'jsx-a11y'],
  jsPlugins: [
    fileURLToPath(import.meta.resolve('@html-eslint/eslint-plugin-react'))
  ],
  rules: {
    // Preserve the two rules in the previous react-hooks v4 recommended preset.
    'react/rules-of-hooks': hooksRecommended.rules['react/rules-of-hooks'],
    'react/exhaustive-deps': hooksRecommended.rules['react/exhaustive-deps'],
    '@html-eslint/react/no-duplicate-classname': 'error',
    '@html-eslint/react/classname-spacing': 'error',
    '@html-eslint/react/no-ineffective-attrs': 'error'
  }
});

const configTestingLibrary = defineConfig({
  overrides: [
    {
      files: testFiles,
      jsPlugins: [
        fileURLToPath(import.meta.resolve('eslint-plugin-testing-library'))
      ],
      rules: testingLibrary.configs['flat/react'].rules
    }
  ]
});

export {
  config,
  configTypeChecked,
  configReact,
  configTestingLibrary,
  tsFiles
};
