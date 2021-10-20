---
id: bad87fee1348bd9aedf08805
title: Utiliza selectores CSS para dar estilo a elementos
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKMBT2'
forumTopicId: 18349
dashedName: use-css-selectors-to-style-elements
---

# --description--

En CSS tienes a tu disposición cientos de propiedades CSS que puedes usar para cambiar el aspecto de un elemento de tu página.

Cuando escribiste `<h2 style="color: red;">CatPhotoApp</h2>`, estabas aplicando un estilo a ese elemento `h2` específico usando CSS en línea; CSS significa hojas de estilo en cascada (Cascading Style Sheets).

Inline CSS es una de las formas de especificar el estilo de un elemento, pero existe una mejor forma de aplicar estilos CSS.

En la parte superior de tu código, crea un bloque `style` como el que se ve a continuación:

```html
<style>
</style>
```

Dentro de ese bloque de estilo (style), puedes crear un <dfn>selector CSS</dfn> para todos los elementos `h2`. Por ejemplo, para que todos los elementos `h2` sean de color rojo puedes añadir una regla de estilo como la siguiente:

```html
<style>
  h2 {
    color: red;
  }
</style>
```

Ten en cuenta que es importante tener tanto llaves de apertura como de cierre (`{` y `}`) alrededor de la(s) regla(s) de estilo de cada elemento. También debes asegurarte de que tu definición de estilo para ese elemento esté dentro de las etiquetas de apertura y cierre de estilo. Por último, asegúrate de añadir un punto y coma (;) al final de cada una de las reglas de estilo de tu elemento.

# --instructions--

Elimina el atributo de estilo de tu elemento `h2` y crea un bloque `style` para agregar tu código CSS. Añade el código CSS necesario para hacer que todos los elementos `h2` sean de color azul (blue).

# --hints--

Debes eliminar el atributo `style` que está aplicado directamente a tu elemento `h2`.

```js
assert(!$('h2').attr('style'));
```

Debes crear un elemento `style`.

```js
assert($('style') && $('style').length >= 1);
```

Tu elemento `h2` debe ser de color azul.

```js
assert($('h2').css('color') === 'rgb(0, 0, 255)');
```

Tu la declaración de estilo para `h2` debe ser válida, con punto y coma y llave de cierre.

```js
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g));
```

Todos tus elementos `style` deben ser válidos y tener etiquetas de cierre.

```js
assert(
  code.match(/<\/style>/g) &&
    code.match(/<\/style>/g).length ===
      (
        code.match(
          /<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g
        ) || []
      ).length
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
