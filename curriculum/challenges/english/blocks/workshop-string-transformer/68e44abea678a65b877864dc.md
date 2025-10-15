---
id: 68e44abea678a65b877864dc
title: Step 10
challengeType: 1
dashedName: step-10
---

# --description--

It would be nice to see that repeated word in a sentence. Create a new variable called `newSentence` and assign it the result of concatenating the word `"I "` with the `repeatedLove` variable followed by concatenating the string `" learning."`. Then log the `newSentence` variable to the console. You can choose to use either the `+` operator or template literals for the string concatenation. 

Now you should see the text `"I love love love  learning."`. 

*NOTE*: There is an extra space after the last `"love"` which is correct. In the last step, you will trim that extra space. 

# --hints--

You should have a variable called `newSentence`.

```js
assert.exists(newSentence);
```

Your `newSentence` variable should be a string.

```js
assert.isString(newSentence);
```

You should concatenate the word `"I "` with the `repeatedLove` variable followed by concatenating the string `" learning."`. This result should be assigned to the `newSentence` variable. Be careful about spacing. 

```js
assert.equal(newSentence, `I ${repeatedLove} learning.`);
```

You should NOT assign the literal string `"I love love love  learning."` to the `newSentence` variable. Please re read through the instructions for the correct approach.

```js
assert.notMatch(code, /(["'])I\s+love\s+love\s+love\s+\s+learning.(["'])/);
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

const repeatedLove = "love ".repeat(3);
console.log(repeatedLove);

--fcc-editable-region--

--fcc-editable-region--
```
