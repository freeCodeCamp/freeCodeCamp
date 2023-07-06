---
id: 5900f4ed1000cf542c50ffff
title: 'Problema 383: Comparação de divisibilidade entre fatoriais'
challengeType: 1
forumTopicId: 302047
dashedName: problem-383-divisibility-comparison-between-factorials
---

# --description--

Considere $f_5(n)$ como o maior número inteiro $x$ para o qual $5^x$ divide $n$.

Por exemplo, $f_5(625.000) = 7$.

Considere $T_5(n)$ como a quantidade de números inteiros $i$ que satisfazem $f_5((2 \times i - 1)!) &lt; 2 \times f_5(i!)$ e $1 ≤ i ≤ n$.

Pode-se verificar que $T_5({10}^3) = 68$ e que $T_5({10}^9) = 2.408.210$.

Encontre $T_5({10}^{18})$.

# --hints--

`factorialDivisibilityComparison()` deve retornar `22173624649806`.

```js
assert.strictEqual(factorialDivisibilityComparison(), 22173624649806);
```

# --seed--

## --seed-contents--

```js
function factorialDivisibilityComparison() {

  return true;
}

factorialDivisibilityComparison();
```

# --solutions--

```js
// solution required
```
