---
id: 5a9036ee38fddaf9a66b5d34
title: Verwende CSS-Rastereinheiten, um die Größe von Spalten und Zeilen zu ändern
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

Du kannst absolute und relative Einheiten wie `px` und `em` in CSS Grid verwenden, um die Größe von Zeilen und Spalten zu definieren. Du kannst auch diese verwenden:

`fr`: setzt die Spalte oder Zeile auf einen Bruchteil des verfügbaren Platzes,

`auto`: setzt die Spalte oder Zeile automatisch auf die Breite oder Höhe ihres Inhalts,

`%`: Passt die Spalte oder Zeile an die prozentuale Breite ihres Containers an.

Hier ist der Code, der die Ausgabe in der Vorschau generiert:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

Dieses Snippet erstellt fünf Spalten. Die erste Spalte ist so breit wie ihr Inhalt, die zweite Spalte ist 50px, die dritte Spalte ist 10% ihres Containers und für die letzten beiden Spalten wird der verbleibende Platz in drei Abschnitte aufgeteilt, zwei für die vierte Spalte und einer für die fünfte.

# --instructions--

Erstelle ein Raster mit drei Spalten, die wie folgt breit sind: 1fr, 100px, und 2fr.

# --hints--

Deine `container` Klasse sollte eine `grid-template-columns` Eigenschaft haben, die drei Spalten mit den folgenden Breiten besitzt: `1fr`, `100px`, und `2fr`.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
  )
);
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

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
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
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
