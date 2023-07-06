---
id: 5900f40e1000cf542c50ff21
title: 'Problem 162: Hexadecimal numbers'
challengeType: 1
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

In the hexadecimal number system numbers are represented using 16 different digits:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

The hexadecimal number AF when written in the decimal number system equals $10 \times 16 + 15 = 175$.

In the 3-digit hexadecimal numbers 10A, 1A0, A10, and A01 the digits 0,1 and A are all present.

Like numbers written in base ten we write hexadecimal numbers without leading zeroes.

How many hexadecimal numbers containing at most sixteen hexadecimal digits exist with all of the digits 0,1, and A present at least once?

Give your answer with hexadecimal number as a string.

**Note:** (A,B,C,D,E and F in upper case, without any leading or trailing code that marks the number as hexadecimal and without leading zeroes , e.g. 1A3F and not: 1a3f and not 0x1a3f and not $1A3F and not #1A3F and not 0000001A3F)

# --hints--

`hexadecimalNumbers()` should return a string.

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` should return the string `3D58725572C62302`.

```js
assert.strictEqual(hexadecimalNumbers(), '3D58725572C62302');
```

# --seed--

## --seed-contents--

```js
function hexadecimalNumbers() {

  return true;
}

hexadecimalNumbers();
```

# --solutions--

```js
// solution required
```
