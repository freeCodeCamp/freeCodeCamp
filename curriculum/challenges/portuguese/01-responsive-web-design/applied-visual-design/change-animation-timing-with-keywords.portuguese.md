---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: ''
localeTitle: Alterar o tempo de animação com palavras-chave
---

## Description
<section id="description"> Em animações CSS, a propriedade <code>animation-timing-function</code> controla a rapidez com que um elemento animado é modificado ao longo da duração da animação. Se a animação for um carro passando do ponto A para o ponto B em um determinado momento (sua <code>animation-duration</code> ), a <code>animation-timing-function</code> diz como o carro acelera e desacelera ao longo do percurso da unidade. Há várias palavras-chave predefinidas disponíveis para opções populares. Por exemplo, o valor padrão é a <code>ease</code> , que começa devagar, acelera no meio e, em seguida, desacelera no final. Outras opções incluem a <code>ease-out</code> , que é rápida no começo, depois desacelera, <code>ease-in</code> , que é lenta no começo, depois acelera no final, ou <code>linear</code> , o que aplica uma velocidade de animação constante. </section>

## Instructions
<section id="instructions"> Para os elementos com id de <code>ball1</code> e <code>ball2</code> , adicione uma propriedade de <code>animation-timing-function</code> a cada um e defina <code>#ball1</code> como <code>linear</code> e <code>#ball2</code> para <code>ease-out</code> . Observe a diferença entre como os elementos se movem durante a animação, mas terminam juntos, pois eles compartilham a mesma <code>animation-duration</code> de <code>animation-duration</code> de 2 segundos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O valor da propriedade <code>animation-timing-function</code> para o elemento com o id <code>ball1</code> deve ser linear.
    testString: 'assert($("#ball1").css("animation-timing-function") == "linear", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be linear.");'
  - text: O valor da propriedade <code>animation-timing-function</code> para o elemento com o id <code>ball2</code> deve ser facilitado.
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should be ease-out.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
