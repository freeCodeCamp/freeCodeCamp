---
id: 587d7fac367417b2b2512bdc
title: >-
  Utiliza las funciones d3.max y d3.min para encontrar valores mínimos y máximos en un conjunto de datos
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

Los métodos D3 `domain()` y `range()` establecen esa información para tu escala basada en los datos. Hay algunos métodos para hacerlo más fácil.

A menudo cuando estableces el dominio, querrás utilizar los valores mínimo y máximo dentro del conjunto de datos. Intentar buscar estos valores manualmente, especialmente en un conjunto de datos grande, puede causar errores.

D3 tiene dos métodos: `min()` y `max()` para devolver esta información. He aquí un ejemplo:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

Un conjunto de datos podría tener arreglos anidados, como lo estaban el par de coordenada `[x, y]` en el ejemplo del diagrama de dispersión. En ese caso, necesitas decirle a D3 cómo calcular el máximo y el mínimo. Afortunadamente, ambos métodos `min()` y `max()` toman una función callback. En este ejemplo, el argumento de la función callback `d` es para el arreglo interno actual. El callback necesita retornar el elemento desde el arreglo interno (el valor de `x` o de `y`) sobre el cual quieres computar el máximo o el mínimo. Aquí hay un ejemplo de cómo encontrar los valores mínimo y máximo con un arreglo de arreglos:

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` tendría el valor `1`.

# --instructions--

El arreglo `positionData` contiene sub-arreglos de las coordenadas x, y, y z. Utiliza un método D3 para hallar el valor máximo de la coordenada z (el tercer valor) de los arreglos y guárdalo en la variable `output`.

# --hints--

El texto en el `h2` debe ser `8`.

```js
assert(output == 8 && $('h2').text() == '8');
```

Tu código debe usar el método `max()`.

```js
assert(
  code.match(/\.max/g),
  'Your code should use the <code>max()</code> method.'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

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
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
