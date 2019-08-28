---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
forumTopicId: 301325
localeTitle: Установите прототип ребенка в экземпляр родителя
---

## Description
<section id='description'>
В предыдущем вызове вы видели первый шаг для наследования поведения от <code>supertype</code> (или родительского) <code>Animal</code> : создание нового экземпляра <code>Animal</code> . Эта задача охватывает следующий шаг: установите <code>prototype</code> <code>subtype</code> (или ребенка) - в этом случае, <code>Bird</code> - для примера <code>Animal</code> . <blockquote> Bird.prototype = Object.create (Animal.prototype); </blockquote> Помните, что <code>prototype</code> подобен «рецепту» для создания объекта. В некотором смысле, рецепт для <code>Bird</code> теперь включает в себя все ключевые «ингредиенты» от <code>Animal</code> . <blockquote> пусть утка = новая птица («Дональд»); <br> duck.eat (); // печатает &quot;nom nom nom&quot; </blockquote> <code>duck</code> наследует все свойства <code>Animal</code> , в том числе метод <code>eat</code> .
</section>

## Instructions
<section id='instructions'>
Измените код, чтобы экземпляры <code>Dog</code> наследовали от <code>Animal</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> should be an instance of <code>Animal</code>.
    testString: assert(Animal.prototype.isPrototypeOf(Dog.prototype));

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
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```

</section>
