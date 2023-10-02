---
id: bad87fee1348bd9aedf07756
title: Sobreescribe todos los demás estilos usando !important
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

¡Excelente! Acabamos de demostrar que los estilos en línea sobrescribirán todas las declaraciones CSS en tu elemento `style`.

Pero, ¡aguarda! Existe una última forma de sobreescribir CSS. Este es el método más poderoso de todos. Pero antes de utilizarlo, consideremos por qué querrías sobreescribir una regla CSS.

En muchas situaciones usarás librerías de CSS. Estas librerías pueden sobreescribir accidentalmente tu propio código CSS. Entonces, cuando necesites asegurarte de que a un elemento se le aplique un código CSS específico, puedes usar `!important`.

Volvamos a nuestra declaración de la clase `pink-text`. Recuerda que nuestra clase `pink-text` fue sobreescrita por declaraciones posteriores de clases, declaraciones de id e "inline styles".

# --instructions--

Añade la palabra clave `!important` a la declaración de color de pink-text para asegurarte completamente de que tu elemento `h1` será de color rosado.

Aquí te mostramos un ejemplo de cómo hacerlo:

```css
color: red !important;
```

# --hints--

Tu elemento `h1` debe incluir la clase `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Tu elemento `h1` debe incluir la clase `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Tu elemento `h1` debe incluir el `id` `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Tu elemento `h1` debe incluir el "inline style" `color: white`.

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

Tu elemento `pink-text` debe tener la palabra clave `!important` para sobrescribir todas las demás declaraciones.

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

Tu elemento `h1` debe ser de color rosado ("pink").

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
