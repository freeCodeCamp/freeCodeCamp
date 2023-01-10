---
id: 5900f3911000cf542c50fea4
title: 'Problema 37: numeri primi troncabili'
challengeType: 1
forumTopicId: 302031
dashedName: problem-37-truncatable-primes
---

# --description--

Il numero 3797 ha una proprietà interessante. Essendo esso stesso un numero primo, è possibile rimuovere continuosamente cifre da sinistra a destra, e rimane primo ad ogni stadio: 3797, 797, 97, e 7. Allo stesso modo possiamo farlo da destra a sinistra: 3797, 379, 37, e 3.

Trova la somma dei soli `n` (8 ≤ `n` ≤ 11) numeri primi che sono troncabili sia da sinistra a destra che da destra a sinistra.

Nota: 2, 3, 5, e 7 non sono considerati numeri primi troncabili.

# --hints--

`truncatablePrimes(8)` dovrebbe restituire un numero.

```js
assert(typeof truncatablePrimes(8) === 'number');
```

`truncatablePrimes(8)` dovrebbe restituire 1986.

```js
assert(truncatablePrimes(8) == 1986);
```

`truncatablePrimes(9)` dovrebbe restituire 5123.

```js
assert(truncatablePrimes(9) == 5123);
```

`truncatablePrimes(10)` dovrebbe restituire 8920.

```js
assert(truncatablePrimes(10) == 8920);
```

`truncatablePrimes(11)` dovrebbe restituire 748317.

```js
assert(truncatablePrimes(11) == 748317);
```

# --seed--

## --seed-contents--

```js
function truncatablePrimes(n) {

  return n;
}

truncatablePrimes(11);
```

# --solutions--

```js
// solution required
```
