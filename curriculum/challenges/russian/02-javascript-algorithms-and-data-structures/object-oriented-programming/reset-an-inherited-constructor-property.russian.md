---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: Сбросить свойство унаследованного конструктора
---

## Description
<section id="description"> Когда объект наследует свой <code>prototype</code> от другого объекта, он также наследует свойство конструктора <code>supertype</code> . Вот пример: <blockquote> function Bird () {} <br> Bird.prototype = Object.create (Animal.prototype); <br> let duck = new Bird (); <br> duck.constructor // function Animal () {...} </blockquote> Но <code>duck</code> и все случаи <code>Bird</code> должны показать, что они были построены <code>Bird</code> а не <code>Animal</code> . Для этого, вы можете вручную установить <code>Bird&#39;s</code> свойство конструктора для <code>Bird</code> объекта: <blockquote> Bird.prototype.constructor = Bird; <br> duck.constructor // function Bird () {...} </blockquote></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(Animal.prototype.isPrototypeOf(Bird.prototype), "<code>Bird.prototype</code> should be an instance of <code>Animal</code>.");'
  - text: ''
    testString: 'assert(duck.constructor === Bird, "<code>duck.constructor</code> should return <code>Bird</code>.");'
  - text: ''
    testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), "<code>Dog.prototype</code> should be an instance of <code>Animal</code>.");'
  - text: ''
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
