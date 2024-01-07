---
id: 587d781e367417b2b2512aca
title: Mueve un elemento posicionado relativamente con desplazamientos de CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

Los desplazamientos CSS de `top` o `bottom` y `left` o `right` indican al navegador hasta que punto debe compensar un elemento en relación con el lugar donde se ubicara en el flujo normal del documento. Está compensando un elemento lejos de un punto dado, lo que aleja el elemento del lado al que se hace referencia (efectivamente, en la dirección opuesta). Como viste en el último desafío, usando el desplazamiento `top` movió el `h2` hacia abajo. Del mismo modo, usando un desplazamiento `left` mueve un elemento hacia la derecha.

# --instructions--

Utiliza los desplazamientos CSS para mover los `h2` 15 píxeles a la derecha y 10 píxeles hacia arriba.

# --hints--

Tu código debe usar un desplazamiento CSS para posicionar relativamente el `h2` 10px hacia arriba. En otras palabras, alejarlo 10px de la `bottom` de donde normalmente se encuentra.

```js
assert($('h2').css('bottom') == '10px');
```

Tu código debe usar un desplazamiento CSS para posicionar relativamente el `h2` 15px hacia la derecha. En otras palabras, alejarlo 15px de la `left` de donde normalmente se encuentra.

```js
assert($('h2').css('left') == '15px');
```

# --seed--

## --seed-contents--

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
