---
id: bad87fee1348bd9aedf08746
title: Hereda estilos del elemento body
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

Ahora hemos demostrado que cada página HTML tiene un elemento `body`, y que a este elemento `body` también se le puede dar estilo con CSS.

Recuerda, puedes dar estilo a tu elemento `body` como a cualquier otro elemento HTML, y todos los demás elementos heredarán los estilos del elemento `body`.

# --instructions--

Primero, crea un elemento `h1` con el texto `Hello World`

Luego, demos el color `green` (verde) a todos los elementos de tu página, añadiendo `color: green;` a tu declaración de estilo del elemento `body`.

Finalmente, da a tu elemento `body` un valor para font-family de `monospace` añadiendo `font-family: monospace;` a la declaración de estilo del elemento `body`.

# --hints--

Debes crear un elemento `h1`.

```js
assert($('h1').length > 0);
```

Tu elemento `h1` debe contener el texto `Hello World`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

Tu elemento `h1` debe tener una etiqueta de cierre.

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

Tu elemento `body` debe tener la propiedad `color` con el valor `green`.

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

Tu elemento `body` debe tener la propiedad `font-family` con el valor `monospace`.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

Tu elemento `h1` debe heredar la fuente `monospace` de tu elemento `body`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

Tu elemento `h1` debe heredar el color `green` de tu elemento `body`.

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

</style>
<h1>Hello World!</h1>
```
