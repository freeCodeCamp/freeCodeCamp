---
id: 5900f4d51000cf542c50ffe8
title: 'Problema 361: Subsequência da sequência de Thue-Morse'
challengeType: 1
forumTopicId: 302022
dashedName: problem-361-subsequence-of-thue-morse-sequence
---

# --description--

A sequência Thue-Morse $\\{T_n\\}$ é uma sequência binária satisfatória:

- $T_0 = 0$
- $T_{2n} = T_n$
- $T_{2n + 1} = 1 - T_n$

Os primeiros termos de $\\{T_n\\}$ são atribuídos da seguinte forma: $01101001\color{red}{10010}1101001011001101001\ldots$.

Definimos $\\{A_n\\}$ como uma sequência ordenada de inteiros, de forma que a expressão binária de cada elemento apareça como uma subsequência em $\\{T_n\\}$. Por exemplo, o número decimal 18 é expresso como 10010 em binário. 10010 aparece em $\\{T_n\\}$ ($T_8$ a $T_{12}$), portanto 18 é um elemento de $\\{A_n\\}$. O número decimal 14 é expresso como 1110 no binário. 1110 nunca aparece em $\\{T_n\\}$, portanto 14 não é um elemento de $\\{A_n\\}$.

Os primeiros termos de $A_n$ são atribuídos da seguinte forma:

$$\begin{array}{cr}   n   & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 &  8 &  9 & 10 & 11 & 12 & \ldots \\\\
  A_n & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 9 & 10 & 11 & 12 & 13 & 18 & \ldots \end{array}$$

Também podemos verificar que $A_{100} = 3251$ e $A_{1000} = 80.852.364.498$.

Encontre os últimos 9 algarismos de $\displaystyle\sum_{k = 1}^{18} A_{{10}^k}$.

# --hints--

`subsequenceOfThueMorseSequence()` deve retornar `178476944`.

```js
assert.strictEqual(subsequenceOfThueMorseSequence(), 178476944);
```

# --seed--

## --seed-contents--

```js
function subsequenceOfThueMorseSequence() {

  return true;
}

subsequenceOfThueMorseSequence();
```

# --solutions--

```js
// solution required
```
