---
id: 587d78a8367417b2b2512ae6
title: Animar múltiplos elementos em diferentes momentos
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

No desafio anterior, você mudou o momento da animação de dois elementos com a mesma animação ao alterar a regra `@keyframes`. Você pode alcançar o mesmo resultado manipulando a propriedade `animation-duration` de vários elementos.

Na animação sendo executada no editor de código, há três estrelas no céu que cintilam ao mesmo instante infinitamente. Para fazê-las brilhar com ritmos diferentes, você pode definir a propriedade `animation-duration` com valores diferentes para cada elemento.

# --instructions--

Defina a propriedade `animation-duration` dos elementos com as classes `star-1`, `star-2`, e `star-3` para 1s, 0.9s, e 1.1s, respectivamente.

# --hints--

O valor da propriedade `animation-duration` da estrela com a classe `star-1` deve permanecer em 1s.

```js
assert($('.star-1').css('animation-duration') == '1s');
```

O valor da propriedade `animation-duration` da estrela com a classe `star-2` deve ser 0.9s.

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

O valor da propriedade `animation-duration` da estrela com a classe `star-3` deve ser 1.1s.

```js
assert($('.star-3').css('animation-duration') == '1.1s');
```

# --seed--

## --seed-contents--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```

# --solutions--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>
<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```
