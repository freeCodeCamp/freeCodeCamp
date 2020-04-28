---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Simple Fields
challengeType: 1
videoUrl: ''
localeTitle: 使用简单字段编写简明对象文字声明
---

## Description
<section id="description"> ES6为轻松定义对象文字添加了一些很好的支持。请考虑以下代码： <blockquote> const getMousePosition =（x，y）=&gt;（{ <br> x：x， <br> y：y <br> }）; </blockquote> <code>getMousePosition</code>是一个简单的函数，它返回一个包含两个字段的对象。 ES6提供了语法糖，以消除必须写入<code>x: x</code>的冗余。您可以简单地编写一次<code>x</code> ，它将被转换为<code>x: x</code> （或类似的东西）。这是从上面重写的相同函数使用这个新语法： <blockquote> const getMousePosition =（x，y）=&gt;（{x，y}）; </blockquote></section>

## Instructions
<section id="instructions">使用带有对象文字的简单字段来创建和返回<code>Person</code>对象。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '输出是<code>{name: &quot;Zodiac Hasbro&quot;, age: 56, gender: &quot;male&quot;}</code> 。'
    testString: assert(() => {const res={name:"Zodiac Hasbro",age:56,gender:"male"}; const person=createPerson("Zodiac Hasbro", 56, "male"); return Object.keys(person).every(k => person[k] === res[k]);});
  - text: '不<code>:</code>被使用了。'
    testString: getUserInput => assert(!getUserInput("index").match(/:/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
