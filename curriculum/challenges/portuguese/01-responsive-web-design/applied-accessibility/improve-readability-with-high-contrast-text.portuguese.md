---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: ''
localeTitle: Melhore a legibilidade com texto de alto contraste
---

## Description
<section id="description"> O baixo contraste entre as cores do primeiro plano e do plano de fundo pode dificultar a leitura do texto. Contraste suficiente melhora a legibilidade do seu conteúdo, mas o que exatamente significa &quot;suficiente&quot;? As Diretrizes de Acessibilidade ao Conteúdo da Web (WCAG) recomendam pelo menos uma taxa de contraste de 4,5 para 1 para o texto normal. A relação é calculada comparando os valores relativos de luminância de duas cores. Isso varia de 1: 1 para a mesma cor, ou sem contraste, para 21: 1 para branco contra preto, o contraste mais forte. Existem muitas ferramentas de verificação de contraste disponíveis on-line que calculam essa proporção para você. </section>

## Instructions
<section id="instructions"> A escolha de texto cinza claro em um fundo branco feita pelo Camper Cat para seu recente post no blog tem uma relação de contraste de 1,5: 1, dificultando a leitura. Altere a <code>color</code> do texto do cinza atual ( <code>#D3D3D3</code> ) para um cinza mais escuro ( <code>#636363</code> ) para melhorar a taxa de contraste para 6: 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve alterar a <code>color</code> do texto do <code>body</code> para o cinza mais escuro.
    testString: 'assert($("body").css("color") == "rgb(99, 99, 99)", "Your code should change the text <code>color</code> for the <code>body</code> to the darker gray.");'
  - text: Seu código não deve alterar a <code>background-color</code> do <code>body</code> .
    testString: 'assert($("body").css("background-color") == "rgb(255, 255, 255)", "Your code should not change the <code>background-color</code> for the <code>body</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
