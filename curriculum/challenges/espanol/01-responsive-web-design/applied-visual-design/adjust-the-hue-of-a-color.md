---
id: 587d78a4367417b2b2512ad4
title: Ajusta el matiz de un color
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
dashedName: adjust-the-hue-of-a-color
---

# --description--

Los colores tienen varias características tales como el matiz, la saturación y la ligereza. CSS3 introdujo la función `hsl()` como una forma alternativa para elegir un color declarando directamente estas características.

Se suele pensar que **Hue** es el "color". Si imaginas un espectro de colores con un rojo en la izquierda que se torna verde en el medio y azul en la derecha, el tono es donde cabe un color a lo largo de esta línea. En `hsl()`, el tono usa un concepto de círculo cromático en lugar del espectro, donde el ángulo del color en el círculo se da como un valor entre 0 y 360.

**Saturation** es la cantidad de gris en un color. Un color totalmente saturado no tiene gris y un color mínimamente saturado es casi completamente gris. Esto se da como un porcentaje con 100% de saturación.

**Lightness** es la cantidad de blanco en un color. Un porcentaje se da desde 0% (negro) hasta 100% (blanco), donde 50% es el color normal.

Aquí hay algunos ejemplos de `hsl()` con colores de iluminación normales y completamente saturados:

<table class='table table-striped'><thead><tr><th>Color</th><th>HSL</th></tr></thead><tbody><tr><td>rojo</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>amarillo</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>verde</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>cian</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>azul</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>magenta</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

Cambia el `background-color` de cada elemento `div` sobre la base de los nombres de las clases (`green`, `cyan` o `blue`) utilizando `hsl()`. Los tres deben tener una saturación completa y una iluminación normal.

# --hints--

Tu código debe tener la propiedad `hsl()` para declarar el color verde.

```js
assert(code.match(/\.green\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

Tu código debe tener la propiedad `hsl()` para declarar el color cyan.

```js
assert(code.match(/\.cyan\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

Tu código debe tener la propiedad `hsl()` para declarar el color blue.

```js
assert(code.match(/\.blue\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

El elemento `div` con clase `green` debe tener un `background-color` verde.

```js
assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
```

El elemento `div` con clase `cyan` debe tener un `background-color` cian.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

El elemento `div` con clase `blue` debe tener un `background-color` azul.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color:   hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```
