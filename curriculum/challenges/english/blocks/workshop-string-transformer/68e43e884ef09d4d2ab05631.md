---
id: 68e43e884ef09d4d2ab05631
title: Step 4
challengeType: 1
dashedName: step-4
---

# --description--

Now it is time to see the result from using the `replace()` method.

Start by adding a `console.log()` with the value `"After using the replace() method:"`.

Then below that `console.log()`, add another `console.log()` with the `replacedString` variable.

Take a look at the console and you should see that the new sentence says `"I love dogs."` instead of the original `"I love cats."`.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
const getLogs = () => spy.calls.map(call => call?.[0]);
```

# --hints--

You should log `"After using the replace() method:"` to the console.

```js
assert.equal(getLogs()[2], "After using the replace() method:");
```

You should log the `replacedString` variable to the console. 

```js
const codeWithoutComments = __helpers.removeJSComments(code);
const loggingReplacedStr = codeWithoutComments.match(/console\.log\(\s*replacedString\s*\)/g)

assert.isAtLeast(loggingReplacedStr.length, 1);
```

# --seed--

## --seed-contents--

```js
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
--fcc-editable-region--

--fcc-editable-region--
```
