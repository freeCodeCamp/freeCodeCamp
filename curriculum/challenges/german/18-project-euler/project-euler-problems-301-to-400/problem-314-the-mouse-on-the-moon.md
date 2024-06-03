---
id: 5900f4a71000cf542c50ffb9
title: 'Problem 314: The Mouse on the Moon'
challengeType: 1
forumTopicId: 301970
dashedName: problem-314-the-mouse-on-the-moon
---

# --description--

The moon has been opened up, and land can be obtained for free, but there is a catch. You have to build a wall around the land that you stake out, and building a wall on the moon is expensive. Every country has been allotted a 500 m by 500 m square area, but they will possess only that area which they wall in. 251001 posts have been placed in a rectangular grid with 1 meter spacing. The wall must be a closed series of straight lines, each line running from post to post.

Die größeren Länder haben natürlich eine 2000 m lange Mauer gebaut, die das gesamte 250 000 $\text{m}^2$ große Gebiet umschließt. Das Herzogtum von Grand Fenwick hat ein knapperes Budget und hat dich (ihren königlichen Programmierer) gebeten, zu berechnen, welche Form das beste maximale Verhältnis $\frac{\text{enclosed-area}}{\text{wall-length}}$ erzielen würde.

Du hast einige vorläufige Berechnungen auf einem Blatt Papier durchgeführt. Für eine 2000 Meter lange Wand, die eine Fläche von 250 000 $\text{m}^2$ umschließt, beträgt das Verhältnis $\frac{\text{enclosed-area}}{\text{wall-length}}$ 125.

Es ist zwar nicht erlaubt, aber um eine Vorstellung davon zu bekommen, ob diese Möglichkeit besser ist: Wenn man einen Kreis in die quadratische Fläche legt, der die vier Seiten berührt, ist die Fläche gleich $π \times {250}^2 \text{m}^2$ und der Umfang $π \times 500 \text{m}$, so dass das Verhältnis $\frac{\text{enclosed-area}}{\text{wall-length}}$ ebenfalls 125 ist.

Schneidet man jedoch aus dem Quadrat vier Dreiecke mit den Seiten 75 m, 75 m und $75\sqrt{2}$ m ab, so ergibt sich eine Gesamtfläche von 238750 $\text{m}^2$ und ein Umfang von $1400 + 300\sqrt{2}$ m. So this gives an $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio of 130.87, which is significantly better.

<img class="img-responsive center-block" alt="Bild, das den Unterschied im eingeschlossenen Bereich zwischen Kreis und Quadrat mit abgeschnittenen vier Dreiecken zeigt" src="https://cdn.freecodecamp.org/curriculum/project-euler/the-mouse-on-the-moon.gif" style="background-color: white; padding: 10px;" />

Find the maximum $\frac{\text{enclosed-area}}{\text{wall-length}}$ ratio. Gib deine Antwort auf 8 Stellen hinter dem Komma gerundet in der Form abc.defghijk an.

# --hints--

`theMouseOnTheMoon()` should return `132.52756426`.

```js
assert.strictEqual(theMouseOnTheMoon(), 132.52756426);
```

# --seed--

## --seed-contents--

```js
function theMouseOnTheMoon() {

  return true;
}

theMouseOnTheMoon();
```

# --solutions--

```js
// solution required
```
