---
id: 68e4465fba0bd256868b7deb
title: Step 8
challengeType: 1
dashedName: step-8
---

# --description--

Now it is time to work with a new string method.

Begin by creating a variable called `learningSentence` and assign the string `"I love learning!"`. 

Then below that variable, log to the console `"Original learning sentence:"`. Below that `console.log()`, add another `console.log()` for the `learningSentence` variable. 

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
const getLogs = () => spy.calls.map(call => call?.[0]);
```

# --hints--

You should have a `learningSentence` variable.

```js
assert.exists(learningSentence);
```

Your `learningSentence` variable should be a string.

```js
assert.isString(learningSentence);
```

You should assign the string `"I love learning!"` to the `learningSentence` variable.

```js
assert.equal(learningSentence, "I love learning!");
```

You should log `"Original learning sentence:"` to the console.

```js
assert.equal(getLogs()[8], "Original learning sentence:");
```

You should log the `learningSentence` variable to the console.

```js
assert.equal(getLogs()[9], learningSentence);
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

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

--fcc-editable-region--

--fcc-editable-region--
```
