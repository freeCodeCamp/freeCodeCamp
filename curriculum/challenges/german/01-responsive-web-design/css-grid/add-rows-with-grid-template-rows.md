---
id: 5a9036e138fddaf9a66b5d33
title: Zeilen mit grid-template-rows hinzufügen
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

Das Raster, das du in der letzten Aufgabe erstellt hast, legt die Anzahl der Zeilen automatisch fest. Um die Zeilen manuell anzupassen, verwendest du die Eigenschaft `grid-template-rows` auf die gleiche Weise, wie du `grid-template-columns` in der vorherigen Aufgabe verwendet hast.

# --instructions--

Füge dem Raster zwei Zeilen hinzu, die jeweils `50px` hoch sind.

# --hints--

Die Klasse `container` sollte eine Eigenschaft `grid-template-rows` mit zwei Einheiten von `50px` besitzen.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi
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
    grid-template-columns: 100px 100px 100px;
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
<style>.container {grid-template-rows: 50px 50px;}</style>
```
