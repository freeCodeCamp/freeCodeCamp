---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
videoUrl: ''
localeTitle: 理解原型链
---

## Description
<section id="description"> JavaScript中的所有对象（除少数例外）都有<code>prototype</code> 。此外，对象的<code>prototype</code>本身就是一个对象。 <blockquote> function Bird（name）{ <br> this.name = name; <br> } <br><br> typeof Bird.prototype; // =&gt;对象</blockquote>因为<code>prototype</code>是一个对象， <code>prototype</code>可以拥有自己的<code>prototype</code> ！在这种情况下， <code>Bird.prototype</code>的<code>prototype</code>是<code>Object.prototype</code> ： <blockquote> Object.prototype.isPrototypeOf（Bird.prototype）; <br> //返回true </blockquote>这有用吗？您可以回想一下之前挑战中的<code>hasOwnProperty</code>方法： <blockquote>让鸭子=新鸟（“唐纳德”）; <br> duck.hasOwnProperty（ “名称”）; // =&gt;是的</blockquote> <code>hasOwnProperty</code>方法在<code>Object.prototype</code>定义，可以通过<code>Bird.prototype</code>访问，然后可以通过<code>duck</code>访问它。这是<code>prototype</code>链的一个例子。在这个<code>prototype</code>链中， <code>Bird</code>是<code>duck</code>的<code>supertype</code> ，而<code>duck</code>是<code>subtype</code> 。 <code>Object</code>是<code>Bird</code>和<code>duck</code>的<code>supertype</code> 。 <code>Object</code>是JavaScript中所有对象的<code>supertype</code> 。因此，任何对象都可以使用<code>hasOwnProperty</code>方法。 </section>

## Instructions
<section id="instructions">修改代码以显示正确的原型链。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该显示<code>Object.prototype</code>是原型<code>Dog.prototype</code> “）
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
// solution required
```
</section>
