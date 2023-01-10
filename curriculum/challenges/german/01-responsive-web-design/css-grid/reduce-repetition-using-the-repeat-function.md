---
id: 5a94fe3669fb03452672e45f
title: Wiederholungen mit der repeat-Funktion reduzieren
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

Wenn du `grid-template-columns` und `grid-template-rows` verwendet hast, um die Struktur eines Rasters zu definieren, hast du einen Wert für jede Zeile oder Spalte eingegeben, die du erstellt hast.

Nehmen wir an, du willst ein Raster mit 100 Zeilen derselben Höhe. Es ist nicht sehr praktisch, 100 Werte einzeln einzufügen. Glücklicherweise gibt es einen besseren Weg - indem du die Funktion `repeat` verwendest, um die Anzahl der Wiederholungen deiner Spalte oder Zeile anzugeben, gefolgt von einem Komma und dem Wert, den du wiederholen willst.

Hier ist ein Beispiel, das ein 100-zeiliges Raster erzeugt, bei dem jede Zeile 50px hoch ist.

```css
grid-template-rows: repeat(100, 50px);
```

Du kannst auch mehrere Werte mit der Wiederholungsfunktion wiederholen und die Funktion zwischen anderen Werten einfügen, wenn du eine Rasterstruktur definierst. So sieht das aus:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

Das heißt übersetzt so viel wie:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**Hinweis:** Das `1fr 50px` wird zweimal wiederholt, gefolgt von 20px.

# --instructions--

Verwende `repeat`, um Wiederholungen aus der Eigenschaft `grid-template-columns` zu entfernen.

# --hints--

Die Klasse `container` sollte eine `grid-template-columns`-Eigenschaft besitzen, die auf die Wiederholung von 3 Spalten mit der Breite von `1fr` eingestellt ist.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
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

    grid-template-columns: 1fr 1fr 1fr;

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
<style>.container {grid-template-columns: repeat(3, 1fr);}</style>
```
