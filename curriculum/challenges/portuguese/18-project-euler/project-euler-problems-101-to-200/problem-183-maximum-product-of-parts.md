---
id: 5900f4231000cf542c50ff36
title: 'Problema 183: Produto máximo das partes'
challengeType: 1
forumTopicId: 301819
dashedName: problem-183-maximum-product-of-parts
---

# --description--

Considere $N$ um número inteiro positivo que pode ser dividido em $k$ partes iguais, $r = \frac{N}{k}$, de modo que $N = r + r + \cdots + r$.

Considere $P$ o produto dessas partes, $P = r × r × \cdots × r = r^k$.

Por exemplo, se 11 for dividido em cinco partes iguais, 11 = 2,2 + 2,2 + 2,2 + 2,2 + 2,2, então $P = {2.2}^5 = 51,53632$.

Considere $M(N) = P_{max}$ para um valor dado de $N$.

Acontece que o máximo para $N = 11$ é encontrado ao dividirmos onze em quatro partes iguais, o que leva a $P_{max} = {(\frac{11}{4})}^4$; ou seja, $M(11) = \frac{14641}{256} = 57.19140625$, que é um número decimal finito.

No entanto, para $N = 8$, o máximo é alcançado dividindo-o em três partes iguais, então $M(8) = \frac{512}{27}$, que é um decimal infinito.

Considere $D(N) = N$ se $M(N)$ for um decimal infinito e $D(N) = -N$ se $M(N)$ for um decimal finito.

Por exemplo, $\sum D(N)$ para $5 ≤ N ≤ 100$ é 2438.

Encontre $\sum D(N)$ para $5 ≤ N ≤ 10000$.

# --hints--

`maximumProductOfParts()` deve retornar `48861552`.

```js
assert.strictEqual(maximumProductOfParts(), 48861552);
```

# --seed--

## --seed-contents--

```js
function maximumProductOfParts() {

  return true;
}

maximumProductOfParts();
```

# --solutions--

```js
// solution required
```
