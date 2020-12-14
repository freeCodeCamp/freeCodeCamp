---
id: 587d7db0367417b2b2512b81
challengeType: 1
forumTopicId: 301330
title: 了解对象的原型来自哪里
---

## Description
<section id='description'>
就像人们从父母那里继承基因一样，对象也可直接从创建它的构造函数那里继承其<code>原型</code>。请看下面的例子：<code>Bird</code>构造函数创建了一个<code>duck</code>对象：

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

<code>duck</code>从<code>Bird</code>构造函数那里继承了它的<code>原型</code>，你可以使用<code>isPrototypeOf</code>方法来验证他们之间的关系：

```js
Bird.prototype.isPrototypeOf(duck);
// 返回 true
```

</section>

## Instructions
<section id='instructions'>
使用<code>isPrototypeOf</code>方法验证<code>beagle</code>是否继承了<code>Dog</code>构造函数的<code>原型</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code>应该是<code>beagle</code>的<code>原型</code>。
    testString: assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));

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

// Add your code below this line


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
```

</section>
