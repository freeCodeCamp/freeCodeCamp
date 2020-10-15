---
id: 587d7b89367417b2b2512b48
challengeType: 1
forumTopicId: 301222
title: 使用 spread 运算符展开数组项
---

## Description
<section id='description'>
ES6 允许我们使用 <dfn>展开操作符</dfn> 来展开数组，以及需要多个参数或元素的表达式。
下面的 ES5 代码使用了<code>apply()</code>来计算数组的最大值：

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
```

我们必须使用<code>Math.max.apply(null,arr)</code>，是因为直接调用<code>Math.max(arr)</code>会返回<code>NaN</code>。<code>Math.max()</code>函数需要传入的是一系列由逗号分隔的参数，而不是一个数组。
展开操作符可以提升代码的可读性，这对后续的代码维护是有积极作用的。

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
```

<code>...arr</code>返回了一个“打开”的数组。或者说它 <em>展开</em> 了数组。
然而，展开操作符只能够在函数的参数中，或者数组之中使用。下面的代码将会报错：

```js
const spreaded = ...arr; // will throw a syntax error
```

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
    testString: assert(arr2.every((v, i) => v === arr1[i]));
  - text: 用<code>...</code>展开操作符来赋值<code>arr1</code>。
    testString: assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
  - text: 当<code>arr1</code>改变的时候，<code>arr2</code>不会改变。
    testString: assert((arr1, arr2) => {arr1.push('JUN'); return arr2.length < arr1.length});

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // change this line

console.log(arr2);
```

</div>



</section>

## Solution
<section id='solution'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```

</section>
