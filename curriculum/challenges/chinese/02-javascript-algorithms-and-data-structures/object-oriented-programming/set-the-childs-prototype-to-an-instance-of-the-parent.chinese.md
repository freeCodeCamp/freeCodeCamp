---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
videoUrl: ''
localeTitle: 将Child的Prototype设置为Parent的实例
---

## Description
<section id="description">在之前的挑战中，您看到了从<code>supertype</code> （或父级） <code>Animal</code>继承行为的第一步：创建一个新的<code>Animal</code>实例。这个挑战包括下一步：设置<code>subtype</code> （或子）的<code>prototype</code> - 在这种情况下， <code>Bird</code> - 是<code>Animal</code>一个实例。 <blockquote> Bird.prototype = Object.create（Animal.prototype）; </blockquote>请记住， <code>prototype</code>就像创建对象的“配方”。在某种程度上， <code>Bird</code>的配方现在包括<code>Animal</code>所有关键“成分”。 <blockquote>让鸭子=新鸟（“唐纳德”）; <br> duck.eat（）; //打印“nom nom nom” </blockquote> <code>duck</code>继承了<code>Animal</code>的所有属性，包括<code>eat</code>方法。 </section>

## Instructions
<section id="instructions">修改代码，以便<code>Dog</code>实例继承自<code>Animal</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code>应该是<code>Animal</code>一个实例。
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
// solution required
```
</section>
