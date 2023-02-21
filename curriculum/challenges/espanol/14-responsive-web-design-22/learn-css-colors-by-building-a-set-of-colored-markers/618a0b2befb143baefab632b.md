---
id: 618a0b2befb143baefab632b
title: Paso 37
challengeType: 0
dashedName: step-37
---

# --description--

Obsérvese que los colores rojo y cian son muy brillantes uno al lado del otro. Si se hace un uso abusivo de este contraste, puede acabar distrayendo la atención, y además puede hacer un texto difícil de leer si está sobre un fondo con un color complementario.

Es mejor práctica elegir un color como dominante, y usar su complementario como énfasis para dirigir la atención sobre cierto contenido de la página.

First, in the `h1` rule, use the `rgb` function to set its `background-color` to cyan.

# --hints--

No debes eliminar o modificar la propiedad `text-align` o su valor.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.textAlign === 'center');
```

Tu regla CSS `h1` debe tener una propiedad `background-color` establecida a `rgb(0, 255, 255)`.

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.backgroundColor === 'rgb(0, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
--fcc-editable-region--
h1 {
  text-align: center;
}
--fcc-editable-region--

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.one {
  background-color: rgb(255, 0, 0);
}

.two {
  background-color: rgb(0, 255, 255);
}

.three {
  background-color: rgb(0, 0, 0);
}

```
