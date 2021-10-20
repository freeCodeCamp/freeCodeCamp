---
id: 5900f4021000cf542c50ff14
title: 'Problem 148: Exploring Pascal''s triangle'
challengeType: 5
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

We can easily verify that none of the entries in the first seven rows of Pascal's triangle are divisible by 7:

<pre>
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
</pre>

However, if we check the first one hundred rows, we will find that only 2361 of the 5050 entries are not divisible by 7.

# --instructions--

Find the number of entries which are not divisible by 7 in the first one billion (10<sup>9</sup>) rows of Pascal's triangle.

# --hints--

`euler148()` should return 2129970655314432.

```js
assert.strictEqual(euler148(), 2129970655314432);
```

# --seed--

## --seed-contents--

```js
function euler148() {

  return true;
}

euler148();
```

# --solutions--

```js
// solution required
```
