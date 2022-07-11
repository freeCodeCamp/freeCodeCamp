---
id: 5900f52e1000cf542c510041
title: 'Problema 450: Ipocicloide e punti del reticolo'
challengeType: 1
forumTopicId: 302123
dashedName: problem-450-hypocycloid-and-lattice-points
---

# --description--

Un ipocicloide è la curva disegnata da un punto su un cerchio piccolo che rotola all'interno di un cerchio più grande. Le equazioni parametriche di un ipocicloide centrato all'origine, e a partire dal punto più a destra, sono date da:

$$x(t) = (R - r) \cos(t) + r \cos(\frac{R - r}{r}t)$$

$$y(t) = (R - r) \sin(t) - r \sin(\frac{R - r}{r} t)$$

Dove $R$ è il raggio del grande cerchio e $r$ il raggio del piccolo cerchio.

Sia $C(R, r)$ l'insieme di punti distinti con coordinate intere sull'ipocicloide con raggio $R$ e $r$ e per il quale esiste un valore corrispondente di $t$ tale che $\sin(t)$ e $\cos(t)$ siano numeri razionali.

Sia $S(R, r) = \sum\_{(x,y) \in C(R, r)} |x| + |y|$ la somma dei valori assoluti delle coordinate $x$ e $y$ dei punti in $C(R, r)$.

Sia $T(N) = \sum_{R = 3}^N \sum_{r=1}^{\left\lfloor \frac{R - 1}{2} \right\rfloor} S(R, r)$ la somma di $S(R, r)$ per $R$ e $r$ interi positivi, $R\leq N$ and $2r &lt; R$.

Ti è dato che:

$$\begin{align}   C(3, 1) = & \\{(3, 0), (-1, 2), (-1,0), (-1,-2)\\} \\\\
  C(2500, 1000) = & \\{(2500, 0), (772, 2376), (772, -2376), (516, 1792), (516, -1792), (500, 0), (68, 504), \\\\ &(68, -504),(-1356, 1088), (-1356, -1088), (-1500, 1000), (-1500, -1000)\\} \end{align}$$

**Nota:**(-625, 0) non è un elemento di $C(2500, 1000)$ perchè $\sin(t)$ non è un numero razionale per i corrispondenti valori di $t$.

$S(3, 1) = (|3| + |0|) + (|-1| + |2|) + (|-1| + |0|) + (|-1| + |-2|) = 10$

$T(3) = 10$; $T(10) = 524$; $T(100) = 580\\,442$; $T({10}^3) = 583\\,108\\,600$.

Trova $T({10}^6)$.

# --hints--

`hypocycloidAndLatticePoints()` dovrebbe restituire `583333163984220900`.

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
