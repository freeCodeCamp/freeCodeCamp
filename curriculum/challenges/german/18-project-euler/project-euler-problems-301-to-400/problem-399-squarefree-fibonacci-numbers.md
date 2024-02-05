---
id: 5900f4fc1000cf542c51000e
title: 'Problem 399: Quadratfreie Fibonacci-Zahlen'
challengeType: 1
forumTopicId: 302064
dashedName: problem-399-squarefree-fibonacci-numbers
---

# --description--

The first 15 fibonacci numbers are:

$$1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.$$

Es ist erkennbar, dass 8 und 144 nicht quadratfrei sind: 8 ist durch 4 teilbar und 144 is durch 4 und 9 teilbar.

Also sind die ersten 13 quadratfreien Fibonacci-Zahlen:

$$1,1,2,3,5,13,21,34,55,89,233,377 \text{ and } 610.$$

Die $200$-ste quadratfreie Fibonacci-Zahl ist: 971183874599339129547649988289594072811608739584170445. Die letzten sechzehn Ziffern dieser Zahl sind: 1608739584170445 und in wissenschaftlicher Notation kann diese Zahl als `9.7e53` geschrieben werden.

Finde die $100\\,000\\,000$-te quadratfreie Fibonacci-Zahl. Gebe als Antwort eine Zeichenfolge mit deren letzten sechzehn Ziffern, gefolgt von einen Komma und der Zahl in wissenschaftlicher Notation (gerundet auf eine Stelle nach dem Komma). Für die $200$-te quadratfreie Zahl wäre die Antwort: `1608739584170445,9.7e53`

**Hinweis:** Nehme für dieses Problem an, dass für jede Primzahl $p$ die erste durch $p$ teilbare Fibonacci-Zahl nicht durch $p^2$ teilbar ist (dies ist Teil von Walls Vermutung). Dies wurde für die Primzahlen $≤ 3 \times {10}^{15}$, aber nicht im Allgemeinen bewiesen.

Wenn die Vermutung falsch ist, dann ist die angenommene Antwort auf dieses Problem nicht garantiert die $100\\,000\\,000$-te quadratfreie Fibonacci-Zahl, sondern stellt nur eine untere Grenze dieser Zahl dar.

# --hints--

`squarefreeFibonacciNumbers()` should return a string.

```js
assert(typeof squarefreeFibonacciNumbers() === 'string');
```

`squarefreeFibonacciNumbers()` should return the string `1508395636674243,6.5e27330467`.

```js
assert.strictEqual(squarefreeFibonacciNumbers(), '1508395636674243,6.5e27330467');
```

# --seed--

## --seed-contents--

```js
function squarefreeFibonacciNumbers() {

  return true;
}

squarefreeFibonacciNumbers();
```

# --solutions--

```js
// solution required
```
