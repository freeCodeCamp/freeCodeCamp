---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
videoUrl: ''
localeTitle: Crie um método em um objeto
---

## Description
<section id="description"> <code>Objects</code> podem ter um tipo especial de <code>property</code> , chamado de <code>method</code> . <code>Methods</code> são <code>properties</code> que são funções. Isso adiciona um comportamento diferente a um <code>object</code> . Aqui está o exemplo do <code>duck</code> com um método: <blockquote> vamos pato = { <br> nome: &quot;Aflac&quot;, <br> numLegs: 2, <br> sayName: function () {return &quot;O nome deste pato é&quot; + duck.name + &quot;.&quot;;} <br> }; <br> duck.sintName (); <br> // Retorna &quot;O nome deste pato é Aflac.&quot; </blockquote> O exemplo adiciona o <code>method</code> <code>sayName</code> , que é uma função que retorna uma sentença dando o nome do <code>duck</code> . Observe que o <code>method</code> acessou a propriedade <code>name</code> na instrução de retorno usando <code>duck.name</code> . O próximo desafio cobrirá outra maneira de fazer isso. </section>

## Instructions
<section id="instructions"> Usando o <code>object</code> <code>dog</code> , dê um método chamado <code>sayLegs</code> . O método deve retornar a frase &quot;Este cão tem 4 pernas&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code> deve ser uma função.
    testString: 'assert(typeof(dog.sayLegs) === "function", "<code>dog.sayLegs()</code> should be a function.");'
  - text: <code>dog.sayLegs()</code> deve retornar a string dada - note que a pontuação e espaçamento são importantes.
    testString: 'assert(dog.sayLegs() === "This dog has 4 legs.", "<code>dog.sayLegs()</code> should return the given string - note that punctuation and spacing matter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
