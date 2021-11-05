---
id: bad87fee1348bd9aedf08830
title: Agrega texto provisional a un campo de texto
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

El texto provisional es lo que se muestra en tu elemento de entrada `input` antes de que el usuario haya ingresado nada.

Puedes crear texto provisional así:

```html
<input type="text" placeholder="this is placeholder text">
```

**Nota:** Recuerda que los elementos `input` se cierran solos.

# --instructions--

Establece el valor de `placeholder` de tu `input` de texto en "cat photo URL".

# --hints--

Debes agregar un atributo `placeholder` al elemento existente `input` de texto.

```js
assert($('input[placeholder]').length > 0);
```

Debes establecer el valor de tu atributo `placeholder` en `cat photo URL`.

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

El elemento `input` terminado no debe tener una etiqueta de cierre.

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

El elemento `input` terminado debe tener una sintaxis válida.

```js
assert($('input[type=text]').length > 0);
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
  <input type="text">
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
  <input type="text" placeholder="cat photo URL">
</main>
```
