---
id: 58c383d33e2e3259241f3076
title: Verwende Attributselektoren um Elemente zu stylen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpymfJ'
forumTopicId: 301092
dashedName: use-attribute-selectors-to-style-elements
---

# --description--

Du hast `id` oder `class`-Attribute zu Elementen hinzugefügt, die du speziell stylen möchtest. Diese werden als ID- und Klassenselektoren bezeichnet. Es gibt noch andere CSS-Selektoren, die du verwenden kannst, um benutzerdefinierte Gruppen von Elementen zum Stylen auszuwählen.

Lass uns die Katzenfoto-App wieder hervorholen, um die Verwendung von CSS-Selektoren zu üben.

In dieser Aufgabe verwendest du den Attribut-Selektor `[attr=value]`, um die Checkboxen in der Katzenfoto-App zu gestalten. Dieser Selektor findet und gestaltet Elemente mit einem bestimmten Attributwert. Zum Beispiel ändert der folgende Code den Margin aller Elemente mit dem Attribut `type` und einem entsprechenden Wert von `radio`:

```css
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

# --instructions--

Benutze den `type`-Attributselektor, um den Kontrollkästchen in der Katzenfoto-App einen oberen Abstand von 10px und einen unteren Abstand von 15px zu geben.

# --hints--

Der `type`-Attributselektor sollte verwendet werden, um die Checkboxen auszuwählen.

```js
assert(
  code.match(
    /<style>[\s\S]*?\[\s*?type\s*?=\s*?("|')checkbox\1\s*?\]\s*?{[\s\S]*?}[\s\S]*?<\/style>/gi
  )
);
```

Die oberen Abstände der Checkboxen sollten 10px betragen.

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginTop') === '10px') {
        count++;
      }
    });
    return count === 3;
  })()
);
```

Die unteren Ränder der Checkboxen sollten 15px sein. Die unteren Abstände der Checkboxen sollten 15px betragen.

```js
assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginBottom') === '15px') {
        count++;
      }
    });
    return count === 3;
  })()
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
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
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

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
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

  .silver-background {
    background-color: silver;
  }
  [type='checkbox'] {
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
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
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
