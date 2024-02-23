---
id: bad87fee1348bd9aecf08806
title: Benutze eine CSS-Klasse um ein Element zu stylen
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

Klassen sind wiederverwendbare Stile, die zu HTML-Elementen hinzugefügt werden können.

Hier ist ein Beispiel einer CSS-Klassendeklaration:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

Wie du siehst, haben wir eine CSS-Klasse namens `blue-text` erstellt, die sich innerhalb des `<style>`-Tags befindet. So kannst du eine Klasse auf ein HTML-Element anwenden: `<h2 class="blue-text">CatPhotoApp</h2>`. Gib acht, dass in deinem CSS-`style`-Element Klassennamen immer mit einem Punkt beginnen. Im Klassenattribut deines HTML-Elements hingegen wird der Klassenname ohne Punkt geschrieben.

# --instructions--

Ändere den `h2`-Selektor innerhalb deines `style`-Elements in einen Klassenselektor namens `.red-text` und aktualisiere den Farbwert von `blue` auf `red`.

Gib deinem `h2`-Element das `class`-Attribut mit einem Wert von `red-text`.

# --hints--

Dein `h2`-Element sollte rot sein.

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

Dein `h2`-Element sollte die Klasse `red-text` besitzen.

```js
assert($('h2').hasClass('red-text'));
```

Dein Stylesheet sollte eine Klasse namens `red-text` deklarieren, deren Farbeigenschaft auf `red` gesetzt wurde.

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

Du solltest keine Inline-Stildeklarationen wie `style="color: red"` in deinem `h2`-Element verwenden.

```js
assert($('h2').attr('style') === undefined);
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
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
<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <div>
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

  <form action="https://freecatphotoapp.com/submit-cat-photo">
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
