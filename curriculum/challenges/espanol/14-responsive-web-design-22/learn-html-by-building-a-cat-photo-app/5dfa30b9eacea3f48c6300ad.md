---
id: 5dfa30b9eacea3f48c6300ad
title: Paso 15
challengeType: 0
dashedName: step-15
---

# --description--

Convierte la imagen en un enlace rodeándola con las etiquetas correctas. Utiliza `https://freecatphotoapp.com` como valor del atributo `href` del elemento archor.

# --hints--

Debes tener un elemento `img` cuyo valor del atributo `src` debe ser `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. Puede que lo hayas borrado accidentalmente.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

Tu elemento (`a`) debe tener una etiqueta de apertura. Las etiquetas de apertura tienen esta sintaxis: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

Solo debes añadir una etiqueta de apertura del elemento anchor (`a`). Elimina cualquier extra.

```js
assert(document.querySelectorAll('a').length === 2);
```

Tu elemento anchor (`a`) debe tener una etiqueta de cierre. Las etiquetas de cierre tienen una `/` inmediatamente después del carácter `<`.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

Solo debes añadir una etiqueta de cierre del elemento anchor (`a`). Elimina cualquier extra.

```js
assert(code.match(/<\/a>/g).length === 2);
```

Tu elemento anchor (`a`) no tiene un atributo `href`. Comprueba que hay un espacio después del nombre de la etiqueta de apertura y/o que hay espacios antes de todos los nombres de los atributos.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

Tu elemento anchor (`a`) te debe de llevar a `https://freecatphotoapp.com`. Probablemente no has añadido la URL o tienes un error tipográfico.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

Tu elemento `img` debe estar anidado dentro del elemento anchor (`a`). Todo el elemento `img` debe estar entre las etiquetas de apertura y cierre del elemento anchor (`a`).

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

