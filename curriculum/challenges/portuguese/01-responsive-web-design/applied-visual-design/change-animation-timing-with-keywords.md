---
id: 587d78a8367417b2b2512ae7
title: Mudar a velocidade da animação usando palavras-chave
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

Nas animações CSS, a propriedade `animation-timing-function` controla a velocidade do movimento do elemento no decorrer da animação. Se a animação for um carro se movendo do ponto A para o ponto B em um determinado tempo (`animation-duration`), a propriedade `animation-timing-function` controla como o carro acelera e desacelera no decorrer da animação.

Existem algumas palavras-chave disponíveis que cobrem os casos de uso mais comuns. Por exemplo, o valor padrão é `ease`, que começa devagar, acelera no meio e depois diminui a velocidade novamente no final. Outras opções incluem `ease-out`, que é rápido no início e em seguida, diminui, `ease-in`, que é lento no início, e acelera no final ou `linear`, que aplica uma velocidade de animação constante do começo ao fim.

# --instructions--

Nos elementos de id `ball1` e `ball2`, adicione a propriedade `animation-timing-function`. Por fim, defina para `#ball1` o valor `linear` e para `#ball2` o valor `ease-out`. Observe a diferença entre como os elementos se movem durante a animação, mas terminam juntos, já que eles compartilham o mesmo `animation-duration` de 2 segundos.

# --hints--

O elemento com id `ball1` deve possuir a propriedade `animation-timing-function` com o valor de `linear`.

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

O elemento com id `ball2` deve possuir a propriedade `animation-timing-function` com o valor de `ease-out`.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;

  }
  #ball2 {
    left:56%;

  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
