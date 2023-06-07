---
id: bad82fee1322bd9aedf08721
title: Unidades absolutas y relativas de medida
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

Varios de los últimos desafíos establecen el "margin" o "padding" de un elemento usando píxeles (`px`). Los píxeles son un tipo de unidad de longitud que le indica al navegador qué tamaño o cuánto espaciado asignarle a un elemento. Además de `px`, CSS cuenta con variedad de opciones de unidades de longitud que puedes utilizar.

Los dos tipos principales de unidades de longitud son las unidades absolutas y relativas. Las unidades absolutas están relacionadas con unidades físicas de longitud. Por ejemplo, `in` y `mm` se refieren a pulgadas y milímetros, respectivamente. Las unidades de longitud absoluta aproximan la medición real sobre una pantalla, pero existen cierta variación que depende de la resolución de la pantalla utilizada.

Las unidades relativas, como `em` o `rem` son relativas a otro valor de longitud. Por ejemplo, `em` se basa en el tamaño de fuente de un elemento. Si la utilizas para establecer la propiedad `font-size`, es relativa al `font-size` del elemento padre.

**Nota:** Hay varias opciones de unidades relativas que están vinculadas al tamaño del viewport. Veremos estas unidades relativas de medida en la sección de principios de diseño web adaptativo.

# --instructions--

Añade una propiedad `padding` al elemento con clase `red-box` y establécelo en `1.5em`.

# --hints--

La clase `red-box` debe tener una propiedad `padding`.

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

Tu clase `red-box` debe asignar a los elementos 1.5em de `padding`.

```js
assert(code.match(/\.red-box\s*?{[\s\S]*padding\s*:\s*?1\.5em/gi));
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
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
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
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```
