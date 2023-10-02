---
id: bad87fee1348bd9aedf08719
title: Usa código hexadecimal (hex code) abreviado
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

Muchas personas se sienten abrumadas por tener más de 16 millones de colores posibles. Además, los códigos hexadecimales resultan difíciles de recordar. Afortunadamente, puedes abreviar gran parte de ellos.

Por ejemplo, el código hexadecimal `#FF0000` del color rojo puede acortarse a `#F00`. Esta forma abreviada utiliza un dígito para el rojo, un dígito para el verde, y un dígito para el azul.

Esto reduce el número total de colores posibles a alrededor de 4.000. Sin embargo, los navegadores interpretarán que `#FF0000` y `#F00` son exactamente el mismo color.

# --instructions--

¡Pruébalo! Intenta usar los códigos hexadecimales abreviados para asignar colores a los elementos como se indica a continuación.

<table class='table table-striped'><tbody><tr><th>Color</th><th>Hex code abreviado</th></tr><tr><td>Cyan (cian)</td><td><code>#0FF</code></td></tr><tr><td>Green (verde)</td><td><code>#0F0</code></td></tr><tr><td>Red (rojo)</td><td><code>#F00</code></td></tr><tr><td>Fuchsia (fucsia)</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

Debes asignar al elemento `h1` que tiene el texto `I am red!` ("¡Soy de color rojo!) el `color` rojo.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Debes usar la abreviación hexadecimal para el color rojo en lugar del código hexadecimal `#FF0000`.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

Debes asignar al elemento `h1` que tiene el texto `I am green!` ("¡Soy de color verde!) el `color` verde.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

Debes usar la abreviación hexadecimal para el color verde en lugar del código hexadecimal `#00FF00`.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

Debes asignar al elemento `h1` que tiene el texto `I am cyan!` ("¡Soy de color cian!) el `color` cian.

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

Debes usar la abreviación hexadecimal para el color gris en lugar del código hexadecimal `#00FFFF`.

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

Debes asignar al elemento `h1` que tiene el texto `I am fuchsia!` ("¡Soy de color fucsia!) el `color` fucsia.

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

Debes usar la abreviación hexadecimal para el color fuchsia en lugar del código hexadecimal `#FF00FF`.

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```
