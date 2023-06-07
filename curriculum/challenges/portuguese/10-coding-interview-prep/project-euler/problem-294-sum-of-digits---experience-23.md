---
id: 5900f4931000cf542c50ffa5
title: 'Problema 294: Soma dos algarismos - experiência nº 23'
challengeType: 1
forumTopicId: 301946
dashedName: problem-294-sum-of-digits---experience-23
---

# --description--

Para um número inteiro positivo $k$, defina $d(k)$ como a soma dos algarismos de $k$ em sua representação decimal normal. Portanto, $d(42) = 4 + 2 = 6$.

Para um número inteiro positivo $n$, defina $S(n)$ como a quantidade de número inteiros positivos $k &lt; {10}^n$ com as seguintes propriedades:

- $k$ é divisível por 23 e,
- $d(k) = 23$.

Você é informado de que $S(9) = 263.626$ e $S(42) = 6.377.168.878.570.056$.

Encontre $S({11}^{12})$ e dê sua resposta $\bmod {10}^9$.

# --hints--

`experience23()` deve retornar `789184709`.

```js
assert.strictEqual(experience23(), 789184709);
```

# --seed--

## --seed-contents--

```js
function experience23() {

  return true;
}

experience23();
```

# --solutions--

```js
// solution required
```
