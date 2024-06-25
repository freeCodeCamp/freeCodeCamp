---
id: 5900f4d91000cf542c50ffeb
title: 'Problem 363: Bézier-Kurven'
challengeType: 1
forumTopicId: 302024
dashedName: problem-363-bzier-curves
---

# --description--

A cubic Bézier curve is defined by four points: $P_0$, $P_1$, $P_2$ and $P_3$.

Die Kurve ist wie folgt aufgebaut:

<img class="img-responsive center-block" alt="Konstruktion der Bézier-Kurve" src="https://cdn.freecodecamp.org/curriculum/project-euler/bzier-curves.png" style="background-color: white; padding: 10px;" />

In den Segmenten $P_0P_1$, $P_1P_2$ und $P_2P_3$ werden die Punkte $Q_0$,$Q_1$ und $Q_2$ so gezeichnet, dass $\frac{P_0Q_0}{P_0P_1} = \frac{P_1Q_1}{P_1P_2} = \frac{P_2Q_2}{P_2P_3} = t$, mit $t$ in [0,1].

In den Segmenten $Q_0Q_1$ und $Q_1Q_2$ werden die Punkte $R_0$ und $R_1$ so gezeichnet, dass $\frac{Q_0R_0}{Q_0Q_1} = \frac{Q_1R_1}{Q_1Q_2} = t$ für den gleichen Wert von $t$.

Im Segment $R_0R_1$ wird der Punkt $B$ so gezeichnet, dass $\frac{R_0B}{R_0R_1} = t$ für den gleichen Wert von $t$.

Die Bézier-Kurve definiert durch die Punkte $P_0$, $P_1$, $P_2$, $P_3$ ist der Standort von $B$, da $Q_0$ alle möglichen Positionen im Segment $P_0P_1$ annimmt. (Bitte beachte, dass für alle Punkte der Wert von $t$ der gleiche ist.)

Aus der Konstruktion geht klar hervor, dass die Bézier-Kurve tagential zu den Segmenten $P_0P_1$ in $P_0$ und $P_2P_3$ in $P_3$ wird.

Eine kubische Bézier-Kurve mit $P_0 = (1, 0)$, $P_1 = (1, v)$, $P_2 = (v, 1)$ und $P_3 = (0, 1)$ wird zur Annäherung an einen Viertelkreis verwendet. Der Wert $v > 0$ wird so gewählt, dass die von den Linien $OP_0$, $OP_3$ und der Kurve eingeschlossene Fläche gleich $\frac{π}{4}$ (der Fläche des Viertelkreises) ist.

Um wie viele Prozent unterscheidet sich die Länge der Kurve von der Länge des Viertelkreises? Das heißt, wenn $L$ die Länge der Kurve ist, berechnet man $100 × \displaystyle\frac{L - \frac{π}{2}}{\frac{π}{2}}$. Gebe deine Antwort auf 10 Stellen hinter dem Komma gerundet an.

# --hints--

`bezierCurves()` should return `0.0000372091`.

```js
assert.strictEqual(bezierCurves(), 0.0000372091);
```

# --seed--

## --seed-contents--

```js
function bezierCurves() {

  return true;
}

bezierCurves();
```

# --solutions--

```js
// solution required
```
