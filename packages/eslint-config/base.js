import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import filenamesSimple from 'eslint-plugin-filenames-simple';
import { fixupPluginRules } from '@eslint/compat';

const base = [
  { ignores: ['dist'] },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    ...vitest.configs.recommended,
    files: ['**/*.test.[jt]s?(x)']
  },
  {
    plugins: {
      'no-only-tests': noOnlyTests,
      'filenames-simple': fixupPluginRules(filenamesSimple)
    },
    rules: {
      'filenames-simple/naming-convention': ['error'],
      'no-only-tests/no-only-tests': 'error',
      // TODO: fix the errors, allow the rules.
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off'
    }
  },
  {
    rules: {
      'no-unused-expressions': 'error'
    }, // This is so the js rules are more in line with the ts rules
    files: ['**/*.js?(x)']
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    },
    files: ['**/*.ts?(x)']
  }
];

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = defineConfig(...base, {
  files: ['**/*.ts?(x)'],
  extends: [tseslint.configs.recommended]
});

/**
 * A shared ESLint configuration with type aware linting
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const configTypeChecked = defineConfig(
  ...base,
  {
    files: ['**/*.ts?(x)'],
    extends: [tseslint.configs.recommendedTypeChecked]
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  }
);
