---
id: 68e6172975008fea742a63cb
title: Step 5
challengeType: 1
dashedName: step-5
---

# --description--

Now it is time to see what happens when the substring is NOT found.

Create a variable named `hasJavaScript`. Then assign it the result of using the `includes()` method to check if `fccSentence` includes `"JavaScript"`.

Then use either a template literal or string concatenation to log the message `fccSentence.includes("JavaScript") returns <hasJavaScript> because the word "JavaScript" is not in the sentence.` to the console. Replace `<hasJavaScript>` with the actual value of the variable.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
```

# --hints--

You should declare a variable named `hasJavaScript`.

```js
assert.exists(hasJavaScript);
```

You should use `fccSentence.includes("JavaScript")`.

```js
assert.match(__helpers.removeJSComments(code), /fccSentence\.includes\(\s*(['"`])JavaScript\1\s*\)/);
```

You should assign the result of `fccSentence.includes("JavaScript")` to your `hasJavaScript` variable.

```js
assert.match(__helpers.removeJSComments(code), /hasJavaScript\s*=\s*fccSentence\.includes\(\s*(['"`])JavaScript\1\s*\)/);
```

The result of `fccSentence.includes("JavaScript")` should be `false`. 

```js
assert.isFalse(hasJavaScript);
```

You should log the message `fccSentence.includes("JavaScript") returns <hasJavaScript> because the word "JavaScript" is not in the sentence.`, where `<hasJavaScript>` should be replaced with the actual value of the variable.

```js
assert.deepInclude(spy.calls, ['fccSentence.includes("JavaScript") returns false because the word "JavaScript" is not in the sentence.']);
```

# --seed--

## --seed-contents--

```js
const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

--fcc-editable-region--

--fcc-editable-region--
```
