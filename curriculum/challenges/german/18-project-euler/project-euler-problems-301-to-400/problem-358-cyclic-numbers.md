---
id: 5900f4d21000cf542c50ffe5
title: 'Problem 358: Zyklische Zahlen'
challengeType: 1
forumTopicId: 302018
dashedName: problem-358-cyclic-numbers
---

# --description--

A cyclic number with $n$ digits has a very interesting property:

Wenn sie mit 1, 2, 3, 4, ... $n$ multipliziert wird, haben alle Produkte genau die gleichen Ziffern, in der gleichen Reihenfolge, aber kreisförmig gedreht!

Die kleinste zyklische Zahl ist die 6-stellige Zahl 142857:

$$\begin{align}   & 142857 × 1 = 142857 \\\\
  & 142857 × 2 = 285714 \\\\   & 142857 × 3 = 428571 \\\\
  & 142857 × 4 = 571428 \\\\   & 142857 × 5 = 714285 \\\\
  & 142857 × 6 = 857142 \end{align}$$

Die nächste zyklische Zahl ist 0588235294117647 mit 16 Ziffern:

$$\begin{align}   & 0588235294117647 × 1 = 0588235294117647 \\\\
  & 0588235294117647 × 2 = 1176470588235294 \\\\   & 0588235294117647 × 3 = 1764705882352941 \\\\
  & \ldots \\\\ & 0588235294117647 × 16 = 9411764705882352 \end{align}$$

Beachte, dass bei zyklischen Zahlen die führenden Nullen wichtig sind.

Es gibt nur eine zyklische Zahl, für die die elf Ziffern ganz links 000000137 und die fünf Ziffern ganz rechts 56789 sind. (z.B. hat sie die Form $00000000137\ldots56789$ mit einer unbekannten Zahl von Ziffern in der Mitte). Finde die Summe all ihrer Ziffern.

# --hints--

`cyclicNumbers()` should return `3284144505`.

```js
assert.strictEqual(cyclicNumbers(), 3284144505);
```

# --seed--

## --seed-contents--

```js
function cyclicNumbers() {

  return true;
}

cyclicNumbers();
```

# --solutions--

```js
// solution required
```
