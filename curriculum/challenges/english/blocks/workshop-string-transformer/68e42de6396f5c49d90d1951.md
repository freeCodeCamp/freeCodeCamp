---
id: 68e42de6396f5c49d90d1951
title: Step 3
challengeType: 1
dashedName: step-3
---

# --description--

In a prior lesson, you learned about the `replace()` method which is used to locate a substring in a string and replace it with another value.

Here is an example:

```js
const text = "I love JavaScript!";
const newText = text.replace("JavaScript", "coding");
// Result: "I love coding!"
```

Remember that strings are immutable which means the original `text` is not modified in that example. A new string is created instead. 

Create a new variable called `replacedString` and assign it `originalString.replace("cats", "dogs")`. 

# --hints--

You should have a variable called `replacedString`.

```js
assert.exists(replacedString);
```

Your `replacedString` variable should be a string.

```js
assert.isString(replacedString);
```

You should assign `originalString.replace("cats", "dogs")` to the `replacedString` variable.

```js
assert.equal(replacedString, "I love dogs.");
```

# --seed--

## --seed-contents--

```js
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

--fcc-editable-region--

--fcc-editable-region--
```
