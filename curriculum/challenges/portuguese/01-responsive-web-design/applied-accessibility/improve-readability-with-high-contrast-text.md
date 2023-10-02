---
id: 587d778e367417b2b2512aab
title: Melhorar a legibilidade com textos de alto contraste
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

O baixo contraste entre as cores do primeiro plano e do fundo pode dificultar a leitura do texto. Contraste suficiente melhora a legibilidade do seu conteúdo, mas o que significa "suficiente"?

As Diretrizes de Acessibilidade de Conteúdo da Web (WCAG) recomendam uma relação de contraste de, pelo menos, 4,5 para 1 para texto normal. A proporção é calculada comparando os valores de luminância (brilho) entre duas cores. Isso varia de 1: 1, para a mesma cor (ausência de contraste), até 21: 1 para branco em contraste com preto, o mais forte. Existem muitas ferramentas de verificação de contraste disponíveis on-line que calculam essa relação para você.

# --instructions--

A escolha do Camper Cat de texto cinza claro em um fundo branco para sua postagem recente no blog tem uma relação de contraste de 1,5:1, dificultando a leitura. Altere a propriedade `color` do texto de um cinza claro (`#D3D3D3`) para um cinza mais escuro (`#636363`) para melhorar a taxa de contraste para 6:1.

# --hints--

O código deve alterar a propriedade `color` do texto dentro do `body` para um cinza mais escuro.

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

O código não deve alterar a propriedade `background-color` do `body`.

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<head>
  <style>
  body {
    color: #636363;
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
