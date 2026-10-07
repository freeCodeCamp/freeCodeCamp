---
description: 'Enforce naming conventions for everything across a codebase.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/naming-convention** for documentation.

Enforcing naming conventions helps keep the codebase consistent, and reduces overhead when thinking about how to name a variable.
Additionally, a well-designed style guide can help communicate intent, such as by enforcing all private properties begin with an `_`, and all global-level constants are written in `UPPER_CASE`.

## Examples

This rule allows you to enforce conventions for any identifier, using granular selectors to create a fine-grained style guide.

:::note

This rule only needs type information in specific cases, detailed below.

:::

## Options

This rule accepts an array of objects, with each object describing a different naming convention.
Each property will be described in detail below. Also see the examples section below for illustrated examples.

```ts
type Options = {
  // format options
  format:
    | (
        | 'camelCase'
        | 'strictCamelCase'
        | 'PascalCase'
        | 'StrictPascalCase'
        | 'snake_case'
        | 'UPPER_CASE'
      )[]
    | null;
  custom?: {
    regex: string;
    match: boolean;
  };
  leadingUnderscore?:
    | 'forbid'
    | 'require'
    | 'requireDouble'
    | 'allow'
    | 'allowDouble'
    | 'allowSingleOrDouble';
  trailingUnderscore?:
    | 'forbid'
    | 'require'
    | 'requireDouble'
    | 'allow'
    | 'allowDouble'
    | 'allowSingleOrDouble';
  prefix?: string[];
  suffix?: string[];

  // selector options
  selector: Selector | Selector[];
  filter?:
    | string
    | {
        regex: string;
        match: boolean;
      };
  // the allowed values for these are dependent on the selector - see below
  modifiers?: Modifiers<Selector>[];
  types?: Types<Selector>[];
}[];

// the default config is similar to ESLint's camelcase rule but more strict
const defaultOptions: Options = [
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },

  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },

  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
];
```

### Format Options

Every single selector can have the same set of format options.
For information about how each selector is applied, see ["How does the rule evaluate a name's format?"](#how-does-the-rule-evaluate-a-names-format).

#### `format`

The `format` option defines the allowed formats for the identifier. This option accepts an array of the following values, and the identifier can match any of them:

- `camelCase` - standard camelCase format - no underscores are allowed between characters, and consecutive capitals are allowed (i.e. both `myID` and `myId` are valid).
- `PascalCase` - same as `camelCase`, except the first character must be upper-case.
- `snake_case` - standard snake_case format - all characters must be lower-case, and underscores are allowed.
- `strictCamelCase` - same as `camelCase`, but consecutive capitals are not allowed (i.e. `myId` is valid, but `myID` is not).
- `StrictPascalCase` - same as `strictCamelCase`, except the first character must be upper-case.
- `UPPER_CASE` - same as `snake_case`, except all characters must be upper-case.

Instead of an array, you may also pass `null`. This signifies "this selector shall not have its format checked".
This can be useful if you want to enforce no particular format for a specific selector, after applying a group selector.

#### `custom`

The `custom` option defines a custom regex that the identifier must (or must not) match. This option allows you to have a bit more finer-grained control over identifiers, letting you ban (or force) certain patterns and substrings.
Accepts an object with the following properties:

- `match` - true if the identifier _must_ match the `regex`, false if the identifier _must not_ match the `regex`.
- `regex` - a string that is then passed into RegExp to create a new regular expression: `new RegExp(regex)`

#### `filter`

The `filter` option operates similar to `custom`, accepting the same shaped object, except that it controls if the rest of the configuration should or should not be applied to an identifier.

You can use this to include or exclude specific identifiers from specific configurations.

Accepts an object with the following properties:

- `match` - true if the identifier _must_ match the `regex`, false if the identifier _must not_ match the `regex`.
- `regex` - a string that is then passed into RegExp to create a new regular expression: `new RegExp(regex)`

Alternatively, `filter` accepts a regular expression (anything accepted into `new RegExp(filter)`). In this case, it's treated as if you had passed an object with the regex and `match: true`.

#### `leadingUnderscore` / `trailingUnderscore`

The `leadingUnderscore` / `trailingUnderscore` options control whether leading/trailing underscores are considered valid. Accepts one of the following values:

- `allow` - existence of a single leading/trailing underscore is not explicitly enforced.
- `allowDouble` - existence of a double leading/trailing underscore is not explicitly enforced.
- `allowSingleOrDouble` - existence of a single or a double leading/trailing underscore is not explicitly enforced.
- `forbid` - a leading/trailing underscore is not allowed at all.
- `require` - a single leading/trailing underscore must be included.
- `requireDouble` - two leading/trailing underscores must be included.

#### `prefix` / `suffix`

The `prefix` / `suffix` options control which prefix/suffix strings must exist for the identifier. Accepts an array of strings.

If these are provided, the identifier must start with one of the provided values. For example, if you provide `{ prefix: ['Class', 'IFace', 'Type'] }`, then the following names are valid: `ClassBar`, `IFaceFoo`, `TypeBaz`, but the name `Bang` is not valid, as it contains none of the prefixes.

**Note:** As [documented above](#format-options), the prefix is trimmed before format is validated, therefore PascalCase must be used to allow variables such as `isEnabled` using the prefix `is`.

### Selector Options

- `selector` allows you to specify what types of identifiers to target.
  - Accepts one or array of selectors to define an option block that applies to one or multiple selectors.
  - For example, if you provide `{ selector: ['function', 'variable'] }`, then it will apply the same option to variable and function nodes.
  - See [Allowed Selectors, Modifiers and Types](#allowed-selectors-modifiers-and-types) below for the complete list of allowed selectors.
- `modifiers` allows you to specify which modifiers to granularly apply to, such as the accessibility (`#private`/`private`/`protected`/`public`), or if the thing is `static`, etc.
  - The name must match _all_ of the modifiers.
  - For example, if you provide `{ modifiers: ['private','readonly','static'] }`, then it will only match something that is `private static readonly`, and something that is just `private` will not match.
  - The following `modifiers` are allowed:
    - `abstract`,`override`,`private`,`protected`,`readonly`,`static` - matches any member explicitly declared with the given modifier.
    - `async` - matches any method, function, or function variable which is async via the `async` keyword (e.g. does not match functions that return promises without using `async` keyword)
    - `const` - matches a variable declared as being `const` (`const x = 1`).
    - `destructured` - matches a variable declared via an object destructuring pattern (`const {x, z = 2}`).
      - Note that this does not match renamed destructured properties (`const {x: y, a: b = 2}`).
    - `exported` - matches anything that is exported from the module.
    - `global` - matches a variable/function declared in the top-level scope.
    - `#private` - matches any member with a private identifier (an identifier that starts with `#`)
    - `public` - matches any member that is either explicitly declared as `public`, or has no visibility modifier (i.e. implicitly public).
    - `requiresQuotes` - matches any name that requires quotes as it is not a valid identifier (i.e. has a space, a dash, etc in it).
    - `unused` - matches anything that is not used.
- `types` allows you to specify which types to match. This option supports simple, primitive types only (`array`,`boolean`,`function`,`number`,`string`).
  - The name must match _one_ of the types.
  - **_NOTE - Using this option will require that you lint with type information._**
  - For example, this lets you do things like enforce that `boolean` variables are prefixed with a verb.
  - The following `types` are allowed:
    - `array` matches any type assignable to `Array<unknown> | null | undefined`
    - `boolean` matches any type assignable to `boolean | null | undefined`
    - `function` matches any type assignable to `Function | null | undefined`
    - `number` matches any type assignable to `number | null | undefined`
    - `string` matches any type assignable to `string | null | undefined`

The ordering of selectors does not matter. The implementation will automatically sort the selectors to ensure they match from most-specific to least specific. It will keep checking selectors in that order until it finds one that matches the name. See ["How does the rule automatically order selectors?"](#how-does-the-rule-automatically-order-selectors)

#### Allowed Selectors, Modifiers and Types

There are two types of selectors, individual selectors, and grouped selectors.

##### Individual Selectors

Individual Selectors match specific, well-defined sets. There is no overlap between each of the individual selectors.

- `accessor` - matches any accessor.
  - Allowed `modifiers`: `abstract`, `override`, `private`, `protected`, `public`, `requiresQuotes`, `static`.
  - Allowed `types`: `array`, `boolean`, `function`, `number`, `string`.
- `class` - matches any class declaration.
  - Allowed `modifiers`: `abstract`, `exported`, `unused`.
  - Allowed `types`: none.
- `classMethod` - matches any class method. Also matches properties that have direct function expression or arrow function expression values. Does not match accessors.
  - Allowed `modifiers`: `abstract`, `async`, `override`, `#private`, `private`, `protected`, `public`, `requiresQuotes`, `static`.
  - Allowed `types`: none.
- `classProperty` - matches any class property. Does not match properties that have direct function expression or arrow function expression values.
  - Allowed `modifiers`: `abstract`, `override`, `#private`, `private`, `protected`, `public`, `readonly`, `requiresQuotes`, `static`.
  - Allowed `types`: `array`, `boolean`, `function`, `number`, `string`.
- `enum` - matches any enum declaration.
  - Allowed `modifiers`: `exported`, `unused`.
  - Allowed `types`: none.
- `enumMember` - matches any enum member.
  - Allowed `modifiers`: `requiresQuotes`.
  - Allowed `types`: none.
- `function` - matches any named function declaration or named function expression.
  - Allowed `modifiers`: `async`, `exported`, `global`, `unused`.
  - Allowed `types`: none.
- `interface` - matches any interface declaration.
  - Allowed `modifiers`: `exported`, `unused`.
  - Allowed `types`: none.
- `objectLiteralMethod` - matches any object literal method. Also matches properties that have direct function expression or arrow function expression values. Does not match accessors.
  - Allowed `modifiers`: `async`, `public`, `requiresQuotes`.
  - Allowed `types`: none.
- `objectLiteralProperty` - matches any object literal property. Does not match properties that have direct function expression or arrow function expression values.
  - Allowed `modifiers`: `public`, `requiresQuotes`.
  - Allowed `types`: `array`, `boolean`, `function`, `number`, `string`.
- `parameter` - matches any function parameter. Does not match parameter properties.
  - Allowed `modifiers`: `destructured`, `unused`.
  - Allowed `types`: `array`, `boolean`, `function`, `number`, `string`.
- `parameterProperty` - matches any parameter property.
  - Allowed `modifiers`: `private`, `protected`, `public`, `readonly`.
  - Allowed `types`: `array`, `boolean`, `function`, `number`, `string`.
- `typeAlias` - matches any type alias declaration.
  - Allowed `modifiers`: `exported`, `unused`.
  - Allowed `types`: none.
- `typeMethod` - matches any object type method. Also matches properties that have direct function expression or arrow function expression values. Does not match accessors.
  - Allowed `modifiers`: `public`, `requiresQuotes`.
  - Allowed `types`: none.
- `typeParameter` - matches any generic type parameter declaration.
  - Allowed `modifiers`: `unused`.
  - Allowed `types`: none.
- `typeProperty` - matches any object type property. Does not match properties that have direct function expression or arrow function expression values.
  - Allowed `modifiers`: `public`, `readonly`, `requiresQuotes`.
  - Allowed `types`: `array`, `boolean`, `function`, `number`, `string`.
- `variable` - matches any `const` / `let` / `var` variable name.
  - Allowed `modifiers`: `async`, `const`, `destructured`, `exported`, `global`, `unused`.
  - Allowed `types`: `array`, `boolean`, `function`, `number`, `string`.

##### Group Selectors

Group Selectors are provided for convenience, and essentially bundle up sets of individual selectors.

- `default` - matches everything.
  - Allowed `modifiers`: all modifiers.
  - Allowed `types`: none.
- `memberLike` - matches the same as `accessor`, `enumMember`, `method`, `parameterProperty`, `property`.
  - Allowed `modifiers`: `abstract`, `async`, `override`, `#private`, `private`, `protected`, `public`, `readonly`, `requiresQuotes`, `static`.
  - Allowed `types`: none.
- `method` - matches the same as `classMethod`, `objectLiteralMethod`, `typeMethod`.
  - Allowed `modifiers`: `abstract`, `async`, `override`, `#private`, `private`, `protected`, `public`, `readonly`, `requiresQuotes`, `static`.
  - Allowed `types`: none.
- `property` - matches the same as `classProperty`, `objectLiteralProperty`, `typeProperty`.
  - Allowed `modifiers`: `abstract`, `async`, `override`, `#private`, `private`, `protected`, `public`, `readonly`, `requiresQuotes`, `static`.
  - Allowed `types`: `array`, `boolean`, `function`, `number`, `string`.
- `typeLike` - matches the same as `class`, `enum`, `interface`, `typeAlias`, `typeParameter`.
  - Allowed `modifiers`: `abstract`, `unused`.
  - Allowed `types`: none.
- `variableLike` - matches the same as `function`, `parameter` and `variable`.
  - Allowed `modifiers`: `async`, `unused`.
  - Allowed `types`: none.

## FAQ

This is a big rule, and there's a lot of docs. Here are a few clarifications that people often ask about or figure out via trial-and-error.

### How does the rule evaluate a selector?

Each selector is checked in the following way:

1. check the `filter`
   1. if `filter` is omitted → skip this step.
   2. if the name matches the `filter` → continue evaluating this selector.
   3. if the name does not match the `filter` → skip this selector and continue to the next selector.
2. check the `selector`
   1. if `selector` is one individual selector → the name's type must be of that type.
   2. if `selector` is a group selector → the name's type must be one of the grouped types.
   3. if `selector` is an array of selectors → apply the above for each selector in the array.
3. check the `types`
   1. if `types` is omitted → skip this step.
   2. if the name has a type in `types` → continue evaluating this selector.
   3. if the name does not have a type in `types` → skip this selector and continue to the next selector.

A name is considered to pass the config if it:

1. Matches one selector and passes all of that selector's format checks.
2. Matches no selectors.

A name is considered to fail the config if it matches one selector and fails one that selector's format checks.

### How does the rule automatically order selectors?

Each identifier should match exactly one selector. It may match multiple group selectors - but only ever one selector.
With that in mind - the base sort order works out to be:

1. Individual Selectors
2. Grouped Selectors
3. Default Selector

Within each of these categories, some further sorting occurs based on what selector options are supplied:

1. `filter` is given the highest priority above all else.
2. `types`
3. `modifiers`
4. everything else

For example, if you provide the following config:

```ts
[
  /* 1 */ { selector: 'default', format: ['camelCase'] },
  /* 2 */ { selector: 'variable', format: ['snake_case'] },
  /* 3 */ { selector: 'variable', types: ['boolean'], format: ['UPPER_CASE'] },
  /* 4 */ { selector: 'variableLike', format: ['PascalCase'] },
];
```

Then for the code `const x = 1`, the rule will validate the selectors in the following order: `3`, `2`, `4`, `1`.
To clearly spell it out:

- (3) is tested first because it has `types` and is an individual selector.
- (2) is tested next because it is an individual selector.
- (4) is tested next as it is a grouped selector.
- (1) is tested last as it is the base default selector.

Its worth noting that whilst this order is applied, all selectors may not run on a name.
This is explained in ["How does the rule evaluate a name's format?"](#how-does-the-rule-evaluate-a-names-format)

### How does the rule evaluate a name's format?

When the format of an identifier is checked, it is checked in the following order:

1. validate leading underscore
1. validate trailing underscore
1. validate prefix
1. validate suffix
1. validate custom
1. validate format

For steps 1-4, if the identifier matches the option, the matching part will be removed.
This is done so that you can apply formats like PascalCase without worrying about prefixes or underscores causing it to not match.

One final note is that if the name were to become empty via this trimming process, it is considered to match all `format`s. An example of where this might be useful is for generic type parameters, where you want all names to be prefixed with `T`, but also want to allow for the single character `T` name.

Here are some examples to help illustrate

Name: `_IMyInterface`
Selector:

```json
{
  "leadingUnderscore": "require",
  "prefix": ["I"],
  "format": ["UPPER_CASE", "StrictPascalCase"]
}
```

1. `name = _IMyInterface`
1. validate leading underscore
   1. config is provided
   1. check name → pass
   1. Trim underscore → `name = IMyInterface`
1. validate trailing underscore
   1. config is not provided → skip
1. validate prefix
   1. config is provided
   1. check name → pass
   1. Trim prefix → `name = MyInterface`
1. validate suffix
   1. config is not provided → skip
1. validate custom
   1. config is not provided → skip
1. validate format
   1. for each format...
      1. `format = 'UPPER_CASE'`
         1. check format → fail.
            - Important to note that if you supply multiple formats - the name only needs to match _one_ of them!
      1. `format = 'StrictPascalCase'`
         1. check format → success.
1. **_success_**

Name: `IMyInterface`
Selector:

```json
{
  "format": ["StrictPascalCase"],
  "trailingUnderscore": "allow",
  "custom": {
    "regex": "^I[A-Z]",
    "match": false
  }
}
```

1. `name = IMyInterface`
1. validate leading underscore
   1. config is not provided → skip
1. validate trailing underscore
   1. config is provided
   1. check name → pass
   1. Trim underscore → `name = IMyInterface`
1. validate prefix
   1. config is not provided → skip
1. validate suffix
   1. config is not provided → skip
1. validate custom
   1. config is provided
   1. `regex = new RegExp("^I[A-Z]")`
   1. `regex.test(name) === custom.match`
   1. **_fail_** → report and exit

### What happens if I provide a `modifiers` to a Group Selector?

Some group selectors accept `modifiers`. For the most part these will work exactly the same as with individual selectors.
There is one exception to this in that a modifier might not apply to all individual selectors covered by a group selector.

For example - `memberLike` includes the `enumMember` selector, and it allows the `protected` modifier.
An `enumMember` can never ever be `protected`, which means that the following config will never match any `enumMember`:

```json
{
  "selector": "memberLike",
  "modifiers": ["protected"]
}
```

To help with matching, members that cannot specify an accessibility will always have the `public` modifier. This means that the following config will always match any `enumMember`:

```json
{
  "selector": "memberLike",
  "modifiers": ["public"]
}
```

## Examples

### Enforce that all variables, functions and properties follow are camelCase

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    { "selector": "variableLike", "format": ["camelCase"] }
  ]
}
```

### Enforce that private members are prefixed with an underscore

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "memberLike",
      "modifiers": ["private"],
      "format": ["camelCase"],
      "leadingUnderscore": "require"
    }
  ]
}
```

### Enforce that boolean variables are prefixed with an allowed verb

**Note:** As [documented above](#format-options), the prefix is trimmed before format is validated, thus PascalCase must be used to allow variables such as `isEnabled`.

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variable",
      "types": ["boolean"],
      "format": ["PascalCase"],
      "prefix": ["is", "should", "has", "can", "did", "will"]
    }
  ]
}
```

### Enforce that all variables are either in camelCase or UPPER_CASE

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variable",
      "format": ["camelCase", "UPPER_CASE"]
    }
  ]
}
```

### Enforce that all const variables are in UPPER_CASE

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variable",
      "modifiers": ["const"],
      "format": ["UPPER_CASE"]
    }
  ]
}
```

### Enforce that type parameters (generics) are prefixed with `T`

This allows you to emulate the old `generic-type-naming` rule.

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "typeParameter",
      "format": ["PascalCase"],
      "prefix": ["T"]
    }
  ]
}
```

### Enforce that interface names do not begin with an `I`

This allows you to emulate the old `interface-name-prefix` rule.

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "interface",
      "format": ["PascalCase"],
      "custom": {
        "regex": "^I[A-Z]",
        "match": false
      }
    }
  ]
}
```

### Enforce that variable and function names are in camelCase

This allows you to lint multiple type with same pattern.

```json
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": ["variable", "function"],
      "format": ["camelCase"],
      "leadingUnderscore": "allow"
    }
  ]
}
```

### Ignore properties that **_require_** quotes

Sometimes you have to use a quoted name that breaks the convention (for example, HTTP headers).
If this is a common thing in your codebase, then you have a few options.

If you simply want to allow all property names that require quotes, you can use the `requiresQuotes` modifier to match any property name that _requires_ quoting, and use `format: null` to ignore the name.

```jsonc
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": [
        "classProperty",
        "objectLiteralProperty",
        "typeProperty",
        "classMethod",
        "objectLiteralMethod",
        "typeMethod",
        "accessor",
        "enumMember"
      ],
      "format": null,
      "modifiers": ["requiresQuotes"]
    }
  ]
}
```

If you have a small and known list of exceptions, you can use the `filter` option to ignore these specific names only:

```jsonc
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "property",
      "format": ["strictCamelCase"],
      "filter": {
        // you can expand this regex to add more allowed names
        "regex": "^(Property-Name-One|Property-Name-Two)$",
        "match": false
      }
    }
  ]
}
```

You can use the `filter` option to ignore names with specific characters:

```jsonc
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "property",
      "format": ["strictCamelCase"],
      "filter": {
        // you can expand this regex as you find more cases that require quoting that you want to allow
        "regex": "[- ]",
        "match": false
      }
    }
  ]
}
```

Note that there is no way to ignore any name that is quoted - only names that are required to be quoted.
This is intentional - adding quotes around a name is not an escape hatch for proper naming.
If you want an escape hatch for a specific name - you should can use an [`eslint-disable` comment](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments).

### Ignore destructured names

Sometimes you might want to allow destructured properties to retain their original name, even if it breaks your naming convention.

You can use the `destructured` modifier to match these names, and explicitly set `format: null` to apply no formatting:

```jsonc
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variable",
      "modifiers": ["destructured"],
      "format": null
    }
  ]
}
```

### Enforce the codebase follows ESLint's `camelcase` conventions

```json
{
  "camelcase": "off",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "default",
      "format": ["camelCase"]
    },

    {
      "selector": "variable",
      "format": ["camelCase", "UPPER_CASE"]
    },
    {
      "selector": "parameter",
      "format": ["camelCase"],
      "leadingUnderscore": "allow"
    },

    {
      "selector": "memberLike",
      "modifiers": ["private"],
      "format": ["camelCase"],
      "leadingUnderscore": "require"
    },

    {
      "selector": "typeLike",
      "format": ["PascalCase"]
    }
  ]
}
```

## When Not To Use It

If you do not want to enforce naming conventions for anything.
