---
id: 587d7b8a367417b2b2512b4c
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
challengeType: 1

videoUrl: ''
localeTitle: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
---

## Description
<section id='description'>
在解构数组的某些情况下，我们可能希望将剩下的元素放进另一个数组里面。
以下代码的结果与使用<code>Array.prototype.slice()</code>相同：
<blockquote>const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];<br>console.log(a, b); // 1, 2<br>console.log(arr); // [3, 4, 5, 7]</blockquote>
变量<code>a</code>与<code>b</code>分别获取了数组的前两个元素的值。之后，因为<code>rest</code>操作符的存在，<code>arr</code>获取了原数组剩余的元素的值，并构成了一个新的数组。
<code>rest</code>操作只能对数组列表最后的元素起作用。这意味着你不能使用<code>rest</code>操作符来截取原数组中间元素的子数组。
</section>

## Instructions
<section id='instructions'>
使用解构赋值以及<code>rest</code>操作符来进行一个<code>Array.prototype.slice</code>相同的操作。使得<code>arr</code>是原数组<code>source</code>除开前两个元素的子数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr</code>应该为<code>[3,4,5,6,7,8,9,10]</code>
    testString: assert(arr.every((v, i) => v === i + 3),'<code>arr</code>应该为<code>[3,4,5,6,7,8,9,10]</code>');
  - text: 使用了解构赋值。
    testString: getUserInput => assert(getUserInput('index').match(/\[\s*\w*\s*,\s*\w*\s*,\s*...arr\s*\]/g),'使用了解构赋值。');
  - text: 没有使用<code>Array.slice()</code>。
    testString: getUserInput => assert(!getUserInput('index').match(/Array.slice/g), '没有使用<code>Array.slice()</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              