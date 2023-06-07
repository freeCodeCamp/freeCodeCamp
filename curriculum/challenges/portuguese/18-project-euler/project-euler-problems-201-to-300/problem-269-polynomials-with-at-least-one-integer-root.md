---
id: 5900f4791000cf542c50ff8c
title: 'Problema 269: Polinômios com pelo menos uma raiz inteira'
challengeType: 1
forumTopicId: 301918
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

Uma raiz ou zero de um polinômio $P(x)$ é uma solução para a equação $P(x) = 0$.

Defina $P_n$ como o polinômio cujos coeficientes são os algarismos de $n$.

Por exemplo, $P_{5703}(x) = 5x^3 + 7x^2 + 3$.

Podemos ver que:

- $P_n(0)$ é o último algarismo de $n$,
- $P_n(1)$ é a soma dos algarismos de $n$,
- $Pn(10)$ é o próprio $n$.

Defina $Z(k)$ como a quantidade de números inteiros positivos, $n$, sem exceder $k$, para a qual o polinômio $P_n$ tem pelo menos uma raiz inteira.

Podemos verificar que $Z(100.000)$ é 14696.

Qual é a $Z({10}^{16})$?

# --hints--

`polynomialsWithOneIntegerRoot()` deve retornar `1311109198529286`.

```js
assert.strictEqual(polynomialsWithOneIntegerRoot(), 1311109198529286);
```

# --seed--

## --seed-contents--

```js
function polynomialsWithOneIntegerRoot() {

  return true;
}

polynomialsWithOneIntegerRoot();
```

# --solutions--

```js
// solution required
```
