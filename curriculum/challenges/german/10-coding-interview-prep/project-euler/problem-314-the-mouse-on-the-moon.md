---
id: 5900f4a71000cf542c50ffb9
title: 'Problem 314: Die Maus auf dem Mond'
challengeType: 1
forumTopicId: 301970
dashedName: problem-314-the-mouse-on-the-moon
---

# --description--

Der Mond wurde erschlossen, und Land kann kostenlos erworben werden, aber es gibt einen Haken. Man muss eine Mauer um das Land bauen, das man absteckt, und der Bau einer Mauer auf dem Mond ist teuer. Jedem Land wurde ein 500 m x 500 m zugeteilt, aber es wird nur das Gebiet besitzen, was sie auch mit einer Mauer umbauen. 251001 Pfosten wurden in einem rechteckigen Raster mit einem Abstand von 1 Meter aufgestellt. Die Wand muss eine geschlossene Reihe von geraden Linien sein, die von Pfosten zu Pfosten verlaufen.

Die größeren Länder haben natürlich eine 2000 m lange Mauer gebaut, die das gesamte 250 000 $\text{m}^2$ große Gebiet umschließt. Das Herzogtum von Grand Fenwick hat ein knapperes Budget und hat dich (ihren königlichen Programmierer) gebeten, zu berechnen, welche Form das beste maximale Verhältnis $\frac{\text{enclosed-area}}{\text{wall-length}}$ erzielen würde.

Du hast einige vorläufige Berechnungen auf einem Blatt Papier durchgeführt. Für eine 2000 Meter lange Wand, die eine Fläche von 250 000 $\text{m}^2$ umschließt, beträgt das Verhältnis $\frac{\text{enclosed-area}}{\text{wall-length}}$ 125.

Es ist zwar nicht erlaubt, aber um eine Vorstellung davon zu bekommen, ob diese Möglichkeit besser ist: Wenn man einen Kreis in die quadratische Fläche legt, der die vier Seiten berührt, ist die Fläche gleich $π \times {250}^2 \text{m}^2$ und der Umfang $π \times 500 \text{m}$, so dass das Verhältnis $\frac{\text{enclosed-area}}{\text{wall-length}}$ ebenfalls 125 ist.

Schneidet man jedoch aus dem Quadrat vier Dreiecke mit den Seiten 75 m, 75 m und $75\sqrt{2}$ m ab, so ergibt sich eine Gesamtfläche von 238750 $\text{m}^2$ und ein Umfang von $1400 + 300\sqrt{2}$ m. Daraus ergibt sich ein $\frac{\text{enclosed-area}}{\text{wall-length}}$-Verhältnis von 130.87, das deutlich besser ist.

<img class="img-responsive center-block" alt="Bild, das den Unterschied im eingeschlossenen Bereich zwischen Kreis und Quadrat mit abgeschnittenen vier Dreiecken zeigt" src="https://cdn.freecodecamp.org/curriculum/project-euler/the-mouse-on-the-moon.gif" style="background-color: white; padding: 10px;" />

Ermittle das maximale $\frac{\text{enclosed-area}}{\text{wall-length}}$-Verhältnis. Gib deine Antwort auf 8 Stellen hinter dem Komma gerundet in der Form abc.defghijk an.

# --hints--

`theMouseOnTheMoon()` sollte `132.52756426` zurückgeben.

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
