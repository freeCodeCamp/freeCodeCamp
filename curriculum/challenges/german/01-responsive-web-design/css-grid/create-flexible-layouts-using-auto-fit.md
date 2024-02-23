---
id: 5a94fe6269fb03452672e462
title: Flexible Layouts mit auto-fit erstellen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` funktioniert fast identisch zu `auto-fill`. Der einzige Unterschied besteht darin, dass `auto-fill`, sobald die Größe des Containers die Größe aller Elemente zusammen übersteigt, weitere leere Zeilen oder Spalten einfügt und die Elemente zur Seite schiebt, während `auto-fit` diese leeren Zeilen oder Spalten entfernt und die Elemente streckt, damit sie in die Größe des Containers passen.

**Hinweis:** Wenn dein Container nicht alle Elemente in einer Zeile unterbringen kann, verschiebt er sie in eine neue Zeile.

# --instructions--

Verwende im zweitem Raster (Grid) `auto-fit` mit `repeat`, um das Raster mit Spalten zu füllen, die eine minimale Breite von `60px` und eine maximale von `1fr` haben. Verändere dann die Größe der Vorschau, um den Unterschied zu sehen.

# --hints--

Die Klasse `container2` sollte eine `grid-template-columns`-Eigenschaft mit `repeat` und `auto-fit` besitzen, die das Raster mit Spalten füllt, die eine minimale Breite von `60px` und eine maximale von `1fr` aufweisen.

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>
```
