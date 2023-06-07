---
id: 5900f5471000cf542c510059
title: 'Problema 474: Últimos algarismos dos divisores'
challengeType: 1
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

Para um número inteiro positivo $n$ e algarismos $d$, definimos $F(n, d)$ como o número de divisores de $n$ cujos últimos algarismos são iguais a $d$.

Por exemplo, $F(84, 4) = 3$. Entre os divisores de 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84), três deles (4, 14, 84) têm o último algarismo 4.

Também podemos verificar que $F(12!, 12) = 11$ e $F(50!, 123) = 17.888$.

Encontre $F({10}^6!, 65\\,432) \text{ modulo } ({10}^{16} + 61)$.

# --hints--

`lastDigitsOfDivisors()` deve retornar `9690646731515010`.

```js
assert.strictEqual(lastDigitsOfDivisors(), 9690646731515010);
```

# --seed--

## --seed-contents--

```js
function lastDigitsOfDivisors() {

  return true;
}

lastDigitsOfDivisors();
```

# --solutions--

```js
// solution required
```
