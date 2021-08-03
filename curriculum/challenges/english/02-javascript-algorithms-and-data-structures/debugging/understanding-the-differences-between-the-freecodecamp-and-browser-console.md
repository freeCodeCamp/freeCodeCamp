---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

You may have noticed that some freeCodeCamp challenges include their own console. This console behaves a little differently than the browser console.

There are many methods to use with `console` to output messages. `log`, `warn`, and `clear` to name a few. The freeCodeCamp console will only output `log` messages, while the browser console will output all messages. When you make changes to your code, it will run automatically and show the logs. The freeCodeCamp console is then cleared each time your code runs.

# --instructions--

First, use `console.log` to log the `output` variable. Then, use `console.clear` to clear the browser console. View the difference in the two consoles.

# --hints--

You should use `console.clear()` to clear the browser console.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

You should use `console.log()` to print the `output` variable.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

# --seed--

## --seed-contents--

```js
// Open your browser console.
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

// Use console.log() to print the output variable

// View the freeCodeCamp console and the browser console

// Now, add console.clear() after your console.log() to clear the browser console
```

# --solutions--

```js
// Open your browser console
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

// Use console.log() to print the output variable
console.log(output);

// View the freeCodeCamp console and the browser console

// Now, add console.clear() after your console.log() to clear the browser console
console.clear();
```
