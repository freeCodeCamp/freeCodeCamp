---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
videoUrl: ''
localeTitle: Herdar Comportamentos de um Supertipo
---

## Description
<section id="description"> No desafio anterior, você criou um <code>supertype</code> chamado <code>Animal</code> que definia comportamentos compartilhados por todos os animais: <blockquote> function Animal () {} <br> Animal.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;); <br> }; </blockquote> Este e o próximo desafio cobrirão como reutilizar <code>Animal&#39;s</code> métodos <code>Animal&#39;s</code> dentro de <code>Bird</code> e <code>Dog</code> sem defini-los novamente. Ele usa uma técnica chamada <code>inheritance</code> . Esse desafio cobre o primeiro passo: criar uma instância do <code>supertype</code> (ou pai). Você já conhece uma maneira de criar uma instância de <code>Animal</code> usando o <code>new</code> operador: <blockquote> let animal = new Animal (); </blockquote> Existem algumas desvantagens ao usar essa sintaxe para <code>inheritance</code> , que são muito complexas para o escopo desse desafio. Em vez disso, aqui está uma abordagem alternativa sem essas desvantagens: <blockquote> let animal = Object.create (Animal.prototype); </blockquote> <code>Object.create(obj)</code> cria um novo objeto e define <code>obj</code> como o novo <code>prototype</code> do objeto. Lembre-se de que o <code>prototype</code> é como a &quot;receita&quot; para criar um objeto. Ao definir o <code>prototype</code> de <code>animal</code> a ser <code>Animal&#39;s</code> <code>prototype</code> , você está efetivamente dando a <code>animal</code> instância a mesma &quot;receita&quot; como qualquer outra instância do <code>Animal</code> . <blockquote> animal.eat (); // imprime &quot;nom nom&quot; <br> animal instanceof Animal; // =&gt; true </blockquote></section>

## Instructions
<section id="instructions"> Use <code>Object.create</code> para criar duas instâncias de <code>Animal</code> chamado <code>duck</code> e <code>beagle</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A variável <code>duck</code> deve ser definida.
    testString: 'assert(typeof duck !== "undefined", "The <code>duck</code> variable should be defined.");'
  - text: A variável <code>beagle</code> deve ser definida.
    testString: 'assert(typeof beagle !== "undefined", "The <code>beagle</code> variable should be defined.");'
  - text: <code>duck</code> deve ter um <code>prototype</code> de <code>Animal</code> .
    testString: 'assert(duck instanceof Animal, "<code>duck</code> should have a <code>prototype</code> of <code>Animal</code>.");'
  - text: <code>beagle</code> deveria ter um <code>prototype</code> de <code>Animal</code> .
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should have a <code>prototype</code> of <code>Animal</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck; // Change this line
let beagle; // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
