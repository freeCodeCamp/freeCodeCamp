---
id: 5f356ed6cf6eab5f15f5cfe6
title: Paso 20
challengeType: 0
dashedName: step-20
---

# --description--

El elemento `div` se utiliza principalmente para própositos de diseño a diferencia de los otros elementos de contenido que has usado hasta ahora. Añade un elemento `div` dentro del elemento `body` y luego mueve todos los demás elementos dentro del nuevo `div`.

# --hints--

Debes tener una etiqueta `<div>` de apertura.

```js
assert(code.match(/<div>/i));
```

Debes tener una etiqueta `</div>` de cierre.

```js
assert(code.match(/<\/div>/i));
```

No debes modificar el elemento `body` existente. Asegúrate de que no eliminaste la etiqueta de cierre.

```js
assert($('body').length === 1);
```

Tu etiqueta `div` debe estar anidada dentro del elemento `body`.

```js
const div = $('div')[0];
assert(div.parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cafe Menu</title>
    <link href="styles.css" rel="stylesheet"/>
  </head>
--fcc-editable-region--
  <body>
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
--fcc-editable-region--
</html>
```

```css
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
```

