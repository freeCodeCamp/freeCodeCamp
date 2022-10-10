---
id: 5a94fe4469fb03452672e460
title: Elementgröße mit der Funktion minmax begrenzen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

Es gibt eine weitere integrierte Funktion zur Verwendung mit `grid-template-columns` und `grid-template-rows`, die `minmax` heißt. Sie wird verwendet, um die Größe der Elemente zu begrenzen, wenn sich die Größe des Raster(Grid)-Containers ändert. Dazu musst du den gewünschten Größenbereich für dein Element angeben. Hier ist ein Beispiel:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

Im obigen Code ist `grid-template-columns` so gesetzt, dass zwei Spalten erzeugt werden; die erste ist 100px breit, die zweite hat die minimale Breite von 50px und die maximale Breite von 200px.

# --instructions--

Ersetze mit der Funktion `minmax` das `1fr` in der Funktion `repeat` durch eine Spaltengröße, die die minimale Breite von `90px` und die maximale Breite von `1fr` hat, und verändere die Größe des Vorschaufensters, um den Effekt zu sehen.

# --hints--

Die Klasse `container` sollte eine Eigenschaft `grid-template-columns` besitzen, die auf die Wiederholung von 3 Spalten mit der minimalen Breite von `90px` und der maximalen Breite von `1fr` eingestellt ist.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
