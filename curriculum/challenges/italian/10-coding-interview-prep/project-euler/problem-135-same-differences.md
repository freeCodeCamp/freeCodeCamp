---
id: 5900f3f31000cf542c50ff06
title: 'Problema 135: Stesse differenze'
challengeType: 1
forumTopicId: 301763
dashedName: problem-135-same-differences
---

# --description--

Dati i numeri interi positivi, $x$, $y$ e $z$, che sono termini consecutivi di una progressione aritmetica, il valore minimo dell'intero positivo $n$ per il quale l'equazione $x^2 − y^2 − z^2 = n$ ha esattamente due soluzioni è $n = 27$:

$$34^2 − 27^2 − 20^2 = 12^2 − 9^2 − 6^2 = 27$$

Si scopre che $n = 1155$ è il valore minimo che ha esattamente dieci soluzioni.

Quanti valori di $n$ minori di un milione hanno esattamente dieci soluzioni distinte?

# --hints--

`sameDifferences()` dovrebbe restituire `4989`.

```js
assert.strictEqual(sameDifferences(), 4989);
```

# --seed--

## --seed-contents--

```js
function sameDifferences() {

  return true;
}

sameDifferences();
```

# --solutions--

```js
// solution required
```
