---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade flexível de taquigrafia
---

## Description
<section id="description"> Existe um atalho disponível para definir várias propriedades *flex* de uma só vez. As propriedades <code>flex-grow</code> , <code>flex-shrink</code> e <code>flex-basis</code> podem ser definidas todas juntas usando a propriedade <code>flex</code> .
Por exemplo, <code>flex: 1 0 10px;</code> irá definir o item para <code>flex-grow: 1;</code> <code>flex-shrink: 0;</code> e <code>flex-basis: 10px;</code> .
As configurações padrão da propriedade são <code>flex: 0 1 auto;</code> . </section>

## Instructions
<section id="instructions"> Adicione a propriedade CSS <code>flex</code> a ambos <code>#box-1</code> e <code>#box-2</code> . Dê a <code>#box-1</code> os valores para que sua <code>flex-grow</code> seja 2, sua <code>flex-shrink</code> seja 2 e sua <code>flex-basis</code> seja 150px. Dê a <code>#box-2</code> os valores para que sua <code>flex-grow</code> seja 1, sua <code>flex-shrink</code> seja 1 e sua <code>flex-basis</code> seja 150px.
Esses valores farão com que <code>#box-1</code> cresça para preencher o espaço extra com o dobro da taxa de <code>#box-2</code> quando o container for maior que 300px e encolherá com o dobro da taxa de <code>#box-2</code> quando o container for menor que 300px. 300px é o tamanho combinado dos valores de <code>flex-basis</code> das duas caixas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-1</code> deve ter a propriedade <code>flex</code> definida como um valor de 2 2 150px.'
    testString: 'assert($("#box-1").css("flex-grow") == "2" && $("#box-1").css("flex-shrink") == "2" && $("#box-1").css("flex-basis") == "150px", "The <code>#box-1</code> element should have the <code>flex</code> property set to a value of 2 2 150px.");'
  - text: 'O elemento <code>#box-2</code> deve ter a propriedade <code>flex</code> definida como um valor de 1 1 150px.'
    testString: 'assert($("#box-2").css("flex-grow") == "1" && $("#box-2").css("flex-shrink") == "1" && $("#box-2").css("flex-basis") == "150px", "The <code>#box-2</code> element should have the <code>flex</code> property set to a value of 1 1 150px.");'
  - text: 'Seu código deve usar a propriedade <code>flex</code> para <code>#box-1</code> e <code>#box-2</code> .'
    testString: 'assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2, "Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.");'

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
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
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
