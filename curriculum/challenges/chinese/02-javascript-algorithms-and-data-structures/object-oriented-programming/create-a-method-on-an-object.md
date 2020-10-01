---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
forumTopicId: 301318
localeTitle: 在对象上创建方法
---

## Description
<section id='description'>
<code>对象</code>可以有一个叫做<code>方法</code>的特殊<code>属性</code>。
<code>方法</code>其实是一个值为函数的<code>属性</code>，它可以为一个<code>对象</code>添加不同的行为。以下就是一个带有方法属性的<code>duck</code>示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// Returns "The name of this duck is Aflac."
```

这个例子给<code>duck</code>对象添加了一个<code>sayName 方法</code>，这个方法返回一个包含<code>duck</code>名字的句子。
注意：这个<code>方法</code>在返回语句中使用<code>duck.name</code>的方式来获取<code>name</code>的属性值。在下一个挑战中我们将会使用另外一种方法来实现。
</section>

## Instructions
<section id='instructions'>
给<code>dog 对象</code>设置一个名为<code>sayLegs</code>的方法，并让它返回 "This dog has 4 legs." 这句话。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code>应该是一个函数。
    testString: assert(typeof(dog.sayLegs) === 'function');
  - text: <code>dog.sayLegs()</code>应该返回给定的字符串，需要注意标点和间距的问题。
    testString: assert(dog.sayLegs() === 'This dog has 4 legs.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

</div>



</section>

## Solution
<section id='solution'>


```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```

</section>
