---
id: 587d78a5367417b2b2512ad7
title: Erstelle mit einem linearen Farbverlauf ein gestreiftes Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

Die `repeating-linear-gradient()`-Funktion ist sehr ähnlich zur `linear-gradient()` mit dem Unterschied, dass sie den angegebenen Farbverlauf wiederholt. `repeating-linear-gradient()` akzeptiert eine Vielzahl von Werten, aber aus Gründen der Einfachheit arbeitest du in dieser Aufgabe nur mit einem Winkel und Farbstoppwerten.

Der Winkelwert definiert die Richtung des Verlaufes. Farbstopps sind wie width-Werte, bei denen ein Übergang stattfindet, und sie werden mit einem Prozentsatz oder in Pixel angegeben.

In dem Beispiel im Code-Editor, beginnt der Farbverlauf mit der Farbe `yellow` bei 0 Pixel, die sich mit der zweiten Farbe `blue` bei 40 Pixel vermischt. Da die nächste Farbe auch bei 40 Pixel liegt, ändert sich der Farbverlauf sofort zur dritten Farbe `green`, die sich selbst in den vierten Farbwert `red` vermischt, da dieser 80 Pixel weit vom Anfang des Farbverlaufs entfernt liegt.

In diesem Beispiel hilft es sich die Farbstopps als Paare vorzustellen, wobei sich die Farben in Zweierschritten vermischen.

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

Wenn je zwei Farbstopps den gleichen Farbwert haben, ist der Verlauf zwischen ihnen ja nicht erkennbar und gefolgt von einem harten Übergang zur nächsten Farbe erhält man Streifen.

# --instructions--

Erstelle Streifen, indem du der `repeating-linear-gradient()`-Funktion einen Verlaufswinkel von `45deg` zuweist. Setze dann die ersten zwei Farbstopps auf `yellow` und lasse die zweite Farbe auf `black` stoppen.

# --hints--

Der Winkel der `repeating-linear-gradient()`-Funktion sollte 45 Grad betragen.

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

Der Winkel der `repeating-linear-gradient()`-Funktion sollte nicht mehr 90 Grad sein.

```js
assert(!code.match(/90deg/gi));
```

Der Farbstopp bei 0 Pixel sollte `yellow` sein.

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

Der erste Farbstopp bei 40 Pixel sollte `yellow` sein.

```js
assert(code.match(/yellow\s+?40px/gi));
```

Der zweite Farbstopp bei 40 Pixel sollte `black` sein.

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

Der letzte Farbstopp bei 80 Pixel sollte `black` sein.

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```
