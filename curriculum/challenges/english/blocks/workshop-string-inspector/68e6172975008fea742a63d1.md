---
id: 68e6172975008fea742a63d1
title: Step 11
challengeType: 1
dashedName: step-11
---

# --description--

The `slice()` method can use negative indices to count from the end of the string. `-1` refers to the last character.

Here is an example:

```js
const text = "JavaScript";
const lastThree = text.slice(-3);
console.log(lastThree); // "ipt"
```

Create a variable named `endPunctuation`. Then assign it the result of using `message.slice(-1)` to extract the last character.

Then use either a template literal or string concatenation to log the message `The ending punctuation mark is a "<endPunctuation>"` to the console. Replace `<endPunctuation>` with the actual value of the variable.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
```

# --hints--

You should declare a variable named `endPunctuation`.

```js
assert.exists(endPunctuation);
```

Your `endPunctuation` variable should be a string.

```js
assert.isString(endPunctuation);
```

You should use `message.slice(-1)`.

```js
assert.match(__helpers.removeJSComments(code), /message\.slice\(\s*-1\s*\)/);
```

You should assign the result of `message.slice(-1)` to your `endPunctuation` variable.

```js
assert.match(__helpers.removeJSComments(code), /endPunctuation\s*=\s*message\.slice\(\s*-1\s*\)/);
```

Your `endPunctuation` variable should equal `"!"`.

```js
assert.strictEqual(endPunctuation, "!");
```

You should log the message `The ending punctuation mark is a "<endPunctuation>"`, where `<endPunctuation>` should be replaced with the actual value of the variable.

```js
assert.deepInclude(spy.calls, ['The ending punctuation mark is a "!"']);
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

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

--fcc-editable-region--

--fcc-editable-region--
```
