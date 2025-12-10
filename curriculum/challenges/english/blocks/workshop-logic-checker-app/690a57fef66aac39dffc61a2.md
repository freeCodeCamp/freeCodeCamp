---
id: 690a57fef66aac39dffc61a2
title: Step 5
challengeType: 1
dashedName: step-5
---

# --description--

Now that you know what truthy and falsy values are, remove both your variable declaration and `console.log` statement from your code.

# --hints--

You should not have a `truthyOrFalsy` variable.

```js
assert.notMatch(__helpers.removeJSComments(code), /const\s+truthyOrFalsy\s*=/);
```

You should not have `console.log(Boolean(truthyOrFalsy))` in your code.

```js
assert.notMatch(__helpers.removeJSComments(code), /console\s*\.\s*log\s*\(\s*Boolean\s*\(\s*truthyOrFalsy\s*\)\s*\)\s*;?/);
```

# --seed--

## --seed-contents--

```js
--fcc-editable-region--
const truthyOrFalsy = "";

console.log(Boolean(truthyOrFalsy));
--fcc-editable-region--
```
