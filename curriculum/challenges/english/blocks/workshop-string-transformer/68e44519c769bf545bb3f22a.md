---
id: 68e44519c769bf545bb3f22a
title: Step 7
challengeType: 1
dashedName: step-7
---

# --description--

To get the desired output of `"I love dogs and dogs are so much fun!"`, you will need to use the `replaceAll()` method instead of the `replace()` method. This method returns a new string for all matches to the substring. 

Update the `exampleSentence.replace("cats", "dogs")` to use the `replaceAll()` method instead. Now you should see the correct text in the console.

# --hints--

You should update the `exampleSentence.replace("cats", "dogs")` line of code to use the `replaceAll()` method.

```js
assert.equal(dogsOnlySentence, "I love dogs and dogs are so much fun!");
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
const dogsOnlySentence = exampleSentence.replace("cats", "dogs");
--fcc-editable-region--
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);
```
