---
id: 587d778f367417b2b2512aac
title: Evitar problemas de daltonismo usando o contraste suficiente
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

A cor é uma grande parte do design visual, mas a sua utilização introduz duas questões de acessibilidade. Primeiro, a cor, por si só, não deve ser usada como a única maneira de transmitir informações importantes, pois usuários de leitores de tela não vão vê-la. Em segundo lugar, as cores de fundo e de primeiro plano precisam ter contraste suficiente para que os usuários daltônicos possam distingui-las.

Os desafios anteriores abordaram alternativas textuais para resolver o primeiro problema. O último desafio introduziu ferramentas de verificação de contraste para ajudar com o segundo. A proporção de contraste recomendada pelas WCAG, de 4.5:1, aplica-se para uso de cores, bem como de combinações da escala de cinza.

Usuários daltônicos têm problemas para distinguir algumas cores - geralmente em tonalidade mas, às vezes, também em luz. Lembre-se que a relação de contraste é calculada usando os valores da luminosidade das cores de primeiro plano e de fundo.

Na prática, a relação 4.5:1 de contraste pode ser alcançada adicionando preto à cor mais escura e adicionando branco à cor mais clara. As tonalidades mais escuras do círculo cromático são consideradas a partir de azuis, violetas, magentas e vermelhos, enquanto que tonalidades claras são laranjas, amarelos, verdes e verdes-azulados.

# --instructions--

O Camper Cat está experimentando usar cores no texto e no fundo do seu blog, mas sua combinação atual de verde para `background-color` e marrom para `color` tem uma relação de contraste de 2.5:1. Você pode facilmente ajustar a luz das cores, pois ele as declarou usando a propriedade CSS `hsl()` (que significa hue – tonalidade –, saturation – saturação –, lightness – luz –). Para isso, altere o terceiro argumento. Aumente o valor da luz em `background-color` de 35% para 55% e diminua o valor da luz em `color` de 20% para 15%. Isso melhora o contraste em 5.9:1.

# --hints--

O código deve apenas mudar o valor da luz para a propriedade `color` do texto para o valor 15%.

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

O código deve mudar apenas o valor do brilho na propriedade `background-color` para o valor de 55%.

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
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
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
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
