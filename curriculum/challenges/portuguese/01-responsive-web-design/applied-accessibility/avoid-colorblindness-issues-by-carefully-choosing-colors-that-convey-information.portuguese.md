---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: Evite problemas de daltonismo escolhendo cuidadosamente as cores que transmitem informações
---

## Description
<section id="description"> Existem várias formas de daltonismo. Estes podem variar de uma sensibilidade reduzida a um determinado comprimento de onda da luz até a incapacidade de ver a cor. A forma mais comum é uma sensibilidade reduzida para detectar greens. Por exemplo, se duas cores verdes semelhantes forem a cor de primeiro e segundo plano de seu conteúdo, talvez um usuário daltônico não consiga distingui-las. As cores próximas podem ser vistas como vizinhas na roda de cores e essas combinações devem ser evitadas ao transmitir informações importantes. <strong>Nota</strong> <br> Algumas ferramentas de coleta de cores on-line incluem simulações visuais de como as cores aparecem para diferentes tipos de daltonismo. Estes são ótimos recursos, além de calculadoras de verificação de contraste on-line. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve alterar a <code>color</code> do texto do <code>button</code> para azul escuro.
    testString: 'assert($("button").css("color") == "rgb(0, 51, 102)", "Your code should change the text <code>color</code> for the <code>button</code> to the dark blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
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
