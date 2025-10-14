
---

### Step 5 – `step-5.md`

```md
---
id: 68e4276483b0c71658aab1ce
title: Step 5
challengeType: 0
dashedName: step-5
demoType: onClick
---

# --description--

The `trimStart()` method removes spaces only at the beginning of a string.  

Your task: Create a variable `trimmedStart` using `userInput.trimStart()` and log it to show leading spaces removed.

# --hints--

Use `const trimmedStart = userInput.trimStart();` and log it.

# --seed--

## --seed-contents--

```js
const userInput = "   Hello World!   ";
const cleanedInput = userInput.trim();
// --fcc-editable-region--
const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method — leading spaces removed:", trimmedStart);
// --fcc-editable-region--
```