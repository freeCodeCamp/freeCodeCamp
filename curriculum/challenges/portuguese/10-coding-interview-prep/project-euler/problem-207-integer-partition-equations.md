---
id: 5900f43c1000cf542c50ff4e
title: 'Problema 207: Equações de partições inteiras'
challengeType: 1
forumTopicId: 301848
dashedName: problem-207-integer-partition-equations
---

# --description--

Para alguns números inteiros positivos $k$, existe uma partição inteira de forma $4^t = 2^t + k$,

onde $4^t$, $2^t$ e $k$ são todos números inteiros positivos e $t$ é um número real.

As duas primeiras partições desse tipo são $4^1 = 2^1 + 2$ e $4^{1.584\\,962\\,5\ldots} = 2^{1.584\\,962\\,5\ldots} + 6$.

As partições onde $t$ é também um número inteiro são chamadas de perfeitas. Para qualquer $m ≥ 1$, considere $P(m)$ como sendo a proporção de tais partições que são perfeitas com $k ≤ m$.

Assim, $P(6) = \frac{1}{2}$.

Na tabela a seguir estão listados alguns valores de $P(m)$

$$\begin{align}   & P(5) = \frac{1}{1}    \\\\
  & P(10) = \frac{1}{2}   \\\\   & P(15) = \frac{2}{3}   \\\\
  & P(20) = \frac{1}{2}   \\\\   & P(25) = \frac{1}{2}   \\\\
  & P(30) = \frac{2}{5}   \\\\   & \ldots                \\\\
  & P(180) = \frac{1}{4}  \\\\ & P(185) = \frac{3}{13} \end{align}$$

Encontre o menor $m$ para o qual $P(m) &lt; \frac{1}{12.345}$

# --hints--

`integerPartitionEquations()` deve retornar `44043947822`.

```js
assert.strictEqual(integerPartitionEquations(), 44043947822);
```

# --seed--

## --seed-contents--

```js
function integerPartitionEquations() {

  return true;
}

integerPartitionEquations();
```

# --solutions--

```js
// solution required
```
