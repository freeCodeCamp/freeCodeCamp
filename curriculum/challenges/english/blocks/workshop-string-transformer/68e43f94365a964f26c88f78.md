---
id: 68e43f94365a964f26c88f78
title: Step 5
challengeType: 1
dashedName: step-5
---

# --description--

Now it is time to work with a new string method. 

Start by creating a new variable called `exampleSentence` and assign it the string `"I love cats and cats are so much fun!"`.

Then below that variable, log to the console `"Original sentence:"`. Then below that `console.log()`, add another `console.log()` with the `exampleSentence` variable. 

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
const getLogs = () => spy.calls.map(call => call?.[0]);
```

# --hints--

You should have an `exampleSentence` variable.

```js
assert.exists(exampleSentence);
```

Your `exampleSentence` variable should be a string.

```js
assert.isString(exampleSentence);
```

You should assign the string `"I love cats and cats are so much fun!"` to the `exampleSentence` variable.

```js
assert.equal(exampleSentence, "I love cats and cats are so much fun!");
```

You should log `"Original sentence:"` to the console.

```js
assert.equal(getLogs()[4], "Original sentence:");
```

You should log the `exampleSentence` variable to the console.

```js
const codeWithoutComments = __helpers.removeJSComments(code);
const loggingExSentence = codeWithoutComments.match(/console\.log\(\s*exampleSentence\s*\)/g)

assert.isAtLeast(loggingExSentence.length, 1);
```

# --seed--

## --seed-contents--

```js
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

--fcc-editable-region--

--fcc-editable-region--
```
