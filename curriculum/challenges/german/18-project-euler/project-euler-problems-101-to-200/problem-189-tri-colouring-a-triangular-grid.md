---
id: 5900f4291000cf542c50ff3c
title: 'Problem 189: Dreifarbige Gestaltung eines Dreiecksgitters'
challengeType: 1
forumTopicId: 301825
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

Betrachte die folgende Konfiguration von 64 Dreiecken:

<img class="img-responsive center-block" alt="64 Dreiecke, die so angeordnet sind, dass sie ein größeres Dreieck mit einer Seitenlänge von 8 Dreiecken bilden" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-1.gif" style="background-color: white; padding: 10px;" />

Wir möchten das Innere jedes Dreiecks mit einer von drei Farben einfärben: rot, grün oder blau, sodass keine zwei benachbarten Dreiecke die gleiche Farbe haben. Eine solche Einfärbung wird als gültig bezeichnet. Dabei gelten zwei Dreiecke als benachbart, wenn sie eine gemeinsame Kante haben. Hinweis: Wenn sie nur einen Scheitelpunkt gemeinsam haben, sind sie nicht benachbart.

Hier ist zum Beispiel eine gültige Färbung des obigen Gitters:

<img class="img-responsive center-block" alt="farbiges Gitter aus 64 Dreiecken" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-2.gif" style="background-color: white; padding: 10px;" />

A colouring C' which is obtained from a colouring C by rotation or reflection is considered distinct from C unless the two are identical.

Wie viele verschiedene gültige Farbgebungen gibt es für die obige Konfiguration?

# --hints--

`triangularGridColoring()` sollte `10834893628237824` zurückgeben.

```js
assert.strictEqual(triangularGridColoring(), 10834893628237824);
```

# --seed--

## --seed-contents--

```js
function triangularGridColoring() {

  return true;
}

triangularGridColoring();
```

# --solutions--

```js
// solution required
```
