---
id: 5900f4301000cf542c50ff42
title: 'Problema 196: Triplette di numeri primi'
challengeType: 1
forumTopicId: 301834
dashedName: problem-196-prime-triplets
---

# --description--

Costruisci un triangolo da tutti gli interi positivi nel modo seguente:

$$\begin{array}{rrr}   &  1 \\\\
  &  \color{red}{2} &  \color{red}{3} \\\\   &  4 & \color{red}{5} &  6 \\\\
  &  \color{red}{7} &  8 &  9 & 10 \\\\   & \color{red}{11} & 12 & \color{red}{13} & 14 & 15  \\\\
  & 16 & \color{red}{17} & 18 & \color{red}{19} & 20 & 21 \\\\   & 22 & \color{red}{23} & 24 & 25 & 26 & 27 & 28 \\\\
  & \color{red}{29} & 30 & \color{red}{31} & 32 & 33 & 34 & 35 & 36 \\\\   & \color{red}{37} & 38 & 39 & 40 & \color{red}{41} & 42 & \color{red}{43} & 44 & 45 \\\\
  & 46 & \color{red}{47} & 48 & 49 & 50 & 51 & 52 & \color{red}{53} & 54 & 55 \\\\   & 56 & 57 & 58 & \color{red}{59} & 60 & \color{red}{61} & 62 & 63 & 64 & 65 & 66 \\\\
  & \cdots \end{array}$$

Ogni numero intero positivo ha fino a otto vicini nel triangolo.

Un insieme di tre primi è chiamato una tripletta prima se uno dei tre primi ha gli altri due come vicini nel triangolo.

Ad esempio, nella seconda fila, i numeri primi 2 e 3 sono elementi di una tripletta prima.

Se si considera la riga 8, essa contiene due primi che sono elementi di una tripletta prima, cioè 29 e 31. Se consideriamo la riga 9, essa contiene solo un primo che è un elemento di una tripletta prima: 37.

Definisci $S(n)$ come la somma dei numeri primi nella riga $n$ che sono elementi di qualsiasi tripletta prima. Poi $S(8) = 60$ e $S(9) = 37$.

Dato $S(10000) = 950007619$.

Trova $S(5678027) + S(7208785)$.

# --hints--

`primeTriplets()` dovrebbe restituire `322303240771079940`.

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
