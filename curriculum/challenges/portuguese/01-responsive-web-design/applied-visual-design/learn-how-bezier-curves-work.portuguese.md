---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: ''
localeTitle: Saiba como funcionam as curvas de Bezier
---

## Description
<section id="description"> O último desafio introduziu a propriedade <code>animation-timing-function</code> e algumas palavras-chave que alteram a velocidade de uma animação ao longo de sua duração. CSS oferece uma opção diferente de palavras-chave que fornece um controle ainda melhor sobre como a animação se desenrola, através do uso de curvas de Bezier. Nas animações CSS, as curvas de Bezier são usadas com a função <code>cubic-bezier</code> . A forma da curva representa como a animação se desenrola. A curva vive em um sistema de coordenadas 1 por 1. O eixo X deste sistema de coordenadas é a duração da animação (pense nela como uma escala de tempo) e o eixo Y é a alteração na animação. A função <code>cubic-bezier</code> consiste em quatro pontos principais que se situam nesta grade de 1 por 1: <code>p0</code> , <code>p1</code> , <code>p2</code> e <code>p3</code> . <code>p0</code> e <code>p3</code> são definidos para você - são os pontos inicial e final que estão sempre localizados respectivamente na origem (0, 0) e (1, 1). Você define os valores x e y para os outros dois pontos e, onde você os coloca na grade, determina a forma da curva a ser seguida pela animação. Isso é feito em CSS declarando os valores xey dos pontos &quot;âncora&quot; <code>p1</code> e <code>p2</code> no formato: <code>(x1, y1, x2, y2)</code> . Juntando tudo, aqui está um exemplo de uma curva de Bezier no código CSS: <code>animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);</code> No exemplo acima, os valores x e y são equivalentes para cada ponto (x1 = 0,25 = y1 e x2 = 0,75 = y2), que, se você se lembrar da classe de geometria, resultará em uma linha que se estende da origem para o ponto (1 1). Essa animação é uma mudança linear de um elemento durante o comprimento de uma animação e é o mesmo que usar a palavra-chave <code>linear</code> . Em outras palavras, muda a uma velocidade constante. </section>

## Instructions
<section id="instructions"> Para o elemento com o id de <code>ball1</code> , altere o valor da propriedade <code>animation-timing-function</code> de <code>linear</code> para seu valor de função <code>cubic-bezier</code> equivalente. Use os valores de pontos fornecidos no exemplo acima. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O valor da propriedade <code>animation-timing-function</code> para o elemento com o id <code>ball1</code> deve ser a função linear-equivalente-bezier linear.
    testString: 'assert($("#ball1").css("animation-timing-function") == "cubic-bezier(0.25, 0.25, 0.75, 0.75)", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be the linear-equivalent cubic-bezier function.");'
  - text: O valor da propriedade <code>animation-timing-function</code> para o elemento com o id <code>ball2</code> não deve ser alterado.
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should not change.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls{
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
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
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

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
