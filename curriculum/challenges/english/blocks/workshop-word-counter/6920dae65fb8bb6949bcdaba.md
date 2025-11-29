---
id: 6920dae65fb8bb6949bcdaba
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

You have finished implementing the `printCharacters` function.

To see how the loop inside `printCharacters` behaves, call it with the argument `"hello"`.

# --hints--

You should call the function `printCharacters` with `"hello"` as its argument.

```js
assert.match(code, /printCharacters\s*\(\s*('|"|`)hello\1\s*\)/);
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
