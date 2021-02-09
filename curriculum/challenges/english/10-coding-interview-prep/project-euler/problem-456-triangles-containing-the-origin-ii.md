---
id: 5900f5351000cf542c510047
title: 'Problem 456: Triangles containing the origin II'
challengeType: 5
forumTopicId: 302130
dashedName: problem-456-triangles-containing-the-origin-ii
---

# --description--

Define:xn = (1248n mod 32323) - 16161yn = (8421n mod 30103) - 15051

Pn = {(x1, y1), (x2, y2), ..., (xn, yn)}

For example, P8 = {(-14913, -6630), (-10161, 5625), (5226, 11896), (8340, -10778), (15852, -5203), (-15165, 11295), (-1427, -14495), (12407, 1060)}.

Let C(n) be the number of triangles whose vertices are in Pn which contain the origin in the interior.

Examples: C(8) = 20 C(600) = 8950634 C(40 000) = 2666610948988

Find C(2 000 000).

# --hints--

`euler456()` should return 333333208685971500.

```js
assert.strictEqual(euler456(), 333333208685971500);
```

# --seed--

## --seed-contents--

```js
function euler456() {

  return true;
}

euler456();
```

# --solutions--

```js
// solution required
```
