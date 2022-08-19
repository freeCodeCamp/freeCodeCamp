---
id: bad87fee1348bd9aedd08845
title: Füge Font Awesome Icons zu unseren Buttons hinzu
challengeType: 0
forumTopicId: 16638
required:
  - 
    link: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
    raw: true
dashedName: add-font-awesome-icons-to-our-buttons
---

# --description--

Font Awesome ist eine komfortable Bibliothek für Icons. Diese Icons können Web Fonts (Schriften) oder Vektorgrafiken sein. Diese Icons werden genau wie Schriftarten behandelt. Du kannst ihre Größe mithilfe von Pixeln angeben und sie nehmen die Schriftgröße ihrer übergeordneten HTML-Elementen an.

Du kannst Font Awesome in jede App einbinden, indem du den folgenden Code oben in deinem HTML-Code hinzufügst:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```

In diesem Fall haben wir ihn bereits für dich auf dieser Seite hinter den Kulissen hinzugefügt.

Das `i` Element wurde ursprünglich verwendet, um andere Elemente kursiv zu gestalten, wird aber jetzt häufig für Icons verwendet. Du kannst Font Awesome Klassen zum `i` Element hinzufügen, um es in ein Icon zu verwandeln. Zum Beispiel:

```html
<i class="fas fa-info-circle"></i>
```

Beachte, dass das `span` Element auch für die Nutzung mit Icons akzeptiert wird.

# --instructions--

Benutze Font Awesome um ein `thumbs-up` Icon zu deinem Like-Button hinzuzufügen, indem du ihm ein `i` Element mit den Klassen `fas` und `fa-thumbs-up` gibst. Achte darauf, den Text `Like` neben dem Icon zu behalten.

# --hints--

Du solltest ein `i` Element mit den Klassen `fas` und `fa-thumbs-up` hinzufügen.

```js
assert($('i').is('.fas.fa-thumbs-up') || $('span').is('.fas.fa-thumbs-up'));
```

Dein `fa-thumbs-up`-Icon soll innerhalb des Like-Buttons platziert sein.

```js
assert(
  ($('i.fa-thumbs-up').parent().text().match(/Like/gi) &&
    $('.btn-primary > i').is('.fas.fa-thumbs-up')) ||
    ($('span.fa-thumbs-up').parent().text().match(/Like/gi) &&
      $('.btn-primary > span').is('.fas.fa-thumbs-up'))
);
```

Dein `i` Element sollte innerhalb deines `button` Elements verschachtelt sein.

```js
assert(
  $('button').children('i').length > 0 ||
    $('button').children('span').length > 0
);
```

Dein Icon-Element sollte einen abschließenden Tag haben.

```js
assert(code.match(/<\/i>|<\/span>/g));
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
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-primary text-center">CatPhotoApp</h2>
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
      <h2 class="text-primary text-center">CatPhotoApp</h2>
    </div>
    <div class="col-xs-4">
      <a href="#"><img class="img-responsive thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
    </div>
  </div>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" class="img-responsive" alt="Three kittens running towards the camera.">
  <div class="row">
    <div class="col-xs-4">
      <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
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
