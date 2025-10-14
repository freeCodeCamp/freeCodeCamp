---
id: 68e4276483b0c71658aab1cc
title: Step 3
challengeType: 0
dashedName: step-3
demoType: onClick
---

# Step 3 – Remove extra spaces

Remove the extra spaces at the beginning and end of your string using the `trim()` method.  

The `trim()` method removes whitespace from both ends of a string but leaves spaces inside the text untouched.  

Your task: Create a variable named `cleanedInput` that stores the result of calling `userInput.trim()`.

## Hints

You should define `const cleanedInput = userInput.trim();`.

## Seed

```js
const userInput = "   Hello World!   ";
console.log("Original input:", userInput);
// --fcc-editable-region--
const cleanedInput = userInput.trim();
// --fcc-editable-region--
