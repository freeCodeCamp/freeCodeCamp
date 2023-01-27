---
id: 5900f4571000cf542c50ff69
title: 'Problem 234: Halbteilbare Zahlen'
challengeType: 1
forumTopicId: 301878
dashedName: problem-234-semidivisible-numbers
---

# --description--

Für eine ganze Zahl $n ≥ 4$ definieren wir die untere Primzahlwurzel von $n$, bezeichnet mit $lps(n)$, als den $\text{größte Primzahl} ≤ \sqrt{n}$ und die obere Primzahlwurzel von $n$, $ups(n)$, als den $\text{kleinste Primzahl} ≥ \sqrt{n}$.

So ist zum Beispiel $lps(4) = 2 = ups(4)$, $lps(1000) = 31$, $ups(1000) = 37$.

Wir nennen eine ganze Zahl $n ≥ 4$ halbteilbar, wenn eine von $lps(n)$ und $ups(n)$ $ $n$ teilt, aber nicht beide.

Die Summe der halbteilbaren Zahlen, die 15 nicht überschreiten, ist 30. Die Zahlen sind 8, 10 und 12. 15 ist nicht halb teilbar, weil es ein Vielfaches von $lps(15) = 3$ und $ups(15) = 5$ ist. Ein weiteres Beispiel: Die Summe der 92 halbteilbaren Zahlen bis 1000 ist 34825.

Was ist die Summe aller halbteilbaren Zahlen, die 999966663333 nicht überschreiten?

# --hints--

`semidivisibleNumbers()` sollte `1259187438574927000` zurückgeben.

```js
assert.strictEqual(semidivisibleNumbers(), 1259187438574927000);
```

# --seed--

## --seed-contents--

```js
function semidivisibleNumbers() {

  return true;
}

semidivisibleNumbers();
```

# --solutions--

```js
// solution required
```
