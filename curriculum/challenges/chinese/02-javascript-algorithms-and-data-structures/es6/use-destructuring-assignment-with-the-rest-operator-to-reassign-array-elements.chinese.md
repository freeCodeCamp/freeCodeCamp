---
id: 587d7b8a367417b2b2512b4c
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
challengeType: 1
videoUrl: ''
localeTitle: 使用与Rest运算符的Destructuring Assignment重新分配数组元素
---

## Description
<section id="description">在某些涉及数组解构的情况下，我们可能希望将其余元素收集到一个单独的数组中。结果类似于<code>Array.prototype.slice()</code> ，如下所示： <blockquote> const [a，b，... arr] = [1,2,3,4,5,7]; <br> console.log（a，b）; // 1,2 <br>的console.log（ARR）; // [3,4,5,7] </blockquote>变量<code>a</code>和<code>b</code>从数组中获取第一个和第二个值。之后，由于rest操作符的存在， <code>arr</code>以数组的形式获取其余的值。 rest元素仅作为列表中的最后一个变量正常工作。在中，您不能使用rest运算符来捕获一个子数组，该子数组会遗漏原始数组的最后一个元素。 </section>

## Instructions
<section id="instructions">使用与rest运算符的解构赋值来执行有效的<code>Array.prototype.slice()</code>以便<code>arr</code>是原始数组<code>source</code>的子数组，省略前两个元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>arr</code>应为<code>[3,4,5,6,7,8,9,10]</code>'
    testString: 'assert(arr.every((v, i) => v === i + 3) && arr.length === 8,"<code>arr</code> should be <code>[3,4,5,6,7,8,9,10]</code>");'
  - text: 应该使用解构。
    testString: 'getUserInput => assert(getUserInput("index").match(/\[\s*\w*\s*,\s*\w*\s*,\s*...\w+\s*\]/g),"Destructuring should be used.");'
  - text: 不应使用<code>Array.slice()</code> 。
    testString: 'getUserInput => assert(!getUserInput("index").match(/slice/g), "<code>Array.slice()</code> should not be used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  arr = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
