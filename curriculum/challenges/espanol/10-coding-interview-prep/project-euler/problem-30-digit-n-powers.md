---
id: 5900f38a1000cf542c50fe9d
title: 'Problema 30: Dígitos de n potencias'
challengeType: 1
forumTopicId: 301953
dashedName: problem-30-digit-n-powers
---

# --description--

Sorprendentemente, solo hay tres números que se pueden escribir como la suma de las cuartas potencias de sus dígitos:

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

Como 1 = 1<sup>4</sup> no es una suma que no esté incluida.

La suma de estos números es 1634 + 8208 + 9474 = 19316.

Encuentre la suma de todos los números que se pueden escribir como la suma de `n` potencias de sus dígitos.

# --hints--

`digitnPowers(2)` debe devolver un número.

```js
assert(typeof digitnPowers(2) === 'number');
```

`digitnPowers(2)` debe devolver 0.

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)` debe devolver 1301.

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)` debe devolver 19316.

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)` debe devolver 443839.

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
