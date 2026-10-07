---
description: 'Enforce valid definition of `new` and `constructor`.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-misused-new** for documentation.

JavaScript classes may define a `constructor` method that runs when a class instance is newly created.
TypeScript allows interfaces that describe a static class object to define a `new()` method (though this is rarely used in real world code).
Developers new to JavaScript classes and/or TypeScript interfaces may sometimes confuse when to use `constructor` or `new`.

This rule reports when a class defines a method named `new` or an interface defines a method named `constructor`.

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
declare class C {
  new(): C;
}

interface I {
  new (): I;
  constructor(): void;
}
```

### ✅ Correct

```ts
declare class C {
  constructor();
}

interface I {
  new (): C;
}
```

## When Not To Use It

If you intentionally want a class with a `new` method, and you're confident nobody working in your code will mistake it with a constructor.
