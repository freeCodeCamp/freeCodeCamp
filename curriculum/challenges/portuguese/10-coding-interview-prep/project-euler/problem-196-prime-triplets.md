---
id: 5900f4301000cf542c50ff42
title: 'Problema 196: Trios de números primos'
challengeType: 1
forumTopicId: 301834
dashedName: problem-196-prime-triplets
---

# --description--

Construa um triângulo com todos os números inteiros positivos da seguinte maneira:

$$\begin{array}{rrr}   &  1 \\\\
  &  \color{red}{2} &  \color{red}{3} \\\\   &  4 & \color{red}{5} &  6 \\\\
  &  \color{red}{7} &  8 &  9 & 10 \\\\   & \color{red}{11} & 12 & \color{red}{13} & 14 & 15  \\\\
  & 16 & \color{red}{17} & 18 & \color{red}{19} & 20 & 21 \\\\   & 22 & \color{red}{23} & 24 & 25 & 26 & 27 & 28 \\\\
  & \color{red}{29} & 30 & \color{red}{31} & 32 & 33 & 34 & 35 & 36 \\\\   & \color{red}{37} & 38 & 39 & 40 & \color{red}{41} & 42 & \color{red}{43} & 44 & 45 \\\\
  & 46 & \color{red}{47} & 48 & 49 & 50 & 51 & 52 & \color{red}{53} & 54 & 55 \\\\   & 56 & 57 & 58 & \color{red}{59} & 60 & \color{red}{61} & 62 & 63 & 64 & 65 & 66 \\\\
  & \cdots \end{array}$$

Cada número inteiro positivo tem até oito vizinhos no triângulo.

Um conjunto de três números primos é chamado de trio de números primos se um dos três primos tiver outros dois números primos como vizinhos do triângulo.

Por exemplo, na segunda linha, os números primos 2 e 3 são elementos de um trio de números primos.

Se considerarmos a linha 8, ela contém dois primos, que são elementos de algum trio de números primos, 29 e 31. Se considerarmos a linha 9, ela contém apenas um número primo que é elemento de um trio de números primos: 37.

Defina $S(n)$ como a soma de números primos em uma linha $n$ que são elementos de qualquer trio de números primos. Então, $S(8) = 60$ e $S(9) = 37$.

Você é informado de que $S(10000) = 950007619$.

Encontre $S(5678027) + S(7208785)$.

# --hints--

`primeTriplets()` deve retornar `322303240771079940`.

```js
assert.strictEqual(primeTriplets(), 322303240771079940);
```

# --seed--

## --seed-contents--

```js
function primeTriplets() {

  return true;
}

primeTriplets();
```

# --solutions--

```js
// solution required
```
