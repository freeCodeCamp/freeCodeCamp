---
id: 5dfb5ecbeacea3f48c6300b1
title: Paso 21
challengeType: 0
dashedName: step-21
---

# --description--

Utiliza la etiqueta (`li` - list item) para agregar elementos a una lista. Aquí hay un ejemplo de una lista de objetos en una lista desordenada:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Dentro del elemento `ul` anida tres elementos li para mostrar tres cosas que aman los gatos:

`cat nip` `laser pointers` `lasagna`

# --hints--

Debes tener tres elementos `li`. Cada elemento `li` debe tener su propia etiqueta de apertura y cierre.

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

Debes tener tres elementos `li` con los textos `cat nip`, `laser pointers` y `lasagna` en cualquier orden. Probablemente no has añadido el texto o tienes un error tipográfico.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

Los tres elementos `li` deben estar entre las etiquetas de apertura y cierre del elemento `ul`.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

