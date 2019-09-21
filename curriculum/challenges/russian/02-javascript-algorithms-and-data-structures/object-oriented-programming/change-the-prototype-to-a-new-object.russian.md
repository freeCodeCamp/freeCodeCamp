---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
forumTopicId: 301316
localeTitle: Изменение прототипа на новый объект
---

## Description
<section id='description'>
До сих пор вы добавляли свойства к <code>prototype</code> индивидуально: <blockquote> Bird.prototype.numLegs = 2; </blockquote> Это становится утомительным после нескольких свойств. <blockquote> Bird.prototype.eat = function () { <br> console.log («nom nom nom»); <br> } <br><br> Bird.prototype.describe = function () { <br> console.log («Мое имя» + this.name); <br> } </blockquote> Более эффективным способом является создание <code>prototype</code> для нового объекта, который уже содержит свойства. Таким образом, свойства добавляются сразу: <blockquote> Bird.prototype = { <br> numLegs: 2, <br> eat: function () { <br> console.log («nom nom nom»); <br> }, <br> Опишите: function () { <br> console.log («Мое имя» + this.name); <br> } <br> }; </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте свойство <code>numLegs</code> и два метода <code>eat()</code> и <code>describe()</code> <code>prototype</code> <code>Dog</code> , установив <code>prototype</code> нового объекта.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> should be set to a new object.
    testString: assert((/Dog\.prototype\s*?=\s*?{/).test(code));
  - text: <code>Dog.prototype</code> should have the property <code>numLegs</code>.
    testString: assert(Dog.prototype.numLegs !== undefined);
  - text: <code>Dog.prototype</code> should have the method <code>eat()</code>.
    testString: assert(typeof Dog.prototype.eat === 'function');
  - text: <code>Dog.prototype</code> should have the method <code>describe()</code>.
    testString: assert(typeof Dog.prototype.describe === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line

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
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```

</section>
