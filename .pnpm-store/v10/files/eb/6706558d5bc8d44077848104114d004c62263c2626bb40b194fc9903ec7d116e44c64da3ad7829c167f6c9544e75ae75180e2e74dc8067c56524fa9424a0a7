# Enforces unbound methods are called with their expected scope (`unbound-method`)

## Rule Details

This rule extends the base [`@typescript-eslint/unbound-method`][original-rule]
rule, meaning you must depend on `@typescript-eslint/eslint-plugin` for it to
work. It adds support for understanding when it's ok to pass an unbound method
to `expect` calls.

See the [`@typescript-eslint` documentation][original-rule] for more details on
the `unbound-method` rule.

Note that while this rule requires type information to work, it will fail
silently when not available allowing you to safely enable it on projects that
are not using TypeScript.

## How to use

```json5
{
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['test/**'],
      plugins: ['jest'],
      rules: {
        // you should turn the original rule off *only* for test files
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
  rules: {
    '@typescript-eslint/unbound-method': 'error',
  },
}
```

This rule should be applied to your test files in place of the original rule,
which should be applied to the rest of your codebase.

## Options

See [`@typescript-eslint/unbound-method`][original-rule] options.

<sup>Taken with ❤️ [from `@typescript-eslint` core][original-rule]</sup>

[original-rule]:
  https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
