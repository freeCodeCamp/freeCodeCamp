---
id: 5900f4521000cf542c50ff64
title: 'Problem 229: Four Representations using Squares'
challengeType: 1
forumTopicId: 301872
dashedName: problem-229-four-representations-using-squares
---

# --description--

Betrachten wir die Zahl 3600. Sie ist sehr speziell, da

$$\begin{align}   & 3600 = {48}^2 + {36}^2   \\\\
  & 3600 = {20}^2 + {2×40}^2 \\\\   & 3600 = {30}^2 + {3×30}^2 \\\\
  & 3600 = {45}^2 + {7×15}^2 \\\\ \end{align}$$

Ebenso finden wir, dass $88201 = {99}^2 + {280}^2 = {287}^2 + 2 × {54}^2 = {283}^2 + 3 × {52}^2 = {197}^2 + 7 × {84}^2$.

1747 bewies Euler, welche Zahlen als Summe von zwei Quadraten darstellbar sind. Wir interessieren uns für die Zahlen $n$, die Darstellungen aller der folgenden vier Typen zulassen:

$$\begin{align}   & n = {a_1}^2 + {b_1}^2  \\\\
  & n = {a_2}^2 + 2{b_2}^2 \\\\   & n = {a_3}^2 + 3{b_3}^2 \\\\
  & n = {a_7}^2 + 7{b_7}^2 \\\\ \end{align}$$

wobei die $a_k$ und $b_k$ positive ganze Zahlen sind.

Es gibt 75373 solcher Zahlen, die ${10}^7$ nicht überschreiten.

Wie viele solcher Zahlen gibt es, die $2 × {10}^9$ nicht überschreiten?

# --hints--

`representationsUsingSquares()` sollte `11325263` zurückgeben.

```js
assert.strictEqual(representationsUsingSquares(), 11325263);
```

# --seed--

## --seed-contents--

```js
function representationsUsingSquares() {

  return true;
}

representationsUsingSquares();
```

# --solutions--

```js
// solution required
```
