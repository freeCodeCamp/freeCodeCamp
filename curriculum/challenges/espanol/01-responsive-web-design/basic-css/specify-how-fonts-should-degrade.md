---
id: bad87fee1348bd9aedf08808
title: Especifica cómo deben degradarse las fuentes
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
dashedName: specify-how-fonts-should-degrade
---

# --description--

Hay varias fuentes por defecto disponibles en todos los navegadores. Estas familias de fuentes genéricas incluyen `monospace`, `serif` y `sans-serif`.

Cuando una fuente no está disponible en el sistema, puedes indicarle al navegador que "degrade" a otra fuente alternativa.

Por ejemplo, si quieres que un elemento utilice la fuente `Helvetica` pero que degrade a la fuente `sans-serif` en caso que `Helvetica` no esté disponible, se especifica de la siguiente manera:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

Los nombres de las fuentes genéricas no distinguen entre mayúsculas y minúsculas. Además, no necesitan comillas porque son palabras clave CSS.

# --instructions--

Para comenzar, aplica la fuente `monospace` al elemento `h2`, para que ahora tenga dos fuentes: `Lobster` y `monospace`.

En el último desafío, habías importado la fuente `Lobster` usando la etiqueta `link`. Ahora comenta esa importación de la fuente `Lobster` de Google Fonts (usando los comentarios HTML que aprendiste antes) para que ya no esté disponible. Verás que todos tus elementos `h2` degradan a la fuente `monospace` font.

**Nota:** Si tienes la fuente `Lobster` instalada en tu computadora, no verás la degradación porque tu navegador puede encontrar la fuente en tu sistema.

# --hints--

Tu elemento h2 debe usar la fuente `Lobster`.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

El elemento h2 debe degradarse a la fuente `monospace` cuando `Lobster` no está disponible.

```js
assert(
  /\s*h2\s*\{\s*font-family\s*\:\s*(\'|"|)Lobster\1\s*,\s*monospace\s*;?\s*\}/gi.test(
    code
  )
);
```

Debes comentar tu llamada a Google para importar la fuente `Lobster` agregando `<!--` delante de ella.

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

Debes cerrar tu comentario agregando `-->` al final.

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
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
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
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
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

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
