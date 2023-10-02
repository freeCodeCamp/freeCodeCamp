---
id: 587d78a8367417b2b2512ae3
title: Animar los elementos continuamente utilizando un contador de animaciones infinitas
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

En los desafíos anteriores, vimos cómo utilizar algunas de las propiedades de la animación y la regla `@keyframes`. Otra propiedad de animación es la `animation-iteration-count` la cual te permite controlar cuántas veces te gustaría hacer un bucle a través de la animación. Por ejemplo:

```css
animation-iteration-count: 3;
```

En este caso, la animación se detendrá después de ejecutarse 3 veces, pero es posible hacer que la animación se ejecute continuamente estableciendo ese valor en `infinite`.

# --instructions--

Para mantener la bola rebotando a la derecha en un bucle continuo, cambia la propiedad `animation-iteration-count` a `infinite`.

# --hints--

La propiedad `animation-iteration-count` debe tener un valor de `infinite`.

```js
assert($('#ball').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```
