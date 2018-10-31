---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
challengeType: 0
videoUrl: ''
localeTitle: Aprenda sobre cores terciárias
---

## Description
<section id="description"> Monitores de computador e telas de dispositivos criam cores diferentes combinando quantidades de luz vermelha, verde e azul. Isso é conhecido como o modelo de cores aditivo RGB na teoria moderna de cores. Vermelho (R), verde (G) e azul (B) são chamados de cores primárias. A mistura de duas cores primárias cria as cores secundárias ciano (G + B), magenta (R + B) e amarelo (R + G). Você viu essas cores no desafio Complementary Colours. Essas cores secundárias são o complemento da cor primária não usada em sua criação e são opostas à cor primária na roda de cores. Por exemplo, a magenta é feita com vermelho e azul e é o complemento para verde. Cores terciárias são o resultado da combinação de uma cor primária com um de seus vizinhos de cor secundária. Por exemplo, vermelho (primário) e amarelo (secundário) fazem laranja. Isso adiciona mais seis cores a uma roda de cores simples para um total de doze. Existem vários métodos de seleção de cores diferentes que resultam em uma combinação harmoniosa no design. Um exemplo que pode usar cores terciárias é chamado de esquema de cores complementar dividido. Esse esquema começa com uma cor base e, em seguida, emparelha-o com as duas cores adjacentes ao seu complemento. As três cores fornecem contraste visual forte em um design, mas são mais sutis do que usar duas cores complementares. Aqui estão três cores criadas usando o esquema de complemento de divisão: <table class="table table-striped"><thead><tr><th> Cor </th><th> Código hexadecimal </th></tr></thead><thead></thead><tbody><tr><td> laranja </td><td> # FF7D00 </td></tr><tr><td> ciano </td><td> # 00FFFF </td></tr><tr><td> framboesa </td><td> # FF007D </td></tr></tbody></table></section>

## Instructions
<section id="instructions"> Altere a propriedade <code>background-color</code> das classes <code>orange</code> , <code>cyan</code> e <code>raspberry</code> para suas respectivas cores. Certifique-se de usar os códigos hexadecimais como laranja e framboesa não são nomes de cores reconhecidas pelo navegador. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento <code>div</code> com classe <code>orange</code> deve ter uma <code>background-color</code> de fundo laranja.
    testString: 'assert($(".orange").css("background-color") == "rgb(255, 125, 0)", "The <code>div</code> element with class <code>orange</code> should have a <code>background-color</code> of orange.");'
  - text: O elemento <code>div</code> com classe <code>cyan</code> deve ter uma <code>background-color</code> de <code>background-color</code> de ciano.
    testString: 'assert($(".cyan").css("background-color") == "rgb(0, 255, 255)", "The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.");'
  - text: O elemento <code>div</code> com <code>raspberry</code> classe deve ter uma <code>background-color</code> de <code>background-color</code> de framboesa.
    testString: 'assert($(".raspberry").css("background-color") == "rgb(255, 0, 125)", "The <code>div</code> element with class <code>raspberry</code> should have a <code>background-color</code> of raspberry.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
