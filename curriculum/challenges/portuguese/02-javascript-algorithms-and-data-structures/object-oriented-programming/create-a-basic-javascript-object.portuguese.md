---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: Crie um objeto JavaScript básico
---

## Description
<section id="description"> Pense em coisas que as pessoas veem todos os dias, como carros, lojas e pássaros. Estes são todos os <code>objects</code> : coisas tangíveis que as pessoas podem observar e interagir. Quais são algumas qualidades desses <code>objects</code> ? Um carro tem rodas. Lojas vendem itens. Pássaros têm asas. Essas qualidades ou <code>properties</code> definem o que constitui um <code>object</code> . Observe que <code>objects</code> semelhantes compartilham as mesmas <code>properties</code> , mas podem ter valores diferentes para essas <code>properties</code> . Por exemplo, todos os carros têm rodas, mas nem todos os carros têm o mesmo número de rodas. <code>Objects</code> em JavaScript são usados ​​para modelar objetos do mundo real, dando-lhes <code>properties</code> e comportamento como suas contrapartes do mundo real. Aqui está um exemplo usando esses conceitos para criar um <code>object</code> <code>duck</code> : <blockquote> vamos pato = { <br> nome: &quot;Aflac&quot;, <br> numLegs: 2 <br> }; </blockquote> Este <code>object</code> <code>duck</code> tem dois pares de propriedade / valor: um <code>name</code> de &quot;Aflac&quot; e um <code>numLegs</code> de 2. </section>

## Instructions
<section id="instructions"> Crie um <code>object</code> <code>dog</code> com as propriedades <code>name</code> e <code>numLegs</code> e configure-as para uma string e um número, respectivamente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog</code> deve ser um <code>object</code> .
    testString: 'assert(typeof(dog) === "object", "<code>dog</code> should be an <code>object</code>.");'
  - text: <code>dog</code> deve ter uma propriedade de <code>name</code> definida como uma <code>string</code> .
    testString: 'assert(typeof(dog.name) === "string", "<code>dog</code> should have a <code>name</code> property set to a <code>string</code>.");'
  - text: <code>dog</code> deve ter uma propriedade <code>numLegs</code> definida para um <code>number</code> .
    testString: 'assert(typeof(dog.numLegs) === "number", "<code>dog</code> should have a <code>numLegs</code> property set to a <code>number</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {

};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
