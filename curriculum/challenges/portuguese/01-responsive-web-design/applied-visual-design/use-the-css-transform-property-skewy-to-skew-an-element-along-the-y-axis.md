---
id: 587d78a6367417b2b2512adc
title: Usar a propriedade skewY de transformação do CSS para distorcer um elemento ao longo do eixo Y
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

Dado que a função `skewX()` inclina o elemento selecionado ao longo do eixo X em um determinado grau, não é nenhuma surpresa que a propriedade `skewY()` inclina um elemento ao longo do eixo Y (vertical).

# --instructions--

Incline o elemento com a id de `top` -10 graus ao longo do eixo Y usando a propriedade `transform`.

# --hints--

O elemento com id `top` deve ser inclinado em -10 graus ao longo de seu eixo Y.

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
