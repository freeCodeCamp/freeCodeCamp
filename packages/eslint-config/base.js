import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import vitest from '@vitest/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import filenamesSimple from 'eslint-plugin-filenames-simple';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import reactPlugin from 'eslint-plugin-react';
import jsxAllyPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import babelParser from '@babel/eslint-parser'; // TODO: can we get away from using babel?

import { FlatCompat } from '@eslint/eslintrc';

const __dirname = import.meta.dirname;
const compat = new FlatCompat({
  baseDirectory: __dirname
});

export const jsFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'];
export const tsFiles = ['**/*.ts', '**/*.tsx'];
const testFiles = [
  '**/*.test.js',
  '**/*.test.jsx',
  '**/*.test.mjs',
  '**/*.test.cjs',
  '**/*.test.ts',
  '**/*.test.tsx'
];

const base = defineConfig(
  globalIgnores(['dist', '.turbo']),
  js.configs.recommended,
  eslintConfigPrettier,
  {
    ...vitest.configs.recommended,
    files: testFiles
  },
  {
    extends: [importPlugin.flatConfigs.recommended],
    settings: { 'import/resolver': { node: true, typescript: true } },
    rules: {
      // TODO: fix the errors, allow the rules.
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off'
    }
  },
  {
    plugins: {
      'no-only-tests': noOnlyTests,
      'filenames-simple': fixupPluginRules(filenamesSimple)
    },
    rules: {
      'filenames-simple/naming-convention': ['error'],
      'no-only-tests/no-only-tests': 'error'
    }
  },
  {
    files: jsFiles,
    rules: {
      'no-unused-expressions': 'error', // This is so the js rules are more in line with the ts rules
      'import/no-unresolved': [2, { commonjs: true }] // commonjs is necessary while we still use require()
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false
      }
    }
  },
  {
    files: tsFiles,
    extends: [importPlugin.flatConfigs['typescript']],
    rules: {
      'import/no-unresolved': 'off' // handled by TS
    }
  },
  {
    files: tsFiles,
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  }
);

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = defineConfig(...base, {
  files: tsFiles,
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
    files: tsFiles,
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

export const configReact = [
  reactPlugin.configs['flat'].recommended,
  jsxAllyPlugin.flatConfigs.recommended,
  ...fixupConfigRules(
    compat.extends(
      'plugin:react-hooks/recommended' // Note: at time of testing, upgrading to v5 creates false positives
    )
  )
];

export const configTestingLibrary = defineConfig({
  files: testFiles,
  extends: [testingLibraryPlugin.configs['flat/react']]
});
