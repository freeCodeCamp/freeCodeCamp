---
id: 692aba0a78ca391f10455b4b
title: How Do Imports and Exports Work with CommonJS Modules?
challengeType: 19
dashedName: how-do-imports-and-exports-work-with-commonjs-modules
---

# --description--

In modern web development, you can split your code into multiple files called "modules."

You can think of a module as a self-contained and reusable code block.

By importing modules into other modules, you can reuse their functionality while still keeping the code in separate files, which is more maintainable, especially for large and complex web applications.

In Node.js, each file is considered a module.

Node has two different systems for working with modules: CommonJS and ES.

CommonJS is the original and default way of working with packages in Node.js. It loads modules synchronously, which means that it has to wait for a module to be fully loaded before it starts loading the next one or continues running the code.

It's still widely used, but it's gradually being replaced by the newer ES syntax.

CommonJS uses the `require()` function to import a module, taking its relative path as an argument.

For example, let's say that we have a module called `math.js`, where we define basic mathematical operations.

We'll only use a multiplication function here to keep this example simple and focused:

```js
function multiply(a, b) {
  return a * b;
}
```

How can we reuse this function outside our current module? By default, functions and variables defined in a Node.js module are **private** — other modules can't access them unless we explicitly export them. There are several ways to do this.

One common way is to assign a value to `module.exports`. This object represents what the module will return when it is imported elsewhere, giving other modules access to the functions, variables, or objects you've chosen to expose.

In this example, we assign an object with a `multiply` property to `module.exports`. The value of that property is a reference to the `multiply` function we defined earlier. This will export the function, so we can call it from other modules if we need to.

```javascript
function multiply(a, b) {
  return a * b;
}

module.exports = {
  multiply: multiply
};
```

Let's say that we try to import the `math.js` module into another module. We call the `require()` function, and pass the relative path as an argument. Then, we assign the object returned by `require()` to the `math` variable.

```javascript
const math = require('./math');
```

Let's check out the value of `math` in the console by printing it with `console.log()`:

```javascript
console.log(math);
```

This is the output. It's an object with a `multiply` property and a function as the value:

```javascript
{ multiply: [Function: multiply] }
```

If we call this function with `math.multiply()`, passing the numbers `6` and `7` as arguments, the output is `42`. The function runs successfully and yet, it's in another file! So our import statement worked correctly.

```javascript
const math = require('./math');

console.log(math.multiply(6, 7)); // 42
```

But there are other ways to export a function, variable, or object.

For example, if you only need to export a single function, variable, or object, you can assign it directly as the value of `module.exports`:

```javascript
function multiply(a, b) {
  return a * b;
}

module.exports = multiply;
```

If you need to export multiple functions, you just need to add them to the `module.exports` object, separated by a comma.

Here, you can see that the exported object has two properties: `subtract` and `multiply`. Their values are references to their corresponding functions, so you will have access to both of them in any module that imports `math.js`:

```javascript
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  subtract: subtract,
  multiply: multiply
};
```

When the `module.exports` object has multiple properties, you will have the option to choose if you want to import everything or import properties individually.

In this example, we are importing the entire object that was exported by `math.js`, so we will have access to both `subtract` and `multiply`:

```javascript
const math = require('./math');

console.log(math.subtract(6, 7));  // -1
console.log(math.multiply(6, 7));  // 42
```

If we only want to import `multiply` instead, we just need to write its name within curly braces, after the `const` keyword. Basically, you're using the destructuring assignment syntax to get its value from the exported object. Then, we can refer to it directly by its name in our code:

```javascript
const { multiply } = require('./math');

console.log(multiply(6, 7));
```

This works for multiple elements too. You just need to separate them with a comma within the curly braces. Here, we are importing both the `subtract` and `multiply` functions:

```javascript
const { subtract, multiply } = require('./math');
```

By default, Node.js will treat the following as CommonJS modules:

* Files with a `.cjs` extension.
    
* Files with a `.js` extension when the nearest parent `package.json` file contains a top-level field `"type"` with a value of `"commonjs"`.
    
* Files with a `.js` extension or without an extension, when the nearest parent `package.json` file doesn't contain a top-level field `"type"`, or there is no `package.json` in any parent folder.
    
* Files with an extension that is not `.mjs`, `.cjs`, `.json`, `.node`, or `.js`.
    

While ES Modules are gradually replacing CommonJS modules, understanding them is still essential for developers working with existing Node.js codebases and many npm packages.

# --questions--

## --text--

Which function is used to import modules in CommonJS?

## --answers--

`import()`

### --feedback--

Think about which keyword is used to bring in external code in Node.js environments.

---

`require()`

---

`export()`

### --feedback--

Think about which keyword is used to bring in external code in Node.js environments.

---

`include()`

### --feedback--

Think about which keyword is used to bring in external code in Node.js environments.

## --video-solution--

2

## --text--

Which of the following is the primary way to export a module in CommonJS?

## --answers--

`export default`

### --feedback--

Think about which object is used to define what a module makes available to other files.

---

`module.exports`

---

`export const`

### --feedback--

Think about which object is used to define what a module makes available to other files.

---

`import from`

### --feedback--

Think about which object is used to define what a module makes available to other files.

## --video-solution--

2

## --text--

What type of loading does CommonJS use?

## --answers--

Asynchronous loading

### --feedback--

Does the code wait for a module to fully load before resuming its execution?

---

Lazy loading

### --feedback--

Does the code wait for a module to fully load before resuming its execution?

---

Synchronous loading

---

Conditional loading

### --feedback--

Does the code wait for a module to fully load before resuming its execution?

## --video-solution--

3
