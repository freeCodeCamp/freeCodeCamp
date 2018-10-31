---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
videoUrl: ''
localeTitle: Use propriedades de protótipo para reduzir o código duplicado
---

## Description
<section id="description"> Como <code>numLegs</code> provavelmente terá o mesmo valor para todas as instâncias de <code>Bird</code> , você essencialmente tem uma variável duplicada <code>numLegs</code> dentro de cada instância de <code>Bird</code> . Isso pode não ser um problema quando há apenas duas instâncias, mas imagine se houver milhões de instâncias. Isso seria um monte de variáveis ​​duplicadas. Uma maneira melhor é usar <code>Bird&#39;s</code> <code>prototype</code> <code>Bird&#39;s</code> . O <code>prototype</code> é um objeto que é compartilhado entre TODAS as instâncias do <code>Bird</code> . Veja como adicionar <code>numLegs</code> ao <code>Bird prototype</code> : <blockquote> Bird.prototype.numLegs = 2; </blockquote> Agora, todas as instâncias do <code>Bird</code> têm a propriedade <code>numLegs</code> . <blockquote> console.log (duck.numLegs); // imprime 2 <br> console.log (canary.numLegs); // imprime 2 </blockquote> Como todas as instâncias têm automaticamente as propriedades no <code>prototype</code> , pense em um <code>prototype</code> como uma &quot;receita&quot; para criar objetos. Note que o <code>prototype</code> de <code>duck</code> e <code>canary</code> é parte do construtor <code>Bird</code> como <code>Bird.prototype</code> . Quase todos os objetos em JavaScript possuem uma propriedade <code>prototype</code> que faz parte da função construtora que a criou. </section>

## Instructions
<section id="instructions"> Adicione uma propriedade <code>numLegs</code> ao <code>prototype</code> do <code>Dog</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>beagle</code> deve ter uma propriedade <code>numLegs</code> .
    testString: 'assert(beagle.numLegs !== undefined, "<code>beagle</code> should have a <code>numLegs</code> property.");'
  - text: <code>beagle.numLegs</code> deve ser um número.
    testString: 'assert(typeof(beagle.numLegs) === "number" , "<code>beagle.numLegs</code> should be a number.");'
  - text: <code>numLegs</code> deve ser uma propriedade <code>prototype</code> e não uma propriedade <code>own</code> .
    testString: 'assert(beagle.hasOwnProperty("numLegs") === false, "<code>numLegs</code> should be a <code>prototype</code> property not an <code>own</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}



// Add your code above this line
let beagle = new Dog("Snoopy");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
