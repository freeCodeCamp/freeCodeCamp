---
id: 5900f4491000cf542c50ff5c
title: 'Problem 221: Alexandrian Integers'
challengeType: 1
forumTopicId: 301864
dashedName: problem-221-alexandrian-integers
---

# --description--

We shall call a positive integer $A$ an "Alexandrian integer", if there exist integers $p$, $q$, $r$ such that:

$$A = p \times q \times r$$

and

$$\frac{1}{A} = \frac{1}{p} + \frac{1}{q} + \frac{1}{r}$$


For example, 630 is an Alexandrian integer ($p = 5$, $q = −7$, $r = −18$). In fact, 630 is the 6th Alexandrian integer, the first 6 Alexandrian integers being: 6, 42, 120, 156, 420 and 630.

Find the 150000th Alexandrian integer.

# --hints--

`alexandrianIntegers()` should return `1884161251122450`.

```js
assert.strictEqual(alexandrianIntegers(), 1884161251122450);
```

# --seed--

## --seed-contents--

```js
function alexandrianIntegers() {

  return true;
}

alexandrianIntegers();
```

# --solutions--

```js
// solution required
```
