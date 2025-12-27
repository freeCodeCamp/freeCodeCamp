---
id: 6920dae65fb8bb6949bcdaba
title: Step 4
challengeType: 1
dashedName: step-4
---

# --description--

To see how the loop inside `printCharacters` behaves, call it with the argument `"hello"`.

# --hints--

You should call the function `printCharacters` with `"hello"` as its argument.

```js
const codeWithoutJSComments = __helpers.removeJSComments(code);
const normalizedCode = __helpers.removeWhiteSpace(codeWithoutJSComments);
assert.match(normalizedCode, /printCharacters\(('|"|`)hello\1\)/);
```

# --seed--

## --seed-contents--

```js
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
--fcc-editable-region--

--fcc-editable-region--
```
