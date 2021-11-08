---
id: 587d7fa9367417b2b2512bce
title: Establece dinámicamente las coordenadas para cada barra
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

El último desafío crea un rectángulo adjunto al elemento `svg` por cada punto en `dataset` para representar una barra. Desafortunadamente, todas estaban apiladas una arriba de la otra.

La posición de un rectángulo es manejada por los atributos `x` e `y`. Le dicen a D3 dónde empezar a dibujar la figura en el área de `svg`. El último desafío los puso cada uno a 0, por lo que cada barra se colocó en la esquina superior izquierda.

Para un gráfico de barras, todas las barras deben asentarse en el mismo nivel vertical, lo que significa que el valor `y` permanece igual (en 0) para todas las barras. Sin embargo, el valor `x` necesita cambiar a medida que se añaden nuevas barras. Recuerda que los valores de `x` más grandes empujan los elementos más a la derecha. A medida que recorres los elementos del arreglo en `dataset`, el valor `x` debería aumentar.

El método `attr()` en D3 acepta una función callback para establecer dinámicamente ese atributo. La función callback toma dos argumentos, uno para el punto de datos en sí (generalmente `d`) y otro para el índice del punto de datos en el arreglo. El segundo argumento para el índice es opcional. Este es el formato:

```js
selection.attr("property", (d, i) => {

})
```

Es importante tener en cuenta que NO necesitas escribir un bucle `for` o usar `forEach()` para iterar sobre los elementos en el conjunto de datos. Recuerda que el método `data()` analiza el conjunto de datos, y cualquier método que vaya después de `data()` se ejecuta una vez por cada elemento del conjunto de datos.

# --instructions--

Cambia la función callback de atributo `x` para que devuelva el índice multiplicado por 30.

**Nota:** Cada barra tiene un ancho de 25, por lo que cada valor `x` añade algo de espacio entre las barras. Cualquier valor mayor a 25 funcionaría en este ejemplo.

# --hints--

El primer `rect` debe tener un valor `x` de `0`.

```js
assert($('rect').eq(0).attr('x') == '0');
```

El segundo `rect` debe tener un valor `x` de `30`.

```js
assert($('rect').eq(1).attr('x') == '30');
```

El tercer `rect` debe tener un valor `x` de `60`.

```js
assert($('rect').eq(2).attr('x') == '60');
```

El cuarto `rect` debe tener un valor `x` de `90`.

```js
assert($('rect').eq(3).attr('x') == '90');
```

El quinto `rect` debe tener un valor `x` de `120`.

```js
assert($('rect').eq(4).attr('x') == '120');
```

El sexto `rect` debe un valor `x` de `150`.

```js
assert($('rect').eq(5).attr('x') == '150');
```

El séptimo `rect` debe tener un valor `x` de `180`.

```js
assert($('rect').eq(6).attr('x') == '180');
```

El octavo `rect` debe tener un valor `x` de `210`.

```js
assert($('rect').eq(7).attr('x') == '210');
```

El noveno `rect` debe tener un valor `x` de `240`.

```js
assert($('rect').eq(8).attr('x') == '240');
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
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
