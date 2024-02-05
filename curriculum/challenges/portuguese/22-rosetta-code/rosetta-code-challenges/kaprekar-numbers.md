---
id: 5a23c84252665b21eecc7eca
title: Números de Kaprekar
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

Note que uma divisão resultando em uma parte que consiste puramente em 0s não é válida, já que 0 não é considerado um número positivo.

Exemplo de números de Kaprekar:

<ul>
  <li><code>2223</code> is a Kaprekar number, as <code>2223 * 2223 = 4941729</code>, <code>4941729</code> may be split to <code>494</code> and <code>1729</code>, and <code>494 + 1729 = 2223</code></li>
  <li>A série de números de Kaprekar é conhecida como A006886 e começa com <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

Escreva uma função que receba um número $n$, uma base $bs$, e retorne true se o número for um número de Kaprekar para a base fornecida. Caso contrário, a função retornará false.

# --hints--

`isKaprekar` deve ser uma função.

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` deve retornar um booleano.

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)` deve retornar `true`.

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` deve retornar `true`.

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` deve retornar `true`.

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` deve retornar `false`.

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` deve retornar `false`.

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` deve retornar `true`.

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` deve retornar `false`.

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
