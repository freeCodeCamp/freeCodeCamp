---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
forumTopicId: 301324
localeTitle: 重置一个继承的构造函数属性
---

## Description
<section id='description'>
当一个对象从另一个对象那里继承了其<code>原型</code>，那它也继承了<code>父类</code>的 constructor 属性。
请看下面的举例：

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
```

但是<code>duck</code>和其他所有<code>Bird</code>的实例都应该表明它们是由<code>Bird</code>创建的，而不是由<code>Animal</code>创建的。为此，你可以手动把<code>Bird</code>的 constructor 属性设置为<code>Bird</code>对象：

```js
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
```

</section>

## Instructions
<section id='instructions'>
修改你的代码，使得<code>duck.constructor</code>和<code>beagle.constructor</code>返回各自的构造函数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Bird.prototype</code>应该是<code>Animal</code>的一个实例。
    testString: assert(Animal.prototype.isPrototypeOf(Bird.prototype));
  - text: <code>duck.constructor</code>应该返回<code>Bird</code>。
    testString: assert(duck.constructor === Bird);
  - text: <code>Dog.prototype</code>应该是<code>Animal</code>的一个实例。
    testString: assert(Animal.prototype.isPrototypeOf(Dog.prototype));
  - text: <code>beagle.constructor</code>应该返回<code>Dog</code>。
    testString: assert(beagle.constructor === Dog);

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
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```

</section>
