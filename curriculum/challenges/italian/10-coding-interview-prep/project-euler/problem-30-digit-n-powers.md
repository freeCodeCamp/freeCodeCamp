---
id: 5900f38a1000cf542c50fe9d
title: 'Problema 30: Potenze delle cifre'
challengeType: 1
forumTopicId: 301953
dashedName: problem-30-digit-n-powers
---

# --description--

Sorprendentemente ci sono solo tre numeri che possono essere scritti come la somma delle quarte potenze delle loro cifre:

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

Dato che 1 = 1<sup>4</sup> non è una somma, esso non è incluso.

La somma di questi numeri è 1634 + 8208 + 9474 = 19316.

Trova la somma di tutti i numeri che possono essere scritti come la somma di `n` potenze delle loro cifre.

# --hints--

`digitnPowers(2)` dovrebbe restituire un numero.

```js
assert(typeof digitnPowers(2) === 'number');
```

`digitnPowers(2)` dovrebbe restituire 0.

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)` dovrebbe restituire 1301.

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)` dovrebbe restituire 19316.

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)` dovrebbe restituire 443839.

```js
assert(digitnPowers(5) == 443839);
```

# --seed--

## --seed-contents--

```js
function digitnPowers(n) {

  return n;
}

digitnPowers(5);
```

# --solutions--

```js
// solution required
```
