---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: 重置继承的构造函数属性
---

## Description
<section id="description">当一个对象从另一个对象继承它的<code>prototype</code> ，它也继承了<code>supertype</code>的构造函数属性。这是一个例子： <blockquote>函数Bird（）{} <br> Bird.prototype = Object.create（Animal.prototype）; <br> let duck = new Bird（）; <br> duck.constructor // function Animal（）{...} </blockquote>但<code>duck</code>和所有<code>Bird</code>实例都应该表明它们是由<code>Bird</code>而不是<code>Animal</code>建造的。为此，您可以手动将<code>Bird&#39;s</code>构造函数属性设置为<code>Bird</code>对象： <blockquote> Bird.prototype.constructor = Bird; <br> duck.constructor // function Bird（）{...} </blockquote></section>

## Instructions
<section id="instructions">修复代码，使<code>duck.constructor</code>和<code>beagle.constructor</code>返回各自的构造函数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Bird.prototype</code>应该是<code>Animal</code>一个实例。
    testString: assert(Animal.prototype.isPrototypeOf(Bird.prototype));
  - text: <code>duck.constructor</code>应该返回<code>Bird</code> 。
    testString: assert(duck.constructor === Bird);
  - text: <code>Dog.prototype</code>应该是<code>Animal</code>一个实例。
    testString: assert(Animal.prototype.isPrototypeOf(Dog.prototype));
  - text: <code>beagle.constructor</code>应该返回<code>Dog</code> 。
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
// solution required
```
</section>
