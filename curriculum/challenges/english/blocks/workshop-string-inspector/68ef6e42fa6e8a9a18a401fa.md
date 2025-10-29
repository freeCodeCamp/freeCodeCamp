---
id: 68ef6e42fa6e8a9a18a401fa
title: Step 2
challengeType: 1
dashedName: step-2
---

# --description--

Use `console.log()` to log `"Here are some examples of the includes() method:"` to the console.

# --before-each--

```js
const spy = __helpers.spyOn(console, 'log');
```

# --hints--

You should log `"Here are some examples of the includes() method:"` to the console.

```js
assert.deepInclude(spy.calls, ["Here are some examples of the includes() method:"])
```

# --seed--

## --seed-contents--

```js
const fccSentence = "freeCodeCamp is a great place to learn web development.";

--fcc-editable-region--

--fcc-editable-region--
```
