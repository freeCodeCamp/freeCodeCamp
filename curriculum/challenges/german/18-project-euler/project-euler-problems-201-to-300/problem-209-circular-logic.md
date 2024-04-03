---
id: 5900f43e1000cf542c50ff4f
title: 'Problem 209: Zirkuläre Logik'
challengeType: 1
forumTopicId: 301850
dashedName: problem-209-circular-logic
---

# --description--

Eine binäre Wahrheitstabelle mit $k$ Eingängen ist eine Abbildung von $k$ Eingangsbits (Binärziffern, 0 [false] oder 1 [true]) auf 1 Ausgangsbit. Die binären Wahrheitstabellen mit $2$-Eingabe für die logischen Funktionen $AND$ und $XOR$ lauten zum Beispiel:

| x | y | x UND y |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 0       |
| 1 | 0 | 0       |
| 1 | 1 | 1       |

| x | y | x XOR y |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 1       |
| 1 | 0 | 1       |
| 1 | 1 | 0       |

Wie viele binäre Wahrheitstabellen mit $6$-Eingabe, $τ$, erfüllen die Formel

$$τ(a, b, c, d, e, f) \\; AND \\; τ(b, c, d, e, f, a \\; XOR \\; (b \\; AND \\; c)) = 0$$

für alle $6$-bit Eingaben ($a$, $b$, $c$, $d$, $e$, $f$)?

# --hints--

`circularLogic()` sollte `15964587728784` zurückgeben.

```js
assert.strictEqual(circularLogic(), 15964587728784);
```

# --seed--

## --seed-contents--

```js
function circularLogic() {

  return true;
}

circularLogic();
```

# --solutions--

```js
// solution required
```
