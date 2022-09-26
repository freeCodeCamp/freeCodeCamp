---
id: 5900f4621000cf542c50ff75
title: 'Problema 246: Tangenti a un ellisse'
challengeType: 1
forumTopicId: 301893
dashedName: problem-246-tangents-to-an-ellipse
---

# --description--

Una definizione di un'ellisse è:

Dato un cerchio $c$ con centro $M$ e raggio $r$ e un punto $G$ affinché $d(G, m) < r$, il luogo dei punti che sono equidistanti da $c$ e $G$ forma una ellisse.

La costruzione dei punti dell'ellisse è mostrato qua sotto.

<img class="img-responsive center-block" alt="animazione della costruzione di un'ellisse" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-1.gif" style="background-color: white; padding: 10px;" />

Dati i punti $M(-2000, 1500)$ e $G(800, 1500)$.

Dato il cerchio $c$ con centro $M$ e raggio $15\\,000$.

Il luogo dei punti che sono equidistanti da $G$ e $c$ formano un'ellisse $e$.

Da un punto $P$ al di fuori di $e$ le due tangenti $$t_1$ e $t_2$ all'ellisse sono disegnate.

Siano $R$ e $S$ i punti dove $t_1$ e $t_2$ toccano sull'ellisse.

<img class="img-responsive center-block" alt="cerchio c con centro M, raggio 15000 e punto P al di fuori dell'ellisse e; dal punto P due tangenti t_1 e t_2 sono disegnate all'ellisse, con i punti che toccano l'ellisse R e S" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-2.gif" style="background-color: white; padding: 10px;" />

Per quanti punti $P$ del reticolo l'angolo $RPS$ è maggiore di 45°?

# --hints--

`tangentsToAnEllipse()` dovrebbe restituire `810834388`.

```js
assert.strictEqual(tangentsToAnEllipse(), 810834388);
```

# --seed--

## --seed-contents--

```js
function tangentsToAnEllipse() {

  return true;
}

tangentsToAnEllipse();
```

# --solutions--

```js
// solution required
```
