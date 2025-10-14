---
id: 68e4276483b0c71658aab1d2
title: Step 9
challengeType: 0
dashedName: step-9
demoType: onClick
---

# --description--

In this step, you will practice using the `slice()` method to extract parts of a string and manipulate a single character.  

You have a lowercase word `"camelcase"`. Your task is to build a new variable called `camelCasedVersion` where the 6th character is capitalized, using `slice()` and `toUpperCase()`.  

Log the result with `console.log("Camel cased version:", camelCasedVersion);`.

# --hints--

- Use `slice()` to split the string.  
- Use `toUpperCase()` to capitalize the 6th letter.  
- Combine slices and the capitalized letter with `+` or template literals.

# --seed--

## --seed-contents--

```js
const lowercaseWord = "camelcase";
// --fcc-editable-region--
const camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(-3);
console.log("Camel cased version:", camelCasedVersion);
// --fcc-editable-region--
```