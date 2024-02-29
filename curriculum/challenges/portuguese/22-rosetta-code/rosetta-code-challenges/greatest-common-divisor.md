---
id: 5a23c84252665b21eecc7e82
title: Máximo divisor comum
challengeType: 1
forumTopicId: 302277
dashedName: greatest-common-divisor
---

# --description--

Escreva uma função que retorne o máximo divisor comum de dois inteiros.

# --hints--

`gcd` deve ser uma função.

```js
assert(typeof gcd == 'function');
```

`gcd(24,36)` deve retornar um número.

```js
assert(typeof gcd(24, 36) == 'number');
```

`gcd(24,36)` deve retornar `12`.

```js
assert.equal(gcd(24, 36), 12);
```

`gcd(30,48)` deve retornar `6`.

```js
assert.equal(gcd(30, 48), 6);
```

`gcd(10,15)` deve retornar `5`.

```js
assert.equal(gcd(10, 15), 5);
```

`gcd(100,25)` deve retornar `25`.

```js
assert.equal(gcd(100, 25), 25);
```

`gcd(13,250)` deve retornar `1`.

```js
assert.equal(gcd(13, 250), 1);
```

`gcd(1300,250)` deve retornar `50`.

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
