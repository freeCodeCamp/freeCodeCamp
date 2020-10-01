---
id: 587d7dae367417b2b2512b7a
challengeType: 1
forumTopicId: 301337
title: 使用 instance of 验证对象的构造函数
---

## Description
<section id='description'>
凡是通过构造函数创建出的新对象，都叫做这个构造函数的<code>实例</code>。JavaScript 提供了一种很简便的方法来验证这个事实，那就是通过<code>instanceof</code>操作符。<code>instanceof</code>允许你将对象与构造函数之间进行比较，根据对象是否由这个构造函数创建的返回<code>true</code>或者<code>false</code>。以下是一个示例：

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```

如果一个对象不是使用构造函数创建的，那么<code>instanceof</code>将会验证这个对象不是构造函数的实例：

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false
```

</section>

## Instructions
<section id='instructions'>
给<code>House</code>构造函数创建一个新实例，取名为<code>myHouse</code>并且传递一个数字给<code>bedrooms</code>参数。然后使用<code>instanceof</code>操作符验证这个对象是否为<code>House</code>的实例。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myHouse</code>应该有一个<code>numBedrooms</code>属性被赋值为一个数字。
    testString: assert(typeof myHouse.numBedrooms === 'number');
  - text: 请务必使用<code>instanceof</code>操作符验证<code>myHouse</code>这个对象是<code>House</code>构造函数的一个实例。
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
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```

</section>
