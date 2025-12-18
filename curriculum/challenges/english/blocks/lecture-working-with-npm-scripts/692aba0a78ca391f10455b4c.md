---
id: 692aba0a78ca391f10455b4c
title: How Do Imports and Exports Work with ES Modules?
challengeType: 19
dashedName: how-do-imports-and-exports-work-with-es-modules
---

# --description--

Now that you understand the CommonJS module system, let's look at the ES module system.

ES modules, or ECMAScript modules, are the official, standardized module format for JavaScript defined by the ECMAScript specification. They use `import` and `export` statements, and in Node.js, they're loaded asynchronously, which is more efficient.

Node.js treats files as ES modules in the following cases:

* Files with an `.mjs` extension.
    
* And files with a `.js` extension when the nearest parent `package.json` file contains a top-level `"type"` field with a value of `"module"`.
    

Here we have the same `multiply` function you've seen before, but now we are going to use the ESM system. For this, we are assigning a `.mjs` extension to both modules.

To export the `multiply` function from the `math.mjs` module, use the `export` keyword followed by the name of the function, variable, or object that you want to export within curly brackets:

```javascript
function multiply(a, b) {
  return a * b;
}

export { multiply };
```

You can also export the function directly by using the `export` keyword before the `function` keyword. This is known as a named export. You can have multiple named exports per module:

```javascript
export function multiply(a, b) {
  return a * b;
}
```

Then, to import this module, use the `import` keyword followed by curly braces. Notice that we are using `import` instead of `require()`. That is one of the key differences between CommonJS and ES modules.

Within the curly braces, we write the name of the function, variable, or object that we want to import. In this case, it's `multiply`. Then, use the `from` keyword and the relative path to the module. This code will run successfully and the output will be `42`.

```javascript
import { multiply } from './math.mjs';

console.log(multiply(6, 7)); // 42
```

In the ES system, you can set one default export per module. This way, you don't need to use curly braces to import it.

Here is an example where we are setting the `multiply` function as the default export for the entire `math.mjs` module:

```javascript
export default function multiply(a, b) {
  return a * b;
}
```

Now we don't need the curly braces, since the function will be imported and assigned by default:

```javascript
import multiply from './math.mjs';
```

If you don't use file extensions or the `package.json` file to tell Node.js explicitly what type of module system you want to use, it will inspect the source code to look for ES module syntax. If that syntax is found, it will run the code as an ES module; otherwise, it will run it as a CommonJS module.

While CommonJS served as the default standard for Node.js in its early days, as developers increasingly adopt ESM for its efficiency and compatibility with modern JavaScript, it's important to know their differences and how to use both.

# --questions--

## --text--

Which keyword is used to load modules in ES Modules?

## --answers--

`require()`

### --feedback--

Think about which keyword is used to bring in external code in modern JavaScript environments.

---

`module.exports`

### --feedback--

Think about which keyword is used to bring in external code in modern JavaScript environments.

---

`import`

---

`include()`

### --feedback--

Think about which keyword is used to bring in external code in modern JavaScript environments.

## --video-solution--

3

## --text--

Which of the following is a way to export a single value as the primary export in ES?

## --answers--

`module.exports`

### --feedback--

Think about which export method is used to provide a single, primary value from a module.

---

`exports.add`

### --feedback--

Think about which export method is used to provide a single, primary value from a module.

---

`export default`

---

`export const`

### --feedback--

Think about which export method is used to provide a single, primary value from a module.

## --video-solution--

3

## --text--

What type of loading does ECMAScript Modules (ES) primarily use?

## --answers--

Synchronous loading

### --feedback--

Think about how modern browsers import external JavaScript files.

---

Lazy loading

### --feedback--

Think about how modern browsers import external JavaScript files.

---

Asynchronous loading

---

Conditional loading

### --feedback--

Think about how modern browsers import external JavaScript files.

## --video-solution--

3
