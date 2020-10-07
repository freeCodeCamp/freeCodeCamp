---
id: 587d7daf367417b2b2512b7f
challengeType: 1
forumTopicId: 301316
title: 将原型更改为新对象
---

## Description
<section id='description'>
到目前为止，你已经可以单独给<code>prototype</code>添加属性了：

```js
Bird.prototype.numLegs = 2;
```

这将在添加许多属性的时候变得单调乏味。

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

一种更有效的方法就是给对象的<code>prototype</code>设置为一个已经包含了属性的新对象。这样一来，所有属性都可以一次性添加进来：

```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

</section>

## Instructions
<section id='instructions'>
通过给<code>prototype</code>设置为新对象的方法，在<code>Dog</code>构造函数的<code>原型</code>上添加一个属性<code>numLegs</code>以及两个方法：<code>eat()</code>和<code>describe()</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code>应该被设置为一个新对象。
    testString: assert((/Dog\.prototype\s*?=\s*?{/).test(code));
  - text: <code>Dog.prototype</code>应该拥有属性<code>numLegs</code>。
    testString: assert(Dog.prototype.numLegs !== undefined);
  - text: <code>Dog.prototype</code>应该拥有方法<code>eat()</code>。
    testString: assert(typeof Dog.prototype.eat === 'function');
  - text: <code>Dog.prototype</code>应该拥有方法<code>describe()</code>。
    testString: assert(typeof Dog.prototype.describe === 'function');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line

};
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```

</section>
