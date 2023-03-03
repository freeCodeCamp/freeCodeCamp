---
id: 5900f4b01000cf542c50ffc2
title: 'Problem 323: Bitwise-OR operations on random integers'
challengeType: 1
forumTopicId: 301980
dashedName: problem-323-bitwise-or-operations-on-random-integers
---

# --description--

Lasse $y_0, y_1, y_2, \ldots$ eine Abfolge zufälliger vorzeichenloser 32-Bit-Ganzzahlen (d.h. $0 ≤ y_i &lt; 2^{32}$, jeder Wert gleich wahrscheinlich) sein.

Für die Abfolge $x_i$ ist die folgende Rekursion gegeben:

- $x_0 = 0$ und
- $x_i = x_{i - 1} \mathbf{|} y_{i - 1}$, für $i > 0$. ($\mathbf{|}$ is the bitwise-OR operator)

Man kann sehen, dass es schließlich einen Index $N$ gibt, sodass $x_i = 2^{32} - 1$ (ein Bitmuster aller Einsen) für alle $i ≥ N$.

Finde den erwarteten Wert von $N$. Gebe deine Antwort auf 10 Stellen nach dem Komma gerundet an.

# --hints--

`bitwiseOrOnRandomIntegers()` sollte `6.3551758451` zurückgeben.

```js
assert.strictEqual(bitwiseOrOnRandomIntegers(), 6.3551758451);
```

# --seed--

## --seed-contents--

```js
function bitwiseOrOnRandomIntegers() {

  return true;
}

bitwiseOrOnRandomIntegers();
```

# --solutions--

```js
// solution required
```
