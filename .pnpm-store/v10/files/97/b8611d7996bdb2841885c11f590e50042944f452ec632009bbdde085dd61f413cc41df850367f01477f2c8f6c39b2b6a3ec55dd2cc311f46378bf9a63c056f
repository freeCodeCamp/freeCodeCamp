---
description: 'Disallow unsafe declaration merging.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-unsafe-declaration-merging** for documentation.

TypeScript's "declaration merging" supports merging separate declarations with the same name.

Declaration merging between classes and interfaces is unsafe.
The TypeScript compiler doesn't check whether properties are initialized, which can cause lead to TypeScript not detecting code that will cause runtime errors.

```ts
interface Foo {
  nums: number[];
}

class Foo {}

const foo = new Foo();

foo.nums.push(1); // Runtime Error: Cannot read properties of undefined.
```

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
interface Foo {}

class Foo {}
```

### ✅ Correct

```ts
interface Foo {}
class Bar implements Foo {}

namespace Baz {}
namespace Baz {}
enum Baz {}

namespace Qux {}
function Qux() {}
```

## Further Reading

- [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
