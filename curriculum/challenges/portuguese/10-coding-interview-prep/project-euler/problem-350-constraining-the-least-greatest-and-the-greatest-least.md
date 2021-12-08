---
id: 5900f4cb1000cf542c50ffdd
title: 'Problema 350: Restringindo o menor máximo e o maior mínimo'
challengeType: 5
forumTopicId: 302010
dashedName: problem-350-constraining-the-least-greatest-and-the-greatest-least
---

# --description--

Uma lista de tamanho $n$ é uma sequência de $n$ números naturais. Os exemplos são (2, 4, 6), (2, 6, 4), (10, 6, 15, 6) e (11).

O maior divisor comum, ou $gcd$, de uma lista é o maior número natural que divide todas as entradas da lista. Exemplos: $gcd(2, 6, 4) = 2$, $gcd(10, 6, 15, 6) = 1$ e $gcd(11) = 11$.

O mínimo múltiplo comum, ou $lcm$, de uma lista é o menor número natural divisível por cada entradas da lista. Exemplos: $lcm(2, 6, 4) = 12$, $lcm(10, 6, 15, 6) = 30$ e $lcm(11) = 11$.

Considere $f(G, L, N)$ como o número de listas de tamanho $N$ com $gcd ≥ G$ e $lcm ≤ L$. Por exemplo:

$$\begin{align} & f(10, 100, 1) = 91 \\\\ & f(10, 100, 2) = 327 \\\\ & f(10, 100, 3) = 1135 \\\\ & f(10, 100, 1000)\bmod {101}^4 = 3.286.053 \end{align}$$

Encontre $f({10}^6, {10}^{12}, {10}^{18})\bmod {101}^4$.

# --hints--

`leastGreatestAndGreatestLeast()` deve retornar `84664213`.

```js
assert.strictEqual(leastGreatestAndGreatestLeast(), 84664213);
```

# --seed--

## --seed-contents--

```js
function leastGreatestAndGreatestLeast() {

  return true;
}

leastGreatestAndGreatestLeast();
```

# --solutions--

```js
// solution required
```
