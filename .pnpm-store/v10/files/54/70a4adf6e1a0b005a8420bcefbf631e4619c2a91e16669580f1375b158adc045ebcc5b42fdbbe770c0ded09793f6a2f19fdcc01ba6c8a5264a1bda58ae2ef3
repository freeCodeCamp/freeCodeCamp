---
description: 'Enforce that `this` is used when only `this` type is returned.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/prefer-return-this-type** for documentation.

[Method chaining](https://en.wikipedia.org/wiki/Method_chaining) is a common pattern in OOP languages and TypeScript provides a special [polymorphic `this` type](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types) to facilitate it.
Class methods that explicitly declare a return type of the class name instead of `this` make it harder for extending classes to call that method: the returned object will be typed as the base class, not the derived class.

This rule reports when a class method declares a return type of that class name instead of `this`.

```ts
class Animal {
  eat(): Animal {
    //   ~~~~~~
    // Either removing this type annotation or replacing
    // it with `this` would remove the type error below.
    console.log("I'm moving!");
    return this;
  }
}

class Cat extends Animal {
  meow(): Cat {
    console.log('Meow~');
    return this;
  }
}

const cat = new Cat();
cat.eat().meow();
//        ~~~~
// Error: Property 'meow' does not exist on type 'Animal'.
// because `eat` returns `Animal` and not all animals meow.
```

## Examples

<!--tabs-->

### ❌ Incorrect

```ts
class Foo {
  f1(): Foo {
    return this;
  }
  f2 = (): Foo => {
    return this;
  };
  f3(): Foo | undefined {
    return Math.random() > 0.5 ? this : undefined;
  }
}
```

### ✅ Correct

```ts
class Foo {
  f1(): this {
    return this;
  }
  f2() {
    return this;
  }
  f3 = (): this => {
    return this;
  };
  f4 = () => {
    return this;
  };
}

class Base {}
class Derived extends Base {
  f(): Base {
    return this;
  }
}
```

## When Not To Use It

If you don't use method chaining or explicit return values, you can safely turn this rule off.
