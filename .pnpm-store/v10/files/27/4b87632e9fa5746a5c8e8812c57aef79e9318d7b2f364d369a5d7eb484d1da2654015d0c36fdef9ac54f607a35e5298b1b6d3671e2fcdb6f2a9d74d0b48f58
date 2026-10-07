---
description: 'Require a specific member delimiter style for interfaces and type literals.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/member-delimiter-style** for documentation.

TypeScript allows three delimiters between members in interfaces and type aliases:

<!-- prettier-ignore -->
```ts
interface Foo {
    // Semicolons (default, preferred in TypeScript):
    name: string;

    // Commas (JSON-like):
    name: string,

    // Line breaks (none):
    name: string
}
```

For code readability, it's generally best to use the same style consistently in your codebase.

This rule enforces keeping to one configurable code style.
It can also standardize the presence (or absence) of a delimiter in the last member of a construct, as well as a separate delimiter syntax for single line declarations.

## Options

Default config:

```json
{
  "multiline": {
    "delimiter": "semi",
    "requireLast": true
  },
  "singleline": {
    "delimiter": "semi",
    "requireLast": false
  },
  "multilineDetection": "brackets"
}
```

`multiline` config only applies to multiline `interface`/`type` definitions.
`singleline` config only applies to single line `interface`/`type` definitions.
The two configs are entirely separate, and do not effect one another.

`multilineDetection` determines what counts as multiline

- `"brackets"` (default) any newlines in the type or interface make it multiline.
- `"last-member"` if the last member of the interface is on the same line as the last bracket, it is counted as a single line.

### `delimiter`

Accepts three values (or two for `singleline`):

- `comma` - each member should be delimited with a comma (`,`).
- `semi` - each member should be delimited with a semicolon (`;`).
- `none` - each member should be delimited with nothing.

:::note
`none` is not an option for `singleline` because having no delimiter between members on a single line is a syntax error in TS.
:::

### `requireLast`

Determines whether or not the last member in the `interface`/`type` should have a delimiter:

- `true` - the last member **_must_** have a delimiter.
- `false` - the last member **_must not_** have a delimiter.

### `overrides`

Allows you to specify options specifically for either `interface`s or `type` definitions / inline `type`s.

For example, to require commas for `type`s, and semicolons for multiline `interface`s:

```json
{
  "multiline": {
    "delimiter": "comma",
    "requireLast": true
  },
  "singleline": {
    "delimiter": "comma",
    "requireLast": true
  },
  "overrides": {
    "interface": {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      }
    }
  }
}
```

## Examples

Examples of code for this rule with the default config:

<!--tabs-->

### ❌ Incorrect

<!-- prettier-ignore -->
```ts
// missing semicolon delimiter
interface Foo {
    name: string
    greet(): string
}

// using incorrect delimiter
interface Bar {
    name: string,
    greet(): string,
}

// missing last member delimiter
interface Baz {
    name: string;
    greet(): string
}

// incorrect delimiter
type FooBar = { name: string, greet(): string }

// last member should not have delimiter
type FooBar = { name: string; greet(): string; }
```

### ✅ Correct

<!-- prettier-ignore -->
```ts
interface Foo {
    name: string;
    greet(): string;
}

interface Foo { name: string }

type Bar = {
    name: string;
    greet(): string;
}

type Bar = { name: string }

type FooBar = { name: string; greet(): string }
```

## When Not To Use It

If you don't care about enforcing a consistent member delimiter in interfaces and type literals, then you will not need this rule.
