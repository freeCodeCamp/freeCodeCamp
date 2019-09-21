---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
forumTopicId: 301336
localeTitle: Использование свойств прототипа для уменьшения повторяющегося кода
---

## Description
<section id='description'>
Поскольку <code>numLegs</code> , вероятно, будет иметь одинаковое значение для всех экземпляров <code>Bird</code> , у вас по существу есть дублируемая переменная <code>numLegs</code> внутри каждого экземпляра <code>Bird</code> . Это может быть не проблема, когда есть только два экземпляра, но представьте, есть ли миллионы экземпляров. Это было бы много дублированных переменных. Лучше всего использовать <code>prototype</code> <code>Bird&#39;s</code> . <code>prototype</code> - это объект, который используется для ВСЕХ экземпляров <code>Bird</code> . Вот как добавить <code>numLegs</code> в <code>Bird prototype</code> : <blockquote> Bird.prototype.numLegs = 2; </blockquote> Теперь все экземпляры <code>Bird</code> имеют свойство <code>numLegs</code> . <blockquote> console.log (duck.numLegs); // печатает 2 <br> console.log (canary.numLegs); // печатает 2 </blockquote> Поскольку все экземпляры автоматически имеют свойства на <code>prototype</code> , подумайте о <code>prototype</code> как о «рецепте» для создания объектов. Обратите внимание, что <code>prototype</code> <code>duck</code> и <code>canary</code> является частью конструктора <code>Bird</code> как <code>Bird.prototype</code> . Почти каждый объект в JavaScript имеет свойство <code>prototype</code> которое является частью созданной им функции-конструктора.
</section>

## Instructions
<section id='instructions'>
Добавьте свойство <code>numLegs</code> в <code>prototype</code> <code>Dog</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>beagle</code> should have a <code>numLegs</code> property.
    testString: assert(beagle.numLegs !== undefined);
  - text: <code>beagle.numLegs</code> should be a number.
    testString: assert(typeof(beagle.numLegs) === 'number' );
  - text: <code>numLegs</code> should be a <code>prototype</code> property not an <code>own</code> property.
    testString: assert(beagle.hasOwnProperty('numLegs') === false);

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
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```

</section>
