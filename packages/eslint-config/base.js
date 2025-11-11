import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';

const base = [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    ...vitest.configs.recommended,
    files: ['**/*.test.[jt]s?(x)']
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
