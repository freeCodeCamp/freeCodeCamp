---
id: 587d7fa6367417b2b2512bc2
title: Agrega elementos de documento con D3
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

D3 tiene varios métodos que te permiten agregar y cambiar elementos en tu documento.

El método `select()` selecciona un elemento del documento. Toma un argumento para el nombre del elemento que deseas y devuelve un nodo HTML para el primer elemento del documento que coincide con el nombre. He aquí un ejemplo:

```js
const anchor = d3.select("a");
```

El ejemplo anterior encuentra la primera etiqueta de anclaje en la página y guarda un nodo HTML para ella en la variable `anchor`. Puedes utilizar la selección con otros métodos. La parte `d3` del ejemplo es una referencia al objeto D3, que es la forma de acceder a los métodos D3.

Otros dos métodos útiles son `append()` y `text()`.

El método `append()` toma un argumento para el elemento que deseas agregar al documento. Agrega un nodo HTML a un elemento seleccionado y devuelve un identificador a ese nodo.

El método `text()` establece el texto del nodo seleccionado u obtiene el texto actual. Para establecer el valor, pasa una cadena como argumento dentro del paréntesis del método.

Aquí hay un ejemplo que selecciona una lista desordenada, agrega un elemento de lista y agrega texto:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

D3 te permite encadenar varios métodos junto con puntos para realizar una serie de acciones seguidas.

# --instructions--

Utiliza el método `select` para seleccionar la etiqueta `body` en el documento. Luego, `append` una etiqueta `h1` y agrega el texto `Learning D3` en el elemento `h1`.

# --hints--

El `body` debe tener un elemento `h1`.

```js
assert($('body').children('h1').length == 1);
```

El elemento `h1` debe tener el texto `Learning D3`.

```js
assert($('h1').text() == 'Learning D3');
```

Tu código debe acceder al objeto `d3`.

```js
assert(code.match(/d3/g));
```

Tu código debe utilizar el método `select`.

```js
assert(code.match(/\.select/g));
```

Tu código debe utilizar el método `append`.

```js
assert(code.match(/\.append/g));
```

Tu código debe utilizar el método `text`.

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```
