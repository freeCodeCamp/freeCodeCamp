---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1
forumTopicId: 301323
localeTitle: Не забудьте установить свойство конструктора при смене прототипа
---

## Description
<section id='description'>
Существует один важный побочный эффект ручной настройки <code>prototype</code> на новый объект. Это стерло свойство <code>constructor</code> ! Код в предыдущем вызове напечатал следующее для <code>duck</code> : <blockquote> console.log (duck.constructor) <br> // печатает &#39;undefined&#39; - Ой! </blockquote> Чтобы исправить это, всякий раз, когда прототип вручную устанавливается на новый объект, не забудьте определить свойство <code>constructor</code> : <blockquote> Bird.prototype = { <br> constructor: Bird, // определить свойство constructor <br> numLegs: 2, <br> eat: function () { <br> console.log («nom nom nom»); <br> }, <br> Опишите: function () { <br> console.log («Мое имя» + this.name); <br> } <br> }; </blockquote>
</section>

## Instructions
<section id='instructions'>
Определите свойство <code>constructor</code> на <code>prototype</code> <code>Dog</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> should set the <code>constructor</code> property.
    testString: assert(Dog.prototype.constructor === Dog);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

</section>
