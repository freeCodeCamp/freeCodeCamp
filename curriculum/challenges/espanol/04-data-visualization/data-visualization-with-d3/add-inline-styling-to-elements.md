---
id: 587d7fa7367417b2b2512bc6
title: Agrega elementos de estilización en línea
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3 te permite añadir estilos CSS en línea sobre elementos dinámicos con el método `style()`.

El método `style()` toma un par llave-valor separado por coma como argumento. Aquí hay un ejemplo para establecer el color de texto de la selección a azul:

```js
selection.style("color","blue");
```

# --instructions--

Agrega el método `style()` al código en el editor para hacer que todo el texto mostrado tenga como `font-family` la fuente `verdana`.

# --hints--

Tus elementos `h2` deben tener como `font-family` la fuente `verdana`.

```js
assert($('h2').css('font-family') == 'verdana');
```

Tu código debe utilizar el método `style()`.

```js
assert(code.match(/\.style/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
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

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana")

  </script>
</body>
```
