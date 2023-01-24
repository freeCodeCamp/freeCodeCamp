---
id: 5900f4201000cf542c50ff33
title: 'Problem 180: Rationale Nullstellen einer Funktion von drei Variablen'
challengeType: 1
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

Betrachte für eine beliebige ganze Zahl $n$ die drei Funktionen

$$\begin{align}   & f_{1,n}(x,y,z) = x^{n + 1} + y^{n + 1} − z^{n + 1}\\\\
  & f_{2,n}(x,y,z) = (xy + yz + zx) \times (x^{n - 1} + y^{n - 1} − z^{n - 1})\\\\ & f_{3,n}(x,y,z) = xyz \times (x^{n - 2} + y^{n - 2} − z^{n - 2}) \end{align}$$

und ihre Kombination

$$\begin{align} & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z) \end{align}$$

Wir nennen $(x,y,z)$ ein goldenes Tripel der Ordnung $k$, wenn $x$, $y$ und $z$ alle rationale Zahlen der Form $\frac{a}{b}$ mit $0 &lt; a &lt; b ≤ k$ sind und es (mindestens) eine ganze Zahl $n$ gibt, sodass $f_n(x,y,z) = 0$.

Lasse $s(x,y,z) = x + y + z$ sein.

Lasse $t = \frac{u}{v}$ die Summe aller unterschiedlichen $s(x,y,z)$ für alle goldenen Tripel $(x,y,z)$ der Ordnung 35 sein. Alle $s(x,y,z)$ und $t$ müssen in reduzierter Form vorliegen.

Finde $u + v$.

# --hints--

`rationalZeros()` sollte `285196020571078980` zurückgeben.

```js
assert.strictEqual(rationalZeros(), 285196020571078980);
```

# --seed--

## --seed-contents--

```js
function rationalZeros() {

  return true;
}

rationalZeros();
```

# --solutions--

```js
// solution required
```
