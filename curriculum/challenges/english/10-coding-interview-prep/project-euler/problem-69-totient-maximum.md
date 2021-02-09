---
id: 5900f3b11000cf542c50fec4
title: 'Problem 69: Totient maximum'
challengeType: 5
forumTopicId: 302181
dashedName: problem-69-totient-maximum
---

# --description--

Euler's Totient function, φ(`n`) \[sometimes called the phi function], is used to determine the number of numbers less than `n` which are relatively prime to `n`. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, φ(9)=6.

<div style='margin-left: 4em;'>

| <var>n</var> | Relatively Prime | φ(<var>n</var>) | <var>n</var>/φ(<var>n</var>) |
| ------------ | ---------------- | --------------- | ---------------------------- |
| 2            | 1                | 1               | 2                            |
| 3            | 1,2              | 2               | 1.5                          |
| 4            | 1,3              | 2               | 2                            |
| 5            | 1,2,3,4          | 4               | 1.25                         |
| 6            | 1,5              | 2               | 3                            |
| 7            | 1,2,3,4,5,6      | 6               | 1.1666...                    |
| 8            | 1,3,5,7          | 4               | 2                            |
| 9            | 1,2,4,5,7,8      | 6               | 1.5                          |
| 10           | 1,3,7,9          | 4               | 2.5                          |

</div>

It can be seen that `n`=6 produces a maximum `n`/φ(`n`) for `n` ≤ 10.

Find the value of `n` ≤ 1,000,000 for which n/φ(`n`) is a maximum.

# --hints--

`totientMaximum()` should return a number.

```js
assert(typeof totientMaximum() === 'number');
```

`totientMaximum()` should return 510510.

```js
assert.strictEqual(totientMaximum(), 510510);
```

# --seed--

## --seed-contents--

```js
function totientMaximum() {

  return true;
}

totientMaximum();
```

# --solutions--

```js
// solution required
```
