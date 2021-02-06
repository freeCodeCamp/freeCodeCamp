---
id: bad87fee1348bd9aede08817
title: Anida un elemento anchor dentro de un párrafo
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cb6k8Cb'
forumTopicId: 18244
dashedName: nest-an-anchor-element-within-a-paragraph
---

# --description--

Puedes anidar enlaces dentro de otros elementos de texto.

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

Vamos a desglosar el ejemplo: El texto regular está envuelto en el elemento `p`:  
`<p> Here's a ... for you to follow. </p>` Le sigue el elemento *anchor* `<a>` (el cual requiere una etiqueta de cierre `</a>`):  
`<a> ... </a>`. `target` es un atributo de la etiqueta anchor que especifica donde abrir el enlace y el valor `_blank` especifica abrir el enlace en una nueva pestaña, `href` es un atributo de la etiqueta anchor que contiene la dirección URL del enlace:  
`<a href="http://freecodecamp.org"> ... </a>`. El texto, **"link to freecodecamp.org"**, dentro del elemento `a` llamado `anchor text`, mostrará un enlace para hacer click:  
`<a href=" ... ">link to freecodecamp.org</a>`. El resultado final del ejemplo se verá así:

Aquí hay un enlace [a freecodecamp.org](http://freecodecamp.org) para que lo sigas.

# --instructions--

Anida el elemento `a` existente dentro de un nuevo elemento `p`. El nuevo párrafo debe tener un texto que diga `View more cat photos`, donde `cat photos` es un enlace, y el resto es texto regular.

# --hints--

Debes tener un elemento `a` que enlace a "`https://freecatphotoapp.com`".

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').length > 0 ||
    $('a[href="http://www.freecatphotoapp.com"]').length > 0
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

Debes crear un nuevo elemento `p` alrededor de tu elemento `a`. Debe haber al menos 3 etiquetas `p` en tu código HTML.

```js
assert($('p') && $('p').length > 2);
```

Tu elemento `a` debe ser anidado dentro de tu nuevo elemento `p`.

```js
assert(
  $('a[href="https://freecatphotoapp.com"]').parent().is('p') ||
    $('a[href="http://www.freecatphotoapp.com"]').parent().is('p')
);
```

Tu elemento `p` debe contener el texto `View more` (con un espacio después de él).

```js
assert(
  $('a[href="https://freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\smore\s/gi) ||
    $('a[href="http://www.freecatphotoapp.com"]')
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

Cada uno de tus elementos `p` debe tener una etiqueta de cierre.

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

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a></p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
