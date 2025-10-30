---
id: 68e6172975008fea742a63cd
title: Step 7
challengeType: 1
dashedName: step-7
---

# --description--

Now you will explore the `slice()` method, which extracts a portion of a string.

Create a variable named `message` and assign it the string `"Welcome to freeCodeCamp!"`.

Then use `console.log()` to log `"Here are some examples of the slice() method:"` to the console.

# --hints--

You should declare a variable named `message`.

```js
assert.exists(message);
```

Your `message` variable should be a string.

```js
assert.isString(message);
```

Your `message` variable should be `"Welcome to freeCodeCamp!"`.

```js
assert.strictEqual(message, "Welcome to freeCodeCamp!");
```

You should log `"Here are some examples of the slice() method:"` to the console.

```js
assert.match(__helpers.removeJSComments(code), /console\.log\s*\(\s*('|"|`)Here are some examples of the slice\(\) method:\1\s*\)/);
```

# --seed--

## --seed-contents--

```js
const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

--fcc-editable-region--

--fcc-editable-region--
```
