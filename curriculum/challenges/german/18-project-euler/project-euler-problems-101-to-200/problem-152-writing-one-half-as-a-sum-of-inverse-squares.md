---
id: 5900f4041000cf542c50ff17
title: 'Problem 152: Eine Hälfte als Summe von inversen Quadraten schreiben'
challengeType: 1
forumTopicId: 301783
dashedName: problem-152-writing-one-half-as-a-sum-of-inverse-squares
---

# --description--

Es existieren mehrere Möglichkeiten, um die Zahl $\frac{1}{2}$ als Summe von inversen Quadraten mithilfe von unterschiedlichen Integern zu schreiben.

Zum Beispiel können {2,3,4,5,7,12,15,20,28,35} als Zahlen verwendet werden:

$$\frac{1}{2} = \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \frac{1}{5^2} + \frac{1}{7^2} + \frac{1}{{12}^2} + \frac{1}{{15}^2} + \frac{1}{{20}^2} + \frac{1}{{28}^2} + \frac{1}{{35}^2}$$

Tatsächlich gibt es, wenn man nur Integer zwischen 2 und 45 verwendet, genau drei Möglichkeiten, die verbleibenden zwei sind: {2,3,4,6,7,9,10,20,28,35,36,45} and {2,3,4,6,7,9,12,15,28,30,35,36,45}.

Wie viele Möglichkeiten gibt es, die Zahl $\frac{1}{2}$ als Summe von inversen Quadraten mit verschiedenen Integern zwischen 2 und 80 zu schreiben?

# --hints--

`sumInverseSquares()` sollte `301` zurückgeben.

```js
assert.strictEqual(sumInverseSquares(), 301);
```

# --seed--

## --seed-contents--

```js
function sumInverseSquares() {

  return true;
}

sumInverseSquares();
```

# --solutions--

```js
// solution required
```
