---
id: 587d7fa7367417b2b2512bc4
title: Trabaja con datos en D3
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

La biblioteca de D3 se centra en un acercamiento enfocado a los datos. Cuando tienes un conjunto de datos, puedes aplicar métodos D3 para mostrarlo en la página. Los datos vienen en muchos formatos, pero este desafío utiliza un simple arreglo de números.

El primer paso es hacer que D3 sea consciente de los datos. El método `data()` es usado en una selección de elementos DOM para adjuntar los datos a esos elementos. El conjunto de datos es pasado como argumento al método.

Un patrón de flujo de trabajo común es crear un nuevo elemento en el documento para cada pieza de datos del conjunto. D3 tiene el método `enter()` para este propósito.

Cuando `enter()` es combinado con el método `data()`, observa los elementos seleccionados de la página y los compara con la cantidad de artículos de datos en el conjunto. Si hay menos elementos que artículos de datos, crea los elementos restantes.

Aquí hay un ejemplo que selecciona un elemento `ul` y crea un nuevo elemento de lista basado en la cantidad de entradas en el arreglo:

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

Puede parecer confuso seleccionar elementos que aún no existen. Este código le está diciendo a D3 que primero seleccione el `ul` en la página. A continuación, selecciona todos los artículos de la lista, lo cual devuelve una selección vacía. Entonces el método `data()` revisa el conjunto de datos y ejecuta el siguiente código tres veces, una vez por cada artículo en el arreglo. El método `enter()` observa que no hay elementos `li` en la página, pero necesita 3 (uno para cada pieza de datos en `dataset`). Se añaden nuevos elementos `li` al `ul` y tienen el texto `New item`.

# --instructions--

Selecciona el nodo `body`, luego selecciona todos los elementos `h2`. Haz que D3 cree y añada una etiqueta `h2` para cada artículo en el arreglo `dataset`. El texto en el `h2` debe decir `New Title`. Tu código debe usar los métodos `data()` y `enter()`.

# --hints--

Tu documento debe tener 9 elementos `h2`.

```js
assert($('h2').length == 9);
```

El texto en los elementos `h2` debe decir `New Title`. Las mayúsculas y los espacios deben coincidir exactamente.

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

Tu código debe usar el método `data()`.

```js
assert(code.match(/\.data/g));
```

Tu código debe usar el método `enter()`.

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```
