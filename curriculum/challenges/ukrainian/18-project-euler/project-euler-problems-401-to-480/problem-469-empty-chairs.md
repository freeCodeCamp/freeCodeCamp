---
id: 5900f5411000cf542c510053
title: 'Problem 469: Empty chairs'
challengeType: 1
forumTopicId: 302144
dashedName: problem-469-empty-chairs
---

# --description--

In a room $N$ chairs are placed around a round table.

Knights enter the room one by one and choose at random an available empty chair.

To have enough elbow room the knights always leave at least one empty chair between each other.

When there aren't any suitable chairs left, the fraction $C$ of empty chairs is determined. We also define $E(N)$ as the expected value of $C$.

We can verify that $E(4) = \frac{1}{2}$ and $E(6) = \frac{5}{9}$.

Знайдіть $E({10}^{18})$. Дайте відповідь, заокруглену до чотирнадцяти знаків після коми у форматі 0.abcdefghijklmn.

# --hints--

`emptyChairs()` має повернути `0.56766764161831`.

```js
assert.strictEqual(emptyChairs(), 0.56766764161831);
```

# --seed--

## --seed-contents--

```js
function emptyChairs() {

  return true;
}

emptyChairs();
```

# --solutions--

```js
// solution required
```
