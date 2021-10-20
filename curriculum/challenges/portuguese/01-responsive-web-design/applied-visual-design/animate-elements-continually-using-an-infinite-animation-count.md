---
id: 587d78a8367417b2b2512ae3
title: Animar elementos infinitamente
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

Os desafios anteriores cobriram como usar algumas das propriedades de animação e a regra `@keyframes`. Outra propriedade da animação é `animation-iteration-count`, que permite controlar quantas vezes você gostaria de repetir a animação. Exemplo:

```css
animation-iteration-count: 3;
```

Neste caso, a animação vai parar depois de repetir 3 vezes, mas é possível fazer a animação rodar infinitamente definindo esse valor para `infinite`.

# --instructions--

Para manter a bola quicando à direita em um loop contínuo, altere a propriedade `animation-iteration-count` para `infinite`.

# --hints--

A propriedade `animation-iteration-count` deve ter um valor de `infinite`.

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
