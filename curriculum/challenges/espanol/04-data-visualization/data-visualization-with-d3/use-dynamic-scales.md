---
id: 587d7fac367417b2b2512bdd
title: Utiliza escalas dinámicas
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

Los métodos `min()` y `max()` de D3 son útiles para ayudar a establecer la escala.

Dado un conjunto de datos complejo, una de las prioridades es establecer la escala para que la visualización encaje la anchura y altura del contenedor SVG. You want all the data plotted inside the SVG so it's visible on the web page.

El siguiente ejemplo establece la escala del eje x para datos de un diagrama de dispersión. El método `domain()` envía información a la escala sobre los valores originales de los datos para el trazado. El método `range()` le proporciona información sobre el espacio actual en la página web para la visualización.

En el ejemplo, el dominio va de 0 al máximo en el conjunto. Utiliza el método `max()` con una función callback basada en los valores de x en los arreglos. The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

```js
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

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

El padding (relleno) podría ser confuso en un principio. Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). Incluir el padding en el método `range()` obliga al trazado a empezar en 30 a lo largo de esa línea (en lugar de 0), y terminar en 470 (en lugar de 500).

# --instructions--

Utiliza la variable `yScale` para crear una escala lineal para el eje y. El dominio debe comenzar en cero e ir hasta el máximo valor de `y` en el conjunto. El rango debe usar la altura de SVG (`h`) e incluir padding (relleno).

**Nota:** Recuerda mantener el trazado hacia arriba. Cuando estableces el rango para las coordenadas y, el valor más alto (altura menos el relleno) es el primer argumento, y el valor más bajo es el segundo argumento.

# --hints--

El texto en el `h2` debe ser `30`.

```js
assert(output == 30 && $('h2').text() == '30');
```

El `domain()` de yScale debe ser equivalente a `[0, 411]`.

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

El `range()` de yScale debe ser equivalente a `[470, 30]`.

```js
assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));
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

    // Padding between the SVG boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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


    const padding = 30;

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);


    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
