---
id: bad87fee1348bd9aedd08835
title: Marca botones de radio y casillas de verificación por defecto
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cWk3Qh6'
forumTopicId: 301094
dashedName: check-radio-buttons-and-checkboxes-by-default
---

# --description--

Puedes hacer que una casilla de verificación o botón de radio se marque por defecto usando el atributo `checked`.

Para hacer esto, simplemente agrega la palabra `checked` al interior de un elemento `input`. Por ejemplo:

```html
<input type="radio" name="test-name" checked>
```

# --instructions--

Establece el primero de tus botones de radio y la primera de tus casillas de verificación para que ambos sean marcados por defecto.

# --hints--

Tu primer botón de radio en tu formulario debe ser marcado por defecto.

```js
assert($('input[type="radio"]').prop('checked'));
```

Tu primera casilla de verificación en tu formulario debe ser marcado por defecto.

```js
assert($('input[type="checkbox"]').prop('checked'));
```

No debes cambiar el texto interno de la etiqueta `Indoor`.

```js
assert.equal(document.querySelector('label[for="indoor"]')?.innerText?.trim(), 'Indoor');
```

No debes cambiar el texto interno de la etiqueta `Loving`.

```js
assert.equal(document.querySelector('label[for="loving"]')?.innerText?.trim(), 'Loving');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
