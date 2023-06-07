---
id: 5900f4e11000cf542c50fff3
title: 'Problema 372: Raggi di matite'
challengeType: 1
forumTopicId: 302034
dashedName: problem-372-pencils-of-rays
---

# --description--

Sia $R(M, N)$ il numero di punti di reticolo ($x$, $y$) che soddisfa $M \lt x \le N$, $M \lt y \le N$ e $\left\lfloor\frac{y^2}{x^2}\right\rfloor$ è dispari.

Possiamo verificare che $R(0, 100) = 3\\,019$ e $R(100, 10\\,000) = 29\\,750\\,422$.

Trova $R(2 \times {10}^6, {10}^9)$.

**Nota:** $\lfloor x\rfloor$ è la funzione che arrotonda verso il basso.

# --hints--

`pencilsOfRays()` dovrebbe restituire `301450082318807040`.

```js
assert.strictEqual(pencilsOfRays(), 301450082318807040);
```

# --seed--

## --seed-contents--

```js
function pencilsOfRays() {

  return true;
}

pencilsOfRays();
```

# --solutions--

```js
// solution required
```
