---
id: 68e6172875008fea742a63c9
title: Step 3
challengeType: 1
dashedName: step-3
---

# --description--

As you recall from the prior lessons, the `includes()` method checks if a string contains a specific substring and returns `true` or `false`.

Here is an example using the `includes()` method:

```js
const text = "Hello World";
const hasHello = text.includes("Hello");
console.log(hasHello); // true
```

Create a variable named `hasFreeCodeCamp`. Then assign it the result of using the `includes()` method on `fccSentence` to check if it contains `"freeCodeCamp"`.

# --hints--

You should declare a variable named `hasFreeCodeCamp`.

```js
assert.exists(hasFreeCodeCamp);
```

You should use `fccSentence.includes("freeCodeCamp")`.

```js
assert.match(__helpers.removeJSComments(code), /fccSentence\.includes\(\s*(['"`])freeCodeCamp\1\s*\)/);
```

You should assign the result of `fccSentence.includes("freeCodeCamp")` to your `hasFreeCodeCamp` variable.

```js
assert.match(__helpers.removeJSComments(code), /hasFreeCodeCamp\s*=\s*fccSentence\.includes\(\s*(['"`])freeCodeCamp\1\s*\)/);
```

The result of `fccSentence.includes("freeCodeCamp")` should be `true`. 

```js
assert.isTrue(hasFreeCodeCamp);
```

# --seed--

## --seed-contents--

```js
const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

--fcc-editable-region--

--fcc-editable-region--
```
