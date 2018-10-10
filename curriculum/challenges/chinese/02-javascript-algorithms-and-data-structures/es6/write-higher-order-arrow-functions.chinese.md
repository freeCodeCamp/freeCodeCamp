---
id: 587d7b88367417b2b2512b45
title: Write Higher Order Arrow Functions
challengeType: 1
videoUrl: ''
localeTitle: 编写高阶箭头函数
---

## Description
<section id="description">是时候我们看到处理数据时箭头功能有多强大了。 Arrow函数与高阶函数（例如<code>map()</code> ， <code>filter()</code>和<code>reduce()</code>非常兼容，它们将其他函数作为处理数据集合的参数。阅读以下代码： <blockquote> FBPosts.filter（function（post）{ <br> return post.thumbnail！== null &amp;&amp; post.shares&gt; 100 &amp;&amp; post.likes&gt; 500; <br> }） </blockquote>我们用<code>filter()</code>写了这个，至少使它有点可读。现在将它与以下使用箭头函数语法的代码进行比较： <blockquote> FBPosts.filter（（post）=&gt; post.thumbnail！== null &amp;&amp; post.shares&gt; 100 &amp;&amp; post.likes&gt; 500） </blockquote>此代码更简洁，使用更少的代码行完成相同的任务。 </section>

## Instructions
<section id="instructions">使用箭头函数语法计算数组<code>realNumberArray</code>中只有正整数（十进制数不是整数）的<code>realNumberArray</code> ，并将新数组存储在变量<code>squaredIntegers</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squaredIntegers</code>应该是一个常量变量（通过使用<code>const</code> ）。
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+squaredIntegers/g), "<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>squaredIntegers</code>应该是一个<code>array</code>
    testString: 'assert(Array.isArray(squaredIntegers), "<code>squaredIntegers</code> should be an <code>array</code>");'
  - text: '<code>squaredIntegers</code>应该是<code>[16, 1764, 36]</code> <code>squaredIntegers</code> <code>[16, 1764, 36]</code>'
    testString: 'assert.deepStrictEqual(squaredIntegers, [16, 1764, 36], "<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>");'
  - text: <code>function</code>关键字未使用。
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'
  - text: 不应该使用循环
    testString: 'getUserInput => assert(!getUserInput("index").match(/(for)|(while)/g), "loop should not be used");'
  - text: 应使用<code>map</code> ， <code>filter</code>或<code>reduce</code>
    testString: 'getUserInput => assert(getUserInput("index").match(/map|filter|reduce/g), "<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
