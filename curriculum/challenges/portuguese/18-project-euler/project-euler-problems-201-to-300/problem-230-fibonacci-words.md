---
id: 5900f4531000cf542c50ff65
title: 'Problema 230: Palavras de Fibonacci'
challengeType: 1
forumTopicId: 301874
dashedName: problem-230-fibonacci-words
---

# --description--

Para duas strings de algarismos quaisquer, $A$ e $B$, definimos $F_{A,B}$ como a sequência ($A, B, AB, BAB, ABBAB, \ldots$) na qual cada termo é a concatenação dos dois anteriores.

Além disso, definimos $D_{A,B}(n)$ como o $n^{\text{o}}$ algarismo do primeiro termo de $F_{A,B}$ que contém, pelo menos, $n$ algarismos.

Exemplo:

Considere $A = 1.415.926.535$, $B = 8.979.323.846$. Queremos encontrar, digamos, $D_{A,B}(35)$.

Os primeiros termos de $F_{A,B}$ são:

$$\begin{align}   & 1.415.926\\,535 \\\\
  & 8.979.323.846 \\\\   & 14.159.265.358.979.323.846 \\\\
  & 897.932.384.614.159.265.358.979.323.846 \\\\ & 14.159.265.358.979.323.846.897.932.384.614.15\color{red}{9}.265.358.979.323.846 \end{align}$$

Então, $D_{A,B}(35)$ é o ${35}^{\text{o}}$ algarismo no quinto termo, que é 9.

Agora, usamos para $A$ os primeiros 100 algarismos de $π$ antes do ponto decimal:

$$\begin{align}   & 14.159.265.358.979.323.846.264.338.327.950.288.419.716.939.937.510 \\\\
  & 58.209.749.445.923.078.164.062.862.089.986.280.348.253.421.170.679 \end{align}$$

e para $B$ os próximos cem algarismos:

$$\begin{align}   & 82.148.086.513.282.306.647.093.844.609.550.582.231.725.359.408.128 \\\\
  & 48.111.745.028.410.270.193.852.110.555.964.462.294.895.493.038.196 \end{align}$$

Encontre $\sum_{n = 0, 1, \ldots, 17} {10}^n × D_{A,B}((127 + 19n) × 7^n)$.

# --hints--

`fibonacciWords()` deve retornar `850481152593119200`.

```js
assert.strictEqual(fibonacciWords(), 850481152593119200);
```

# --seed--

## --seed-contents--

```js
function fibonacciWords() {

  return true;
}

fibonacciWords();
```

# --solutions--

```js
// solution required
```
