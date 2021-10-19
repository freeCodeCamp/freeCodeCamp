---
id: bad87fee1348bd9aedf08835
title: Crea un conjunto de casillas de verificación
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
dashedName: create-a-set-of-checkboxes
---

# --description--

Los formularios suelen usar casillas de verificación (<dfn>checkboxes</dfn>) para preguntas que puedan tener más de una respuesta.

Las casillas de verificación son un tipo de `input` (entrada).

Cada una de tus casillas de verificación puede anidarse dentro de su propio elemento `label`. Envolver un elemento `input` dentro de un elemento `label` asociará automáticamente ese input de tipo checkbox con el elemento label que lo rodea.

Todos los inputs de tipo casilla de verificación que están relacionados entre sí deben tener el mismo atributo `name`.

Se considera buena práctica definir explícitamente la relación entre un `input` de tipo checkbox (casilla de verificación) y su correspondiente `label` (etiqueta), estableciendo el atributo `for` en el elemento `label` para que coincida con el atributo `id` del `input` asociado.

A continuación te presentamos un ejemplo de una casilla de verificación:

```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
```

# --instructions--

Agrega a tu formulario un conjunto de tres casillas de verificación. Cada casilla de verificación debe anidarse dentro de su propio elemento `label`. Las tres deben compartir el atributo `name` con el valor `personality` (personalidad).

# --hints--

Tu página debe tener tres elementos de casilla de verificación.

```js
assert($('input[type="checkbox"]').length > 2);
```

Cada uno de tus tres elementos de casilla de verificación debe anidarse en su propio elemento `label`.

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

Asegúrate de que cada uno de tus elementos `label` tenga una etiqueta de cierre.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

Tus casillas de verificación deben tener el atributo `name` establecido con el valor `personality`.

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);
```

Debes agregar cada una de tus casillas de verificación dentro de la etiqueta `form`.

```js
assert($('label').parent().get(0).tagName.match('FORM'));
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
