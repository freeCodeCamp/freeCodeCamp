---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
challengeType: 1

videoUrl: ''
localeTitle: Use the Spread Operator to Evaluate Arrays In-Place
---

## Description
<section id='description'>
ES6 允许我们使用 <dfn>展开操作符</dfn> 来展开数组，以及需要多个参数或元素的表达式。
下面的 ES5 代码使用了<code>apply()</code>来计算数组的最大值：
<blockquote>var arr = [6, 89, 3, 45];<br>var maximus = Math.max.apply(null, arr); // 返回 89</blockquote>
我们必须使用<code>Math.max.apply(null,arr)</code>，是因为直接调用<code>Math.max(arr)</code>会返回<code>NaN</code>。<code>Math.max()</code>函数需要传入的是一系列由逗号分隔的参数，而不是一个数组。
展开操作符可以提升代码的可读性，这对后续的代码维护是有积极作用的。
<blockquote>const arr = [6, 89, 3, 45];<br>const maximus = Math.max(...arr); // 返回 89</blockquote>
<code>...arr</code>返回了一个“打开”的数组。或者说它 <em>展开</em> 了数组。
然而，展开操作符只能够在函数的参数中，或者数组之中使用。下面的代码将会报错：
<blockquote>const spreaded = ...arr; // 将会发生语法错误</blockquote>
</section>

## Instructions
<section id='instructions'>
使用展开操作符将<code>arr1</code>中的内容都赋值到<code>arr2</code>中去。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr2</code>的值是由<code>arr1</code>拷贝而来的。
    testString: assert(arr2.every((v, i) => v === arr1[i]), '<code>arr2</code>的值是由<code>arr1</code>拷贝而来的。');
  - text: 用<code>...</code>展开操作符来赋值<code>arr1</code>。
    testString: getUserInput => assert(getUserInput('index').match(/\[\s*...arr1\s*\]/g),'用<code>...</code>展开操作符来赋值<code>arr1</code>。');
  - text: 当<code>arr1</code>改变的时候，<code>arr2</code>不会改变。
    testString: assert((arr1, arr2) => {arr1.push('JUN'); return arr2.length < arr1.length},'当<code>arr1</code>改变的时候，<code>arr2</code>不会改变。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              