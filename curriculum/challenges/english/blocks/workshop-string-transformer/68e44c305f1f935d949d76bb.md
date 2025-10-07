---
id: 68e44c305f1f935d949d76bb
title: Step 11
challengeType: 1
dashedName: step-11
---

# --description--

As mentioned in the prior step, there is an extra space after the last `"love"` in the sentence `"I love love love  learning."`. To remove that extra space, you can use the `trimEnd()` method. 

At the end of the `"love ".repeat(3)` method, chain the `trimEnd()` method. You can chain methods like this:

```js
.firstMethod().secondMethod()
```

Now when you check the console, you should see that the extra space was removed.

And with that last change, your workshop is complete! 

# --hints--

You should chain the `trimEnd()` method to the `"love ".repeat(3)` method.

```js
assert.equal(repeatedLove, "love ".repeat(3).trimEnd());
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
const repeatedLove = "love ".repeat(3)
--fcc-editable-region--
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
```

# --solutions--

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

const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
```
