---
id: 587d7db0367417b2b2512b82
challengeType: 1
forumTopicId: 301329
title: 了解原型链
---

## Description
<section id='description'>
JavaScript 中所有的对象（除了少数例外）都有自己的<code>原型</code>。而且，对象的<code>原型</code>本身也是一个对象。

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // => object
```

正因为<code>原型</code>是一个对象，所以<code>原型</code>对象也有它自己的<code>原型</code>！这样看来的话，<code>Bird.prototype</code>的<code>原型</code>就是<code>Object.prototype</code>：

```js
Object.prototype.isPrototypeOf(Bird.prototype);
// 返回 true
```

这有什么作用呢？你可能还记得我们在上一个挑战中学到的<code>hasOwnProperty</code>方法：

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // => true
```

<code>hasOwnProperty</code>是定义在<code>Object.prototype</code>上的一个方法，尽管在<code>Bird.prototype</code>和<code>duck</code>上并没有定义该方法，但是我们依然可以在这两个对象上访问到。这就是一个<code>原型</code>链。
在这个<code>原型</code>链中，<code>Bird</code>构造函数是<code>父级</code>，<code>duck</code>是<code>子级</code>。<code>Object</code>则是<code>Bird</code>构造函数和<code>duck</code>实例共同的<code>父级</code>。
<code>Object</code>是 JavaScript 中所有对象的<code>父级</code>，也就是原型链的最顶层。因此，所有对象都可以访问<code>hasOwnProperty</code>方法。
</section>

## Instructions
<section id='instructions'>
修改以下代码使其展示出正确的原型链。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的代码应该展示<code>Object.prototype</code>是<code>Dog.prototype</code>的原型。
    testString: assert(/Object\.prototype\.isPrototypeOf/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```

</section>
