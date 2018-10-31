---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
videoUrl: ''
localeTitle: 从超类型继承行为
---

## Description
<section id="description">在之前的挑战中，您创建了一个名为<code>Animal</code>的<code>supertype</code> ，它定义了所有动物共享的行为： <blockquote> function Animal（）{} <br> Animal.prototype.eat = function（）{ <br> console.log（“nom nom nom”）; <br> }; </blockquote>这个和下一个挑战将涵盖如何在<code>Bird</code> and <code>Dog</code>重用<code>Animal&#39;s</code>方法而不再重新定义它们。它使用一种称为<code>inheritance</code>的技术。这个挑战包括第一步：创建<code>supertype</code> （或父类）的实例。您已经知道使用<code>new</code>运算符创建<code>Animal</code>实例的一种方法： <blockquote>让animal = new Animal（）; </blockquote>使用此语法进行<code>inheritance</code>时存在一些缺点，这对于此挑战的范围来说过于复杂。相反，这是一种没有这些缺点的替代方法： <blockquote> let animal = Object.create（Animal.prototype）; </blockquote> <code>Object.create(obj)</code>创建一个新对象，并将<code>obj</code>设置为新对象的<code>prototype</code> 。回想一下<code>prototype</code>就像创建对象的“配方”。通过设置<code>prototype</code>的<code>animal</code>是<code>Animal&#39;s</code> <code>prototype</code> ，你实际上给<code>animal</code>例如相同的“配方”为任何其他实例<code>Animal</code> 。 <blockquote> animal.eat（）; //打印“nom nom nom” <br>动物动物; // =&gt;是的</blockquote></section>

## Instructions
<section id="instructions">使用<code>Object.create</code>创建名为<code>duck</code>和<code>beagle</code>的<code>Animal</code>两个实例。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该定义<code>duck</code>变量。
    testString: 'assert(typeof duck !== "undefined", "The <code>duck</code> variable should be defined.");'
  - text: 应该定义<code>beagle</code>变量。
    testString: 'assert(typeof beagle !== "undefined", "The <code>beagle</code> variable should be defined.");'
  - text: <code>duck</code>应该有<code>Animal</code>的<code>prototype</code> 。
    testString: 'assert(duck instanceof Animal, "<code>duck</code> should have a <code>prototype</code> of <code>Animal</code>.");'
  - text: <code>beagle</code>应该有<code>Animal</code>的<code>prototype</code> 。
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should have a <code>prototype</code> of <code>Animal</code>.");'

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

// Add your code below this line

let duck; // Change this line
let beagle; // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
