---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
videoUrl: ''
localeTitle: 使用继承，所以你不要重复自己
---

## Description
<section id="description">编程中有一个原则叫做“ <code>Don&#39;t Repeat Yourself (DRY)</code> 。重复代码是一个问题的原因是因为任何更改都需要在多个位置修复代码。这通常意味着为程序员提供更多工作，并且有更多错误空间。请注意，在下面的示例中， <code>describe</code>方法由<code>Bird</code>和<code>Dog</code>共享： <blockquote> Bird.prototype = { <br>构造函数：Bird， <br> describe：function（）{ <br> console.log（“我的名字是”+ this.name）; <br> } <br> }; <br><br> Dog.prototype = { <br>构造函数：狗， <br> describe：function（）{ <br> console.log（“我的名字是”+ this.name）; <br> } <br> }; </blockquote> <code>describe</code>方法在两个地方重复。可以通过创建名为<code>Animal</code>的<code>supertype</code> （或父级）来编辑代码以遵循<code>DRY</code>原则： <blockquote> function Animal（）{}; <br><br> Animal.prototype = { <br>构造函数：Animal， <br> describe：function（）{ <br> console.log（“我的名字是”+ this.name）; <br> } <br> }; </blockquote>由于<code>Animal</code>包含<code>describe</code>方法，您可以从<code>Bird</code>和<code>Dog</code>删除它： <blockquote> Bird.prototype = { <br>构造函数：Bird <br> }; <br><br> Dog.prototype = { <br>构造函数：狗<br> }; </blockquote></section>

## Instructions
<section id="instructions"> <code>Cat</code>和<code>Bear</code>都重复<code>eat</code> 。通过将<code>eat</code>方法移动到<code>Animal</code> <code>supertype</code>以<code>DRY</code>的精神编辑代码。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal.prototype</code>应该有<code>eat</code>属性。
    testString: 'assert(Animal.prototype.hasOwnProperty("eat"), "<code>Animal.prototype</code> should have the <code>eat</code> property.");'
  - text: <code>Bear.prototype</code>不应该有<code>eat</code>属性。
    testString: 'assert(!(Bear.prototype.hasOwnProperty("eat")), "<code>Bear.prototype</code> should not have the <code>eat</code> property.");'
  - text: <code>Cat.prototype</code>不应该有<code>eat</code>属性。
    testString: 'assert(!(Cat.prototype.hasOwnProperty("eat")), "<code>Cat.prototype</code> should not have the <code>eat</code> property.");'

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
// solution required
```
</section>
