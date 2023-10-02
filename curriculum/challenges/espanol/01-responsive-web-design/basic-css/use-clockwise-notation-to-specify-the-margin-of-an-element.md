---
id: bad87fee1348bd9afdf08726
title: Utiliza clockwise notation para especificar el margen de un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

Intentemos de nuevo, pero esta vez con `margin`.

En lugar de especificar las propiedades `margin-top`, `margin-right`, `margin-bottom`, y `margin-left` individualmente, puedes especificarlas todas en una sola línea, como se muestra a continuación:

```css
margin: 10px 20px 10px 20px;
```

Estos cuatro valores se leen en el sentido de las agujas del reloj: arriba, derecha, abajo, izquierda, (top, right, bottom, left) y producirán exactamente el mismo resultado que usar las instrucciones específicas de margen.

# --instructions--

Usa clockwise notation (notación en el sentido de las agujas del reloj) para asignarle al elemento con la clase `blue-box` un margen de `40px` en su lado superior e izquierdo pero un margen de solo `20px` en su lado inferior y derecho.

# --hints--

Tu clase `blue-box` debe asignar al lado superior (top) de los elementos `40px` de `margin`.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Tu clase `blue-box` debe asignar al lado derecho (right) de los elementos `20px` de `margin`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Tu clase `blue-box` debe asignar al lado inferior (bottom) de los elementos `20px` de `margin`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Tu clase `blue-box` debe asignar al lado izquierdo (left) de los elementos `40px` de `margin`.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

Debes usar clockwise notation para establecer el margen de la clase `blue-box`.

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
