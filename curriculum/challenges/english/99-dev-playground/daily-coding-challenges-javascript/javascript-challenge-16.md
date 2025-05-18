---
id: 6821ebda237de8297eaee792
title: "JavaScript Challenge 16: Reverse Parenthesis"
challengeType: 28
dashedName: javascript-challenge-16
---

# --description--

Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

- All characters inside each pair of parentheses should be reversed.
- Parentheses should be removed from the final result.
- If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
- Assume all parentheses are evenly balanced and correctly nested.

# --hints--

`decode("(f(b(dc)e)a)")` should return `abcdef`.

```js
assert.equal(decode("(f(b(dc)e)a)"), "abcdef");
```

`decode("((is?)(a(t d)h)e(n y( uo)r)aC)")` should return `Can you read this?`.

```js
assert.equal(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"), "Can you read this?");
```

`decode("f(Ce(re))o((e(aC)m)d)p")` should return `freeCodeCamp`.

```js
assert.equal(decode("f(Ce(re))o((e(aC)m)d)p"), "freeCodeCamp");
```

# --seed--

## --seed-contents--

```js
function decode(s) {

  return s;
}
```

# --solutions--

```js
function decode(s) {
  while (s.includes(')')) {
    const closeIndex = s.indexOf(')');
    const openIndex = s.lastIndexOf('(', closeIndex);
    const before = s.slice(0, openIndex);
    const group = s.slice(openIndex + 1, closeIndex).split('').reverse().join('');
    const after = s.slice(closeIndex + 1);
    s = before + group + after;
  }

  return s;
}
```
