---
id: bad82fee1348bd9aedf08721
title: Utiliza RGB para mezclar colores
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24JU6'
forumTopicId: 18368
dashedName: use-rgb-to-mix-colors
---

# --description--

Al igual que con el código hexadecimal, puedes mezclar colores combinando valores RGB.

# --instructions--

Reemplaza los hex codes en nuestro elemento `style` con los valores RGB correctos.

<table class='table table-striped'><tbody><tr><th>Color</th><th>RGB</th></tr><tr><td>Blue (azul)</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Red (rojo)</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchid (color orquídea)</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Sienna (siena)</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>

# --hints--

Debes asignar al elemento `h1` que tiene el texto `I am red!` ("¡Soy de color rojo!) el `color` rojo.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

Debes usar el valor `rgb` que corresponde al color rojo.

```js
assert(
  code.match(
    /\.red-text\s*{\s*color\s*:\s*rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)\s*;?\s*}/gi
  )
);
```

Debes asignar al elemento `h1` que tiene el texto `I am orchid!` ("¡Soy de color orquídea!) el `color` orquídea.

```js
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');
```

Debes usar el valor `rgb` que corresponde al color orchid (orquídea).

```js
assert(
  code.match(
    /\.orchid-text\s*{\s*color\s*:\s*rgb\(\s*218\s*,\s*112\s*,\s*214\s*\)\s*;?\s*}/gi
  )
);
```

Debes asignar al elemento `h1` que tiene el texto `I am blue!` ("¡Soy de color azul!) el `color` azul.

```js
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');
```

Debes usar el valor `rgb` que corresponde al color azul.

```js
assert(
  code.match(
    /\.blue-text\s*{\s*color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*255\s*\)\s*;?\s*}/gi
  )
);
```

Debes asignar al elemento `h1` que tiene el texto `I am sienna!` ("¡Soy de color siena!) el `color` sienna (siena).

```js
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');
```

Debes usar el valor `rgb` que corresponde al color sienna (siena).

```js
assert(
  code.match(
    /\.sienna-text\s*{\s*color\s*:\s*rgb\(\s*160\s*,\s*82\s*,\s*45\s*\)\s*;?\s*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>
```
