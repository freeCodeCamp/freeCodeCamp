---
id: 5900f53d1000cf542c51004f
title: 'Problem 464: Möbius-Funktion und Intervalle'
challengeType: 1
forumTopicId: 302139
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

Die Möbius-Funktion, bezeichnet mit $μ(n)$, ist definiert als:

- $μ(n) = (-1)^{ω(n)}$ falls $n$ eckfrei ist (wobei $ω(n)$ die Nummer verschiedener Hauptfaktoren von $n$ ist)
- $μ(n) = 0$ falls $n$ nicht eckfrei ist.

Lasse $P(a, b)$ die Anzahl der Integer $n$ im Intervall $[a, b]$ sein, so dass $μ(n) = 1$ gilt.

Lasse $N(a, b)$ die Anzahl der Integer $n$ im Intervall $[a, b]$ sein, so dass $μ(n) = -1$.

Zum Beispiel $P(2, 10) = 2$ und $N(2, 10) = 4$.

Lasse $C(n)$ die Anzahl an Paaren der Integer $(a, b)$ sein, so dass:

- $1 ≤ a ≤ b ≤ n$,
- $99 \times N(a, b) ≤ 100 \times P(a, b)$, und
- $99 \times P(a, b) ≤ 100 \times N(a, b)$.

Zum Beispiel $C(10) = 13$, $C(500) = 16\\,676$ und $C(10\\,000) = 20\\,155\\,319$.

Finde $C(20\\,000\\,000)$.

# --hints--

`mobiusFunctionAndIntervals()` sollte `198775297232878` zurückgeben.

```js
assert.strictEqual(mobiusFunctionAndIntervals(), 198775297232878);
```

# --seed--

## --seed-contents--

```js
function mobiusFunctionAndIntervals() {

  return true;
}

mobiusFunctionAndIntervals();
```

# --solutions--

```js
// solution required
```
