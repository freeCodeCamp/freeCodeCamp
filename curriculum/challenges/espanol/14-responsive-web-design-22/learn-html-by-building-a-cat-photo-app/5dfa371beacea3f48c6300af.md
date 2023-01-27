---
id: 5dfa371beacea3f48c6300af
title: Paso 19
challengeType: 0
dashedName: step-19
---

# --description--

Cuando añades un elemento de título de menor rango a la página, se da a entender que estás iniciando una nueva sub-sección.

Después del elemento `h2` del segundo elemento `section`, añade un elemento `h3` con este texto:

`Things cats love:`

# --hints--

Al segundo elemento `section` parece faltarle las etiquetas de apertura y cierre.

```js
assert(
  document.querySelectorAll('main > section')[1] &&
    code.match(/\<\/section>/g).length == 2
);
```

Debe haber un elemento `h3` arriba de la etiqueta de cierre del segundo elemento `section`.

```js
assert(
  document.querySelectorAll('main > section')[1].lastElementChild.nodeName ===
    'H3'
);
```

El elemento `h3` que está arriba de la etiqueta de cierre del segundo elemento `section` debe tener el texto `Things cats love:`. Asegúrate de incluir los dos puntos al final del texto.

```js
assert(
  document
    .querySelectorAll('main > section')[1]
    .lastElementChild.innerText.toLowerCase()
    .replace(/\s+/g, ' ') === 'things cats love:'
);
```

Debe haber un elemento `h2` con el texto `Cat Lists` arriba del elemento `h3` que está anidado en el último elemento `section`. Probablemente eliminaste el elemento `h2`.

```js
const secondSectionLastElemNode = document.querySelectorAll('main > section')[1]
  .lastElementChild;
assert(
  secondSectionLastElemNode.nodeName === 'H3' &&
    secondSectionLastElemNode.previousElementSibling.innerText
      .toLowerCase()
      .replace(/\s+/g, ' ') === 'cat lists'
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
--fcc-editable-region--
      <section>
        <h2>Cat Lists</h2>

      </section>
--fcc-editable-region--
    </main>
  </body>
</html>
```

