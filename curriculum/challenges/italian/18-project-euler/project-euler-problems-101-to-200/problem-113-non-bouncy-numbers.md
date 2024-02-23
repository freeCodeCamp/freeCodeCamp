---
id: 5900f3dd1000cf542c50fef0
title: 'Problema 113: numeri non dinamici'
challengeType: 1
forumTopicId: 301739
dashedName: problem-113-non-bouncy-numbers
---

# --description--

Andando da sinistra a destra, se nessuna cifra viene superata dalla cifra alla sua sinistra, il numero viene detto crescente; ad esempio, 134468.

Allo stesso modo, se ogni cifra non viene superata dalla cifra alla sua destra il numero è detto decrescente; per esempio, 66420.

Chiameremo dinamico un numero intero positivo che non sia né crescente né decrescente; per esempio, 155349.

All'aumentare di n, la proporzione di numeri dinamici sotto n aumenta in modo che ci sono solo 12951 numeri sotto un milione che non sono dinamici e solo 277032 numeri non dinamici sotto ${10}^{10}$.

Quanti numeri sotto un googol (${10}^{100}$) non sono dinamici?

# --hints--

`nonBouncyNumbers()` dovrebbe restituire `51161058134250`.

```js
assert.strictEqual(nonBouncyNumbers(), 51161058134250);
```

# --seed--

## --seed-contents--

```js
function nonBouncyNumbers() {

  return true;
}

nonBouncyNumbers();
```

# --solutions--

```js
// solution required
```
