---
id: 5900f4301000cf542c50ff42
title: 'Problema 196: Triplete de números primos'
challengeType: 1
forumTopicId: 301834
dashedName: problem-196-prime-triplets
---

# --description--

Construye un triángulo de todos los enteros positivos de la siguiente manera:

$$\begin{array}{rrr}   &  1 \\\\
  &  \color{red}{2} &  \color{red}{3} \\\\   &  4 & \color{red}{5} &  6 \\\\
  &  \color{red}{7} &  8 &  9 & 10 \\\\   & \color{red}{11} & 12 & \color{red}{13} & 14 & 15  \\\\
  & 16 & \color{red}{17} & 18 & \color{red}{19} & 20 & 21 \\\\   & 22 & \color{red}{23} & 24 & 25 & 26 & 27 & 28 \\\\
  & \color{red}{29} & 30 & \color{red}{31} & 32 & 33 & 34 & 35 & 36 \\\\   & \color{red}{37} & 38 & 39 & 40 & \color{red}{41} & 42 & \color{red}{43} & 44 & 45 \\\\
  & 46 & \color{red}{47} & 48 & 49 & 50 & 51 & 52 & \color{red}{53} & 54 & 55 \\\\   & 56 & 57 & 58 & \color{red}{59} & 60 & \color{red}{61} & 62 & 63 & 64 & 65 & 66 \\\\
  & \cdots \end{array}$$

Cada entero positivo tiene hasta ocho vecinos en el triángulo.

Un conjunto de tres primos se llama triplete si uno de los tres primos tiene los otros dos como vecinos en el triángulo.

Por ejemplo, en la segunda fila, los números primos 2 y 3 son elementos de algún triplete primo.

Si se considera la fila 8, contiene dos primos que son elementos de algún triplete primo, es decir, 29 y 31. Si se considera la fila 9, sólo contiene un número primo que es uno de los elementos de algún triplete primo: 37.

Define $S(n)$ como la suma de los primos en la fila $n$ que son elementos de cualquier triplete primo. Entonces $S(8) = 60$ y $S(9) = 37$.

Tienes que $S(10000) = 950007619$.

Calcula $S(5678027) + S(7208785)$.

# --hints--

`primeTriplets()` debería devolver `322303240771079940`.

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
