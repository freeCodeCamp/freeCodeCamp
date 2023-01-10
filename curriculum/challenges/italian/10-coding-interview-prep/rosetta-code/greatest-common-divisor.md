---
id: 5a23c84252665b21eecc7e82
title: Massimo comun divisore
challengeType: 1
forumTopicId: 302277
dashedName: greatest-common-divisor
---

# --description--

Scrivi una funzione che restituire il massimo comun divisore di due numeri interi.

# --hints--

`gcd` dovrebbe essere una funzione.

```js
assert(typeof gcd == 'function');
```

`gcd(24,36)` dovrebbe restituire un numero.

```js
assert(typeof gcd(24, 36) == 'number');
```

`gcd(24,36)` dovrebbe restituire `12`.

```js
assert.equal(gcd(24, 36), 12);
```

`gcd(30,48)` dovrebbe restituire `6`.

```js
assert.equal(gcd(30, 48), 6);
```

`gcd(10,15)` dovrebbe restituire `5`.

```js
assert.equal(gcd(10, 15), 5);
```

`gcd(100,25)` dovrebbe restituire `25`.

```js
assert.equal(gcd(100, 25), 25);
```

`gcd(13,250)` dovrebbe restituire `1`.

```js
assert.equal(gcd(13, 250), 1);
```

`gcd(1300,250)` dovrebbe restituire `50`.

```js
assert.equal(gcd(1300, 250), 50);
```

# --seed--

## --seed-contents--

```js
function gcd(a, b) {

}
```

# --solutions--

```js
function gcd(a, b) {
  return b==0 ? Math.abs(a):gcd(b, a % b);
}
```
