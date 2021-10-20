---
id: 587d7fa8367417b2b2512bc9
title: Actualiza la altura de un elemento dinámicamente
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

Los desafíos anteriores cubrieron cómo mostrar los datos de un arreglo y cómo agregar clases CSS. Puedes combinar estas lecciones para crear un simple gráfico de barras. Hay dos pasos para conseguirlo:

1) Crea un `div` por cada punto de datos en el arreglo

2) Dale a cada `div` una altura dinámica, usa la función callback en el método `style()` que establece una altura igual al valor de los datos

Recuerda el formato para establecer un estilo usando una función callback:

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

Añade el método `style()` al código en el editor para establecer la propiedad `height` a cada elemento. Usa una función callback para devolver el valor de los datos con la cadena `px` añadida a él.

# --hints--

El primer `div` debe tener un valor `height` de `12` píxeles.

```js
assert($('div').eq(0)[0].style.height === '12px');
```

El segundo `div` debe tener un valor `height` de `31` píxeles.

```js
assert($('div').eq(1)[0].style.height === '31px');
```

El tercer `div` debe tener un valor `height` de `22` píxeles.

```js
assert($('div').eq(2)[0].style.height === '22px');
```

El cuarto `div` debe tener un valor `height` de `17` píxeles.

```js
assert($('div').eq(3)[0].style.height === '17px');
```

El quinto `div` debe tener un valor `height` de `25` píxeles.

```js
assert($('div').eq(4)[0].style.height === '25px');
```

El sexto `div` debe tener un valor `height` de `18` píxeles.

```js
assert($('div').eq(5)[0].style.height === '18px');
```

El séptimo `div` debe tener un valor `height` de `29` píxeles.

```js
assert($('div').eq(6)[0].style.height === '29px');
```

El octavo `div` debe tener un valor `height` de `14` píxeles.

```js
assert($('div').eq(7)[0].style.height === '14px');
```

El noveno `div` debe tener un valor `height` de `9` píxeles.

```js
assert($('div').eq(8)[0].style.height === '9px');
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
      .attr("class", "bar")
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
      .attr("class", "bar")
      .style('height', d => `${d}px`)
  </script>
</body>
```
