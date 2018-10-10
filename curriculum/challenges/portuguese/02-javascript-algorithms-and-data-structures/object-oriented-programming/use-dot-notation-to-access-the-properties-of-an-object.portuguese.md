---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
videoUrl: ''
localeTitle: Use Dot Notation para acessar as propriedades de um objeto
---

## Description
<section id="description"> O último desafio criou um <code>object</code> com várias <code>properties</code> , agora você verá como acessar os valores dessas <code>properties</code> . Aqui está um exemplo: <blockquote> vamos pato = { <br> nome: &quot;Aflac&quot;, <br> numLegs: 2 <br> }; <br> console.log (duck.name); <br> // Imprime &quot;Aflac&quot; no console </blockquote> A notação de ponto é usada no nome do <code>object</code> , <code>duck</code> , seguida do nome da <code>property</code> , <code>name</code> , para acessar o valor de &quot;Aflac&quot;. </section>

## Instructions
<section id="instructions"> Imprima as duas <code>properties</code> do objeto de <code>dog</code> abaixo em seu console. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve usar o <code>console.log</code> para imprimir o valor da propriedade <code>name</code> do objeto <code>dog</code> .
    testString: 'assert(/console.log\(.*dog\.name.*\)/g.test(code), "Your should use <code>console.log</code> to print the value for the <code>name</code> property of the <code>dog</code> object.");'
  - text: Você deve usar <code>console.log</code> para imprimir o valor da propriedade <code>numLegs</code> do objeto <code>dog</code> .
    testString: 'assert(/console.log\(.*dog\.numLegs.*\)/g.test(code), "Your should use <code>console.log</code> to print the value for the <code>numLegs</code> property of the <code>dog</code> object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
