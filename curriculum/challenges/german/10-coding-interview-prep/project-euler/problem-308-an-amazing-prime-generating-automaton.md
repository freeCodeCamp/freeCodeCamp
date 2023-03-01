---
id: 5900f4a11000cf542c50ffb3
title: 'Problem 308: Ein erstaunlicher Primzahlen generierender Roboter'
challengeType: 1
forumTopicId: 301962
dashedName: problem-308-an-amazing-prime-generating-automaton
---

# --description--

Ein in der Programmiersprache Fractran geschriebenes Programm besteht aus einer Liste von Brüchen.

Der interne Zustand der virtuellen Maschine von Fractran ist ein positiver Integer, der anfangs auf einen Startwert gesetzt wird. Bei jeder Iteration eines Fractran-Programms wird der Zustand der ganzen Zahl mit dem ersten Bruch in der Liste multipliziert, so dass eine ganze Zahl übrig bleibt.

Eines der Fractran-Programme, das John Horton Conway für die erste Generation geschrieben hat, besteht zum Beispiel aus den folgenden 14 Brüchen:

$$\frac{17}{91}, \frac{78}{85}, \frac{19}{51}, \frac{23}{38}, \frac{29}{33}, \frac{77}{29}, \frac{95}{23}, \frac{77}{19}, \frac{1}{17}, \frac{11}{13}, \frac{13}{11}, \frac{15}{2}, \frac{1}{7}, \frac{55}{1}$$

Ausgehend von der Startzahl 2 ergeben die aufeinanderfolgenden Iterationen des Programms die Sequenz:

$$15, 825, 725, 1925, 2275, 425, \ldots, 68, \mathbf{4}, 30, \ldots, 136, \mathbf{8}, 60, \ldots, 544, \mathbf{32}, 240, \ldots$$

Die Potenzen von 2, die in dieser Folge erscheinen, sind $2^2, 2^3, 2^5, \ldots$.

Es kann gezeigt werden, dass alle 2er-Potenzen in dieser Folge Primzahl-Exponenten haben und dass alle Primzahlen als Exponenten von 2er-Potenzen in der richtigen Reihenfolge auftreten!

Wenn jemand das obige Fractran-Programm verwendet, um das Projekt Euler-Problem 7 zu lösen (finde die ${10001}^{\text{st}}$-Primzahl), wie viele Iterationen wären dann nötig, bis das Programm $2^{10001^{\text{st}}\text{ prime}}$ liefert?

# --hints--

`primeGeneratingAutomation()` sollte `1539669807660924` zurückgeben.

```js
assert.strictEqual(primeGeneratingAutomation(), 1539669807660924);
```

# --seed--

## --seed-contents--

```js
function primeGeneratingAutomation() {

  return true;
}

primeGeneratingAutomation();
```

# --solutions--

```js
// solution required
```
