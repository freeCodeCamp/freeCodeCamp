---
id: 5900f4fa1000cf542c51000d
title: 'Problema 398: tagliare la corda'
challengeType: 1
forumTopicId: 302063
dashedName: problem-398-cutting-rope
---

# --description--

Dentro una corda di lunghezza $n$, sono piazzati $n - 1$ punti con distanza 1 gli uni dagli altri e dai terminali. Tra questi punti, scegliamo casualmente $m - 1$ punti e tagliamo la corda a questi punti per creare $m$ segmenti.

Sia $E(n, m)$ il valore di aspettativa della lunghezza del secondo segmento più corto. Per esempio, $E(3, 2) = 2$ e $E(8, 3) = \frac{16}{7}$. Nota che se più di un segmento ha la stessa lunghezza più corta, la lunghezza del secondo segmento più corto è definita come la stessa del segmento più corto.

Trova $E({10}^7, 100)$. Dai la tua cifra arrotondata a cinque cifre decimali dopo la virgola.

# --hints--

`cuttingRope()` dovrebbe restituire `2010.59096`.

```js
assert.strictEqual(cuttingRope(), 2010.59096);
```

# --seed--

## --seed-contents--

```js
function cuttingRope() {

  return true;
}

cuttingRope();
```

# --solutions--

```js
// solution required
```
