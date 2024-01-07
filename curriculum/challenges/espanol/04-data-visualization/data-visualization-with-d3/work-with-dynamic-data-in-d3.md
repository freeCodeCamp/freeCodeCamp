---
id: 587d7fa7367417b2b2512bc5
title: Trabaja con datos dinámicos en D3
challengeType: 6
forumTopicId: 301498
dashedName: work-with-dynamic-data-in-d3
---

# --description--

Los dos últimos desafíos cubren las básicas de mostrar datos dinámicamente con D3 utilizando los métodos `data()` y `enter()`. Estos métodos toman un conjunto de datos y, junto con el método `append()`, crean un nuevo elemento DOM para cada entrada en el conjunto de datos.

En el desafío anterior, haz creado un nuevo elemento `h2` para cada artículo en el arreglo `dataset`, pero todos contenían el mismo texto, `New Title`. Esto es porque no has usado los datos que están vinculados a cada uno de los elementos `h2`.

El método `text()` de D3 puede tomar una cadena o una función callback como argumento:

```js
selection.text((d) => d)
```

En el ejemplo superior, el parámetro `d` hace referencia a una sola entrada en el conjunto de datos a la cual la selección está vinculada.

Utilizando el ejemplo actual como contexto, el primer elemento `h2` está vinculado a 12, el segundo elemento `h2` está vinculado a 31, el tercer elemento `h2` está vinculado a 22, y así sucesivamente.

# --instructions--

Cambia el método `text()` para que cada elemento `h2` muestre el valor correspondiente del arreglo `dataset` con un solo espacio y la cadena `USD`. Por ejemplo, el primer título debe ser `12 USD`.

# --hints--

El primer `h2` debe tener el texto `12 USD`.

```js
assert($('h2').eq(0).text() == '12 USD');
```

El segundo `h2` debe tener el texto `31 USD`.

```js
assert($('h2').eq(1).text() == '31 USD');
```

El tercer `h2` debe tener el texto `22 USD`.

```js
assert($('h2').eq(2).text() == '22 USD');
```

El cuarto `h2` debe tener el texto `17 USD`.

```js
assert($('h2').eq(3).text() == '17 USD');
```

El quinto `h2` debe tener el texto `25 USD`.

```js
assert($('h2').eq(4).text() == '25 USD');
```

El sexto `h2` debe tener el texto `18 USD`.

```js
assert($('h2').eq(5).text() == '18 USD');
```

El séptimo `h2` debe tener el texto `29 USD`.

```js
assert($('h2').eq(6).text() == '29 USD');
```

El octavo `h2` debe tener el texto `14 USD`.

```js
assert($('h2').eq(7).text() == '14 USD');
```

El noveno `h2` debe tener el texto `9 USD`.

```js
assert($('h2').eq(8).text() == '9 USD');
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
      // Add your code below this line

      .text("New Title");

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
      .text((d) => `${d} USD`);

  </script>
</body>
```
