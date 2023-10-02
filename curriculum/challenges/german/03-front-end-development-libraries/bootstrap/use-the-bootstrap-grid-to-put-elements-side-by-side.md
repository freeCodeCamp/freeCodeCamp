---
id: bad88fee1348ce8acef08815
title: Verwende das Bootstrap-Raster, um Elemente nebeneinander zu platzieren
challengeType: 0
forumTopicId: 18371
dashedName: use-the-bootstrap-grid-to-put-elements-side-by-side
---

# --description--

Bootstrap verwendet ein responsives 12-Spalten-Rastersystem, das es einfach macht, Elemente in Zeilen zu platzieren und die relative Breite jedes Elements anzugeben. Die meisten Bootstrap-Klassen können auf ein `div`-Element angewendet werden.

Bootstrap hat verschiedene Spaltenbreiten-Attribute, die je nach Breite des Bildschirms des Nutzers verwendet werden. Beispielsweise haben Telefone schmale und Laptops breitere Bildschirme.

Zum Beispiel die Bootstrap-Klasse `col-md-*`. In diesem Fall bedeutet `md` mittel und `*` ist die Anzahl der Spalten, die die Breite des Elements angibt. In diesem Fall wird die Spaltenbreite eines Elements auf einem mittelgroßen Bildschirm, z. B. einem Laptop, angegeben.

In der Katzenfoto-App, die wir erstellen, verwenden wir `col-xs-*`, wobei `xs` extra klein bedeutet (wie ein extra kleiner Handybildschirm), und `*` ist die Anzahl der Spalten, die angibt wie viele Spalten das Element breit sein soll.

Platziere die `Like`, `Info` und `Delete`-Buttons nebeneinander, indem du alle drei in einem `<div class="row">`-Element und anschließend jedes innerhalb eines `<div class="col-xs-4">`-Elements verschachtelst.

Die `row`-Klasse wird auf ein `div` angewendet und die Buttons selbst können darin verschachtelt werden.

# --hints--

Deine Buttons sollten alle innerhalb desselben `div`-Elements mit der Klasse `row` verschachtelt sein.

```js
assert($('div.row:has(button)').length > 0);
```

Jeder d Beiner ootstrap-Buttons sollte in einem eigenen `div`-Element mit der Klasse `col-xs-4` verschachtelt sein.

```js
assert($('div.col-xs-4:has(button)').length > 2);
```

Jedes deiner `button`-Elemente sollte ein abschließendes Tag haben.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
```

Jedes deiner `div`-Elemente sollte ein abschließendes Tag haben.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <button class="btn btn-block btn-primary">Like</button>
  <button class="btn btn-block btn-info">Info</button>
  <button class="btn btn-block btn-danger">Delete</button>
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<div class="container-fluid">
  <h2 class="red-text text-center">CatPhotoApp</h2>

  <p>Click here for <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary">Like</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-info">Info</button>
    </div>
    <div class="col-xs-4">
      <button class="btn btn-block btn-danger">Delete</button>
    </div>
  </div>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Crazy</label>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</div>
```
