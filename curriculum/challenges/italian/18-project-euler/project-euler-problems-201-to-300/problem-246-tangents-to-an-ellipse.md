---
id: 5900f4621000cf542c50ff75
title: 'Problema 246: tangenti a un''ellisse'
challengeType: 1
forumTopicId: 301893
dashedName: problem-246-tangents-to-an-ellipse
---

# --description--

Una definizione di un'ellisse è:

Dato un cerchio $c$ con centro $M$ e raggio $r$ e un punto $G$ tali che $d(G, m) < r$, il luogo dei punti che sono equidistanti da $c$ e $G$ forma una ellisse.

La costruzione dei punti dell'ellisse è mostrata di seguito.

<img class="img-responsive center-block" alt="animazione della costruzione di un'ellisse" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-1.gif" style="background-color: white; padding: 10px;" />

Dati i punti $M(-2000, 1500)$ e $G(800, 1500)$.

Dato il cerchio $c$ con centro $M$ e raggio $15\\,000$.

Il luogo dei punti che sono equidistanti da $G$ e $c$ forma un'ellisse $e$.

Da un punto $P$ al di fuori di $e$ sono tracciate le due tangenti all'ellisse $$t_1$ e $t_2$.

Siano $R$ e $S$ i punti dove $t_1$ e $t_2$ toccano l'ellisse.

<img class="img-responsive center-block" alt="cerchio c con centro M, raggio 15000 e un punto P al di fuori dell'ellisse e; dal punto P due tangenti t_1 e t_2 sono disegnate sull'ellisse, con i punti R e S che toccano l'ellisse" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-2.gif" style="background-color: white; padding: 10px;" />

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
