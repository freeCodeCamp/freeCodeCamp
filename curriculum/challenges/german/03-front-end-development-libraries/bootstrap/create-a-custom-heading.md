---
id: bad87fee1348bd9aede08845
title: Erstelle eine eigene Überschrift
challengeType: 0
forumTopicId: 16816
dashedName: create-a-custom-heading
---

# --description--

Wir werden eine einfache Überschrift für unsere Katzenfoto-App erstellen, indem wir den Titel und das Bild einer entspannten Katze in derselben Reihe platzieren.

Denk daran, dass Bootstrap ein Gestaltungsraster (Grid) mit responsivem Design verwendet, das es einfach macht, Elemente in Zeilen anzuordnen und die relative Breite der einzelnen Elemente festzulegen. Die meisten Bootstrap-Klassen können auf ein `div`-Element angewendet werden.

Verschachtel dein erstes Bild und dein `h2`-Element in ein einziges `<div class="row">`-Element. Verschachtel dein `h2`-Element in einem `<div class="col-xs-8">` und dein Bild in einem `<div class="col-xs-4">`, damit sie sich auf der gleichen Zeile befinden.

Hast du bemerkt, dass das Bild jetzt genau die richtige Größe hat, um neben den Text zu passen?

# --hints--

Dein `h2`-Element und das oberste `img`-Element sollten beide in einem `div`-Element der Klasse `row` verschachtelt werden.

```js
assert($('div.row:has(h2)').length > 0 && $('div.row:has(img)').length > 0);
```

Dein oberstes `img`-Element sollte in einem `div` der Klasse `col-xs-4` verschachtelt sein.

```js
assert(
  $('div.col-xs-4:has(img)').length > 0 &&
    $('div.col-xs-4:has(div)').length === 0
);
```

Dein `h2`-Element sollte in einem `div` der Klasse `col-xs-8` verschachtelt sein.

```js
assert(
  $('div.col-xs-8:has(h2)').length > 0 &&
    $('div.col-xs-8:has(div)').length === 0
);
```

All deine `div` Elemente sollten abschließende Tags haben.

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
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <h2 class="text-primary text-center">CatPhotoApp</h2>

  <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <p>Things cats <span class="text-danger">love:</span></p>
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
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }
</style>

<div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary  text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
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
  <p>Things cats <span class="text-danger">love:</span></p>
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
