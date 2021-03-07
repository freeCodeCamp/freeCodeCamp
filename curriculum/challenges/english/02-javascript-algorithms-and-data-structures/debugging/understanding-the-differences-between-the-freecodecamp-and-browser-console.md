---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console behaves a little differently than the browser console you used in the last challenge.

The following challenge is meant to highlight the main difference between the freeCodeCamp console and your browser console.

When you run ordinary JavaScript, the browser's console will display your `console.log()` statements the exact number of times it is called.

The freeCodeCamp console will print your `console.log()` statements a short time after the editor detects a change in the script, as well as during testing.

The freeCodeCamp console is cleared before the tests are run and, to avoid spam, only prints the logs during the first test (see the note below for exceptions).

If you would like to see every log for every test, run the tests, and open the browser console. If you prefer to use the browser console, and want it to mimic the freeCodeCamp console, place `console.clear()` before any other `console` calls, to clear the browser console.

**Note:** `console.log`s inside functions are printed to the freeCodeCamp console whenever those functions are called. This can help debugging functions that are called during testing.

# --instructions--

First, use `console.log` to log the `output` variable. Then, use `console.clear` to clear the browser console.

# --hints--

You should use `console.clear()` to clear the browser console.

```js
assert(
  __helpers
    .removeWhiteSpace(__helpers.removeJSComments(code))
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
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

# --solutions--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.clear();
console.log(output);

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```
