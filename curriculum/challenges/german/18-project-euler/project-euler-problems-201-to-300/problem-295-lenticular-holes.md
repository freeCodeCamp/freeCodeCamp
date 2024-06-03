---
id: 5900f4931000cf542c50ffa6
title: 'Problem 295: Lentikularförmige Löcher'
challengeType: 1
forumTopicId: 301947
dashedName: problem-295-lenticular-holes
---

# --description--

We call the convex area enclosed by two circles a lenticular hole if:

- The centres of both circles are on lattice points.
- Die beiden Kreise überschneiden sich an zwei unterschiedlichen Gitterpunkten.
- Das von beiden Kreisen eingeschlossene Innere des konvexen Bereichs enthält keine Gitterpunkte.

Betrachte die Kreise:

$$\begin{align}   & C_0: x^2 + y^2 = 25 \\\\
  & C_1: {(x + 4)}^2 + {(y - 4)}^2 = 1 \\\\ & C_2: {(x - 12)}^2 + {(y - 4)}^2 = 65 \end{align}$$

Die Kreise $C_0$, $C_1$ und $C_2$ werden im Bild unten gezeichnet.

<img class="img-responsive center-block" alt="C_0, C_1 and C_2 circles" src="https://cdn.freecodecamp.org/curriculum/project-euler/lenticular-holes.gif" style="background-color: white; padding: 10px;" />

$C_0$ und $C_1$ bilden ein lentikularförmiges Loch, sowie $C_0$ und $C_2$.

Wir nennen ein geordnetes Paar positiver reeller Zahlen ($r_1$, $r_2$) ein lentikulares Paar, wenn es zwei Kreise mit Radii $r_1$ und $r_2$ gibt, die ein lentikularförmiges Loch bilden. Wir können bestätigen, dass ($1$, $5$) und ($5$, $\sqrt{65}$) die lentikularen Paare des obigen Beispiels sind.

Lasse $L(N)$ die Anzahl der verschiedenen lentikularen Paare ($r_1$, $r_2$) sein, für die $0 &lt; r_1 ≤ r_2 ≤ N$ gilt. We can verify that $L(10) = 30$ and $L(100) = 3442$.

Find $L(100\\,000)$.

# --hints--

`lenticularHoles()` should return `4884650818`.

```js
assert.strictEqual(lenticularHoles(), 4884650818);
```

# --seed--

## --seed-contents--

```js
function lenticularHoles() {

  return true;
}

lenticularHoles();
```

# --solutions--

```js
// solution required
```
