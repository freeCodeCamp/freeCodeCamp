---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
forumTopicId: 301325
localeTitle: 将子辈的原型设置为父辈的实例
---

## Description
<section id='description'>
在上一个挑战中，我们学习了从<code>超类（或者叫父类） Animal</code>继承其行为的第一个步骤：创建一个<code>Animal</code>的实例。
这一节挑战我们将学习第二个步骤：给<code>子类型（或者子类）</code>设置<code>原型</code>。这样一来，<code>Bird</code>就是<code>Animal</code>的一个实例了。

```js
Bird.prototype = Object.create(Animal.prototype);
```

请记住，<code>原型</code>类似于创建对象的“配方”。从某种意义上来说，<code>Bird</code>对象的配方包含了<code>Animal</code>构造函数的所有关键“成分”。

```js
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
```

<code>duck</code>继承了<code>Animal</code>构造函数的所有属性，其中包括了<code>eat</code>方法。
</section>

## Instructions
<section id='instructions'>
修改你的代码，实现一个继承自<code>Animal</code>的<code>Dog</code>构造函数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code>应该是<code>Animal</code>的一个实例。
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
