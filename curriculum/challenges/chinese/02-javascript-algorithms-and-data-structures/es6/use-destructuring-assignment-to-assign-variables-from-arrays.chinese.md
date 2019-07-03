---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1

videoUrl: ''
localeTitle: Use Destructuring Assignment to Assign Variables from Arrays
---

## Description
<section id='description'>
在 ES6 里面，解构数组可以如同解构对象一样简单。
与数组解构不同，数组的扩展运算会将数组里的所有内容分解成一个由逗号分隔的列表。所以，你不能选择哪个元素来给变量赋值。
而对数组进行解构却可以让我们做到这一点：
<blockquote>const [a, b] = [1, 2, 3, 4, 5, 6];<br>console.log(a, b); // 1, 2</blockquote>
变量<code>a</code>以及<code>b</code>分别被数组的第一、第二个元素赋值。
我们甚至能在数组解构中使用逗号分隔符，来获取任意一个想要的值：
<blockquote>const [a, b,,, c] = [1, 2, 3, 4, 5, 6];<br>console.log(a, b, c); // 1, 2, 5 </blockquote>
</section>

## Instructions
<section id='instructions'>
使用数组解构来交换变量<code>a</code>与<code>b</code>的值。使<code>a</code>、<code>b</code>能分别获得对方的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 在交换后，<code>a</code>的值应该为6。
    testString: assert(a === 6, '在交换后，<code>a</code>的值应该为6。');
  - text: 在交换后，<code>b</code>的值应该为8。
    testString: assert(b === 8, '在交换后，<code>b</code>的值应该为8。');
  - text: 使用数组解构来交换<code>a</code>和<code>b</code>。
    testString: // assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code), '使用数组解构来交换<code>a</code>和<code>b</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              