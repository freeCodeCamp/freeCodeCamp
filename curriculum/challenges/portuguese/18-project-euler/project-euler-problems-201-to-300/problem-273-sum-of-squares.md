---
id: 5900f47e1000cf542c50ff90
title: 'Problema 273: Soma dos quadrados'
challengeType: 1
forumTopicId: 301923
dashedName: problem-273-sum-of-squares
---

# --description--

Considere as equações da forma: $a^2 + b^2 = N$, $0 ≤ a ≤ b$, sendo $a$, $b$ e $N$ números inteiros.

Para $N = 65$, existem duas soluções:

$a = 1, b = 8$ e $a = 4, b = 7$.

Chamamos de $S(N)$ a soma dos valores de $a$ de todas as soluções de $a^2 + b^2 = N$, $0 ≤ a ≤ b$, sendo $a$, $b$ e $N$ números inteiros.

Portanto, $S(65) = 1 + 4 = 5$.

Encontre $\sum S(N)$, para todos os $N$ sem quadrados, divisíveis apenas por números primos da forma $4k + 1$, com $4k + 1 &lt; 150$.

# --hints--

`sumOfSquares()` deve retornar `2032447591196869000`.

```js
assert.strictEqual(sumOfSquares(), 2032447591196869000);
```

# --seed--

## --seed-contents--

```js
function sumOfSquares() {

  return true;
}

sumOfSquares();
```

# --solutions--

```js
// solution required
```
