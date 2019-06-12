---
title: Installation
---
## Installation

![Installation](https://cdn-media-1.freecodecamp.org/imgr/9ILjA1q.jpg)

To get started yourself, the two things you will need are the TypeScript compiler and a editor that supports TypeScript.

In the above screenshot, I'm installing both the compiler and <a href='https://github.com/palantir/tslint' target='_blank' rel='nofollow'>TSLint</a> (which is similar to <a href='https://eslint.org/' target='_blank' rel='nofollow'>ESLint</a>) using `npm` in <a href='https://code.visualstudio.com/' target='_blank' rel='nofollow'>Visual Studio Code</a>’s integrated terminal.

### Installing TypeScript

This command will install the TypeScript package as a dependency in your project using <a href='https://www.npmjs.com/' target='_blank' rel='nofollow'>`npm`</a> which is a popular package manager.

```bash
npm i typescript
```

*To Note* There are <a href='https://docs.npmjs.com/cli/install' target='_blank' rel='nofollow'>several options</a> that `npm` provides depending on where you want TypeScript installed.

- `npm i -g typescript` to globally install the TypeScript package
- `npm i -D typescript` to install the TypeScript package as a dev dependency

### TSLint

See how to setup linting options for TypeScript at [TypeScript](./) > [Linter](./linter) within the **freeCodeCamp Guide**.

### Compiling a single file down to JavaScript

```bash
tsc multiplication.ts
```

*To Note* You can configure this TypeScript compilation process as a custom npm script in your `package.json`.

### Configuration Options

```bash
touch tsconfig.json
```

There’s also the option to create a <a href='https://www.typescriptlang.org/docs/handbook/tsconfig-json.html' target='_blank' rel='nofollow'>`tsconfig.json`</a> file that specifies the root files and compiler options.

Within your <a href='https://www.typescriptlang.org/docs/handbook/tsconfig-json.html' target='_blank' rel='nofollow'>`tsconfig.json`</a> file, for example, you could specify that you want TypeScript to compile down to ES5 instead of ES6.

### Quick Example

![Multiplication](https://cdn-media-1.freecodecamp.org/imgr/V5nP3xj.jpg)

In the screenshot above, you can see two files - `multiplication.js` and `multiplication.ts`.

This program just prints out the product of two numbers I’ve pre-defined.

> `multiplication.ts`

```typescript
let a: number = 10;
let b: number = 2;

function showProduct(first: number, second: number): void {
  console.info("Mathematical! The result is " + first * second + ".");
}

showProduct(a, b);

// Mathematical! The result is 20.
```

Once I've finished creating `multiplication.ts`, I can compile it down to JavaScript using the `tsc` command which stands for TypeScript compile.

> `multiplication.js`

```javascript
var a = 10;
var b = 2;

function showProduct(first, second) {
    console.info("Mathematical! The result is " + first * second + ".");
}

showProduct(a, b);

// Mathematical! The result is 20.
```

Bam - I just successfully compiled TypeScript to JavaScript!