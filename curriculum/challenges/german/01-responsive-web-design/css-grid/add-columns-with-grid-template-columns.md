---
id: 5a9036d038fddaf9a66b5d32
title: Spalten mit grid-template-columns hinzufügen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

Einfach nur ein Rasterelement zu erstellen, bringt dich nicht sehr weit. Du musst auch die Struktur des Rasters festlegen. Um dem Raster einige Spalten hinzuzufügen, verwende die Eigenschaft `grid-template-columns` für einen Raster-Container, wie unten gezeigt:

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

So erhält dein Raster zwei Spalten, die jeweils 50px breit sind. Die Anzahl der Parameter, die der Eigenschaft `grid-template-columns` übergeben werden, gibt die Anzahl der Spalten im Raster an und der Wert der einzelnen Parameter gibt die Breite jeder Spalte an.

# --instructions--

Gib dem Raster-Container drei Spalten, die jeweils `100px` breit sind.

# --hints--

Die Klasse `container` sollte eine Eigenschaft `grid-template-columns` mit drei Einheiten von `100px` besitzen.

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */


    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
