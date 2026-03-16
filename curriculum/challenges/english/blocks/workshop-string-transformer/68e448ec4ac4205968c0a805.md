---
id: 68e448ec4ac4205968c0a805
title: Step 9
challengeType: 1
dashedName: step-9
---

# --description--

It would be nice if the word `"love"` were repeated three times in the sentence `"I love learning!"`. 

As you recall in a prior lesson, you can repeat a string a specific number of times using the `repeat()` method. Here is an example:

```js
const word = "Hello!";
const repeatedWord = word.repeat(3);

console.log(repeatedWord);  // "Hello!Hello!Hello!"
```

Since strings are immutable, this method will not modify the original string. It will return a new string with the repeated content. 

Create a variable called `repeatedLove` and assign it `"love ".repeat(3)`. Then log to the console the `repeatedLove` variable so you can see the result. 

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
const getLogs = () => spy.calls.map(call => call?.[0]);
```

# --hints--

You should have a variable called `repeatedLove`.

```js
assert.exists(repeatedLove);
```

Your `repeatedLove` variable should be a string.

```js
assert.isString(repeatedLove);
```

You should assign `"love ".repeat(3)` to the `repeatedLove` variable.

```js
assert.equal(repeatedLove, "love ".repeat(3));
```

You should log the `repeatedLove` variable to the console.

```js
assert.equal(getLogs()[10], repeatedLove);
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

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

--fcc-editable-region--

--fcc-editable-region--
```
