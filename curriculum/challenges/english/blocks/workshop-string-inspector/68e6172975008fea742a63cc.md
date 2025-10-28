---
id: 68e6172975008fea742a63cc
title: Step 6
challengeType: 1
dashedName: step-6
---

# --description--

The `includes()` method is case-sensitive, meaning it distinguishes between uppercase and lowercase letters.

Create a variable named `hasLowercaseFCC`. Then assign it the result of using the `includes()` method to check if `fccSentence` includes `"freecodecamp"` (all lowercase).

Then use either a template literal or string concatenation to log the message `fccSentence.includes("freecodecamp") returns <hasLowercaseFCC> because includes is case-sensitive.` to the console. Replace `<hasLowercaseFCC>` with the actual value of the variable.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
```

# --hints--

You should declare a variable named `hasLowercaseFCC`.

```js
assert.exists(hasLowercaseFCC);
```

You should use `fccSentence.includes("freecodecamp")`.

```js
assert.match(__helpers.removeJSComments(code), /fccSentence\.includes\(\s*(['"`])freecodecamp\1\s*\)/);
```

You should assign the result of `fccSentence.includes("freecodecamp")` to your `hasLowercaseFCC` variable.

```js
assert.match(__helpers.removeJSComments(code), /hasLowercaseFCC\s*=\s*fccSentence\.includes\(\s*(['"`])freecodecamp\1\s*\)/);
```

The result of `fccSentence.includes("freecodecamp")` should be `false`. 

```js
assert.isFalse(hasLowercaseFCC);
```

You should log the message that includes `fccSentence.includes("freecodecamp") returns <hasLowercaseFCC> because includes is case-sensitive.`, where `<hasLowercaseFCC>` should be replaced with the actual value of the variable.

```js
assert.deepInclude(spy.calls, ['fccSentence.includes("freecodecamp") returns false because includes is case-sensitive.']);
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

--fcc-editable-region--

--fcc-editable-region--
```
