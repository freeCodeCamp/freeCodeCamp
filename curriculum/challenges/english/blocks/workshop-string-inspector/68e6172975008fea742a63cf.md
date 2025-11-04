---
id: 68e6172975008fea742a63cf
title: Step 9
challengeType: 1
dashedName: step-9
---

# --description--

Now it is time to log the result of using the `slice()` method.

Use either a template literal or string concatenation to log the message `The word "<platform>" was sliced from the message.` to the console. Replace `<platform>` with the actual value of the variable.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
```

# --hints--

You should log the message `The word "<platform>" was sliced from the message.`, where `<platform>` should be replaced with the actual value of the variable.

```js
assert.deepInclude(spy.calls, ['The word "freeCodeCamp" was sliced from the message.']);
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
--fcc-editable-region--

--fcc-editable-region--
```
