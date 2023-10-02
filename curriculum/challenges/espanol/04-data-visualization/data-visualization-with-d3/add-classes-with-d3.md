---
id: 587d7fa7367417b2b2512bc8
title: Agrega clases con D3
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

Usar muchos estilos en línea en elementos HTML se vuelve difícil de administrar, incluso para aplicaciones más pequeñas. Es más fácil agregar una clase a los elementos y darle estilo a esa clase una vez usando las reglas CSS. D3 tiene el método `attr()` para agregar cualquier atributo HTML a un elemento, incluido un nombre de clase.

El método `attr()` funciona de la misma manera que `style()`. Toma valores separados por comas y puede usar una función callback. A continuación, se muestra un ejemplo para agregar una clase de `container` a una selección:

```js
selection.attr("class", "container");
```

Ten en cuenta que el parámetro `class` seguirá siendo el mismo siempre que necesites agregar una clase y solo cambiará el parámetro `container`.

# --instructions--

Agrega el método `attr()` al código en el editor y coloca una clase de `bar` en los elementos `div`.

# --hints--

Tus elementos `div` deben tener una clase de `bar`.

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

Tu código debe usar el método `attr()`.

```js
assert(code.match(/\.attr/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```
