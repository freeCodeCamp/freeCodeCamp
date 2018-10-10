---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: Redefinir uma propriedade de construtor herdado
---

## Description
<section id="description"> Quando um objeto herda seu <code>prototype</code> de outro objeto, ele também herda a propriedade do construtor do <code>supertype</code> . Aqui está um exemplo: <blockquote> função Bird () {} <br> Bird.prototype = Object.create (Animal.prototype); <br> vamos pato = novo pássaro (); <br> duck.constructor // function Animal () {...} </blockquote> Mas <code>duck</code> e todos os exemplos de <code>Bird</code> deveriam mostrar que eles foram construídos por <code>Bird</code> e não por <code>Animal</code> . Para fazer isso, você pode definir manualmente <code>Bird&#39;s</code> propriedade de construtor do <code>Bird</code> para o objeto <code>Bird</code> : <blockquote> Bird.prototype.constructor = Pássaro; <br> duck.constructor // function Bird () {...} </blockquote></section>

## Instructions
<section id="instructions"> Corrija o código para que <code>duck.constructor</code> e <code>beagle.constructor</code> retornem seus respectivos construtores. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Bird.prototype</code> deve ser uma instância de <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Bird.prototype), "<code>Bird.prototype</code> should be an instance of <code>Animal</code>.");'
  - text: <code>duck.constructor</code> deve retornar <code>Bird</code> .
    testString: 'assert(duck.constructor === Bird, "<code>duck.constructor</code> should return <code>Bird</code>.");'
  - text: <code>Dog.prototype</code> deve ser uma instância de <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), "<code>Dog.prototype</code> should be an instance of <code>Animal</code>.");'
  - text: <code>beagle.constructor</code> deve devolver o <code>Dog</code> .
    testString: 'assert(beagle.constructor === Dog, "<code>beagle.constructor</code> should return <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line



let duck = new Bird();
let beagle = new Dog();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
