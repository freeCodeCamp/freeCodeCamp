---
id: 5900f4c31000cf542c50ffd5
title: 'Problema 342: O totiente de um quadrado é um cubo'
challengeType: 1
forumTopicId: 302001
dashedName: problem-342-the-totient-of-a-square-is-a-cube
---

# --description--

Considere o número 50.

${50}^2 = 2500 = 2^2 × 5^4$, então $φ(2500) = 2 × 4 × 5^3 = 8 × 5^3 = 2^3 × 5^3$. $φ$ é a função totiente de Euler.

Portanto, 2500 é um quadrado e $φ(2500)$ é um cubo.

Encontre a soma de todos os números $n$, $1 &lt; n &lt; {10}^{10}$, tal que $φ(n^2)$ é um cubo.


# --hints--

`totientOfSquare()` deve retornar `5943040885644`.

```js
assert.strictEqual(totientOfSquare(), 5943040885644);
```

# --seed--

## --seed-contents--

```js
function totientOfSquare() {

  return true;
}

totientOfSquare();
```

# --solutions--

```js
// solution required
```
