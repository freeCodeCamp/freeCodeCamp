---
description: 'Enforce that literals on classes are exposed in a consistent style.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/class-literal-property-style** for documentation.

Some TypeScript applications store literal values on classes using fields with the `readonly` modifier to prevent them from being reassigned.
When writing TypeScript libraries that could be used by JavaScript users, however, it's typically safer to expose these literals using `getter`s, since the `readonly` modifier is enforced at compile type.

This rule aims to ensure that literals exposed by classes are done so consistently, in one of the two style described above.
By default this rule prefers the `fields` style as it means JS doesn't have to setup & teardown a function closure.

## Options

:::note

This rule only checks for constant _literal_ values (string, template string, number, bigint, boolean, regexp, null). It does not check objects or arrays, because a readonly field behaves differently to a getter in those cases. It also does not check functions, as it is a common pattern to use readonly fields with arrow function values as auto-bound methods.
This is because these types can be mutated and carry with them more complex implications about their usage.

:::

### `"fields"`

This style checks for any getter methods that return literal values, and requires them to be defined using fields with the `readonly` modifier instead.

Examples of code with the `fields` style:

<!--tabs-->

#### ❌ Incorrect

```ts
/* eslint @typescript-eslint/class-literal-property-style: ["error", "fields"] */

class Mx {
  public static get myField1() {
    return 1;
  }

  private get ['myField2']() {
    return 'hello world';
  }
}
```

#### ✅ Correct

```ts
/* eslint @typescript-eslint/class-literal-property-style: ["error", "fields"] */

class Mx {
  public readonly myField1 = 1;

  // not a literal
  public readonly myField2 = [1, 2, 3];

  private readonly ['myField3'] = 'hello world';

  public get myField4() {
    return `hello from ${window.location.href}`;
  }
}
```

### `"getters"`

This style checks for any `readonly` fields that are assigned literal values, and requires them to be defined as getters instead.
This style pairs well with the [`@typescript-eslint/prefer-readonly`](prefer-readonly.md) rule,
as it will identify fields that can be `readonly`, and thus should be made into getters.

Examples of code with the `getters` style:

<!--tabs-->

#### ❌ Incorrect

```ts
/* eslint @typescript-eslint/class-literal-property-style: ["error", "getters"] */

class Mx {
  readonly myField1 = 1;
  readonly myField2 = `hello world`;
  private readonly myField3 = 'hello world';
}
```

#### ✅ Correct

```ts
/* eslint @typescript-eslint/class-literal-property-style: ["error", "getters"] */

class Mx {
  // no readonly modifier
  public myField1 = 'hello';

  // not a literal
  public readonly myField2 = [1, 2, 3];

  public static get myField3() {
    return 1;
  }

  private get ['myField4']() {
    return 'hello world';
  }
}
```

## When Not To Use It

When you have no strong preference, or do not wish to enforce a particular style
for how literal values are exposed by your classes.
