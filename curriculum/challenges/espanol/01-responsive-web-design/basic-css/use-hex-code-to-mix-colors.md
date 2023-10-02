---
id: bad87fee1348bd9aedf08721
title: Utiliza código hexadecimal (hex code) para mezclar colores
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

Repasemos: En código hexadecimal se utilizan 6 dígitos hexadecimales para representar los colores, dos para el componente rojo (R), verde (G) y azul (B).

¡A partir de estos tres colores puros (rojo, verde y azul) podemos variar las cantidades de cada componente de color para crear más de 16 millones de colores distintos!

Por ejemplo, el naranja es rojo puro mezclado con algo de verde y nada de azul. En hex code, esto se traduce como `#FFA500`.

El dígito `0` es el número más bajo en hex code, y representa la ausencia total de color.

El dígito `F` es el número más alto en hex code, y representa el brillo máximo.

# --instructions--

Reemplaza las palabras clave de color en nuestro elemento `style` con los códigos hexadecimales correctos.

<table class='table table-striped'><tbody><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue (azul dodger)</td><td><code>#1E90FF</code></td></tr><tr><td>Green (verde)</td><td><code>#00FF00</code></td></tr><tr><td>Orange (naranja)</td><td><code>#FFA500</code></td></tr><tr><td>Red (rojo)</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

Debes asignar al elemento `h1` que tiene el texto `I am red!` ("¡Soy de color rojo!) el `color` rojo.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Debes usar el `hex code` correspondiente al color rojo en lugar de la palabra reservada `red`.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

Debes asignar al elemento `h1` que tiene el texto `I am green!` ("¡Soy de color verde!) el `color` verde.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

Debes usar el `hex code` correspondiente al color verde en lugar de la palabra reservada `green`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

Debes asignar al elemento `h1` que tiene el texto `I am dodger blue!` ("¡Soy de color azul dodger!) el `color` azul dodger.

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

Debes usar el `hex code` correspondiente al color azul dodger en lugar de la palabra reservada `dodgerblue`.

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

Debes asignar al elemento `h1` que tiene el texto `I am orange!` ("¡Soy de color naranja!) el `color` naranja.

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

Debes usar el `hex code` correspondiente al color naranja en lugar de la palabra reservada `orange`.

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
