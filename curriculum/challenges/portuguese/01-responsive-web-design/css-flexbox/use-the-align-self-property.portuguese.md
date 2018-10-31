---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade align-self
---

## Description
<section id="description"> A última propriedade dos itens flexíveis é o <code>align-self</code> . Essa propriedade permite ajustar o alinhamento de cada item individualmente, em vez de configurá-los todos de uma vez. Isso é útil, pois outras técnicas comuns de ajuste que usam as propriedades CSS <code>float</code> , <code>clear</code> e <code>vertical-align</code> não funcionam em itens flexíveis.
<code>align-self</code> aceita os mesmos valores que <code>align-items</code> e substituirá qualquer valor definido pela propriedade <code>align-items</code> . </section>

## Instructions
<section id="instructions"> Adicione a propriedade CSS <code>align-self</code> a ambos <code>#box-1</code> e <code>#box-2</code> . Dê ao <code>#box-1</code> um valor de <code>center</code> e dê ao <code>#box-2</code> um valor de <code>flex-end</code>. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-1</code> deve ter a propriedade <code>align-self</code> definida como um valor de center.'
    testString: 'assert($("#box-1").css("align-self") == "center", "The <code>#box-1</code> element should have the <code>align-self</code> property set to a value of center.");'
  - text: 'O elemento <code>#box-2</code> deve ter a propriedade <code>align-self</code> definida como um valor de flex-end.'
    testString: 'assert($("#box-2").css("align-self") == "flex-end", "The <code>#box-2</code> element should have the <code>align-self</code> property set to a value of flex-end.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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
