---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
forumTopicId: 301319
localeTitle: 从超类继承行为
---

## Description
<section id='description'>
在上一个挑战中，我们创建了一个<code>Animal 超类</code>，用来定义所有动物共有的行为：

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

在这一节以及下一节挑战中我们将学习如何给<code>Bird</code>、<code>Dog</code>重写<code>Animal</code>中的方法，而无需重新定义它们。这里我们会用到构造函数的<code>继承</code>特性。
这一节挑战中我们学习第一步：创建一个<code>超类</code>（或者叫父类）的实例。
你已经学会了一种创建<code>Animal</code>实例的方法，即使用<code>new</code>操作符：

```js
let animal = new Animal();
```

此语法用于<code>继承</code>时会存在一些缺点，这些缺点对于当前我们这个挑战来说太复杂了。相反，我们学习另外一种没有这些缺点的方法来替代<code>new</code>操作：

```js
let animal = Object.create(Animal.prototype);
```

<code>Object.create(obj)</code>创建了一个新对象，并指定了<code>obj</code>作为新对象的<code>原型</code>。回忆一下，我们之前说过<code>原型</code>就像是创建对象的“配方”。如果我们把<code>animal</code>的<code>原型</code>设置为与<code>Animal</code>构造函数的<code>原型</code>一样，那么就相当于让<code>animal</code>这个实例的配方与<code>Animal</code>其他实例的配方一样了。

```js
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```

</section>

## Instructions
<section id='instructions'>
使用<code>Object.create</code>方法给<code>Animal</code>创建两个实例：<code>duck</code>和<code>beagle</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该定义一个<code>duck</code>变量。
    testString: assert(typeof duck !== "undefined");
  - text: 应该定义一个<code>beagle</code>变量。
    testString: assert(typeof beagle !== "undefined");
  - text: <code>duck</code> 变量应该通过 <code>Object.create</code> 初始化。
    testString: assert(/(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(code));
  - text: <code>beagle</code> 变量应该通过 <code>Object.create</code> 初始化。
    testString: assert(/(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(code));
  - text: <code>duck</code>的原型应该被设置为<code>Animal</code>构造函数的<code>原型</code>。
    testString: assert(duck instanceof Animal);
  - text: <code>beagle</code>的原型应该被设置为<code>Animal</code>构造函数的<code>原型</code>。
    testString: assert(beagle instanceof Animal);

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
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```

</section>
