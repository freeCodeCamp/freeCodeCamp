---
id: 587d78a6367417b2b2512adc
title: Usare la proprietà di trasformazione skewY per inclinare un elemento sull'asse Y
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

Dato che la funzione `skewX()` inclina l'elemento selezionato rispetto all'asse X di un certo grado, non sorprende che la proprietà `skewY()` inclini un elemento rispetto all'asse Y (verticale).

# --instructions--

Inclina l'elemento con l'id di `top` di -10 gradi rispetto all'asse Y utilizzando la proprietà `transform`.

# --hints--

L'elemento con id `top` dovrebbe essere inclinato di -10 gradi dal suo asse Y.

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;

  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
