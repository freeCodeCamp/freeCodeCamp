---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
challengeType: 1
videoUrl: ''
localeTitle: 定义构造函数
---

## Description
<section id="description"> <code>Constructors</code>函数是创建新对象的函数。它们定义属于新对象的属性和行为。将它们视为创建新对象的蓝图。以下是<code>constructor</code>的示例： <blockquote> function Bird（）{ <br> this.name =“阿尔伯特”; <br> this.color =“blue”; <br> this.numLegs = 2; <br> } </blockquote>此<code>constructor</code>定义一个<code>Bird</code>对象，其属性<code>name</code> ， <code>color</code>和<code>numLegs</code>设置为Albert，blue和2。 <code>Constructors</code>遵循一些约定： <ul><li> <code>Constructors</code>函数使用大写名称定义，以区别于非<code>constructors</code>函数的其他函数。 </li><li> <code>Constructors</code>使用关键字<code>this</code>来设置它们将创建的对象的属性。在<code>constructor</code> ， <code>this</code>指的是它将创建的新对象。 </li><li> <code>Constructors</code>定义属性和行为，而不是像其他函数那样返回值。 </li></ul></section>

## Instructions
<section id="instructions">创建一个<code>constructor</code> <code>Dog</code> ，其属性<code>name</code> ， <code>color</code>和<code>numLegs</code>分别设置为字符串，字符串和数字。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code>应该将<code>name</code>属性设置为字符串。
    testString: 'assert(typeof (new Dog()).name === "string", "<code>Dog</code> should have a <code>name</code> property set to a string.");'
  - text: <code>Dog</code>应该将<code>color</code>属性设置为字符串。
    testString: 'assert(typeof (new Dog()).color === "string", "<code>Dog</code> should have a <code>color</code> property set to a string.");'
  - text: <code>Dog</code>应该将<code>numLegs</code>属性设置为数字。
    testString: 'assert(typeof (new Dog()).numLegs === "number", "<code>Dog</code> should have a <code>numLegs</code> property set to a number.");'

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
// solution required
```
</section>
