---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
videoUrl: ''
localeTitle: 使用原型属性来减少重复代码
---

## Description
<section id="description">由于<code>numLegs</code>对于<code>Bird</code>所有实例可能具有相同的值， <code>numLegs</code>在每个<code>Bird</code>实例中基本上都有一个重复的变量<code>numLegs</code> 。当只有两个实例时，这可能不是问题，但想象一下，如果有数百万个实例。这将是许多重复的变量。更好的方法是使用<code>Bird&#39;s</code> <code>prototype</code> 。 <code>prototype</code>是一个在<code>Bird</code>所有实例之间共享的对象。以下是如何将<code>numLegs</code>添加到<code>Bird prototype</code> ： <blockquote> Bird.prototype.numLegs = 2; </blockquote>现在<code>Bird</code>所有实例都具有<code>numLegs</code>属性。 <blockquote>的console.log（duck.numLegs）; //打印2 <br>的console.log（canary.numLegs）; //打印2 </blockquote>由于所有实例都自动拥有<code>prototype</code>上的属性，因此将<code>prototype</code>视为创建对象的“配方”。请注意， <code>duck</code>和<code>canary</code>的<code>prototype</code>是<code>Bird</code>构造函数的一部分，如<code>Bird.prototype</code> 。 JavaScript中几乎每个对象都有一个<code>prototype</code>属性，它是创建它的构造函数的一部分。 </section>

## Instructions
<section id="instructions">将<code>numLegs</code>属性添加到<code>Dog</code>的<code>prototype</code>中</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>beagle</code>应该有一个<code>numLegs</code>财产。
    testString: 'assert(beagle.numLegs !== undefined, "<code>beagle</code> should have a <code>numLegs</code> property.");'
  - text: <code>beagle.numLegs</code>应该是一个数字。
    testString: 'assert(typeof(beagle.numLegs) === "number" , "<code>beagle.numLegs</code> should be a number.");'
  - text: <code>numLegs</code>应该是<code>prototype</code>属性而不是<code>own</code>属性。
    testString: 'assert(beagle.hasOwnProperty("numLegs") === false, "<code>numLegs</code> should be a <code>prototype</code> property not an <code>own</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}



// Add your code above this line
let beagle = new Dog("Snoopy");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
