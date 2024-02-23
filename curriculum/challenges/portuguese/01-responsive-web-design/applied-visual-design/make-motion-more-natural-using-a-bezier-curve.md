---
id: 587d78a9367417b2b2512aea
title: Tornar o movimento da animação mais natural usando uma curva de Bézier
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

Este desafio anima um elemento para replicar o movimento de uma bola sendo quicada. Desafios anteriores cobriram as curvas cúbicas de Bezier `linear` e `ease-out`, no entanto, nenhuma descreve o movimento de quicar com precisão. Você precisa personalizar uma curva de Bézier para isso.

A propriedade `animation-timing-function` faz automaticamente um loop em cada quadro-chave (keyframe) quando a propriedade `animation-iteration-count` é definida com o valor de infinite. Como há uma regra keyframe definida no meio da duração da animação (em `50%`), isso resulta em duas progressões de animação idênticas no movimento para cima e para baixo da bola.

A seguinte curva cúbica de Bézier simula um movimento de malabarismo:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

Observe que o valor de y2 é maior que 1. Embora a curva cúbica de Bézier seja mapeada em um sistema de coordenadas de 1 por 1 e só possa aceitar valores de x de 0 a 1, o valor de y pode ser definido com números maiores que um. Isso resulta em um movimento de salto ideal para simular a bola de malabarismo.

# --instructions--

Altere o valor da propriedade `animation-timing-function` do elemento com o id de `green` para uma função `cubic-bezier` com os valores de x1, y1, x2, e y2 definidos respectivamente para 0.311, 0.441, 0.444, 1.649.

# --hints--

O valor da propriedade `animation-timing-function` para o elemento com o id `green` deve ser uma função `cubic-bezier` com os valores x1, y1, x2 e y2 conforme especificado.

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
