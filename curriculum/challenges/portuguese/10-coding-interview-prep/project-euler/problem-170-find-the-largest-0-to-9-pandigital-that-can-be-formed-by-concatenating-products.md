---
id: 5900f4161000cf542c50ff29
title: >-
  Problema 170: Encontrar o maior pandigital de 0 a 9 que pode ser formado concatenando produtos
challengeType: 1
forumTopicId: 301805
dashedName: >-
  problem-170-find-the-largest-0-to-9-pandigital-that-can-be-formed-by-concatenating-products
---

# --description--

Pegue o número 6 e multiplique-o por 1273 e 9854:

$$\begin{align}   & 6 × 1273 = 7638 \\\\
  & 6 × 9854 = 59124 \\\\ \end{align}$$

Ao concatenar esses produtos, temos o pandigital de 1 a 9 763859124. Chamaremos 763859124 de "produto concatenado de 6 e (1273, 9854)". Observe, também, que a concatenação dos números de entrada, 612739854, também é um pandigital de 1 a 9.

O mesmo pode ser feito com os números pandigitais de 0 e 9.

Qual é o maior pandigital de 0 a 9 que é, ao mesmo tempo, o produto concatenado de um número inteiro com dois ou mais números inteiros diversos, de modo que a concatenação dos números de entrada seja também um número pandigital de 0 a 9 com 10 algarismos?

# --hints--

`largestPandigital()` deve retornar `9857164023`.

```js
assert.strictEqual(largestPandigital(), 9857164023);
```

# --seed--

## --seed-contents--

```js
function largestPandigital() {

  return true;
}

largestPandigital();
```

# --solutions--

```js
// solution required
```
