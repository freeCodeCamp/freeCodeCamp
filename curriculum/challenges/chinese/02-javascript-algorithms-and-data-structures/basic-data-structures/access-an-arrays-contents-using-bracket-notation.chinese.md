---
id: 5a661e0f1068aca922b3ef17
title: Access an Array's Contents Using Bracket Notation
challengeType: 1
forumTopicId: 301149
localeTitle: 使用方括号访问数组的内容
---

## Description
<section id='description'>
所有数据结构的基本特性是，它们不仅能够存储数据，我们还能够按照需求来访问存放在其中的数据。我们已经学习了如何创建一个数组结构，现在让我们开始学习如何访问这个数组结构中的数据。
我们先定义一个包含 3 个元素的数组：

```js
let ourArray = ["a", "b", "c"];
```

在一个数组结构中，其内部的每个元素都有一个与之对应的<dfn>索引</dfn>（<dfn>index</dfn>）。索引是该元素在数组中的位置，可被用于引用该元素。但需要注意的是，JavaScript 数组的索引是从0开始的（<dfn>zero-indexed</dfn>），即一个数组的第一个元素是在数组中的<em><strong>第 0 个</strong></em>位置，而不是第 1 个位置。
要从一个数组中获取一个元素，我们可以在一个数组变量名的后面加一个使用“方括号”括起来的索引。这叫做<dfn>方括号符号</dfn>（<dfn>bracket notation</dfn>）。
例如我们要从<code>ourArray</code>数组变量中获取数据元素<code>"a"</code>并将其赋值给一个变量，我们可以编写如下所示的代码：

```js
let ourVariable = ourArray[0];
// ourVariable 的值为 "a"
```

除了使用 “索引” 来获取某个元素值以外，你还可以通过类似的方法来<em>设置</em>一个索引位置所对应的元素值：

```js
ourArray[1] = "not b anymore";
// ourArray 现在的值为 ["a", "not b anymore", "c"];
```

我们现在已经利用方括号将索引为 1 的元素从<code>"b"</code>设置为了<code>"not b anymore"</code>。
</section>

## Instructions
<section id='instructions'>
在本挑战中，请你将<code>myArray</code>中第二个元素（索引<code>1</code>）设置为除了<code>"b"</code>以外的任意值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray[0]</code>等于<code>&quot;a&quot;</code>'
    testString: assert.strictEqual(myArray[0], "a");
  - text: '<code>myArray[1]</code>不再设置为<code>&quot;b&quot;</code>'
    testString: assert.notStrictEqual(myArray[1], "b");
  - text: '<code>myArray[2]</code>等于<code>&quot;c&quot;</code>'
    testString: assert.strictEqual(myArray[2], "c");
  - text: '<code>myArray[3]</code>等于<code>&quot;d&quot;</code>'
    testString: assert.strictEqual(myArray[3], "d");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = ["a", "b", "c", "d"];
// change code below this line

//change code above this line
console.log(myArray);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```

</section>
