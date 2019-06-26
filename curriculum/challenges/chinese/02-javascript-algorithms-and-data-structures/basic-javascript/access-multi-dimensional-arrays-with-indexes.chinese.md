---
id: 56592a60ddddeae28f7aa8e1
title: Access Multi-Dimensional Arrays With Indexes
challengeType: 1
videoUrl: ''
localeTitle: 访问带索引的多维数组
---

## Description
<section id="description">考虑<dfn>多维</dfn>数组的一种方法是作为<em>数组的数组</em> 。使用括号访问数组时，第一组括号引用最外层（第一级）数组中的条目，另外一对括号引用内部的下一级条目。 <strong>例</strong> <blockquote> var arr = [ <br> [1,2,3]， <br> [4,5,6] <br> [7,8,9] <br> [[10,11,12]，13,14] <br> ]。 <br> ARR [3]; //等于[[10,11,12]，13,14] <br> ARR [3] [0]; //等于[10,11,12] <br> ARR [3] [0] [1]; //等于11 </blockquote> <strong>注意</strong> <br>数组名称和方括号之间不应该有任何空格，如<code>array [0][0]</code> ，甚至不允许使用此<code>array [0] [0]</code> 。尽管JavaScript能够正确处理，但这可能会让其他程序员在阅读代码时感到困惑。 </section>

## Instructions
<section id="instructions">使用括号表示法从<code>myArray</code>选择一个元素，使<code>myData</code>等于<code>8</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[0][0];

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
