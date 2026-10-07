---
description: 'Require both operands of addition to be the same type and be `bigint`, `number`, or `string`.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/restrict-plus-operands** for documentation.

TypeScript allows `+` adding together two values of any type(s).
However, adding values that are not the same type and/or are not the same primitive type is often a sign of programmer error.

This rule reports when a `+` operation combines two values of different types, or a type that is not `bigint`, `number`, or `string`.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
let foo = '5.5' + 5;
let foo = 1n + 1;
```

### ✅ Correct

```ts
let foo = parseInt('5.5', 10) + 10;
let foo = 1n + 1n;
```

## Options

:::caution
We generally recommend against using these options, as they limit which varieties of incorrect `+` usage can be checked.
This in turn severely limits the validation that the rule can do to ensure that resulting strings and numbers are correct.

Safer alternatives to using the `allow*` options include:

- Using variadic forms of logging APIs to avoid needing to `+` values.
  ```ts
  // Remove this line
  console.log('The result is ' + true);
  // Add this line
  console.log('The result is', true);
  ```
- Using `.toFixed()` to coerce numbers to well-formed string representations:
  ```ts
  const number = 1.123456789;
  const result = 'The number is ' + number.toFixed(2);
  // result === 'The number is 1.12'
  ```
- Calling `.toString()` on other types to mark explicit and intentional string coercion:
  ```ts
  const arg = '11';
  const regex = /[0-9]/;
  const result =
    'The result of ' +
    regex.toString() +
    '.test("' +
    arg +
    '") is ' +
    regex.test(arg).toString();
  // result === 'The result of /[0-9]/.test("11") is true'
  ```

:::

### `allowAny`

Examples of code for this rule with `{ allowAny: true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
let fn = (a: number, b: []) => a + b;
let fn = (a: string, b: []) => a + b;
```

#### ✅ Correct

```ts
let fn = (a: number, b: any) => a + b;
let fn = (a: string, b: any) => a + b;
```

### `allowBoolean`

Examples of code for this rule with `{ allowBoolean: true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
let fn = (a: number, b: unknown) => a + b;
let fn = (a: string, b: unknown) => a + b;
```

#### ✅ Correct

```ts
let fn = (a: number, b: boolean) => a + b;
let fn = (a: string, b: boolean) => a + b;
```

### `allowNullish`

Examples of code for this rule with `{ allowNullish: true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
let fn = (a: number, b: unknown) => a + b;
let fn = (a: number, b: never) => a + b;
let fn = (a: string, b: unknown) => a + b;
let fn = (a: string, b: never) => a + b;
```

#### ✅ Correct

```ts
let fn = (a: number, b: undefined) => a + b;
let fn = (a: number, b: null) => a + b;
let fn = (a: string, b: undefined) => a + b;
let fn = (a: string, b: null) => a + b;
```

### `allowNumberAndString`

Examples of code for this rule with `{ allowNumberAndString: true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
let fn = (a: number, b: unknown) => a + b;
let fn = (a: number, b: never) => a + b;
```

#### ✅ Correct

```ts
let fn = (a: number, b: string) => a + b;
let fn = (a: number, b: number | string) => a + b;
```

### `allowRegExp`

Examples of code for this rule with `{ allowRegExp: true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
let fn = (a: number, b: RegExp) => a + b;
```

#### ✅ Correct

```ts
let fn = (a: string, b: RegExp) => a + b;
```

### `checkCompoundAssignments`

Examples of code for this rule with `{ checkCompoundAssignments: true }`:

<!--tabs-->

#### ❌ Incorrect

```ts
let foo: string | undefined;
foo += 'some data';

let bar: string = '';
bar += 0;
```

#### ✅ Correct

```ts
let foo: number = 0;
foo += 1;

let bar = '';
bar += 'test';
```

## When Not To Use It

If you don't mind `"[object Object]"` in your strings, then you will not need this rule.

## Related To

- [`no-base-to-string`](./no-base-to-string.md)
- [`restrict-template-expressions`](./restrict-template-expressions.md)

## Further Reading

- [`Object.prototype.toString()` MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
