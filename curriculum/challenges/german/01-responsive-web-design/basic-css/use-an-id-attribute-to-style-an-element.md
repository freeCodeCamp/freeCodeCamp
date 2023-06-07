---
id: bad87dee1348bd9aede07836
title: Benutze ein id-Attribut, um ein Element zu stylen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakyZfL'
forumTopicId: 18339
dashedName: use-an-id-attribute-to-style-an-element
---

# --description--

Eine coole Sache an den `id`-Attributen ist, dass man sie wie Klassen mit CSS stylen kann.

Allerdings kann man eine `id` nicht wiederverwenden und sollte sie nur auf ein Element anwenden. Eine `id` hat auch eine höhere Spezifität (im Sinne von Wichtigkeit / Vorrang) als eine Klasse. Sollten sich beide gleichzeitig auf einem Element befinden und widersprüchliche Stile enthalten, werden die der `id` angewandt.

Hier ist ein Beispiel dafür, wie du dein Element mit dem `id`-Attribut `cat-photo-element` eine grüne Hintergrundfarbe geben kannst. In deinem `style`-Element:

```css
#cat-photo-element {
  background-color: green;
}
```

Beachte, dass du innerhalb deines `style`-Elements immer Klassen referenzierst, indem du ein `.` vor ihren Namen setzt. Du referenzierst die IDs immer, indem du ein `#` vor ihren Namen setzt.

# --instructions--

Versuche dem Formular das nun ein `id`-Attribut von `cat-photo-form` hat einen grünen Hintergrund zu geben.

# --hints--

Dein `form`-Element sollte eine ID namens `cat-photo-form` haben.

```js
assert($('form').attr('id') === 'cat-photo-form');
```

Dein `form`-Element sollte eine grüne `background-color` aufweisen.

```js
assert($('#cat-photo-form').css('background-color') === 'rgb(0, 128, 0)');
```

Dein `form`-Element sollte ein `id`-Attribut haben.

```js
assert(
  code.match(/<form.*cat-photo-form.*>/gi) &&
    code.match(/<form.*cat-photo-form.*>/gi).length > 0
);
```

Du solltest deinem `form`-Element weder `class` noch `style`-Attribute zuweisen.

```js
assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi));
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

  #cat-photo-form {
    background-color: green;
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
