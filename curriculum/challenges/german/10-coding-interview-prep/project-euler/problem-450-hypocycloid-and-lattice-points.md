---
id: 5900f52e1000cf542c510041
title: 'Problem 450: Hypozykloide und Gitterpunkte'
challengeType: 1
forumTopicId: 302123
dashedName: problem-450-hypocycloid-and-lattice-points
---

# --description--

Eine Hypozykloide ist die Kurve, die von einem Punkt auf einem kleinen Kreis gezeichnet wird, der sich innerhalb eines größeren Kreises bewegt. Die Parametergleichungen einer Hypozykloide, die im Ursprung zentriert ist und im äußersten rechten Punkt beginnt, sind gegeben durch:

$$x(t) = (R - r) \cos(t) + r \cos(\frac{R - r}{r}t)$$

$$y(t) = (R - r) \sin(t) - r \sin(\frac{R - r}{r} t)$$

Dabei ist $R$ der Radius des großen Kreises und $r$ der Radius des kleinen Kreises.

Lasse $C(R, r)$ die Menge der verschiedenen Punkte mit ganzzahligen Koordinaten auf der Hypozykloide mit Radius $R$ und $r$ sein, für die es einen entsprechenden Wert von $t$ gibt, sodass $\sin(t)$ und $\cos(t)$ rationale Zahlen sind.

Lasse $S(R, r) = \sum\_{(x,y) \in C(R, r)} |x| + |y|$ die Summe der Absolutwerte der $x$ und $y$ Koordinaten der Punkte in $C(R, r)$ sein.

Lasse $T(N) = \sum_{R = 3}^N \sum_{r=1}^{\left\lfloor \frac{R - 1}{2} \right\rfloor} S(R, r)$ die Summe von $S(R, r)$ für $R$ und $r$ positive ganze Zahlen, $R\leq N$ und $2r &lt; R$ sein.

Folgendes ist gegeben:

$$\begin{align}   C(3, 1) = & \\{(3, 0), (-1, 2), (-1,0), (-1,-2)\\} \\\\
  C(2500, 1000) = & \\{(2500, 0), (772, 2376), (772, -2376), (516, 1792), (516, -1792), (500, 0), (68, 504), \\\\ &(68, -504),(-1356, 1088), (-1356, -1088), (-1500, 1000), (-1500, -1000)\\} \end{align}$$

**Hinweis:** (-625, 0) ist kein Element von $C(2500, 1000)$, weil $\sin(t)$ keine rationale Zahl für die entsprechenden Werte von $t$ ist.

$S(3, 1) = (|3| + |0|) + (|-1| + |2|) + (|-1| + |0|) + (|-1| + |-2|) = 10$

$T(3) = 10$; $T(10) = 524$; $T(100) = 580\\,442$; $T({10}^3) = 583\\,108\\,600$.

Finde $T({10}^6)$.

# --hints--

`hypocycloidAndLatticePoints()` sollte `583333163984220900` zurückgeben.

```js
assert.strictEqual(hypocycloidAndLatticePoints(), 583333163984220900);
```

# --seed--

## --seed-contents--

```js
function hypocycloidAndLatticePoints() {

  return true;
}

hypocycloidAndLatticePoints();
```

# --solutions--

```js
// solution required
```
