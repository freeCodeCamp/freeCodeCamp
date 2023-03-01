---
id: 5900f4931000cf542c50ffa4
title: 'Problem 293: Pseudo-Glückszahlen'
challengeType: 1
forumTopicId: 301945
dashedName: problem-293-pseudo-fortunate-numbers
---

# --description--

Ein gerader positiver Integer $N$ wird zulässig genannt, wenn sie eine Potenz von 2 ist oder ihre verschiedenen Primfaktoren aufeinanderfolgende Primzahlen sind.

Die ersten zwölf zulässigen Zahlen sind 2, 4, 6, 8, 12, 16, 18, 24, 30, 32, 36, 48.

Wenn $N$ zulässig ist, wird der kleinste Integer $M > 1$, so dass $N + M$ eine Primzahl ist, die Pseudo-Glückszahl für $N$ genannt.

Zum Beispiel ist $N = 630$ zulässig, da es gerade ist und seine verschiedenen Primfaktoren die aufeinanderfolgenden Primzahlen 2, 3, 5 und 7 sind. Die nächste Primzahl nach 631 ist 641; die Pseudo-Glückszahl für 630 ist also $M = 11$. Es ist auch ersichtlich, dass die Pseudo-Glückszahl für 16 gleich 3 ist.

Finde die Summe aller unterschiedlichen Pseudo-Glückszahlen für zulässige Zahlen $N$ kleiner als ${10}^9$.

# --hints--

`pseudoFortunateNumbers()` sollte `2209` zurückgeben.

```js
assert.strictEqual(pseudoFortunateNumbers(), 2209);
```

# --seed--

## --seed-contents--

```js
function pseudoFortunateNumbers() {

  return true;
}

pseudoFortunateNumbers();
```

# --solutions--

```js
// solution required
```
