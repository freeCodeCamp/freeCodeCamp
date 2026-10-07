---
description: 'Require explicit accessibility modifiers on class properties and methods.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/explicit-member-accessibility** for documentation.

TypeScript allows placing explicit `public`, `protected`, and `private` accessibility modifiers in front of class members.
The modifiers exist solely in the type system and just server to describe who is allowed to access those members.

Leaving off accessibility modifiers makes for less code to read and write.
Members are `public` by default.

However, adding in explicit accessibility modifiers can be helpful in codebases with many classes for enforcing proper privacy of members.
Some developers also find it preferable for code readability to keep member publicity explicit.

## Examples

This rule aims to make code more readable and explicit about who can use
which properties.

## Options

### Configuring in a mixed JS/TS codebase

If you are working on a codebase within which you lint non-TypeScript code (i.e. `.js`/`.mjs`/`.cjs`/`.jsx`), you should ensure that you should use [ESLint `overrides`](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files) to only enable the rule on `.ts`/`.mts`/`.cts`/`.tsx` files. If you don't, then you will get unfixable lint errors reported within `.js`/`.mjs`/`.cjs`/`.jsx` files.

```jsonc
{
  "rules": {
    // disable the rule for all files
    "@typescript-eslint/explicit-member-accessibility": "off"
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.mts", "*.cts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-member-accessibility": "error"
      }
    }
  ]
}
```

### `accessibility`

This rule in its default state requires no configuration and will enforce that every class member has an accessibility modifier. If you would like to allow for some implicit public members then you have the following options:

```ts
{
  accessibility: 'explicit',
  overrides: {
    accessors: 'explicit',
    constructors: 'no-public',
    methods: 'explicit',
    properties: 'off',
    parameterProperties: 'explicit'
  }
}
```

Note the above is an example of a possible configuration you could use - it is not the default configuration.

The following patterns are considered incorrect code if no options are provided:

```ts
class Animal {
  constructor(name) {
    // No accessibility modifier
    this.animalName = name;
  }
  animalName: string; // No accessibility modifier
  get name(): string {
    // No accessibility modifier
    return this.animalName;
  }
  set name(value: string) {
    // No accessibility modifier
    this.animalName = value;
  }
  walk() {
    // method
  }
}
```

The following patterns are considered correct with the default options `{ accessibility: 'explicit' }`:

```ts
class Animal {
  public constructor(public breed, name) {
    // Parameter property and constructor
    this.animalName = name;
  }
  private animalName: string; // Property
  get name(): string {
    // get accessor
    return this.animalName;
  }
  set name(value: string) {
    // set accessor
    this.animalName = value;
  }
  public walk() {
    // method
  }
}
```

The following patterns are considered incorrect with the accessibility set to **no-public** `[{ accessibility: 'no-public' }]`:

```ts
class Animal {
  public constructor(public breed, name) {
    // Parameter property and constructor
    this.animalName = name;
  }
  public animalName: string; // Property
  public get name(): string {
    // get accessor
    return this.animalName;
  }
  public set name(value: string) {
    // set accessor
    this.animalName = value;
  }
  public walk() {
    // method
  }
}
```

The following patterns are considered correct with the accessibility set to **no-public** `[{ accessibility: 'no-public' }]`:

```ts
class Animal {
  constructor(protected breed, name) {
    // Parameter property and constructor
    this.name = name;
  }
  private animalName: string; // Property
  get name(): string {
    // get accessor
    return this.animalName;
  }
  private set name(value: string) {
    // set accessor
    this.animalName = value;
  }
  protected walk() {
    // method
  }
}
```

### Overrides

There are three ways in which an override can be used.

- To disallow the use of public on a given member.
- To enforce explicit member accessibility when the root has allowed implicit public accessibility
- To disable any checks on given member type

#### Disallow the use of public on a given member

e.g. `[ { overrides: { constructors: 'no-public' } } ]`

The following patterns are considered incorrect with the example override

```ts
class Animal {
  public constructor(protected animalName) {}
  public get name() {
    return this.animalName;
  }
}
```

The following patterns are considered correct with the example override

```ts
class Animal {
  constructor(protected animalName) {}
  public get name() {
    return this.animalName;
  }
}
```

#### Require explicit accessibility for a given member

e.g. `[ { accessibility: 'no-public', overrides: { properties: 'explicit' } } ]`

The following patterns are considered incorrect with the example override

```ts
class Animal {
  constructor(protected animalName) {}
  get name() {
    return this.animalName;
  }
  protected set name(value: string) {
    this.animalName = value;
  }
  legs: number;
  private hasFleas: boolean;
}
```

The following patterns are considered correct with the example override

```ts
class Animal {
  constructor(protected animalName) {}
  get name() {
    return this.animalName;
  }
  protected set name(value: string) {
    this.animalName = value;
  }
  public legs: number;
  private hasFleas: boolean;
}
```

e.g. `[ { accessibility: 'off', overrides: { parameterProperties: 'explicit' } } ]`

The following code is considered incorrect with the example override

```ts
class Animal {
  constructor(readonly animalName: string) {}
}
```

The following code patterns are considered correct with the example override

```ts
class Animal {
  constructor(public readonly animalName: string) {}
}

class Animal {
  constructor(public animalName: string) {}
}

class Animal {
  constructor(animalName: string) {}
}
```

e.g. `[ { accessibility: 'off', overrides: { parameterProperties: 'no-public' } } ]`

The following code is considered incorrect with the example override

```ts
class Animal {
  constructor(public readonly animalName: string) {}
}
```

The following code is considered correct with the example override

```ts
class Animal {
  constructor(public animalName: string) {}
}
```

#### Disable any checks on given member type

e.g. `[{ overrides: { accessors : 'off' } } ]`

As no checks on the overridden member type are performed all permutations of visibility are permitted for that member type

The follow pattern is considered incorrect for the given configuration

```ts
class Animal {
  constructor(protected animalName) {}
  public get name() {
    return this.animalName;
  }
  get legs() {
    return this.legCount;
  }
}
```

The following patterns are considered correct with the example override

```ts
class Animal {
  public constructor(protected animalName) {}
  public get name() {
    return this.animalName;
  }
  get legs() {
    return this.legCount;
  }
}
```

### Except specific methods

If you want to ignore some specific methods, you can do it by specifying method names. Note that this option does not care for the context, and will ignore every method with these names, which could lead to it missing some cases. You should use this sparingly.
e.g. `[ { ignoredMethodNames: ['specificMethod', 'whateverMethod'] } ]`

```ts
class Animal {
  get specificMethod() {
    console.log('No error because you specified this method on option');
  }
  get whateverMethod() {
    console.log('No error because you specified this method on option');
  }
  public get otherMethod() {
    console.log('This method comply with this rule');
  }
}
```

## When Not To Use It

If you think defaulting to public is a good default, then you should consider using the `no-public` setting. If you want to mix implicit and explicit public members then disable this rule.

## Further Reading

- TypeScript [Accessibility Modifiers Handbook Docs](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)
