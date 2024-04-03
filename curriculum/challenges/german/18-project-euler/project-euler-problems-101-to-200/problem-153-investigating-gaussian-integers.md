---
id: 5900f4051000cf542c50ff18
title: 'Problem 153: Untersuchung von Gaußschen Integern'
challengeType: 1
forumTopicId: 301784
dashedName: problem-153-investigating-gaussian-integers
---

# --description--

Wie wir alle wissen, hat die Gleichung $x^2 = -1$ für reelles $x$ keine Lösungen.

Führt man jedoch die imaginäre Zahl $i$ ein, so hat diese Gleichung zwei Lösungen: $x = i$ und $x = -i$.

Geht man noch einen Schritt weiter, so hat die Gleichung ${(x - 3)}^2 = -4$ zwei komplexe Lösungen: $x = 3 + 2i$ und $x = 3 - 2i$, die man gegenseitig als komplex konjugiert bezeichnet.

Zahlen der Form $a + bi$ werden als komplexe Zahlen bezeichnet.

Im Allgemeinen sind $a + bi$ und $a - bi$ zueinander komplex konjugiert. Eine Gaußsche Integer ist eine komplexe Zahl $a + bi$, bei der sowohl $a$ als auch $b$ Integer sind.

Die regulären Integer sind ebenfalls Gaußsche Integer (mit $b = 0$).

Um sie von den Gaußschen Integern mit $b ≠ 0$ zu unterscheiden, nennen wir solche Integer "rationale Integer"

Einen Gaußschen Integer nennt man einen Divisor eines rationalen Integers $n$, wenn das Ergebnis ebenfalls ein Gaußscher Integer ist.

Wenn wir zum Beispiel 5 durch $1 + 2i$ teilen, können wir auf folgende Weise vereinfachen:

Multipliziere Zähler und Nenner mit der komplexen Konjugierten von $1 + 2i$: $1 - 2i$.

Das Ergebnis ist:

$\frac{5}{1 + 2i} = \frac{5}{1 + 2i} \frac{1 - 2i}{1 - 2i} = \frac{5(1 - 2i)}{1 - {(2i)}^2} = \frac{5(1 - 2i)}{1 - (-4)} = \frac{5(1 - 2i)}{5} = 1 - 2i$

Also ist $1 + 2i$ ein Teiler von 5.

Beachte, dass $1 + i$ kein Teiler von 5 ist, weil:

$$\frac{5}{1 + i} = \frac{5}{2} - \frac{5}{2}i$$

Man beachte auch, dass, wenn der Gaußsche Integer ($a + bi$) ein Teiler eines rationalen Integers $n$ ist, ihr konjugierter Komplex ($a - bi$) ebenfalls ein Teiler von $n$ ist. In der Tat hat 5 sechs Teiler, deren Realteil positiv ist: {1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5}.

Im Folgenden findest du eine Tabelle mit allen Teilern der ersten fünf positiven rationalen Integer:

| n | Gaußsche Integer-Divisoren mit positivem realen Teil | Summe s(n) dieser Divisoren |
| - | ---------------------------------------------------- | --------------------------- |
| 1 | 1                                                    | 1                           |
| 2 | 1, 1 + i, 1 - i, 2                                   | 5                           |
| 3 | 1, 3                                                 | 4                           |
| 4 | 1, 1 + i, 1 - i, 2, 2 + 2i, 2 - 2i, 4                | 13                          |
| 5 | 1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5                   | 12                          |

Für Teiler mit positiven Realteilen gilt also: $\displaystyle\sum_{n=1}^5 s(n) = 35$.

Für $1 ≤ n ≤ {10}^5$ gilt $\displaystyle\sum_{n = 1}^{{10}^5} s(n) = 17924657155$.

Was ist $\displaystyle\sum_{n=1}^{{10}^8} s(n)$?

# --hints--

`sumGaussianIntegers()` sollte `17971254122360636` zurückgeben.

```js
assert.strictEqual(sumGaussianIntegers(), 17971254122360636);
```

# --seed--

## --seed-contents--

```js
function sumGaussianIntegers() {

  return true;
}

sumGaussianIntegers();
```

# --solutions--

```js
// solution required
```
