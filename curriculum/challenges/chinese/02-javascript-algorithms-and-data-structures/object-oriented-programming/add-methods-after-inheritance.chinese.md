---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
videoUrl: ''
localeTitle: 继承后添加方法
---

## Description
<section id="description">除了继承的方法之外，从<code>supertype</code>构造函数继承其<code>prototype</code>对象的构造函数仍然可以拥有自己的方法。例如， <code>Bird</code>是一个从<code>Animal</code>继承其<code>prototype</code>的构造函数： <blockquote> function Animal（）{} <br> Animal.prototype.eat = function（）{ <br> console.log（“nom nom nom”）; <br> }; <br>函数Bird（）{} <br> Bird.prototype = Object.create（Animal.prototype）; <br> Bird.prototype.constructor = Bird; </blockquote>除了从<code>Animal</code>继承的内容之外，您还希望添加<code>Bird</code>对象独有的行为。在这里， <code>Bird</code>将获得一个<code>fly()</code>函数。函数以与任何构造函数相同的方式添加到<code>Bird&#39;s</code> <code>prototype</code> ： <blockquote> Bird.prototype.fly = function（）{ <br> console.log（“我在飞！”）; <br> }; </blockquote>现在<code>Bird</code>实例将同时使用<code>eat()</code>和<code>fly()</code>方法： <blockquote> let duck = new Bird（）; <br> duck.eat（）; //打印“nom nom nom” <br> duck.fly（）; //打印“我在飞！” </blockquote></section>

## Instructions
<section id="instructions">添加所有必需的代码，以便<code>Dog</code>对象继承自<code>Animal</code> ， <code>Dog&#39;s</code> <code>prototype</code>构造函数设置为Dog。然后将一个<code>bark()</code>方法添加到<code>Dog</code>对象，以便<code>beagle</code>可以<code>eat()</code>和<code>bark()</code> 。 <code>bark()</code>方法应该打印“Woof！”到控制台。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal</code>不应该响应<code>bark()</code>方法。
    testString: 'assert(typeof Animal.prototype.bark == "undefined", "<code>Animal</code> should not respond to the <code>bark()</code> method.");'
  - text: <code>Dog</code>应该继承<code>Animal</code>的<code>eat()</code>方法。
    testString: 'assert(typeof Dog.prototype.eat == "function", "<code>Dog</code> should inherit the <code>eat()</code> method from <code>Animal</code>.");'
  - text: <code>Dog</code>应该将<code>bark()</code>方法作为<code>own</code>属性。
    testString: 'assert(Dog.prototype.hasOwnProperty("bark"), "<code>Dog</code> should have the <code>bark()</code> method as an <code>own</code> property.");'
  - text: <code>beagle</code>应该是<code>Animal</code>一个<code>instanceof</code> 。
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should be an <code>instanceof</code> <code>Animal</code>.");'
  - text: <code>beagle</code>的构造函数应该设置为<code>Dog</code> 。
    testString: 'assert(beagle.constructor === Dog, "The constructor for <code>beagle</code> should be set to <code>Dog</code>.");'

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
// solution required
```
</section>
