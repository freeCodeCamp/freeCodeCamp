---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
forumTopicId: 301151
localeTitle: 使用 push() 和 unshift() 添加项目到数组中
---

## Description
<section id='description'>
一个数组的长度与其包含的数据类型一样，是不固定的。数组可以包含任意数量的元素，可以不限次数地往数组中添加元素或者从中移除元素，或者说数组是<dfn>可变的</dfn>（<dfn>mutable</dfn>）。在本挑战中，我们要学习两个以编程方式修改数组的方法：<code>Array.push()</code>和<code>Array.unshift()</code>。
这两个方法都接收一个或多个元素作为参数；对一个数组调用这两个方法都可以将输入的元素插入到该数组中；<code>push()</code>方法将元素插入到一个数组的末尾，而<code>unshift()</code>方法将元素插入到一个数组的开头。请看以下例子：

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
```

注意，我们还可以输入变量，这允许我们很灵活地动态改变我们数组中的数据。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>mixedNumbers</code>函数，它会接受一个数组作为参数。请你修改这个函数，使用<code>push()</code>和<code>unshift()</code>来将<code>'I', 2, 'three'</code>插入到数组的开头，将<code>7, 'VIII', 9</code>插入到数组的末尾，使得这个函数返回一个依次包含 1-9 的数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mixedNumbers([&quot;IV&quot;, 5, &quot;six&quot;])</code>现在应该返回<code>[&quot;I&quot;, 2, &quot;three&quot;, &quot;IV&quot;, 5, &quot;six&quot;, 7, &quot;VIII&quot;, 9]</code>'
    testString: assert.deepEqual(mixedNumbers(['IV', 5, 'six']), ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9]);
  - text: <code>mixedNumbers</code>函数应该使用<code>push()</code>方法
    testString: assert(mixedNumbers.toString().match(/\.push/));
  - text: <code>mixedNumbers</code>函数应该使用<code>unshift()</code>方法
    testString: assert(mixedNumbers.toString().match(/\.unshift/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function mixedNumbers(arr) {
  // change code below this line
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  // change code above this line
  return arr;
}
```

</section>
