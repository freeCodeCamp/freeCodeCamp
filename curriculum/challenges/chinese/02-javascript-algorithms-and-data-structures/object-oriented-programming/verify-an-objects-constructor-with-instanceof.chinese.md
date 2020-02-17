---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
videoUrl: ''
localeTitle: 使用instanceof验证Object的构造函数
---

## Description
<section id="description">无论何时构造函数创建一个新对象，该对象都被称为其构造函数的一个<code>instance</code> 。 JavaScript提供了一种使用<code>instanceof</code>运算符验证这一点的便捷方法。 <code>instanceof</code>允许您将对象与构造函数进行比较，根据是否使用构造函数创建该对象，返回<code>true</code>或<code>false</code> 。这是一个例子： <blockquote>让Bird = function（名称，颜色）{ <br> this.name = name; <br> this.color = color; <br> this.numLegs = 2; <br> } <br><br>让乌鸦=新鸟（“亚历克西斯”，“黑色”）; <br><br>鸟的鸟; // =&gt;是的</blockquote>如果在不使用构造函数的<code>instanceof</code>创建对象， <code>instanceof</code>将验证它不是该构造函数的实例： <blockquote>让金丝雀= { <br>名称：“Mildred”， <br>颜色：“黄色”， <br> numLegs：2 <br> }; <br><br>鸟类的金丝雀; // =&gt; false </blockquote></section>

## Instructions
<section id="instructions">创建<code>House</code>构造函数的新实例，将其<code>myHouse</code>并传递多个卧室。然后，使用<code>instanceof</code>验证它是<code>House</code>的实例。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myHouse</code>应该将<code>numBedrooms</code>属性设置为数字。
    testString: assert(typeof myHouse.numBedrooms === 'number');
  - text: 请务必使用<code>instanceof</code>运算符验证<code>myHouse</code>是<code>House</code>的<code>instanceof</code> 。
    testString: assert(/myHouse\s*instanceof\s*House/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
