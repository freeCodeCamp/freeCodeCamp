---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
forumTopicId: 301321
localeTitle: 使用 this 关键字使代码更加可重用
---

## Description
<section id='description'>
在上一个挑战中我们了解了该如何给<code>duck</code>对象设置一个<code>方法</code>属性。然后在 <code>return</code> 语句里，我们通过使用 “点号表示法” <code>duck.name</code>来获取<code>name</code>的属性值：
<code>sayName: function() {return "The name of this duck is " + duck.name + ".";}</code>
虽然这是访问对象属性的有效方法，但是这里有一个陷阱。如果变量名发生了改变，那么引用了原始名称的任何代码都需要更新。在一个简短的对象定义中这并不是问题，但是如果对象有很多对其属性的引用，那么发生错误的可能性就更大了。
我们可以使用<code>this</code>关键字这个方法来避免这一问题：

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

<code>this</code>是一个很复杂的知识点，而上面那个例子也只是使用<code>this</code>的一种方法而已。在当前的上下文环境中，<code>this</code>指向的就是与这个方法有关联的<code>duck</code>对象。
如果把对象的变量名改为<code>mallard</code>，那使用<code>this</code>就没有必要在代码中找到所有指向<code>duck</code>的部分，这样可以使得代码更具有可读性和复用性。
</section>

## Instructions
<section id='instructions'>
修改<code>dog.sayLegs</code>方法以将所有直接对<code>dog</code>的引用删除。可以参考上面的例子。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code>应该返回一个指定的字符串。
    testString: assert(dog.sayLegs() === 'This dog has 4 legs.');
  - text: 你的代码应该使用<code>this</code>关键字来访问<code>dog</code>对象的<code>numLegs</code>属性值。
    testString: assert(code.match(/this\.numLegs/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
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
