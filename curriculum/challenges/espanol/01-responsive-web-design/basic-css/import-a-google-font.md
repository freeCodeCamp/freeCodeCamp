---
id: bad87fee1348bd9aedf08807
title: Importa una fuente de Google Fonts
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MRsJ'
forumTopicId: 18200
dashedName: import-a-google-font
---

# --description--

Además de especificar fuentes comunes disponibles en la mayoría de los sistemas operativos, también podemos especificar fuentes web no estándar y personalizadas para usarlas en nuestro sitio web. En Internet hay muchos lugares donde podemos conseguir web fonts. Para este ejemplo nos centraremos en la biblioteca de Google Fonts.

Google Font es una biblioteca de fuentes web que puedes usar en tu CSS haciendo referencia a la dirección URL de la fuente.

Entonces, importemos y apliquemos una fuente de Google (ten en cuenta que si Google está bloqueado en tu país, tendrás que pasar por alto este desafío).

Para importar una fuente de Google, puedes copiar la URL de la fuente desde la librería de Google Fonts y luego pegarla en tu código HTML. Para este desafío, importaremos la fuente `Lobster`. Para ello, copia el siguiente fragmento de código y pégalo en la parte superior de tu editor de código (antes de abrir el elemento `style`):

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

Ahora puedes usar la fuente `Lobster` en tu CSS usando `Lobster` como FAMILY_NAME como en el siguiente ejemplo:

```css
font-family: FAMILY_NAME, GENERIC_NAME;
```

GENERIC_NAME es opcional, y es el modo de especificar una fuente de reserva o "fallback font" en caso de que la otra fuente especificada no esté disponible. Veremos esto en el siguiente desafío.

Los nombres de familia de fuentes son sensibles a mayúsculas y minúsculas, y si incluyen espacios deben estar envueltos entre comillas. Por ejemplo, necesitas comillas para usar la fuente `"Open Sans"`, pero no las necesitas para usar la fuente `Lobster`.

# --instructions--

Importa la fuente `Lobster` a tu página web. Luego, usa un selector de elementos para establecer `Lobster` como `font-family` en tu elemento `h2`.

# --hints--

Debes importar la fuente `Lobster`.

```js
assert($('link[href*="googleapis" i]').length);
```

Tu elemento `h2` debe usar la fuente `Lobster`.

```js
assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);
```

Solo debes utilizar un selector de elementos `h2` para cambiar la fuente.

```js
assert(
  /\s*[^\.]h2\s*\{\s*font-family\s*:\s*('|"|)Lobster\1\s*(,\s*('|"|)[a-z -]+\3\s*)?(;\s*\}|\})/gi.test(
    code
  )
);
```

Tu elemento `p` debe seguir usando la fuente `monospace`.

```js
assert(
  $('p')
    .css('font-family')
    .match(/monospace/i)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: red;
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
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  h2 {
    font-family: Lobster;
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
