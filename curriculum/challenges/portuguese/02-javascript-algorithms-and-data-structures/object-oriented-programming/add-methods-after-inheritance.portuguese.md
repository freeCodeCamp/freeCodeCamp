---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
videoUrl: ''
localeTitle: Adicionar métodos após herança
---

## Description
<section id="description"> Uma função construtora que herda seu objeto de <code>prototype</code> de uma função construtora de <code>supertype</code> pode ainda ter seus próprios métodos além de métodos herdados. Por exemplo, <code>Bird</code> é um construtor que herda seu <code>prototype</code> de <code>Animal</code> : <blockquote> function Animal () {} <br> Animal.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;); <br> }; <br> função Bird () {} <br> Bird.prototype = Object.create (Animal.prototype); <br> Bird.prototype.constructor = Pássaro; </blockquote> Além do que é herdado do <code>Animal</code> , você deseja adicionar um comportamento exclusivo aos objetos <code>Bird</code> . Aqui, <code>Bird</code> receberá uma função <code>fly()</code> . Funções são adicionadas ao <code>prototype</code> <code>Bird&#39;s</code> mesma forma que qualquer função construtora: <blockquote> Bird.prototype.fly = function () { <br> console.log (&quot;Estou voando!&quot;); <br> }; </blockquote> Agora instâncias de <code>Bird</code> terão os métodos <code>eat()</code> e <code>fly()</code> : <blockquote> vamos pato = novo pássaro (); <br> duck.eat (); // imprime &quot;nom nom&quot; <br> duck.fly (); // imprime &quot;Estou voando!&quot; </blockquote></section>

## Instructions
<section id="instructions"> Adicione todo o código necessário para que o objeto <code>Dog</code> herde de <code>Animal</code> e o construtor de <code>prototype</code> <code>Dog&#39;s</code> esteja configurado para Dog. Em seguida, adicione um método <code>bark()</code> ao objeto <code>Dog</code> para que o <code>beagle</code> possa <code>eat()</code> e <code>bark()</code> . O método <code>bark()</code> deve imprimir &quot;Woof!&quot; para o console. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal</code> não deve responder ao método <code>bark()</code> .
    testString: 'assert(typeof Animal.prototype.bark == "undefined", "<code>Animal</code> should not respond to the <code>bark()</code> method.");'
  - text: <code>Dog</code> deve herdar o método <code>eat()</code> do <code>Animal</code> .
    testString: 'assert(typeof Dog.prototype.eat == "function", "<code>Dog</code> should inherit the <code>eat()</code> method from <code>Animal</code>.");'
  - text: <code>Dog</code> deve ter o método <code>bark()</code> como propriedade <code>own</code> .
    testString: 'assert(Dog.prototype.hasOwnProperty("bark"), "<code>Dog</code> should have the <code>bark()</code> method as an <code>own</code> property.");'
  - text: <code>beagle</code> deve ser um <code>instanceof</code> <code>Animal</code> .
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should be an <code>instanceof</code> <code>Animal</code>.");'
  - text: O construtor para o <code>beagle</code> deve ser definido como <code>Dog</code> .
    testString: 'assert(beagle.constructor === Dog, "The constructor for <code>beagle</code> should be set to <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line




// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
