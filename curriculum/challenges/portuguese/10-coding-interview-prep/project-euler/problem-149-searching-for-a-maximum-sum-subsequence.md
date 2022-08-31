---
id: 5900f4021000cf542c50ff13
title: 'Problema 149: Procura de uma subsequência de soma máxima'
challengeType: 1
forumTopicId: 301778
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

Olhando para a tabela abaixo, é fácil verificar se a soma máxima possível de números adjacentes em qualquer direção (horizontal, vertical, diagonal ou antidiagonal) é de $16 (= 8 + 7 + 1)$.

$$\begin{array}{|r|r|r|r|} \hline −2 &  5 &  3 & 2 \\\\ \hline 9 & −6 &  5 & 1 \\\\ \hline 3 &  2 &  7 & 3 \\\\ \hline −1 &  8 & −4 & 8 \\\\ \hline \end{array}$$

Agora, vamos repetir a busca, mas em uma escala muito maior:

Primeiro, gere quatro milhões de números pseudoaleatórios usando uma forma específica do que é conhecido como "Gerador Fibonacci com atraso":

Para $1 ≤ k ≤ 55$, $s_k = (100003 − 200003k + 300007{k}^3) \\ (modulo\\ 1000000) − 500000$.

Para $56 ≤ k ≤ 4000000$, $s_k = (s_{k − 24} + s_{k − 55} + 1000000) \\ (modulo\\ 1000000) − 500000$.

Portanto, $s_{10} = −393027$ e $s_{100} = 86613$.

Os termos de $s$ estão combinados em uma tabela de 2000×2000 usando os primeiros 2000 números para preencher a primeira linha (sequencialmente), os próximos 2000 números para preencher a segunda linha e assim por diante.

Por fim, encontre a maior soma de (qualquer número de) entradas adjacentes em qualquer direção (horizontal, vertical, diagonal ou antidiagonal).

# --hints--

`maximumSubSequence()` deve retornar `52852124`.

```js
assert.strictEqual(maximumSubSequence(), 52852124);
```

# --seed--

## --seed-contents--

```js
function maximumSubSequence() {

  return true;
}

maximumSubSequence();
```

# --solutions--

```js
// solution required
```
