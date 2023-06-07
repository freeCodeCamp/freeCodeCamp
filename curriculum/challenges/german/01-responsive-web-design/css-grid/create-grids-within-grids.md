---
id: 5a94fe8569fb03452672e464
title: Erstelle Raster innerhalb von Rastern
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

Das Umwandeln eines Elements in ein Raster (Grid) wirkt sich nur auf das Verhalten seiner direkten Nachfahren aus. Wenn du also einen direkten Nachfahren (descendant) in ein Raster verwandelst, hast du ein Raster innerhalb eines Rasters.

Indem du zum Beispiel die Eigenschaften `display` und `grid-template-columns` des Elements mit der Klasse `item3` setzt, erzeugst du ein Raster innerhalb deines Rasters.

# --instructions--

Wandele das Element mit der Klasse `item3` mithilfe von `display` und `grid-template-columns` in ein Raster mit zwei Spalten sowie einer Breite von `auto` und `1fr` um.

# --hints--

Die Klasse `item3` sollte eine `grid-template-columns`-Eigenschaft mit den Werten `auto` und `1fr` besitzen.

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

Die Klasse `item3` sollte eine Eigenschaft `display` mit dem Wert `grid` enthalten.

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```
