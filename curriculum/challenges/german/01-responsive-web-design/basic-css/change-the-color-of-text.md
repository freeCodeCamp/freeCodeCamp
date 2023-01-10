---
id: bad87fee1348bd9aedf08803
title: Ändere die Farbe von Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkVmSm'
forumTopicId: 16775
dashedName: change-the-color-of-text
---

# --description--

Lass uns nun die Farbe eines Teils unseres Textes ändern.

Wir können dies tun, indem wir den `style` deines `h2`-Elements ändern.

Die CSS-Eigenschaft die Textfarben festlegt, heißt `color`.

So würdest du die Textfarbe deines `h2`-Elements auf blau setzen:

```html
<h2 style="color: blue;">CatPhotoApp</h2>
```

Es ist eine bewährte Praxis Inline `style` Deklarationen mit einem `;` zu beenden.

# --instructions--

Ändere den Stil deines `h2`-Elements, so dass seine Textfarbe rot ist.

# --hints--

Dein `h2`-Element sollte ein `style`-Attribut besitzen.

```js
assert($('h2').attr('style'));
```

Die Farbe deines `h2` Elements sollte auf `red` gesetzt sein.

```js
assert($('h2')[0].style.color === 'red');
```

Dein `style`-Attribut sollte mit einem `;` enden.

```js
assert($('h2').attr('style') && $('h2').attr('style').endsWith(';'));
```

# --seed--

## --seed-contents--

```html
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
<h2 style="color: red;">CatPhotoApp</h2>
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
