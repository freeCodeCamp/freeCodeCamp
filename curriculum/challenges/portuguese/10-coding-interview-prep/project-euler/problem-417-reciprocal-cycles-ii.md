---
id: 5900f50d1000cf542c51001f
title: 'Problema 417: Dízimas periódicas'
challengeType: 1
forumTopicId: 302086
dashedName: problem-417-reciprocal-cycles-ii
---

# --description--

Em uma fração unitária, o numerador é 1. A representação decimal das frações unitárias com denominadores de 2 a 10 é a seguinte:

$$\begin{align}   & \frac{1}{2}  = 0.5 \\\\
  & \frac{1}{3}  = 0.(3) \\\\   & \frac{1}{4}  = 0.25 \\\\
  & \frac{1}{5}  = 0.2 \\\\   & \frac{1}{6}  = 0.1(6) \\\\
  & \frac{1}{7}  = 0.(142857) \\\\   & \frac{1}{8}  = 0.125 \\\\
  & \frac{1}{9}  = 0.(1) \\\\   & \frac{1}{10} = 0.1 \\\\
\end{align}$$

A expressão $0.1(6)$ significa $0.16666666\dots$, e tem um ciclo recorrente de 1 algarismo. Pode ser visto que $\frac{1}{7}$ tem um ciclo recorrente de 6 algarismos.

Frações unitárias cujo denominador não tem outros fatores primos além de 2 e/ou 5 não são consideradas como tendo um ciclo recorrente. Definimos 0 como o comprimento do ciclo recorrente dessas frações unitárias.

Considere que $L(n)$ denota o comprimento do ciclo recorrente de $\frac{1}{n}$. Você recebe a informação de que $\sum L(n)$ por $3 ≤ n ≤ 1.000.000$ é igual a $55.535.191.115$.

Calcule $\sum L(n)$ por $3 ≤ n ≤ 100.000.000$.

# --hints--

`reciprocalCyclesTwo()` deve retornar `446572970925740`.

```js
assert.strictEqual(reciprocalCyclesTwo(), 446572970925740);
```

# --seed--

## --seed-contents--

```js
function reciprocalCyclesTwo() {

  return true;
}

reciprocalCyclesTwo();
```

# --solutions--

```js
// solution required
```
