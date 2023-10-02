---
id: bad87fee1348bd9aedf08817
title: Crea enlaces muertos utilizando el símbolo hash
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

A veces quieres agregar elementos `a` en tu sitio web antes de saber dónde se enlazarán.

Esto también es útil cuando estás cambiando el comportamiento de un enlace usando `JavaScript`, sobre el cual aprenderemos más adelante.

# --instructions--

El valor actual del atributo `href` es un enlace que apunta a "`https://www.freecatphotoapp.com`". Reemplaza el valor del atributo `href` por un `#` (también conocido como símbolo hash, numeral o almohadilla) para crear un enlace muerto.

Por ejemplo: `href="#"`

# --hints--

Tu elemento `a` debe ser un enlace muerto con el valor del atributo `href` establecido como "#".

```js
assert($('a').attr('href') === '#');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
