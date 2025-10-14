
---

### Step 6 – `step-6.md`

```md
---
id: 68e4276483b0c71658aab1cf
title: Step 6
challengeType: 0
dashedName: step-6
demoType: onClick
---

# --description--

The `trimEnd()` method removes spaces only at the end of a string.  

Your task: Create a variable `trimmedEnd` using `userInput.trimEnd()` and log it to show trailing spaces removed.

# --hints--

Use `const trimmedEnd = userInput.trimEnd();` and log it.

# --seed--

## --seed-contents--

```js
const userInput = "   Hello World!   ";
const cleanedInput = userInput.trim();
const trimmedStart = userInput.trimStart();
// --fcc-editable-region--
const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method — trailing spaces removed:", trimmedEnd);
// --fcc-editable-region--
```