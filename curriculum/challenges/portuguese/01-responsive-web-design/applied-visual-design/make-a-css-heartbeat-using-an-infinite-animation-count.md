---
id: 587d78a8367417b2b2512ae4
title: Criar uma animação infinita de um coração batendo com CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
dashedName: make-a-css-heartbeat-using-an-infinite-animation-count
---

# --description--

Neste desafio veremos mais um exemplo de animação infinita com a propriedade `animation-iteration-count` que usa o coração que você projetou em um desafio anterior.

A animação de batimento de um segundo de duração consiste em duas partes animadas. Os elementos `heart` (incluindo as partes `:before` e `:after`) são animados para alterar o tamanho usando a propriedade `transform`, e o fundo da `div` é animado para mudar sua cor usando a propriedade `background`.

# --instructions--

Mantenha o coração batendo adicionando a propriedade `animation-iteration-count` com o valor `infinite` nas classes `back` e `heart`. Os seletores `heart:before` e `heart:after` não precisam de nenhuma propriedade de animação.

# --hints--

A propriedade `animation-iteration-count` da classe `heart` deve ter o valor de `infinite`.

```js
assert($('.heart').css('animation-iteration-count') == 'infinite');
```

A propriedade `animation-iteration-count` da classe `back` deve ter o valor de `infinite`.

```js
assert($('.back').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;

  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }
</style>
<div class="back"></div>
<div class="heart"></div>
```
