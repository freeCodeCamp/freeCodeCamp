---
id: 587d78ae367417b2b2512afd
title: Usa la propiedad flex-basis para establecer el tamaño inicial de un elemento
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

La propiedad `flex-basis` especifica el tamaño inicial del elemento antes de que CSS haga ajustes con `flex-shrink` o `flex-grow`.

Las unidades usadas por la propiedad `flex-basis` son las mismas que otras propiedades de tamaño (`px`, `em`, `%`, etc.). El valor `auto` dimensiona los elementos basándose en el contenido.

# --instructions--

Establece el tamaño inicial de las cajas usando `flex-basis`. Agrega la propiedad CSS `flex-basis` tanto a `#box-1` como a `#box-2`. Da a `#box-1` un valor de `10em` y a `#box-2` un valor de `20em`.

# --hints--

El elemento `#box-1` debe tener la propiedad `flex-basis`.

```js
assert($('#box-1').css('flex-basis') != 'auto');
```

El elemento `#box-1` debe tener un valor `flex-basis` de `10em`.

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

El elemento `#box-2` debe tener la propiedad `flex-basis`.

```js
assert($('#box-2').css('flex-basis') != 'auto');
```

El elemento `#box-2` debe tener un valor `flex-basis` de `20em`.

```js
assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
