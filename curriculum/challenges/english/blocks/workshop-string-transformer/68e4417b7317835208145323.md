---
id: 68e4417b7317835208145323
title: Step 6
challengeType: 1
dashedName: step-6
---

# --description--

Next, create a new variable called `dogsOnlySentence` and assign it `exampleSentence.replace("cats", "dogs")`.

Then below that variable, log to the console `"Replacing all occurrences of cats with dogs:"`. Below that `console.log()`, add another `console.log()` for the `dogsOnlySentence` variable. 

You should now see the text `"I love dogs and cats are so much fun!"` logged to the console. But that isn't the desired result. In the next step, you will learn how to fix it so the text reads `"I love dogs and dogs are so much fun!"`.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
const getLogs = () => spy.calls.map(call => call?.[0]);
```

# --hints--

You should have a `dogsOnlySentence` variable.

```js
assert.exists(dogsOnlySentence);
```

Your `dogsOnlySentence` variable should be a string.

```js
assert.isString(dogsOnlySentence);
```

You should assign `exampleSentence.replace("cats", "dogs")` to your `dogsOnlySentence` variable.

```js
assert.equal(dogsOnlySentence, "I love dogs and cats are so much fun!");
```

You should log `"Replacing all occurrences of cats with dogs:"` to the console.

```js
assert.equal(getLogs()[6], "Replacing all occurrences of cats with dogs:");
```

You should log the `dogsOnlySentence` variable to the console.

```js
const codeWithoutComments = __helpers.removeJSComments(code);
const loggingDogsOnlySentence = codeWithoutComments.match(/console\.log\(\s*dogsOnlySentence\s*\)/g)

assert.isAtLeast(loggingDogsOnlySentence.length, 1);
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

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

--fcc-editable-region--

--fcc-editable-region--
```
