---
id: 5900f4a51000cf542c50ffb7
title: 'Problem 312: Zyklische Pfade auf Sierpiński-Graphen'
challengeType: 1
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

- Ein Sierpiński-Graph der Ordnung-1 ($S_1$) ist ein gleichseitiges Dreieck.
- $S_{n + 1}$ erhält man aus $S_n$, indem man drei Kopien von $S_n$ so anordnet, dass jedes Paar von Kopien eine gemeinsame Ecke hat.

<img class="img-responsive center-block" alt="Sierpinski-Graphen der Ordnung-1 bis Ordnung-5" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px;" />

Lasse $C(n)$ die Anzahl der Zyklen sein, die genau einmal durch alle Scheitelpunkte von $S_n$ gehen. Zum Beispiel ist $C(3) = 8$, weil acht solcher Zyklen auf $S_3$ gezeichnet werden können, wie unten gezeigt:

<img class="img-responsive center-block" alt="acht Zyklen, die genau einmal durch alle Scheitelpunkte von S_3 verlaufen" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px;" />

Es kann auch bestätigt werden, dass:

$$\begin{align}   & C(1) = C(2) = 1 \\\\
  & C(5) = 71\\,328\\,803\\,586\\,048 \\\\   & C(10 000)\bmod {10}^8 = 37\\,652\\,224 \\\\
  & C(10 000)\bmod {13}^8 = 617\\,720\\,485 \\\\ \end{align}$$

Finde $C(C(C(10\\,000)))\bmod {13}^8$.

# --hints--

`pathsOnSierpinskiGraphs()` sollte `324681947` zurückgeben.

```js
assert.strictEqual(pathsOnSierpinskiGraphs(), 324681947);
```

# --seed--

## --seed-contents--

```js
function pathsOnSierpinskiGraphs() {

  return true;
}

pathsOnSierpinskiGraphs();
```

# --solutions--

```js
// solution required
```
