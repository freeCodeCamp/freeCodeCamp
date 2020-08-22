---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
forumTopicId: 301315
localeTitle: 继承后添加方法
---

## Description
<section id='description'>
从<code>父类</code>继承其<code>原型</code>对象的构造函数除了继承的方法之外，还可以有自己的方法。
请看举例：<code>Bird</code>是一个构造函数，它继承了<code>Animal</code>构造函数的<code>原型</code>：

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

除了从<code>Animal</code>构造函数继承的行为之外，还需要给<code>Bird</code>对象添加它独有的行为。这里，我们给<code>Bird</code>对象添加一个<code>fly()</code>函数。函数会以一种与其他构造函数相同的方式添加到<code>Bird</code>的<code>原型</code>中：

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

现在<code>Bird</code>的实例中就有了<code>eat()</code>和<code>fly()</code>这两个方法：

```js
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
```

</section>

## Instructions
<section id='instructions'>
添加必要的代码，使得<code>Dog</code>对象继承<code>Animal</code>构造函数，并且把<code>Dog 原型</code>上的 constructor 属性设置为 Dog。然后给<code>Dog</code>对象添加一个<code>bark()</code>方法，这样的话，<code>beagle</code>将同时拥有<code>eat()</code>和<code>bark()</code>这两个方法。<code>bark()</code>方法中应该输出 "Woof!" 到控制台。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal</code>应该没有<code>bark()</code>方法。
    testString: assert(typeof Animal.prototype.bark == "undefined");
  - text: <code>Dog</code>应该继承了<code>Animal</code>构造函数的<code>eat()</code>方法。
    testString: assert(typeof Dog.prototype.eat == "function");
  - text: <code>Dog</code>应该有一个<code>bark()</code>方法作为<code>自身</code>属性。
    testString: assert(Dog.prototype.hasOwnProperty('bark'));
  - text: <code>beagle</code>应该是<code>Animal</code>的一个<code>instanceof</code>。
    testString: assert(beagle instanceof Animal);
  - text: <code>beagle</code>的 constructor 属性应该被设置为<code>Dog</code>。
    testString: assert(beagle.constructor === Dog);

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
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```

</section>
