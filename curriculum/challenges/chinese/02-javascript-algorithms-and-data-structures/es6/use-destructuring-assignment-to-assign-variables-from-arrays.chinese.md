---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1
videoUrl: ''
localeTitle: 使用解构分配从数组中分配变量
---

## Description
<section id="description"> ES6使解构数组像解构对象一样简单。扩展运算符和数组解构之间的一个关键区别是扩展运算符将数组的所有内容解包为逗号分隔列表。因此，您无法选择或选择要分配给变量的元素。对阵列进行解构可以让我们做到这一点： <blockquote> const [a，b] = [1,2,3,4,5,6]; <br> console.log（a，b）; // 1,2 </blockquote>变量<code>a</code>被赋予数组的第一个值，而<code>b</code>被赋予数组的第二个值。我们还可以通过使用逗号来访问所需索引，从而在数组中的任何索引处访问该值： <blockquote> const [a，b ,,, c] = [1,2,3,4,5,6]; <br> console.log（a，b，c）; // 1,2,5 </blockquote></section>

## Instructions
<section id="instructions">使用解构赋值来交换<code>a</code>和<code>b</code>的值，以便<code>a</code>接收存储在<code>b</code>的值，并且<code>b</code>接收存储在<code>a</code>的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 交换后<code>a</code>值应为6。
    testString: 'assert(a === 6, "Value of <code>a</code> should be 6, after swapping.");'
  - text: 交换后<code>b</code>值应为8。
    testString: 'assert(b === 8, "Value of <code>b</code> should be 8, after swapping.");'
  - text: 使用数组解构来交换a和b。
    testString: '// assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code), "Use array destructuring to swap a and b.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
