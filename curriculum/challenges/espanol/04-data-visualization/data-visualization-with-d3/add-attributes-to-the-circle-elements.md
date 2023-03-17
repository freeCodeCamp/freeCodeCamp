---
id: 587d7fab367417b2b2512bd8
title: Añade atributos a los elementos del círculo
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

The last challenge created the `circle` elements for each point in the `dataset`, and appended them to the SVG. Pero D3 necesita más información sobre la posición y el tamaño de cada `circle` para mostrarlos correctamente.

Un `circle` en SVG tiene tres atributos principales. Los atributos `cx` y `cy` son las coordenadas. They tell D3 where to position the *center* of the shape on the SVG. El radio (atributo `r`) da el tamaño del `circle`.

Just like the `rect` `y` coordinate, the `cy` attribute for a `circle` is measured from the top of the SVG, not from the bottom.

Los tres atributos pueden usar una función callback para establecer sus valores de forma dinámica. Recuerda que todos los métodos encadenados después de `data(dataset)` se ejecutan una vez por elemento en `dataset`. El parámetro `d` en la función callback se refiere al elemento actual en `dataset`, que es un arreglo para cada punto. Utiliza la notación de corchetes, como `d[0]`, para acceder a los valores de ese arreglo.

# --instructions--

Agrega los atributos `cx`, `cy` y `r` a los elementos `circle`. El valor de `cx` debe ser el primer número en el arreglo para cada elemento en `dataset`. El valor de `cy` debe basarse en el segundo número del arreglo, pero asegúrese de mostrar el gráfico del lado derecho hacia arriba y no invertido. El valor de `r` debe ser `5` para todos los círculos.

# --hints--

Tu código debe tener 10 elementos `circle`.

```js
assert($('circle').length == 10);
```

El primer elemento `circle` debe tener un `cx` con valor de `34`, un `cy` con valor de `422` y un `r` con valor de `5`.

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

El segundo elemento `circle` debe tener un `cx` con valor de `109`, un `cy` con valor de `220` y un `r` con valor de `5`.

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

El tercer elemento `circle` debe tener un `cx` con valor de `310`, un `cy` con valor de `380` y un `r` con valor de `5`.

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

El cuarto elemento `circle` debe tener un `cx` valor de `79`, un `cy` valor de `89` y un `r` valor de `5`.

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

El quinto elemento `circle` debe tener un `cx` valor de `420`, un `cy` valor de `280` y un `r` valor de `5`.

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

El sexto elemento `circle` debe tener un `cx` con valor de `233`, un `cy` con valor de `355` y un `r` con valor de `5`.

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

El séptimo elemento `circle` debe tener un `cx` con valor de `333`, un `cy` con valor de `404` y un `r` con valor de `5`.

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

El octavo elemento `circle` debe tener un `cx` con valor de `222`, un `cy` con valor de `167` y un `r` con valor de `5`.

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

El noveno elemento `circle` debe tener un `cx` con valor de `78`, un `cy` con valor de `180` y un `r` con valor de `5`.

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

El décimo elemento `circle` debe tener un `cx` con valor de `21`, un `cy` con valor de `377` y un `r` con valor de `5`.

```js
assert(
  $('circle').eq(9).attr('cx') == '21' &&
    $('circle').eq(9).attr('cy') == '377' &&
    $('circle').eq(9).attr('r') == '5'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line



       // Add your code above this line

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>
```
