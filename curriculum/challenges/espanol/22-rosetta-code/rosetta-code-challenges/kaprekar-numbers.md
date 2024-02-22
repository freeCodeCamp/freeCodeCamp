---
id: 5a23c84252665b21eecc7eca
title: Números Kaprekar
challengeType: 1
forumTopicId: 302296
dashedName: kaprekar-numbers
---

# --description--

A positive integer is a Kaprekar number if:

<ul>
  <li>It is 1, or,</li>
  <li>The decimal representation of its square may be split once into two parts consisting of positive integers which sum to the original number. </li>
</ul>

Tenga en cuenta que una división que resulta en una parte que consiste exclusivamente en 0s no es válida, ya que 0 no se considera positiva.

Ejemplo Kaprekar números:

<ul>
  <li><code>2223</code> is a Kaprekar number, as <code>2223 * 2223 = 4941729</code>, <code>4941729</code> may be split to <code>494</code> and <code>1729</code>, and <code>494 + 1729 = 2223</code></li>
  <li>La serie de números Kaprekar se conoce como A006886, y comienza como <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

Escribe una función que tome un número $n$, una base $bs$, y retorna verdadero si el número es un número Kaprekar para la base dada. De lo contrario, la función devolverá falsa.

# --hints--

`isKaprekar` debe ser una función.

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` debe devolver un boolean.

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)` debería devolver `verdadero`.

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` debería retornar `verdadero`.

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` debería devolver `verdadero`.

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` debe devolver `falso`.

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` debe devolver `false`.

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` debería devolver `verdadero`.

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` debe devolver `false`.

```js
assert.equal(isKaprekar(999, 17), false);
```

# --seed--

## --seed-contents--

```js
function isKaprekar(n, bs) {

}
```

# --solutions--

```js
function isKaprekar(n, bs) {
  if (n < 1) return false;
  if (n == 1) return true;
  for (var a = n * n, b = 0, s = 1; a; s *= bs) {
    b += (a % bs) * s;
    a = Math.floor(a / bs);
    if (b && a + b == n) return true;
  }
  return false;
}
```
