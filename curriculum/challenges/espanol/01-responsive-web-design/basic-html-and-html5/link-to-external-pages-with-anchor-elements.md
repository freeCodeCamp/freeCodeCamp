---
id: bad87fee1348bd9aedf08816
title: Enlaza hacia páginas externas con los elementos anchor
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

Puedes usar los elementos `a` (*anchor*) para enlazar a contenido fuera de tu página web.

Los elementos `a` requieren un atributo `href` con la dirección web de destino. También necesitan un texto anchor. Por ejemplo:

```html
<a href="https://www.freecodecamp.org">this links to freecodecamp.org</a>
```

Entonces tu navegador mostrará el texto `this links to freecodecamp.org` como un enlace que puedes hacer clic. Y ese enlace te llevará a la dirección web `https://www.freecodecamp.org`.

# --instructions--

Crea un elemento `a` que enlaza a `https://www.freecatphotoapp.com` y tiene "cat photos" como su texto de ancla.

# --hints--

Tu elemento `a` debe contener el texto anchor: `cat photos`.

```js
assert(/cat photos/gi.test($('a').text()));
```

Necesitas un elemento `a` que enlace a `https://www.freecatphotoapp.com`

```js
assert(/^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($('a').attr('href')));
```

Tu elemento `a` debe tener una etiqueta de cierre.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <a href="https://www.freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
