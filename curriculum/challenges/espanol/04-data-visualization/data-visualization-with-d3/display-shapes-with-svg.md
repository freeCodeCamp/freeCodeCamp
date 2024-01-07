---
id: 587d7fa8367417b2b2512bcc
title: Muestra formas con SVG
challengeType: 6
forumTopicId: 301485
dashedName: display-shapes-with-svg
---

# --description--

El desafío anterior creó un elemento `svg` con un ancho y alto determinado, el cual era visible porque tenía un `background-color` aplicado a él en la etiqueta `style`. El código dejó espacio para el ancho y la altura dados.

El siguiente paso es crear una forma para poner en el área `svg`. Hay una serie de formas compatibles en SVG, como rectángulos y círculos. Se utilizan para mostrar datos. Por ejemplo, una forma SVG rectangular (`<rect>`) podría crear una barra en un gráfico de barras.

Cuando colocas una forma en el área del `svg`, puedes especificar a donde va a ir con las coordenadas `x` asimismo `y`. El punto de origen (0, 0) está en la esquina superior izquierda. Los valores positivos de `x` empujan la forma a la derecha y los valores positivos para `y` empujan la forma hacia abajo desde el punto de origen.

Para colocar una forma en medio del `svg` de 500 (ancho) x 100 (altura) del último reto, la coordenada `x` sería 250 y la coordenada `y` sería 50.

Un rectángulo(`rect`) de SVG tiene cuatro atributos. Hay coordenadas `x` asimismo `y` para posicionarlo en el área del `svg`. También tiene un `height` (altura) y `width` (ancho) para especificar el tamaño.

# --instructions--

Añade una forma `rect` al `svg` usando `append()`, y dale un atributo `width` de `25` y un atributo `height` de `100`. Además, dale a `rect`, atributos `x` asimismo `y`, establece ambos valores en `0`.

# --hints--

Tu documento debe tener un elemento `rect`.

```js
assert($('rect').length == 1);
```

El elemento `rect` debe tener un atributo `width` de `25`.

```js
assert($('rect').attr('width') == '25');
```

El elemento `rect` debe tener un atributo `height` de `100`.

```js
assert($('rect').attr('height') == '100');
```

El elemento `rect` debe tener un atributo `x` de `0`.

```js
assert($('rect').attr('x') == '0');
```

El elemento `rect` debe tener un atributo `y` de `0`.

```js
assert($('rect').attr('y') == '0');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0);
  </script>
</body>
```
