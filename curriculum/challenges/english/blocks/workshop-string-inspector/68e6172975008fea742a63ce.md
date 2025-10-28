---
id: 68e6172975008fea742a63ce
title: Step 8
challengeType: 1
dashedName: step-8
---

# --description--

The `slice()` method extracts a section of a string. It takes two arguments: the start index (included) and the end index (not included).

Here is an example:

```js
const greeting = "Hello World";
const firstWord = greeting.slice(0, 5);
console.log(firstWord); // "Hello"
```

String indices start at 0. In the `message` string, the character at index 11 is `f` (the start of "freeCodeCamp").

Create a variable named `platform`. Then assign it the result of using `message.slice(11, 23)` to extract `"freeCodeCamp"`.

# --hints--

You should declare a variable named `platform`.

```js
assert.exists(platform);
```

Your `platform` variable should be a string.

```js
assert.isString(platform);
```

You should use `message.slice(11, 23)`.

```js
assert.match(__helpers.removeJSComments(code), /message\.slice\(\s*11\s*,\s*23\s*\)/);
```

You should assign the result of `message.slice(11, 23)` to your `platform` variable.

```js
assert.match(__helpers.removeJSComments(code), /platform\s*=\s*message\.slice\(\s*11\s*,\s*23\s*\)/);
```

Your `platform` variable should equal `"freeCodeCamp"`.

```js
assert.strictEqual(platform, "freeCodeCamp");
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

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

--fcc-editable-region--

--fcc-editable-region--
```
