---
id: 68e6172975008fea742a63d0
title: Step 10
challengeType: 1
dashedName: step-10
---

# --description--

You can use `slice()` to extract from the beginning of a string.

Create a variable named `greetingWord`. Then assign it the result of using `message.slice(0, 7)` to extract the first word `"Welcome"`.

Then use either a template literal or string concatenation to log the message `The first word is "<greetingWord>".` to the console. Replace `<greetingWord>` with the actual value of the variable.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
```

# --hints--

You should declare a variable named `greetingWord`.

```js
assert.exists(greetingWord);
```

Your `greetingWord` variable should be a string.

```js
assert.isString(greetingWord);
```

You should use `message.slice(0, 7)`.

```js
assert.match(__helpers.removeJSComments(code), /message\.slice\(\s*0\s*,\s*7\s*\)/);
```

You should assign the result of `message.slice(0, 7)` to your `greetingWord` variable.

```js
assert.match(__helpers.removeJSComments(code), /greetingWord\s*=\s*message\.slice\(\s*0\s*,\s*7\s*\)/);
```

Your `greetingWord` variable should equal `"Welcome"`.

```js
assert.strictEqual(greetingWord, "Welcome");
```

You should log the message `The first word is "<greetingWord>".`, where `<greetingWord>` should be replaced by the actual value of the variable.

```js
assert.deepInclude(spy.calls, ['The first word is "Welcome".']);
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

--fcc-editable-region--

--fcc-editable-region--
```
