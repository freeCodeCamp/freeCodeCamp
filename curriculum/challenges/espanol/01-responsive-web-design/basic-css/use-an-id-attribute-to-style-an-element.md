---
id: bad87dee1348bd9aede07836
title: Usa un atributo de id para aplicar estilo a un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakyZfL'
forumTopicId: 18339
dashedName: use-an-id-attribute-to-style-an-element
---

# --description--

Una cosa genial de los atributos `id` es que, al igual que las clases, puedes aplicarles estilos con CSS.

Sin embargo, un `id` no es reutilizable y solo debe aplicarse a un único elemento. Un `id` también tiene mayor especificidad (importancia) que una clase, así que si aplicas un id y una clase al mismo elemento y sus estilos se contradicen, se aplicarán los estilos del `id`.

A continuación te mostramos un ejemplo de cómo puedes tomar tu elemento con el atributo `id` llamado `cat-photo-element` y asignarle el color de fondo verde. En tu elemento `style` agrega la siguiente declaración:

```css
#cat-photo-element {
  background-color: green;
}
```

Ten en cuenta que dentro de tu elemento `style` siempre debes hacer referencia a las clases agregándoles un punto `.` adelante del nombre. Para hacer referencia a un id, debes agregar `#` delante de su nombre.

# --instructions--

Intenta asignar a tu formulario, que ahora tiene el atributo `id` llamado `cat-photo-form`, un fondo verde.

# --hints--

Tu elemento `form` debe tener el id `cat-photo-form`.

```js
assert($('form').attr('id') === 'cat-photo-form');
```

Tu elemento `form` debe tener `background-color` de color verde (green).

```js
assert($('#cat-photo-form').css('background-color') === 'rgb(0, 128, 0)');
```

Tu elemento `form` debe tener un atributo `id`.

```js
assert(
  code.match(/<form.*cat-photo-form.*>/gi) &&
    code.match(/<form.*cat-photo-form.*>/gi).length > 0
);
```

No debes asignar a tu `form` ningún atributo `class` o `style`.

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
