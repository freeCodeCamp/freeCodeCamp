# import/no-anonymous-default-export

<!-- end auto-generated rule header -->

Reports if a module's default export is unnamed. This includes several types of unnamed data types; literals, object expressions, arrays, anonymous functions, arrow functions, and anonymous class declarations.

Ensuring that default exports are named helps improve the grepability of the codebase by encouraging the re-use of the same identifier for the module's default export at its declaration site and at its import sites.

## Options

By default, all types of anonymous default exports are forbidden, but any types can be selectively allowed by toggling them on in the options.

The complete default configuration looks like this.

```js
"import/no-anonymous-default-export": ["error", {
  "allowArray": false,
  "allowArrowFunction": false,
  "allowAnonymousClass": false,
  "allowAnonymousFunction": false,
  "allowCallExpression": true, // The true value here is for backward compatibility
  "allowNew": false,
  "allowLiteral": false,
  "allowObject": false
}]
```

## Rule Details

### Fail

```js
export default []

export default () => {}

export default class {}

export default function () {}

/* eslint import/no-anonymous-default-export: [2, {"allowCallExpression": false}] */
export default foo(bar)

export default 123

export default {}

export default new Foo()
```

### Pass

```js
const foo = 123
export default foo

export default class MyClass() {}

export default function foo() {}

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default []

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
export default class {}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function () {}

export default foo(bar)

/* eslint import/no-anonymous-default-export: [2, {"allowLiteral": true}] */
export default 123

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {}

/* eslint import/no-anonymous-default-export: [2, {"allowNew": true}] */
export default new Foo()
```
