---
id: 5900f3db1000cf542c50feee
title: 'Problem 111: Primes with runs'
challengeType: 1
forumTopicId: 301736
dashedName: problem-111-primes-with-runs
---

# --description--

Bei 4-stelligen Primzahlen mit wiederholten Ziffern ist klar, dass sie nicht alle gleich sein können: 1111 ist durch 11 teilbar, 2222 ist durch 22 teilbar, usw. Aber es gibt neun 4-stellige Primzahlen, die drei Einsen enthalten:

$$1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111$$

Wir sagen, dass $M(n, d)$ die maximale Anzahl wiederholter Ziffern für eine n-stellige Primzahl darstellt, wobei d die wiederholte Ziffer ist, $N(n, d)$ die Anzahl solcher Primzahlen, und $S(n, d)$ die Summe dieser Primzahlen.

Also ist $M(4, 1) = 3$ die maximale Anzahl der wiederholten Ziffern für eine vierstellige Primzahl, wobei eine die wiederholte Ziffer ist, es gibt $N(4, 1) = 9$ solcher Primzahlen, und die Summe dieser Primzahlen ist $S(4, 1) = 22275$. Es stellt sich heraus, dass es für d = 0 nur $M(4, 0) = 2$ wiederholte Ziffern geben kann, aber es gibt $N(4, 0) = 13$ solcher Fälle.

Auf die gleiche Weise erhalten wir die folgenden Ergebnisse für 4-stellige Primzahlen.

| Ziffer, d | $M(4, d)$ | $N(4, d)$ | $S(4, d)$ |
| --------- | --------- | --------- | --------- |
| 0         | 2         | 13        | 67061     |
| 1         | 3         | 9         | 22275     |
| 2         | 3         | 1         | 2221      |
| 3         | 3         | 12        | 46214     |
| 4         | 3         | 2         | 8888      |
| 5         | 3         | 1         | 5557      |
| 6         | 3         | 1         | 6661      |
| 7         | 3         | 9         | 57863     |
| 8         | 3         | 1         | 8887      |
| 9         | 3         | 7         | 48073     |

Für d = 0 bis 9 ist die Summe aller $S(4, d)$ 273700. Finde die Summe aller $S(10, d)$.

# --hints--

`primesWithRuns()` sollte `612407567715` zurückgeben.

```js
assert.strictEqual(primesWithRuns(), 612407567715);
```

# --seed--

## --seed-contents--

```js
function primesWithRuns() {

  return true;
}

primesWithRuns();
```

# --solutions--

```js
// solution required
```
