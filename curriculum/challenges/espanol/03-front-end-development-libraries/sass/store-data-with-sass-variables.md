---
id: 587d7dbd367417b2b2512bb4
title: Almacena datos con variables Sass
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

Una característica de Sass que es diferente de CSS es que utiliza variables. Se declaran y establecen para almacenar datos, de forma similar a JavaScript.

En JavaScript, las variables se definen mediante las palabras clave `let` y `const`. En Sass, las variables comienzan con un `$` seguido del nombre de la variable.

Aquí hay un par de ejemplos:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

Y para usar las variables:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

Un ejemplo en el que las variables son útiles es cuando un número de elementos tiene que ser del mismo color. Si se cambia ese color, el único lugar para editar el código es el valor de la variable.

# --instructions--

Crea una variable `$text-color` y asígnala como `red`. Luego, cambia el valor de la propiedad `color` para el `.blog-post` y `h2` a la variable `$text-color`.

# --hints--

Tu código debe tener una variable Sass declarada para `$text-color` con un valor de `red`.

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

Tu código debe utilizar la variable `$text-color` para cambiar el `color` de los elementos `.blog-post` y `h2`.

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

Tu elemento `.blog-post` debe tener un `color` rojo.

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

Tu elemento `h2` debe tener un `color` rojo.

```js
assert($('h2').css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```
