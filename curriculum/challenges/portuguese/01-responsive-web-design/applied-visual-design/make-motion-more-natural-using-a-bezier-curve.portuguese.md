---
id: 587d78a9367417b2b2512aea
title: Make Motion More Natural Using a Bezier Curve
challengeType: 0
videoUrl: ''
localeTitle: Torne o movimento mais natural usando uma curva Bezier
---

## Description
<section id="description"> Este desafio anima um elemento para replicar o movimento de uma bola que está sendo malabarizada. Desafios anteriores cobriram os <code>linear</code> e <code>ease-out</code> curvas de Bezier cúbicos, no entanto não representa o movimento malabarismo com precisão. Você precisa personalizar uma curva de Bezier para isso. A <code>animation-timing-function</code> faz um loop automaticamente em cada quadro-chave quando a <code>animation-iteration-count</code> é definida como infinita. Como existe um conjunto de regras de quadros-chave no meio da duração da animação (a <code>50%</code> ), isso resulta em duas progressões de animação idênticas no movimento para cima e para baixo da bola. A seguinte curva cúbica de Bezier simula um movimento de malabarismo: <code>cubic-bezier(0.3, 0.4, 0.5, 1.6);</code> Observe que o valor de y2 é maior que 1. Embora a curva cúbica de Bezier seja mapeada em um sistema de coordenadas 1 por 1 e só possa aceitar valores x de 0 a 1, o valor y pode ser definido como números maiores que um. Isso resulta em um movimento de salto que é ideal para simular a bola de malabarismo. </section>

## Instructions
<section id="instructions"> Altere o valor da <code>animation-timing-function</code> de <code>animation-timing-function</code> do elemento com o ID de <code>green</code> para uma função de <code>cubic-bezier</code> com os valores x1, y1, x2, y2 definidos respectivamente para 0,311, 0,441, 0,444, 1,649. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O valor da propriedade <code>animation-timing-function</code> para o elemento com o ID <code>green</code> deve ser uma função <code>cubic-bezier</code> com valores x1, y1, x2, y2, conforme especificado.'
    testString: 'assert($("#green").css("animation-timing-function") == "cubic-bezier(0.311, 0.441, 0.444, 1.649)", "The value of the <code>animation-timing-function</code> property for the element with the id <code>green</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values as specified.'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
