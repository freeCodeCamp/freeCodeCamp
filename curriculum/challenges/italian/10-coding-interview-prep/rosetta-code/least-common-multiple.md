---
id: 5a23c84252665b21eecc7edf
title: Minimo comune multiplo
challengeType: 5
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

Il minimo comune multiplo di 12 e 18 è 36, perché 12 è un fattore (12 × 3 = 36), e 18 è un fattore (18 × 2 = 36), e non c'è un numero intero positivo inferiore a 36 che abbia entrambi i fattori. Come caso speciale, se *m* o *n* è zero, allora il minimo comune multiplo è zero. Un modo per calcolare il minimo comune multiplo è quello di iterare tutti i multipli di *m*, fino a trovarne uno che è anche un multiplo di *n*. Se hai già *MCD* per [il massimo comun divisore](https://rosettacode.org/wiki/greatest common divisor), questa formula calcola *mcm*. ( \\operatorname{mcm}(m, n) = \\frac{| m \\times n|}{\\operatorname{MCD}(m, n)} )

# --instructions--

Calcola il mcm di un array di interi. Dati *m* e *n*, il mcm è il più piccolo intero positivo che ha sia *m* che *n* come fattori.

# --hints--

`LCM` dovrebbe essere una funzione.

```js
assert(typeof LCM == 'function');
```

`LCM([2, 4, 8])` dovrebbe restituire un numero.

```js
assert(typeof LCM([2, 4, 8]) == 'number');
```

`LCM([2, 4, 8])` dovrebbe restituire `8`.

```js
assert.equal(LCM([2, 4, 8]), 8);
```

`LCM([4, 8, 12])` dovrebbe restituire `24`.

```js
assert.equal(LCM([4, 8, 12]), 24);
```

`LCM([3, 4, 5, 12, 40])` dovrebbe restituire `120`.

```js
assert.equal(LCM([3, 4, 5, 12, 40]), 120);
```

`LCM([11, 33, 90])` dovrebbe restituire `990`.

```js
assert.equal(LCM([11, 33, 90]), 990);
```

`LCM([-50, 25, -45, -18, 90, 447])` dovrebbe restituire `67050`.

```js
assert.equal(LCM([-50, 25, -45, -18, 90, 447]), 67050);
```

# --seed--

## --seed-contents--

```js
function LCM(A) {

}
```

# --solutions--

```js
function LCM(A) {
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a = Math.abs(c * A[i]) / (a + b);
  }
  return a;
}
```
