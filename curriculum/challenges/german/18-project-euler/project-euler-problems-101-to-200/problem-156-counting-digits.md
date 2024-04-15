---
id: 5900f4091000cf542c50ff1b
title: 'Schwierigkeit 156: Zählen von Ziffern'
challengeType: 1
forumTopicId: 301787
dashedName: problem-156-counting-digits
---

# --description--

Ausgehend von der Null werden die natürlichen Zahlen zur Basis 10 wie folgt aufgeschrieben:

0 1 2 3 4 5 6 7 8 9 10 11 12....

Betrachte die Ziffer $d = 1$. Nachdem wir jede Zahl n aufgeschrieben haben, aktualisieren wir die Anzahl der Einsen, die aufgetreten sind, und nennen diese Zahl $f(n, 1)$. Die ersten Werte für $f(n, 1)$ lauten demnach wie folgt:

| $n$ | $f(n, 1)$ |
| --- | --------- |
| 0   | 0         |
| 1   | 1         |
| 2   | 1         |
| 3   | 1         |
| 4   | 1         |
| 5   | 1         |
| 6   | 1         |
| 7   | 1         |
| 8   | 1         |
| 9   | 1         |
| 10  | 2         |
| 11  | 4         |
| 12  | 5         |

Man beachte, dass $f(n, 1)$ niemals gleich 3 ist.

Die ersten beiden Lösungen der Gleichung $f(n, 1) = n$ sind also $n = 0$ und $n = 1$. Die nächste Lösung ist $n = 199981$. In gleicher Weise gibt die Funktion $f(n, d)$ die Gesamtzahl der Ziffern d an, die nach dem Aufschreiben der Zahl $n$ notiert wurden.

In der Tat ist für jede Ziffer $d ≠ 0$ die 0 die erste Lösung der Gleichung $f(n, d) = n$. Lasse $s(d)$ die Summe aller Lösungen sein, für die $f(n, d) = n$ ist.

Es ist gegeben, dass $s(1) = 22786974071$. Finde $\sum{s(d)}$ für $1 ≤ d ≤ 9$.

Anmerkung: Wenn für ein bestimmtes $n$ $f(n, d) = n$ für mehr als einen Wert von $d$ gilt, wird dieser Wert von $n$ für jeden Wert von $d$, für den $f(n, d) = n$ gilt, erneut gezählt.

# --hints--

`countingDigits()` sollte `21295121502550` zurückgeben.

```js
assert.strictEqual(countingDigits(), 21295121502550);
```

# --seed--

## --seed-contents--

```js
function countingDigits() {

  return true;
}

countingDigits();
```

# --solutions--

```js
// solution required
```
