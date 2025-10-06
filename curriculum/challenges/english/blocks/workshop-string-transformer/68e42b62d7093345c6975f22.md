---
id: 68e42b62d7093345c6975f22
title: Step 2
challengeType: 1
dashedName: step-2
---

# --description--

Below your `originalString` variable, add a `console.log()` with the string `"Original string:"`. 

Then below that `console.log()`, add another `console.log()` with the `originalString` variable. 

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
const getLogs = () => spy.calls.map(call => call?.[0]);
```

# --hints--

You should log the string `"Original string:"` to the console.

```js
assert.equal(getLogs()[0], "Original string:");
```

You should log the `originalString` variable to the console. 

```js
const codeWithoutComments = __helpers.removeJSComments(code);
const loggingOriginalStr = codeWithoutComments.match(/console\.log\(\s*originalString\s*\)/g)

assert.isAtLeast(loggingOriginalStr.length, 1);
```

# --seed--

## --seed-contents--

```js
const originalString = "I love cats.";
--fcc-editable-region--

--fcc-editable-region--
```
