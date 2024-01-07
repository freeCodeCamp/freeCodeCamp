---
id: 587d78a6367417b2b2512adb
title: Usar a propriedade skewX de transformação do CSS para distorcer um elemento ao longo do eixo X
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

A próxima função da propriedade `transform` é `skewX()`, que inclina o elemento selecionado ao longo de seu eixo X (horizontal) em um determinado grau.

O código a seguir inclina o elemento de parágrafo em -32 graus ao longo do eixo X.

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

Incline o elemento com o id `bottom` em 24 graus ao longo do eixo X usando a propriedade `transform`.

# --hints--

O elemento com id `bottom` deve ser inclinado em 24 graus ao longo de seu eixo X.

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

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
    margin:  50px auto;
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
