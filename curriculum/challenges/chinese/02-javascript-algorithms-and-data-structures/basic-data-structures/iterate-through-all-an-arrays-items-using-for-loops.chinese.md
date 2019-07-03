---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1

videoUrl: ''
localeTitle: Iterate Through All an Array's Items Using For Loops
---

## Description
<section id='description'>
在进行与数组有关的编程时，我们有时需要遍历数组的所有元素来找出我们需要的元素，或者对数组执行特定的操作。JavaScript 提供了几个内置的方法，它们以不同的方式遍历数组来获得不同的结果（如<code>every()</code>、<code>forEach()</code>、<code>map()</code>等等）。而简单的<code>for</code>循环不仅能实现这些功能，而且相比之下也更灵活。
请看以下例子：
<blockquote>function greaterThanTen(arr) {<br>&nbsp;&nbsp;let newArr = [];<br>&nbsp;&nbsp;for (let i = 0; i < arr.length; i++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] > 10) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;newArr.push(arr[i]);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;return newArr;<br>}<br><br>greaterThanTen([2, 12, 8, 14, 80, 0, 1]);<br>// 返回 [12, 14, 80]</blockquote>
这个函数使用一个<code>for</code>循环来遍历一个数组，逐一对其中的元素进行测试。我们用这个方法简单地以编程的方式找出了数组中大于<code>10</code>的元素，并返回了一个包含这些元素的数组。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>filteredArray</code>函数，它接受一个嵌套的数组参数<code>arr</code>以及一个<code>elem</code>参数，并要返回一个新数组。<code>arr</code>数组中的数组可能包含<code>elem</code>元素，也可能不包含。请修改该函数，用一个<code>for</code>循环来做筛选，使函数返回一个由<code>arr</code>中不包含<code>elem</code>的数组组成的新数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code>应该返回<code>[ [10, 8, 3], [14, 6, 23] ]</code>。
    testString: assert.deepEqual(filteredArray([ [10, 8, 3], [14, 6, 23], [3, 18, 6] ], 18), [[10, 8, 3], [14, 6, 23]], '<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code>应该返回<code>[ [10, 8, 3], [14, 6, 23] ]</code>。');
  - text: "<code>filteredArray([ ['trumpets', 2], ['flutes', 4], ['saxophones', 2] ], 2)</code>应该返回<code>[ ['flutes', 4] ]</code>。"
    testString: assert.deepEqual(filteredArray([ ['trumpets', 2], ['flutes', 4], ['saxophones', 2] ], 2), [['flutes', 4]], '<code>filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)</code>应该返回<code>[ ["flutes", 4] ]</code>。');
  - text: "<code>filteredArray([ ['amy', 'beth', 'sam'], ['dave', 'sean', 'peter'] ], 'peter')</code>应该返回<code>[ ['amy', 'beth', 'sam'] ]</code>。"
    testString: assert.deepEqual(filteredArray([['amy', 'beth', 'sam'], ['dave', 'sean', 'peter']], 'peter'), [['amy', 'beth', 'sam']], '<code>filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")</code>应该返回<code>[ ["amy", "beth", "sam"] ]</code>。');
  - text: <code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code>应该返回<code>[ ]</code>。
    testString: assert.deepEqual(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3), [], '<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code>应该返回<code>[ ]</code>。');
  - text: <code>filteredArray</code>函数应该使用一个<code>for</code> 循环。
    testString: assert.notStrictEqual(filteredArray.toString().search(/for/), -1, '<code>filteredArray</code>函数应该使用一个<code>for</code> 循环。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              