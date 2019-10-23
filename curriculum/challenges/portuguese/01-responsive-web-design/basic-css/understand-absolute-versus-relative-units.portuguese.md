---
id: bad82fee1322bd9aedf08721
title: Understand Absolute versus Relative Units
challengeType: 0
videoUrl: ''
localeTitle: Entenda Unidades Absolutas versus Unidades Relativas
---

## Description
<section id="description"> Os últimos vários desafios definem a margem ou preenchimento de um elemento com pixels ( <code>px</code> ). Os pixels são um tipo de unidade de comprimento, que é o que informa ao navegador como dimensionar ou espaçar um item. Além do <code>px</code> , o CSS tem várias opções de unidades de comprimento diferentes que você pode usar. Os dois tipos principais de unidades de comprimento são absolutos e relativos. Unidades absolutas se ligam a unidades físicas de comprimento. Por exemplo, <code>in</code> e <code>mm</code> referem-se a polegadas e milímetros, respectivamente. Unidades de comprimento absoluto se aproximam da medida real em uma tela, mas há algumas diferenças dependendo da resolução de uma tela. Unidades relativas, como <code>em</code> ou <code>rem</code> , são relativas a outro valor de comprimento. Por exemplo, <code>em</code> se baseia no tamanho da fonte de um elemento. Se você usá-lo para definir a própria propriedade <code>font-size</code> , ela será relativa ao <code>font-size</code> da <code>font-size</code> do pai. <strong>Nota</strong> <br> Existem várias opções de unidades relativas que estão ligadas ao tamanho da janela de visualização. Eles são abordados na seção Princípios de design da Web responsivo. </section>

## Instructions
<section id="instructions"> Adicione uma propriedade <code>padding</code> ao elemento com a classe <code>red-box</code> e defina-a como <code>1.5em</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe de <code>red-box</code> deve ter uma propriedade de <code>padding</code> .
    testString: 'assert($(".red-box").css("padding-top") != "0px" && $(".red-box").css("padding-right") != "0px" && $(".red-box").css("padding-bottom") != "0px" && $(".red-box").css("padding-left") != "0px", "Your <code>red-box</code> class should have a <code>padding</code> property.");'
  - text: 'Sua classe de <code>red-box</code> deve fornecer elementos de 1,5n de <code>padding</code> .'
    testString: 'assert(code.match(/\.red-box\s*?{\s*?.*?\s*?.*?\s*?padding:\s*?1\.5em/gi), "Your <code>red-box</code> class should give elements 1.5em of <code>padding</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
