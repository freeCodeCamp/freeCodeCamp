---
id: bad87fee1348bd9bedf08813
title: Añade bordes alrededor de tus elementos
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvnHZ'
forumTopicId: 16630
dashedName: add-borders-around-your-elements
---

# --description--

Los bordes CSS tienen propiedades como `style` (estilo), `color` y `width` (ancho).

Por ejemplo, si quisiéramos crear un borde rojo de 5 píxeles alrededor de un elemento HTML, podríamos usar la siguiente clase:

```html
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

# --instructions--

Crea una clase llamada `thick-green-border` (borde grueso verde). Esta clase debería añadir un borde verde de 10px, "solid", alrededor de un elemento HTML. Aplica esa clase a tu foto de gato.

Recuerda que puedes aplicar múltiples clases a un elemento usando su atributo `class`, separando cada nombre de clase con un espacio. Por ejemplo:

```html
<img class="class1 class2">
```

# --hints--

Tu elemento `img` debe incluir la "class" `smaller-image`.

```js
assert($('img').hasClass('smaller-image'));
```

Tu elemento `img` debe incluir la "class" `thick-green-border`.

```js
assert($('img').hasClass('thick-green-border'));
```

Tu imagen debe tener un ancho de borde o "border-width" de `10px`.

```js
assert(
  $('img').hasClass('thick-green-border') &&
    parseInt($('img').css('border-top-width'), 10) >= 8 &&
    parseInt($('img').css('border-top-width'), 10) <= 12
);
```

Tu imagen debe tener un estilo de borde o "border-style" `solid`.

```js
assert($('img').css('border-right-style') === 'solid');
```

El borde alrededor de tu elemento `img` debe ser verde.

```js
assert($('img').css('border-left-color') === 'rgb(0, 128, 0)');
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

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .smaller-image {
    width: 100px;
  }

  .thick-green-border {
    border-width: 10px;
    border-color: green;
    border-style: solid;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
