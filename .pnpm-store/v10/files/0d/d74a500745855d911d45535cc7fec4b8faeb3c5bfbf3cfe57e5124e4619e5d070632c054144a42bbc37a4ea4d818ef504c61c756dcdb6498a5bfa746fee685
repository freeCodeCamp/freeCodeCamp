---
description: 'Require consistent spacing around type annotations.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/type-annotation-spacing** for documentation.

Spacing around type annotations improves readability of the code. Although the most commonly used style guideline for type annotations in TypeScript prescribes adding a space after the colon, but not before it, it is subjective to the preferences of a project. For example:

<!-- prettier-ignore -->
```ts
// with space after, but not before (default if no option is specified)
let foo: string = "bar";

// with no spaces
let foo:string = "bar";

// with space before and after
let foo : string = "bar";

// with space before, but not after
let foo :string = "bar";

// with spaces before and after the fat arrow (default if no option is specified)
type Foo = (string: name) => string;

// with no spaces between the fat arrow
type Foo = (string: name)=>string;

// with space after, but not before the fat arrow
type Foo = (string: name)=> string;

// with space before, but not after the fat arrow
type Foo = (string: name) =>string;
```

## Examples

This rule aims to enforce specific spacing patterns around type annotations and function types in type literals.

## Options

Examples of code for this rule with no options at all:

<!--tabs-->

### ❌ Incorrect

<!-- prettier-ignore -->
```ts
let foo:string = "bar";
let foo :string = "bar";
let foo : string = "bar";

function foo():string {}
function foo() :string {}
function foo() : string {}

class Foo {
    name:string;
}

class Foo {
    name :string;
}

class Foo {
    name : string;
}

type Foo = ()=>{};
type Foo = () =>{};
type Foo = ()=> {};
```

### ✅ Correct

<!-- prettier-ignore -->
```ts
let foo: string = "bar";

function foo(): string {}

class Foo {
    name: string;
}

type Foo = () => {};
```

### after

Examples of code for this rule with `{ "before": false, "after": true }`:

<!--tabs-->

#### ❌ Incorrect

<!-- prettier-ignore -->
```ts
let foo:string = "bar";
let foo :string = "bar";
let foo : string = "bar";

function foo():string {}
function foo() :string {}
function foo() : string {}

class Foo {
    name:string;
}

class Foo {
    name :string;
}

class Foo {
    name : string;
}

type Foo = ()=>{};
type Foo = () =>{};
type Foo = () => {};
```

#### ✅ Correct

<!-- prettier-ignore -->
```ts
let foo: string = "bar";

function foo(): string {}

class Foo {
    name: string;
}

type Foo = ()=> {};
```

### before

Examples of code for this rule with `{ "before": true, "after": true }` options:

<!--tabs-->

#### ❌ Incorrect

<!-- prettier-ignore -->
```ts
let foo: string = "bar";
let foo:string = "bar";
let foo :string = "bar";

function foo(): string {}
function foo():string {}
function foo() :string {}

class Foo {
    name: string;
}

class Foo {
    name:string;
}

class Foo {
    name :string;
}

type Foo = ()=>{};
type Foo = () =>{};
type Foo = ()=> {};
```

#### ✅ Correct

<!-- prettier-ignore -->
```ts
let foo : string = "bar";

function foo() : string {}

class Foo {
    name : string;
}

type Foo = () => {};
```

### overrides - colon

Examples of code for this rule with `{ "before": false, "after": false, overrides: { colon: { before: true, after: true }} }` options:

<!--tabs-->

#### ❌ Incorrect

<!-- prettier-ignore -->
```ts
let foo: string = "bar";
let foo:string = "bar";
let foo :string = "bar";

function foo(): string {}
function foo():string {}
function foo() :string {}

class Foo {
    name: string;
}

class Foo {
    name:string;
}

class Foo {
    name :string;
}

type Foo = () =>{};
type Foo = ()=> {};
type Foo = () => {};
```

#### ✅ Correct

<!-- prettier-ignore -->
```ts
let foo : string = "bar";

function foo() : string {}

class Foo {
    name : string;
}

type Foo = {
    name: (name : string)=>string;
}

type Foo = ()=>{};
```

### overrides - arrow

Examples of code for this rule with `{ "before": false, "after": false, overrides: { arrow: { before: true, after: true }} }` options:

<!--tabs-->

#### ❌ Incorrect

<!-- prettier-ignore -->
```ts
let foo: string = "bar";
let foo : string = "bar";
let foo :string = "bar";

function foo(): string {}
function foo():string {}
function foo() :string {}

class Foo {
    name: string;
}

class Foo {
    name : string;
}

class Foo {
    name :string;
}

type Foo = ()=>{};
type Foo = () =>{};
type Foo = ()=> {};
```

#### ✅ Correct

<!-- prettier-ignore -->
```ts
let foo:string = "bar";

function foo():string {}

class Foo {
    name:string;
}

type Foo = () => {};
```

## When Not To Use It

If you don't want to enforce spacing for your type annotations, you can safely turn this rule off.

## Further Reading

- [TypeScript Type System](https://basarat.gitbooks.io/typescript/docs/types/type-system.html)
- [Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
