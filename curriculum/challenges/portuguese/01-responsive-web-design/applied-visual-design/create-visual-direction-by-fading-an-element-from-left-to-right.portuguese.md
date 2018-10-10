---
id: 587d78a7367417b2b2512ae2
title: Create Visual Direction by Fading an Element from Left to Right
challengeType: 0
videoUrl: ''
localeTitle: Criar direção visual desvanecendo um elemento da esquerda para a direita
---

## Description
<section id="description"> Para este desafio, você mudará a <code>opacity</code> de um elemento animado para que ele se desvanece gradualmente ao atingir o lado direito da tela. Na animação exibida, o elemento redondo com o fundo gradiente se move para a direita pela marca de 50% da animação, conforme a regra <code>@keyframes</code> . </section>

## Instructions
<section id="instructions"> Segmente o elemento com o id da <code>ball</code> e adicione a propriedade de <code>opacity</code> definida como 0.1 a <code>50%</code> , para que o elemento se desvanece à medida que se desloca para a direita. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A regra de <code>keyframes</code> para o desvanecimento deve definir a propriedade de <code>opacity</code> como 0.1 em 50%.
    testString: 'assert(code.match(/@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi), "The <code>keyframes</code> rule for fade should set the <code>opacity</code> property to 0.1 at 50%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
