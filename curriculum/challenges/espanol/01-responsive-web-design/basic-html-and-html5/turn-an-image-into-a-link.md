---
id: bad87fee1348bd9aedf08820
title: Convierte una imagen en un enlace
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

Puedes convertir elementos en enlaces, anidándolos dentro de un elemento `a`.

Anida tu imagen dentro de un elemento `a`. A continuación, te presentamos un ejemplo:

```html
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Three kittens running towards the camera."></a>
```

Recuerda usar `#` como propiedad `href` de tu elemento `a` para convertirlo en un enlace muerto.

# --instructions--

Coloca el elemento de imagen existente dentro de un elemento `a` (*anchor*).

Una vez que hayas hecho esto, pasa el cursor sobre tu imagen. El puntero habitual de tu cursor debería convertirse en un puntero de click de enlace. Ahora la foto es un enlace.

# --hints--

El elemento `img` existente debe estar anidado dentro de un elemento `a`.

```js
assert($('a').children('img').length > 0);
```

Tu elemento `a` debe ser un enlace muerto con un atributo `href` establecido como `#`.

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
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
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
