---
id: 5900f3901000cf542c50fea3
title: 'Problema 36: Palíndromos de base dupla'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

O número decimal, 585 = 1001001<sub>2</sub> (binário), é um palíndromo em ambas as bases.

Calcule a soma de todos os números, menores que `n`, onde 1000 ≤ `n` ≤ 1000000, que são palíndromos na base 10 e base 2.

(Note que um número palindrômico, em qualquer base, pode não começar com números zero.)

# --hints--

`doubleBasePalindromes(1000)` deve retornar um número.

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` deve retornar 1772.

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` deve retornar 105795.

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` deve retornar 286602.

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` deve retornar 872187.

```js
assert(doubleBasePalindromes(1000000) == 872187);
```

# --seed--

## --seed-contents--

```js
function doubleBasePalindromes(n) {

  return n;
}

doubleBasePalindromes(1000000);
```

# --solutions--

```js
// solution required
```
