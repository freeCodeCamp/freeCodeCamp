---
id: 587d7db0367417b2b2512b83
challengeType: 1
forumTopicId: 301334
title: 使用继承避免重复
---

## Description
<section id='description'>
有一条原则叫做：<code>Don't Repeat Yourself</code>，常以缩写形式<code>DRY</code>出现，意思是“不要自己重复”。编写重复代码会产生的问题是：任何改变都需要去多个地方修复所有重复的代码。这通常意味着我们需要做更多的工作，会产生更高的出错率。
请观察下面的示例，<code>Bird</code>和<code>Dog</code>共享<code>describe</code>方法：

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

我们可以看到<code>describe</code>方法在两个地方重复定义了。根据以上所说的<code>DRY</code>原则，我们可以通过创建一个<code>Animal 超类（或者父类）</code>来重写这段代码：

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

<code>Animal</code>构造函数中定义了<code>describe</code>方法，可将<code>Bird</code>和<code>Dog</code>这两个构造函数的方法删除掉：

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

</section>

## Instructions
<section id='instructions'>
<code>Cat</code>和<code>Bear</code>重复定义了<code>eat</code>方法。本着<code>DRY</code>的原则，通过将<code>eat</code>方法移动到<code>Animal 超类</code>中来重写你的代码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal.prototype</code>应该有<code>eat</code>属性。
    testString: assert(Animal.prototype.hasOwnProperty('eat'));
  - text: <code>Bear.prototype</code>不应该有<code>eat</code>属性。
    testString: assert(!(Bear.prototype.hasOwnProperty('eat')));
  - text: <code>Cat.prototype</code>不应该有<code>eat</code>属性。
    testString: assert(!(Cat.prototype.hasOwnProperty('eat')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```

</section>
