---
id: 587d7fa8367417b2b2512bcb
title: Aprende sobre SVG en D3
challengeType: 6
forumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> significa <dfn>Scalable Vector Graphics</dfn> (Gráficos vectoriales escalables).

Aquí "escalable" significa que, si te acercas o alejas a un objeto, no se vería pixelado. El objeto escala con la pantalla, ya sea en una pequeña pantalla de teléfono o en un gran monitor de TV.

SVG se utiliza para crear formas geométricas comunes. Ya que D3 traza datos en una representación visual, utiliza SVG para crear las formas para la visualización. Las formas SVG para una página web deben ir dentro de una etiqueta HTML llamada `svg`.

CSS puede ser escalable cuando los estilos usan medidas relativas (como por ejemplo `vh`, `vw` o porcentajes), pero usar SVG es más flexible para construir visualizaciones de datos.

# --instructions--

Agrega un nodo `svg` al `body` utilizando `append()`. Dale un atributo `width` con el valor de la constante `w` proporcionada, y un atributo `height` con el valor de la constante `h` proporcionado, utilizando los métodos `attr()` o `style()` para cada uno de ellos. Lo verás en la salida porque hay un `background-color` (color de fondo) rosa aplicado en la etiqueta `style`.

**Nota:** Al utilizar `attr()` los atributos width (ancho) y height (alto) no llevan unidades. Este es el bloque de construcción de la escala: el elemento siempre tendrá una relación ancho a alto de 5:1, sin importar el nivel de zoom.

# --hints--

Tu documento debe tener 1 elemento `svg`.

```js
assert($('svg').length == 1);
```

El elemento `svg` debe tener un atributo `width` establecido en `500` o estilizado para tener un ancho de `500px`.

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

El elemento `svg` debe tener un atributo `height` establecido en `100` o estilizado para tener una altura de `100px`.

```js
assert($('svg').attr('height') == '100' || $('svg').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
  </script>
</body>
```
