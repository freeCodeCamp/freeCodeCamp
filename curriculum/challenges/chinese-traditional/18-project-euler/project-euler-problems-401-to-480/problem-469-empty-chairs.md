---
id: 5900f5411000cf542c510053
title: '問題469：空椅子'
challengeType: 1
forumTopicId: 302144
dashedName: problem-469-empty-chairs
---

# --description--

In a room $N$ chairs are placed around a round table.

騎士一個接一個地進入房間，隨意選擇一把可用的空椅子。

爲了擁有足夠的肘部空間，騎士總是在彼此之間留下至少一把空座椅。

When there aren't any suitable chairs left, the fraction $C$ of empty chairs is determined. We also define $E(N)$ as the expected value of $C$.

We can verify that $E(4) = \frac{1}{2}$ and $E(6) = \frac{5}{9}$.

Find $E({10}^{18})$. Give your answer rounded to fourteen decimal places in the form 0.abcdefghijklmn.

# --hints--

`emptyChairs()` should return `0.56766764161831`.

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
