---
id: 68e4276483b0c71658aab1d3
title: Step 10
challengeType: 0
dashedName: step-10
demoType: onClick
---

# --description--

Congratulations! You’ve now practiced all six string methods: `trim()`, `trimStart()`, `trimEnd()`, `toUpperCase()`, `toLowerCase()`, and `slice()`.  

In this final step, log all your variables together to see the full results:

- `cleanedInput`  
- `trimmedStart`  
- `trimmedEnd`  
- `upperCaseInput`  
- `lowerCaseInput`  
- `camelCasedVersion`

# --hints--

Log all the variables using `console.log()` statements.

# --seed--

## --seed-contents--

```js
const userInput = "   Hello World!   ";
const cleanedInput = userInput.trim();
const trimmedStart = userInput.trimStart();
const trimmedEnd = userInput.trimEnd();
const upperCaseInput = cleanedInput.toUpperCase();
const lowerCaseInput = cleanedInput.toLowerCase();
const lowercaseWord = "camelcase";
const camelCasedVersion =
  lowercaseWord.slice(0, 5) +
  lowercaseWord[5].toUpperCase() +
  lowercaseWord.slice(-3);
// --fcc-editable-region--
console.log(cleanedInput);
console.log(trimmedStart);
console.log(trimmedEnd);
console.log(upperCaseInput);
console.log(lowerCaseInput);
console.log(camelCasedVersion);
// --fcc-editable-region--
```
