---
id: 587d7dad367417b2b2512b77
challengeType: 1
forumTopicId: 16804
title: 定义构造函数
---

## Description
<section id='description'>
<code>构造函数</code>用以创建一个新对象，并给这个新对象定义属性和行为。因此这是创建新对象的一个最基本的方式。
以下就是一个<code>构造函数</code>的示例：

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

这个<code>构造函数</code>定义了一个<code>Bird</code>对象，其属性<code>name</code>、<code>color</code>和<code>numLegs</code>的值分别被设置为<code>Albert</code>、<code>blue</code>和 2。
<code>构造函数</code>遵循一些惯例规则：
<ul><li><code>构造函数</code>函数名的首字母最好大写，这是为了方便我们区分<code>构造函数</code>和其他非构造函数。</li><li><code>构造函数</code>使用<code>this</code>关键字来给它将创建的这个对象设置新的属性。在<code>构造函数</code>里面，<code>this</code>指向的就是它新创建的这个对象。</li><li><code>构造函数</code>定义了属性和行为就可创建对象，而不是像其他函数一样需要设置返回值。</li></ul>
</section>

## Instructions
<section id='instructions'>
创建一个<code>构造函数</code>：<code>Dog</code>。给其添加<code>name</code>，<code>color</code>和<code>numLegs</code>属性并分别给它们设置为：字符串，字符串和数字。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code>应该有一个<code>name</code>属性且它的值是一个字符串。
    testString: assert(typeof (new Dog()).name === 'string');
  - text: <code>Dog</code>应该有一个<code>color</code>属性且它的值是一个字符串。
    testString: assert(typeof (new Dog()).color === 'string');
  - text: <code>Dog</code>应该有一个<code>numLegs</code>属性且它的值是一个数字。
    testString: assert(typeof (new Dog()).numLegs === 'number');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```

</section>
