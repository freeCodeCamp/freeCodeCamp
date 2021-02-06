---
id: 5900f50a1000cf542c51001c
title: 'Problem 413: One-child Numbers'
challengeType: 5
forumTopicId: 302082
dashedName: problem-413-one-child-numbers
---

# --description--

We say that a d-digit positive number (no leading zeros) is a one-child number if exactly one of its sub-strings is divisible by d.

For example, 5671 is a 4-digit one-child number. Among all its sub-strings 5, 6, 7, 1, 56, 67, 71, 567, 671 and 5671, only 56 is divisible by 4. Similarly, 104 is a 3-digit one-child number because only 0 is divisible by 3. 1132451 is a 7-digit one-child number because only 245 is divisible by 7.

Let F(N) be the number of the one-child numbers less than N. We can verify that F(10) = 9, F(103) = 389 and F(107) = 277674.

Find F(1019).

# --hints--

`euler413()` should return 3079418648040719.

```js
assert.strictEqual(euler413(), 3079418648040719);
```

# --seed--

## --seed-contents--

```js
function euler413() {

  return true;
}

euler413();
```

# --solutions--

```js
// solution required
```
