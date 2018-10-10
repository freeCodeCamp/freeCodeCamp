---
id: 587d7b87367417b2b2512b42
title: Mutate an Array Declared with const
challengeType: 1
videoUrl: ''
localeTitle: 改变用const声明的数组
---

## Description
<section id="description"> <code>const</code>声明在现代JavaScript中有许多用例。一些开发人员更喜欢默认使用<code>const</code>分配所有变量，除非他们知道需要重新分配值。只有在这种情况下，他们才会使用<code>let</code> 。但是，重要的是要理解使用<code>const</code>分配给变量的对象（包括数组和函数）仍然是可变的。使用<code>const</code>声明仅阻止重新分配变量标识符。 <blockquote> “严格使用”; <br> const s = [5,6,7]; <br> s = [1,2,3]; //抛出错误，尝试分配const <br> s [2] = 45; //就像使用var或let声明的数组一样工作<br>的console.log（一个或多个）; //返回[5,6,45] </blockquote>如您所见，您可以改变对象<code>[5, 6, 7]</code>本身，变量<code>s</code>仍将指向更改的数组<code>[5, 6, 45]</code> 。与所有数组一样， <code>s</code>中的数组元素是可变的，但由于使用了<code>const</code> ，因此不能使用变量标识符<code>s</code>使用赋值运算符指向不同的数组。 </section>

## Instructions
<section id="instructions">数组声明为<code>const s = [5, 7, 2]</code> 。使用各种元素分配将数组更改为<code>[2, 5, 7]</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要替换<code>const</code>关键字。
    testString: 'getUserInput => assert(getUserInput("index").match(/const/g), "Do not replace <code>const</code> keyword.");'
  - text: <code>s</code>应该是一个常量变量（使用<code>const</code> ）。
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+s/g), "<code>s</code> should be a constant variable (by using <code>const</code>).");'
  - text: 不要更改原始数组声明。
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g), "Do not change the original array declaration.");'
  - text: '<code>s</code>应该等于<code>[2, 5, 7]</code> 。'
    testString: 'assert.deepEqual(s, [2, 5, 7], "<code>s</code> should be equal to <code>[2, 5, 7]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
