---
id: 68e6172975008fea742a63ca
title: Step 4
challengeType: 1
dashedName: step-4
---

# --description--

Now use either a template literal or string concatenation to log the message `fccSentence.includes("freeCodeCamp") returns <hasFreeCodeCamp> because the word "freeCodeCamp" is in the sentence.` to the console. Replace `<hasFreeCodeCamp>` with the actual value of the variable.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
```

# --hints--

You should log the message `fccSentence.includes("freeCodeCamp") returns <hasFreeCodeCamp> because the word "freeCodeCamp" is in the sentence.`, where `<hasFreeCodeCamp>` should be replaced with the actual value of the variable.

```js
assert.deepInclude(spy.calls, ['fccSentence.includes("freeCodeCamp") returns true because the word "freeCodeCamp" is in the sentence.']);
```

# --seed--

## --seed-contents--

```js
const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
--fcc-editable-region--

--fcc-editable-region--
```
