---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1

videoUrl: ''
localeTitle: Use Prototype Properties to Reduce Duplicate Code
---

## Description
<section id='description'>
所有<code>Bird</code>实例可能会有相同的<code>numLegs</code>值，所以在每一个<code>Bird</code>的实例中本质上都有一个重复的变量<code>numLegs</code>。
当只有两个实例时可能并不是什么问题，但想象一下如果有数百万个实例，这将会产生许许多多重复的变量。
这里有一个更好的方法可以解决上述问题，那就是使用<code>Bird</code>的<code>原型</code>。<code>原型</code>是一个可以在所有<code>Bird</code>实例之间共享的对象。以下是一个在<code>Bird prototype</code>中添加<code>numLegs</code>属性的示例：
<blockquote>Bird.prototype.numLegs = 2;</blockquote>
现在所有的<code>Bird</code>实例都拥有了共同的<code>numLegs</code>属性值。
<blockquote>console.log(duck.numLegs);  // 在控制台输出 2<br>console.log(canary.numLegs);  // 在控制台输出 2</blockquote>
由于所有的实例都可以继承<code>原型</code>上的属性，所以可以把<code>原型</code>看作是创建对象的 "配方"。
请注意：<code>duck</code>和<code>canary</code>的<code>原型</code>是<code>Bird</code>构造函数原型<code>Bird.prototype</code>的一部分。JavaScript 中几乎所有的对象都有一个<code>原型</code>属性，这个属性是属于它所在的构造函数的一部分。
</section>

## Instructions
<section id='instructions'>
给<code>Dog</code>的<code>原型</code>添加一个<code>numLegs</code>属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>beagle</code>应该有一个<code>numLegs</code>属性。
    testString: assert(beagle.numLegs !== undefined, '<code>beagle</code>应该有一 <code>numLegs</code>属性。');
  - text: <code>beagle.numLegs</code>应该是一个数字。
    testString: assert(typeof(beagle.numLegs) === 'number' , '<code>beagle.numLegs</code>应该是一个数字。');
  - text: <code>numLegs</code>应该是一个<code>原型</code>属性而不是一个<code>自身</code>属性。
    testString: assert(beagle.hasOwnProperty('numLegs') === false, '<code>numLegs</code>应该是一个<code>原型</code>属性而不是一个<code>自身</code>属性。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```

</section>
              