---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
videoUrl: ''
localeTitle: Defina o protótipo da criança para uma instância do pai
---

## Description
<section id="description"> No desafio anterior, você viu o primeiro passo para herdar o comportamento do <code>supertype</code> (ou pai) <code>Animal</code> : criar uma nova instância de <code>Animal</code> . Esse desafio abrange a próxima etapa: definir o <code>prototype</code> do <code>subtype</code> (ou filho) - nesse caso, <code>Bird</code> - para ser uma instância de <code>Animal</code> . <blockquote> Bird.prototype = Object.create (Animal.prototype); </blockquote> Lembre-se que o <code>prototype</code> é como a &quot;receita&quot; para criar um objeto. De certa forma, a receita de <code>Bird</code> agora inclui todos os &quot;ingredientes&quot; chave do <code>Animal</code> . <blockquote> vamos pato = novo pássaro (&quot;Donald&quot;); <br> duck.eat (); // imprime &quot;nom nom&quot; </blockquote> <code>duck</code> herda todas as propriedades do <code>Animal</code> , incluindo o método de <code>eat</code> . </section>

## Instructions
<section id="instructions"> Modifique o código para que as instâncias de <code>Dog</code> herdem de <code>Animal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> deve ser uma instância de <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), "<code>Dog.prototype</code> should be an instance of <code>Animal</code>.");'

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

function Dog() { }

// Add your code below this line


let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
