---
id: 5900f50d1000cf542c51001f
title: 'Problema 417: Cicli reciproci II'
challengeType: 1
forumTopicId: 302086
dashedName: problem-417-reciprocal-cycles-ii
---

# --description--

Una frazione di unità contiene 1 nel numeratore. La rappresentazione decimale delle frazioni di unità con i denominatori da 2 a 10 è indicata con:

$$\begin{align}   & \frac{1}{2}  = 0.5 \\\\
  & \frac{1}{3}  = 0.(3) \\\\   & \frac{1}{4}  = 0.25 \\\\
  & \frac{1}{5}  = 0.2 \\\\   & \frac{1}{6}  = 0.1(6) \\\\
  & \frac{1}{7}  = 0.(142857) \\\\   & \frac{1}{8}  = 0.125 \\\\
  & \frac{1}{9}  = 0.(1) \\\\   & \frac{1}{10} = 0.1 \\\\
\end{align}$$

Dove $0.1(6)$ significa $0.166666\ldots$ e ha una cifra che si ripete. Si può vedere che $\frac{1}{7}$ ha 6 cifre che si ripetono.

Frazioni unitarie i cui denominatori non hanno altri fattori primi che 2 e/o 5 non sono considerati di avere cifre periodiche. Definiamo la periodicità di queste frazioni unitarie come 0.

Sia $L(n)$ la lunghezza del periodo di $\frac{1}{n}$. Ti è dato che $\sum L(n)$ per $3 ≤ n ≤ 1\\,000\\,000$ è uguale a $55\\,535\\,191\\,115$.

Trova $\sum L(n)$ per $3 ≤ n ≤ 100\\,000\\,000$.

# --hints--

`reciprocalCyclesTwo()` dovrebbe restituire `446572970925740`.

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
