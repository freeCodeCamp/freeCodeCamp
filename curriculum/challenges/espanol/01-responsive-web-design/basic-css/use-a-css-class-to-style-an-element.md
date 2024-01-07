---
id: bad87fee1348bd9aecf08806
title: Usa una clase CSS para aplicar estilos a un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MvDtV'
forumTopicId: 18337
dashedName: use-a-css-class-to-style-an-element
---

# --description--

Las clases son estilos reutilizables que se pueden agregar a los elementos HTML.

A continuación te presentamos un ejemplo de cómo declarar una clase CSS:

```html
<style>
  .blue-text {
    color: blue;
  }
</style>
```

Puedes ver que hemos creado una clase CSS llamada `blue-text` dentro de la etiqueta `<style>`. Puedes aplicar una clase a un elemento HTML de este modo: `<h2 class="blue-text">CatPhotoApp</h2>`. Ten en cuenta que en tu elemento CSS `style`, los nombres de clase comienzan con un punto. En el atributo "class" de tus elementos HTML, el nombre de la clase no lleva punto delante.

# --instructions--

Dentro de tu elemento `style`, cambia el selector `h2` a `.red-text` y actualiza el valor del color de `blue` a `red`.

Asigna a tu elemento `h2` el atributo `class` con un valor de `red-text`.

# --hints--

Tu elemento `h2` debe ser de color rojo ("red").

```js
assert($('h2').css('color') === 'rgb(255, 0, 0)');
```

Tu elemento `h2` debe incluir la clase `red-text`.

```js
assert($('h2').hasClass('red-text'));
```

Tu hoja de estilos debe declarar una clase `red-text` y su color debe ser `red` (rojo).

```js
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;?\s*\}/g));
```

No debes usar declaraciones de tipo inline style como `style="color: red"` en tu elemento `h2`.

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
