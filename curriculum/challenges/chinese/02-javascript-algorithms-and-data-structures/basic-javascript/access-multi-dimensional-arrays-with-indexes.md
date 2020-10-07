---
id: 56592a60ddddeae28f7aa8e1
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
title: 使用索引访问多维数组
---

## Description
<section id='description'>
可以把 <dfn>多维</dfn> 数组看作成是一个 <em>数组中的数组</em>。当使用方括号去访问数组的时候，第一个<code>[index]</code>访问的是第 N 个子数组，第二个<code>[index]</code>访问的是第 N 个子数组的第N个元素。
<strong>示例</strong>

```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

<strong>提示</strong><br>数组名称和方括号之间不应该有任何空格，如<code>array [0][0]</code>，甚至<code>array [0] [0]</code>，都是不正确的。尽管 JavaScript 能够处理，但可能会让看你代码的其他程序员感到困惑。
</section>

## Instructions
<section id='instructions'>
使用索引从<code>myArray</code>选择一个元素，使得<code>myData</code>的值为<code>8</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myData</code>应该等于<code>8</code>。
    testString: assert(myData === 8);
  - text: 你应该使用方括号从<code>myArray</code>中取值。
    testString: 'assert(/myArray\[2\]\[1\]/g.test(code) && !/myData\s*=\s*(?:.*[-+*/%]|\d)/g.test(code));'

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
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [[1,2,3],[4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
```

</section>
