---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
forumTopicId: 301334
localeTitle: Используйте Наследование, чтобы вы не повторяли себя
---

## Description
<section id='description'>
В программировании есть принцип « <code>Don&#39;t Repeat Yourself (DRY)</code> . Причина повторного кода - проблема, потому что для любого изменения требуется код исправления в нескольких местах. Это обычно означает больше работы для программистов и больше возможностей для ошибок. В приведенном ниже примере обратите внимание, что метод <code>describe</code> разделяет <code>Bird</code> and <code>Dog</code> : <blockquote> Bird.prototype = { <br> конструктор: Птица, <br> Опишите: function () { <br> console.log («Мое имя» + this.name); <br> } <br> }; <br><br> Dog.prototype = { <br> конструктор: Собака, <br> Опишите: function () { <br> console.log («Мое имя» + this.name); <br> } <br> }; </blockquote> Метод <code>describe</code> повторяется в двух местах. Код можно редактировать, чтобы следовать принципу <code>DRY</code> , создав <code>supertype</code> (или родительский элемент) под названием <code>Animal</code> : <blockquote> функция Animal () {}; <br><br> Animal.prototype = { <br> конструктор: Animal, <br> Опишите: function () { <br> console.log («Мое имя» + this.name); <br> } <br> }; </blockquote> Поскольку <code>Animal</code> включает метод <code>describe</code> , вы можете удалить его из <code>Bird</code> and <code>Dog</code> : <blockquote> Bird.prototype = { <br> конструктор: Птица <br> }; <br><br> Dog.prototype = { <br> конструктор: Собака <br> }; </blockquote>
</section>

## Instructions
<section id='instructions'>
Метод <code>eat</code> повторяется как у <code>Cat</code> и у <code>Bear</code> . Измените код в духе <code>DRY</code> , переместив метод <code>eat</code> на <code>supertype</code> <code>Animal</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal.prototype</code> should have the <code>eat</code> property.
    testString: assert(Animal.prototype.hasOwnProperty('eat'));
  - text: <code>Bear.prototype</code> should not have the <code>eat</code> property.
    testString: assert(!(Bear.prototype.hasOwnProperty('eat')));
  - text: <code>Cat.prototype</code> should not have the <code>eat</code> property.
    testString: assert(!(Cat.prototype.hasOwnProperty('eat')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```

</section>
