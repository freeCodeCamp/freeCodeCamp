---
id: 5900f5261000cf542c510038
title: 'Problema 441: A soma inversa de pares de coprimos'
challengeType: 1
forumTopicId: 302113
dashedName: problem-441-the-inverse-summation-of-coprime-couples
---

# --description--

Para um número inteiro $M$, definimos $R(M)$ como a soma de $\frac{1}{p·q}$ para todos os pares de números inteiros $p$ e $q$ que satisfazem todas essas condições:

- $1 ≤ p &lt; q ≤ M$
- $p + q ≥ M$
- $p$ e $q$ são números coprimos.

Também definimos $S(N)$ como a soma de $R(i)$ para $2 ≤ i ≤ N$.

Podemos verificar que $S(2) = R(2) = \frac{1}{2}$, $S(10) ≈ 6,9147$ e $S(100) ≈ 58,2962$.

Encontre $S({10}^7)$. Dê sua resposta arredondada para quatro casas decimais.

# --hints--

`inverseSummationCoprimeCouples()` deve retornar `5000088.8395`.

```js
assert.strictEqual(inverseSummationCoprimeCouples(), 5000088.8395);
```

# --seed--

## --seed-contents--

```js
function inverseSummationCoprimeCouples() {

  return true;
}

inverseSummationCoprimeCouples();
```

# --solutions--

```js
// solution required
```
