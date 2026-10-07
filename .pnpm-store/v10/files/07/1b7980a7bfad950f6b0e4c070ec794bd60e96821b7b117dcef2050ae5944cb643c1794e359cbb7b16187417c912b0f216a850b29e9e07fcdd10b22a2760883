---
description: 'Require or disallow padding lines between statements.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/padding-line-between-statements** for documentation.

## Examples

This rule extends the base [`eslint/padding-line-between-statements`](https://eslint.org/docs/rules/padding-line-between-statements) rule.
It adds support for TypeScript constructs such as `interface` and `type`.

## Options

In addition to options provided by ESLint, `interface` and `type` can be used as statement types.

For example, to add blank lines before interfaces and type definitions:

```jsonc
{
  // Example - Add blank lines before interface and type definitions.
  "padding-line-between-statements": "off",
  "@typescript-eslint/padding-line-between-statements": [
    "error",
    {
      "blankLine": "always",
      "prev": "*",
      "next": ["interface", "type"]
    }
  ]
}
```

**Note:** ESLint `cjs-export` and `cjs-import` statement types are renamed to `exports` and `require` respectively.
