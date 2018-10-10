---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
challengeType: 1
videoUrl: ''
localeTitle: 使用数组存储数据集合
---

## Description
<section id="description">以下是阵列数据结构最简单实现的示例。这被称为<dfn>一维数组</dfn> ，意味着它只有一个级别，或者它没有嵌套在其中的任何其他数组。请注意，它包含<dfn>布尔值</dfn> ， <dfn>字符串</dfn>和<dfn>数字</dfn> ，以及其他有效的JavaScript数据类型： <blockquote> let simpleArray = [&#39;one&#39;，2，&#39;three&#39;，true，false，undefined，null]; <br>的console.log（simpleArray.length）; <br> //记录7 </blockquote>所有数组都有一个length属性，如上所示，可以使用语法<code>Array.length</code>轻松访问<code>Array.length</code> 。下面可以看到更复杂的数组实现。这称为<dfn>多维数组</dfn> ，或包含其他数组的数组。请注意，此数组还包含JavaScript <dfn>对象</dfn> ，我们将在下一节中详细介绍，但是现在，您需要知道的是，数组也能够存储复杂对象。 <blockquote>让complexArray = [ <br> [ <br> { <br>一：1， <br>二：2 <br> }， <br> { <br>三：3， <br>四：4 <br> } <br> ] <br> [ <br> { <br> a：“a”， <br> b：“b” <br> }， <br> { <br> c：“c”， <br> d：“d” <br> } <br> ] <br> ]。 </blockquote></section>

## Instructions
<section id="instructions">我们定义了一个名为<code>yourArray</code>的变量。通过为<code>yourArray</code>变量指定长度至少为5个元素的数组来完成该语句。您的数组应至少包含一个<dfn>字符串</dfn> ，一个<dfn>数字</dfn>和一个<dfn>布尔值</dfn> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: yourArray是一个数组
    testString: 'assert.strictEqual(Array.isArray(yourArray), true, "yourArray is an array");'
  - text: <code>yourArray</code>至少有5个元素
    testString: 'assert.isAtLeast(yourArray.length, 5, "<code>yourArray</code> is at least 5 elements long");'
  - text: <code>yourArray</code>至少包含一个<code>boolean</code>
    testString: 'assert(yourArray.filter( el => typeof el === "boolean").length >= 1, "<code>yourArray</code> contains at least one <code>boolean</code>");'
  - text: <code>yourArray</code>至少包含一个<code>number</code>
    testString: 'assert(yourArray.filter( el => typeof el === "number").length >= 1, "<code>yourArray</code> contains at least one <code>number</code>");'
  - text: <code>yourArray</code>至少包含一个<code>string</code>
    testString: 'assert(yourArray.filter( el => typeof el === "string").length >= 1, "<code>yourArray</code> contains at least one <code>string</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let yourArray; // change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
