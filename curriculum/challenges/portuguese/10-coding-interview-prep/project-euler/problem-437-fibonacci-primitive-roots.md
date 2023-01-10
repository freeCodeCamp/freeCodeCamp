---
id: 5900f5241000cf542c510036
title: 'Problema 437: Raízes primitivas de Fibonacci'
challengeType: 1
forumTopicId: 302108
dashedName: problem-437-fibonacci-primitive-roots
---

# --description--

Quando calculamos $8^n$ modulo 11 para $n = 0$ a 9, obtemos: 1, 8, 9, 6, 4, 10, 3, 2, 5, 7.

Como vemos todos os valores possíveis, de 1 a 10, ocorrem. Portanto, 8 é uma raiz primitiva de 11.

Mas há mais:

Se olharmos mais de perto:

$$\begin{align}   & 1 + 8 = 9 \\\\
  & 8 + 9 = 17 ≡ 6\bmod 11 \\\\   & 9 + 6 = 15 ≡ 4\bmod 11 \\\\
  & 6 + 4 = 10 \\\\   & 4 + 10 = 14 ≡ 3\bmod 11 \\\\
  & 10 + 3 = 13 ≡ 2\bmod 11 \\\\   & 3 + 2 = 5 \\\\
  & 2 + 5 = 7 \\\\ & 5 + 7 = 12 ≡ 1\bmod 11. \end{align}$$

Portanto, as potências de 8 mod 11 são cíclicas com o período de 10 e $8^n + 8^{n + 1} ≡ 8^{n + 2} (\text{mod } 11)$. 8 é chamado de raiz primitiva de Fibonacci de 11.

Nem todo número primo tem uma raiz primitiva de Fibonacci. Há 323 números primos menores que 10000 com uma ou mais raízes primitivas de Fibonacci e a soma destes primos é 1480491.

Calcule a soma dos números primos inferiores a $100.000.000$ com pelo menos uma raiz primitiva de Fibonacci.

# --hints--

`fibonacciPrimitiveRoots()` deve retornar `74204709657207`.

```js
assert.strictEqual(fibonacciPrimitiveRoots(), 74204709657207);
```

# --seed--

## --seed-contents--

```js
function fibonacciPrimitiveRoots() {

  return true;
}

fibonacciPrimitiveRoots();
```

# --solutions--

```js
// solution required
```
