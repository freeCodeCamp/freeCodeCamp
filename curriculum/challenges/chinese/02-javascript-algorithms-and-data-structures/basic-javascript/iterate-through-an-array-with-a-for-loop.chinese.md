---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
challengeType: 1
videoUrl: ''
localeTitle: 使用For循环遍历数组
---

## Description
<section id="description"> JavaScript中的一个常见任务是遍历数组的内容。一种方法是使用<code>for</code>循环。此代码将数组<code>arr</code>每个元素输出到控制台： <blockquote> var arr = [10,9,8,7,6]; <br> for（var i = 0; i &lt;arr.length; i ++）{ <br> （ARR [I]）的console.log; <br> } </blockquote>请记住，数组具有从零开始的编号，这意味着数组的最后一个索引是长度 -  1.我们对此循环的<dfn>条件</dfn>是<code>i &lt; arr.length</code> ，当<code>i</code>长度为1时停止。 </section>

## Instructions
<section id="instructions">声明并将变量<code>total</code>初始化为<code>0</code> 。使用<code>for</code>循环将<code>myArr</code>数组的每个元素的值添加到<code>total</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应声明<code>total</code>并初始化为0
    testString: 'assert(code.match(/var.*?total\s*=\s*0.*?;/), "<code>total</code> should be declared and initialized to 0");'
  - text: <code>total</code>应该等于20
    testString: 'assert(total === 20, "<code>total</code> should equal 20");'
  - text: 您应该使用<code>for</code>循环来遍历<code>myArr</code>
    testString: 'assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/), "You should use a <code>for</code> loop to iterate through <code>myArr</code>");'
  - text: 不要直接将<code>total</code>设置为20
    testString: 'assert(!code.match(/total[\s\+\-]*=\s*(\d(?!\s*[;,])|[1-9])/g), "Do not set <code>total</code> to 20 directly");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

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
