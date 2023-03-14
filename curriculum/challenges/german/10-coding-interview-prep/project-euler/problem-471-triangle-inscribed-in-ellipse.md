---
id: 5900f5431000cf542c510056
title: 'Problem 471: Dreieck in Ellipse eingeschlossen'
challengeType: 1
forumTopicId: 302148
dashedName: problem-471-triangle-inscribed-in-ellipse
---

# --description--

Das Dreieck $ΔABC$ ist in eine Ellipse eingeschlossen mit der Gleichung $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $0 &lt; 2b &lt; a$, $a$ und $b$ Integer.

Lasse $r(a, b)$ den Radius des Inkreises von $ΔABC$ sein, wenn der innere Kreis den Mittelpunkt $(2b, 0)$ und $A$ die Koordinaten $\left(\frac{a}{2}, \frac{\sqrt{3}}{2}b\right)$ hat.

Zum Beispiel: $r(3, 1) = \frac{1}{2}, r(6, 2) = 1, r(12, 3) = 2$.

<img class="img-responsive center-block" alt="Dreieck ΔABC eingeschlossen in eine Ellipse, Radius des Inkreises von ΔABC r(6, 2) = 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-1.png" style="background-color: white; padding: 10px;" />

<img class="img-responsive center-block" alt="Dreieck ΔABC eingeschrieben in eine Ellipse, Radius des Inkreises von ΔABC r(12, 3) = 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-2.png" style="background-color: white; padding: 10px;" />

Lasse $G(n) = \sum_{a = 3}^n \sum_{b = 1}^{\left\lfloor\frac{a - 1}{2} \right\rfloor} r(a, b)$ sein

Du erhältst $G(10) = 20.59722222$, $G(100) = 19223.60980$ (gerundet auf 10 signifikante Stellen).

Finde $G({10}^{11})$. Gib deine Antwort als String in wissenschaftlicher Notation, gerundet auf 10 signifikante Stellen, an. Verwende ein kleines `e`, um Mantisse und Exponent zu trennen.

Für $G(10)$ hätte die Antwort `2.059722222e1` gelautet

# --hints--

`triangleInscribedInEllipse()` sollte einen String zurückgeben.

```js
assert(typeof triangleInscribedInEllipse() === 'string');
```

`triangleInscribedInEllipse()` sollte den String `1.895093981e31` zurückgeben.

```js
assert.strictEqual(triangleInscribedInEllipse(), '1.895093981e31');
```

# --seed--

## --seed-contents--

```js
function triangleInscribedInEllipse() {

  return true;
}

triangleInscribedInEllipse();
```

# --solutions--

```js
// solution required
```
