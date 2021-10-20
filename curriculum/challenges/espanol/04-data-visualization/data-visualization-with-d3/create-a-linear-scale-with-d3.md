---
id: 587d7fab367417b2b2512bda
title: Crea una escala lineal con D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

La barra y los diagramas de dispersión dibujan los datos directamente en el lienzo SVG. Sin embargo, si la altura de una barra o uno de los puntos de dato fuesen mayores que los valores de ancho (width) o largo (height) del SVG, se irían fuera del área del SVG.

En D3, hay escalas para ayudar a trazar datos. `scales` son funciones que le dicen al programa cómo asignar un conjunto de puntos de datos en bruto, a los píxeles del lienzo SVG.

Por ejemplo, digamos que tienes un lienzo SVG de 100x500 y quieres trazar el Producto Bruto Interno(PBI) para una cantidad de países. El conjunto de números estaría en el rango de miles de millones o billones de dólares. Tú le provees a D3 un tipo de escala para decirle cómo colocar los grandes valores de PBI en esa área de tamaño 100x500.

Es muy poco probable que traces los datos en bruto tal como son. Antes de trazarlo, estableces la escala para todo tu conjunto de datos(data set), para que los valores de `x` e `y` vayan dentro del alto y ancho de tu lienzo.

D3 tiene varios tipos de escalas. Para una escala lineal (usualmente usada con datos cuantitativos), existe el método de D3 `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

Por defecto, una escala usa la relación de identidad. El valor de la entrada es el mismo que el valor de la salida. Un desafío aparte cubre como cambiar esto.

# --instructions--

Cambia la variable `scale` para crear una escala lineal. Luego, establece la variable `output` a la escala llamada, con un argumento de entrada (input) de `50`.

# --hints--

El texto en el `h2` debe ser `50`.

```js
assert($('h2').text() == '50');
```

Tu código debe utilizar el método `scaleLinear()`.

```js
assert(code.match(/\.scaleLinear/g));
```

La variable `output` debe llamar a `scale` con un argumento de `50`.

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```
