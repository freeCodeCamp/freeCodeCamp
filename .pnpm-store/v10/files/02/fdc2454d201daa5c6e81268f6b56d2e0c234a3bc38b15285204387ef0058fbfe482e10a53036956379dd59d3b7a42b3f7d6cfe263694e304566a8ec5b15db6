---
description: 'Disallow `@ts-<directive>` comments or require descriptions after directives.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/ban-ts-comment** for documentation.

TypeScript provides several directive comments that can be used to alter how it processes files.
Using these to suppress TypeScript compiler errors reduces the effectiveness of TypeScript overall.
Instead, it's generally better to correct the types of code, to make directives unnecessary.

The directive comments supported by TypeScript are:

```ts
// @ts-expect-error
// @ts-ignore
// @ts-nocheck
// @ts-check
```

This rule lets you set which directive comments you want to allow in your codebase.

## Options

By default, only `@ts-check` is allowed, as it enables rather than suppresses errors.

### `ts-expect-error`, `ts-ignore`, `ts-nocheck`, `ts-check` directives

A value of `true` for a particular directive means that this rule will report if it finds any usage of said directive.

<!--tabs-->

#### ❌ Incorrect

```ts
if (false) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}
if (false) {
  /*
  @ts-ignore: Unreachable code error
  */
  console.log('hello');
}
```

#### ✅ Correct

```ts
if (false) {
  // Compiler warns about unreachable code error
  console.log('hello');
}
```

### `allow-with-description`

A value of `'allow-with-description'` for a particular directive means that this rule will report if it finds a directive that does not have a description following the directive (on the same line).

For example, with `{ 'ts-expect-error': 'allow-with-description' }`:

<!--tabs-->

#### ❌ Incorrect

```ts
if (false) {
  // @ts-expect-error
  console.log('hello');
}
if (false) {
  /* @ts-expect-error */
  console.log('hello');
}
```

#### ✅ Correct

```ts
if (false) {
  // @ts-expect-error: Unreachable code error
  console.log('hello');
}
if (false) {
  /*
  @ts-expect-error: Unreachable code error
  */
  console.log('hello');
}
```

### `descriptionFormat`

For each directive type, you can specify a custom format in the form of a regular expression. Only description that matches the pattern will be allowed.

For example, with `{ 'ts-expect-error': { descriptionFormat: '^: TS\\d+ because .+$' } }`:

<!--tabs-->

#### ❌ Incorrect

```ts
// @ts-expect-error: the library definition is wrong
const a = doSomething('hello');
```

#### ✅ Correct

```ts
// @ts-expect-error: TS1234 because the library definition is wrong
const a = doSomething('hello');
```

### `minimumDescriptionLength`

Use `minimumDescriptionLength` to set a minimum length for descriptions when using the `allow-with-description` option for a directive.

For example, with `{ 'ts-expect-error': 'allow-with-description', minimumDescriptionLength: 10 }` the following pattern is:

<!--tabs-->

#### ❌ Incorrect

```ts
if (false) {
  // @ts-expect-error: TODO
  console.log('hello');
}
```

#### ✅ Correct

```ts
if (false) {
  // @ts-expect-error The rationale for this override is described in issue #1337 on GitLab
  console.log('hello');
}
```

## When Not To Use It

If you want to use all of the TypeScript directives.

## Further Reading

- TypeScript [Type Checking JavaScript Files](https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html)
