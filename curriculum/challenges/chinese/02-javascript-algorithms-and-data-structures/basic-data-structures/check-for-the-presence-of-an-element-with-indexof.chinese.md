---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
forumTopicId: 301154
localeTitle: 使用 indexOf() 检查元素是否存在
---

## Description
<section id='description'>
由于数组可以在任意时间被修改或者说<em>被改变（mutated）</em>，我们不能保证某个数据在一个给定数组中的位置，甚至不能保证该元素还存在于该数组中。幸运的是，JavaScript 给我们提供了另一个内置方法<code>indexOf()</code>。这个方法让我们可以便捷地检查某个元素是否存在于一个数组中。<code>indexOf()</code>方法接受一个元素作为输入参数，并返回该元素在数组中的位置（索引）；若该元素不存在于数组中则返回<code>-1</code>。
例如：

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // 返回 -1
fruits.indexOf('oranges'); // 返回 2
fruits.indexOf('pears'); // 返回 1，即第一个出现的 'pears' 元素在数组中的索引为 1
```

</section>

## Instructions
<section id='instructions'>
<code>indexOf()</code>在快速检查一个数组中是否存在某个元素时非常有用。我们已经定义了一个<code>quickCheck</code>函数，它接受一个数组和一个元素作为输入参数。请修改这个函数，利用<code>indexOf()</code>方法，使得当输入的数组中含有输入的元素时，函数返回<code>true</code>；不含有输入的元素时，函数返回<code>false</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;mushrooms&quot;)</code>应该返回<code>false</code>'
    testString: assert.strictEqual(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'), false);
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;onions&quot;)</code>应该返回<code>true</code>'
    testString: assert.strictEqual(quickCheck(['onions', 'squash', 'shallots'], 'onions'), true);
  - text: '<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code>应该返回<code>true</code>'
    testString: assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
  - text: '<code>quickCheck([true, false, false], undefined)</code>应返回<code>false</code>'
    testString: assert.strictEqual(quickCheck([true, false, false], undefined), false);
  - text: <code>quickCheck</code>函数应该使用<code>indexOf()</code>方法
    testString: assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function quickCheck(arr, elem) {
  // change code below this line
  return arr.indexOf(elem) >= 0; 
  // change code above this line
}
```

</section>
