---
id: 587d7fa7367417b2b2512bc7
title: Cambia estilos con base en los datos
challengeType: 6
forumTopicId: 301479
dashedName: change-styles-based-on-data
---

# --description--

D3 se trata de la visualización y presentación de datos. Probablemente vayas a querer estilizar los elementos con base en los datos. Por ejemplo, puede que desas colorear un punto de datos en azul si tiene un valor inferior a 20, y en rojo en caso contrario. Puedes utilizar una función callback en el método `style()` e incluir la lógica condicional. La función callback utiliza el parámetro `d` para representar el punto de datos:

```js
selection.style("color", (d) => {

});
```

El método `style()` no se limita a establecer el `color` - también se puede utilizar con otras propiedades CSS.

# --instructions--

Agrega el método `style()` al código del editor para establecer el `color` de los elementos `h2` de forma condicional. Escribe la función callback de forma que si el valor de los datos es inferior a 20, devuelva rojo, en caso contrario devuelva verde.

**Nota:** Puedes utilizar la lógica if-else, o el operador ternario.

# --hints--

El primer `h2` debe tener un `color` rojo.

```js
assert($('h2').eq(0).css('color') == 'rgb(255, 0, 0)');
```

El segundo `h2` debe tener un `color` verde.

```js
assert($('h2').eq(1).css('color') == 'rgb(0, 128, 0)');
```

El tercer `h2` debe tener un `color` verde.

```js
assert($('h2').eq(2).css('color') == 'rgb(0, 128, 0)');
```

El cuarto `h2` debe tener un `color` rojo.

```js
assert($('h2').eq(3).css('color') == 'rgb(255, 0, 0)');
```

El quinto `h2` debe tener un `color` verde.

```js
assert($('h2').eq(4).css('color') == 'rgb(0, 128, 0)');
```

El sexto `h2` debe tener un `color` rojo.

```js
assert($('h2').eq(5).css('color') == 'rgb(255, 0, 0)');
```

El séptimo `h2` debe tener un `color` verde.

```js
assert($('h2').eq(6).css('color') == 'rgb(0, 128, 0)');
```

El octavo `h2` debe tener un `color` rojo.

```js
assert($('h2').eq(7).css('color') == 'rgb(255, 0, 0)');
```

El noveno `h2` debe tener un `color` rojo.

```js
assert($('h2').eq(8).css('color') == 'rgb(255, 0, 0)');
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
      .style("color", (d) => d < 20 ? "red" : "green")
  </script>
</body>
```
