---
id: 587d7fa6367417b2b2512bc3
title: Selecciona un grupo de elementos con D3
challengeType: 6
forumTopicId: 301490
dashedName: select-a-group-of-elements-with-d3
---

# --description--

D3 también tiene el método `selectAll()` para seleccionar un grupo de elementos. Devuelve un arreglo de nodos HTML con todos los elementos en el documento que coinciden con el texto ingresado. Aquí hay un ejemplo para seleccionar todas las etiquetas de anclaje en un documento:

```js
const anchors = d3.selectAll("a");
```

Al igual que el método `select()`, `selectAll()` soporta el encadenamiento de métodos, y puedes usarlo con otros métodos.

# --instructions--

Selecciona todas las etiquetas `li` en el documento, y cambia su texto a la cadena `list item` concatenando el método `.text()`.

# --hints--

Debe haber 3 elementos `li` en la pagina, y el texto en cada uno debe ser `list item`. Las mayúsculas y los espacios deben coincidir exactamente.

```js
assert(
  $('li')
    .text()
    .match(/list item/g).length == 3
);
```

Tu código debe acceder al objeto `d3`.

```js
assert(code.match(/d3/g));
```

Tu código debe utilizar el método `selectAll`.

```js
assert(code.match(/\.selectAll/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li")
      .text("list item")
  </script>
</body>
```
