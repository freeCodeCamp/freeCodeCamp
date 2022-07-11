---
id: 5900f4c41000cf542c50ffd6
title: 'Problema 343: Sequências fracionárias'
challengeType: 1
forumTopicId: 302002
dashedName: problem-343-fractional-sequences
---

# --description--

Para qualquer número inteiro positivo $k$, uma sequência finita $a_i$ de frações $\frac{x_i}{y_i}$ é definida por:

- $a_1 = \displaystyle\frac{1}{k}$ e
- $a_i = \displaystyle\frac{(x_{i - 1} + 1)}{(y_{i - 1} - 1)}$ reduzida aos menores termos para $i > 1$.

Quando $a_i$ alcança um número inteiro $n$, a sequência para. (Ou seja, quando $y_i = 1$.)

Defina $f(k) = n$.

Por exemplo, para $k = 20$:

$$\frac{1}{20} → \frac{2}{19} → \frac{3}{18} = \frac{1}{6} → \frac{2}{5} → \frac{3}{4} → \frac{4}{3} → \frac{5}{2} → \frac{6}{1} = 6$$

Então, $f(20) = 6$.

Além disso $f(1) = 1$, $f(2) = 2$, $f(3) = 1$ e $\sum f(k^3) = 118.937$ for $1 ≤ k ≤ 100$.

Encontre $\sum f(k^3)$ para $1 ≤ k ≤ 2 × {10}^6$.

# --hints--

`fractionalSequences()` deve retornar `269533451410884200`.

```js
assert.strictEqual(fractionalSequences(), 269533451410884200);
```

# --seed--

## --seed-contents--

```js
function fractionalSequences() {

  return true;
}

fractionalSequences();
```

# --solutions--

```js
// solution required
```
