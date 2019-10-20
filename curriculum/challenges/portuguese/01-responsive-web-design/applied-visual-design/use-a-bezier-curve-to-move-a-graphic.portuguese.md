---
id: 587d78a9367417b2b2512ae9
title: Use a Bezier Curve to Move a Graphic
challengeType: 0
videoUrl: ''
localeTitle: Use uma curva de Bezier para mover um gráfico
---

## Description
<section id="description"> Um desafio anterior discutiu a palavra <code>ease-out</code> chave <code>ease-out</code> que descreve uma alteração de animação que acelera primeiro e depois desacelera no final da animação. À direita, a diferença entre a palavra <code>ease-out</code> chave <code>ease-out</code> (para o elemento azul) e <code>linear</code> palavra-chave <code>linear</code> (para o elemento vermelho) é demonstrada. Progressões semelhantes de animação para a palavra <code>ease-out</code> chave <code>ease-out</code> podem ser obtidas usando uma função de curva Bezier cúbica personalizada. Em geral, a alteração dos pontos de ancoragem <code>p1</code> e <code>p2</code> impulsiona a criação de diferentes curvas de Bezier, que controlam como a animação progride no tempo. Aqui está um exemplo de uma curva de Bezier usando valores para imitar o estilo <code>animation-timing-function: cubic-bezier(0, 0, 0.58, 1);</code> Lembre-se de que todas as funções de <code>cubic-bezier</code> começam com <code>p0</code> em (0, 0) e terminam em <code>p3</code> em (1, 1). Neste exemplo, a curva se move mais rapidamente através do eixo Y (começa em 0, vai para <code>p1</code> y valor de 0, então vai para <code>p2</code> y valor de 1) do que se move pelo eixo X (0 para iniciar, então 0 para <code>p1</code> , até 0,58 para <code>p2</code> ). Como resultado, a alteração no elemento animado progride mais rapidamente que o tempo da animação para esse segmento. No final da curva, a relação entre a alteração nos valores x e y se inverte - o valor y se move de 1 para 1 (sem alteração), e os valores x se deslocam de 0,58 para 1, fazendo com que a animação mude mais lentamente em comparação com a duração da animação. </section>

## Instructions
<section id="instructions"> Para ver o efeito dessa curva de Bézier em ação, altere a <code>animation-timing-function</code> de <code>animation-timing-function</code> do elemento com ID de <code>red</code> para uma função de <code>cubic-bezier</code> com valores de x1, y1, x2, y2 definidos como 0, 0, 0,58, 1 Isso fará com que ambos os elementos progridam através da animação da mesma forma. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O valor da propriedade <code>animation-timing-function</code> do elemento com o id <code>red</code> deve ser uma função <code>cubic-bezier</code> com os valores x1, y1, x2, y2 definidos respectivamente para 0, 0, 0,58, 1.'
    testString: 'assert($("#red").css("animation-timing-function") == "cubic-bezier(0, 0, 0.58, 1)", "The value of the <code>animation-timing-function</code> property of the element with the id <code>red</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0, 0, 0.58, 1 .");'
  - text: O elemento com o ID <code>red</code> não deve mais ter a propriedade de <code>animation-timing-function</code> de linear.
    testString: 'assert($("#red").css("animation-timing-function") !== "linear", "The element with the id <code>red</code> should no longer have the <code>animation-timing-function</code> property of linear.");'
  - text: O valor da propriedade <code>animation-timing-function</code> para o elemento com o id <code>blue</code> não deve ser alterado.
    testString: 'assert($("#blue").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>blue</code> should not change.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 56%;
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
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
