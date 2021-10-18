---
id: bad87fee1348bd9aede08817
title: Anida un elemento anchor dentro de un párrafo
challengeType: 0
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

Puedes anidar enlaces dentro de otros elementos de texto.

```html
<p>
  Here's a <a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org</a> for you to follow.
</p>
```

Desglosemos el ejemplo. El texto normal está envuelto en el elemento `p`:

```html
<p> Here's a ... for you to follow. </p>
```

A continuación está el elemento *anchor* `<a>` (que requiere una etiqueta de cierre `</a>`):

```html
<a> ... </a>
```

`target` es un atributo de etiqueta anchor que especifica dónde abrir el enlace. El valor `_blank` especifica abrir el enlace en una nueva pestaña. El `href` es un atributo de etiqueta anchor que contiene la dirección URL del enlace:

```html
<a href="https://www.freecodecamp.org" target="_blank"> ... </a>
```

El texto, `link to www.freecodecamp.org`, dentro de un elemento `a` se llama <dfn>texto de anclaje</dfn>, y mostrará el enlace para hacer clic:

```html
<a href=" ... " target="...">link to freecodecamp.org</a>
```

El resultado final del ejemplo se verá así:

Here's a <a href="https://www.freecodecamp.org" target="_blank">link to www.freecodecamp.org</a> for you to follow.

# --instructions--

Anida el elemento `a` existente dentro de un nuevo elemento `p`. No vayas a crear una nueva etiqueta de anchor. El nuevo párrafo debe tener un texto que diga `View more cat photos`, donde `cat photos` es un enlace, y el resto es texto regular.

# --hints--

Solo debes tener un elemento `a`.

```js
assert(
  $('a').length  === 1 
);
```

El elemento `a` debe enlazar a "`https://www.freecatphotoapp.com`".

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);
```

Tu elemento `a` debe contener el texto anchor de `cat photos`

```js
assert(
  $('a')
    .text()
    .match(/cat\sphotos/gi)
);
```

Debes crear un nuevo elemento `p`. Debe haber al menos 3 etiquetas `p` en tu código HTML.

```js
assert($('p') && $('p').length > 2);
```

Tu elemento `a` debe ser anidado dentro de tu nuevo elemento `p`.

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);
```

El elemento `p` debe contener el texto `View more` (con un espacio después de él).

```js
assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi)
);
```

Tu elemento `a` <em>no</em> debe tener el texto `View more`.

```js
assert(
  !$('a')
    .text()
    .match(/View\smore/gi)
);
```

Cada uno de los elementos `p` debe tener una etiqueta de cierre.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Cada uno de tus elementos `a` debe tener una etiqueta de cierre.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
