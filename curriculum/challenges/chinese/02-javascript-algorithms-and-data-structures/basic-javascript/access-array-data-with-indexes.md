---
id: 56bbb991ad1ed5201cd392ca
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
title: 通过索引访问数组中的数据
---

## Description
<section id='description'>
我们可以使用索引 <code>indexes</code> 来访问数组中的数据。

数组索引与字符串索引一样使用中括号，但字符串索引得到的是一个字符，而数组索引得到的是一个元素。数组索引与字符串索引一样是从 0 开始的，所以数组中第一个元素的索引编号是 0。
<br/>
<strong>示例</strong>

```js
var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60
```

<strong>提示</strong><br>数组名称和方括号之间不应有任何空格，如<code>array [0]</code>尽管 JavaScript 能够正确处理，但可能会让看你代码的其他程序员感到困惑
</section>

## Instructions
<section id='instructions'>
创建一个名为<code>myData</code>的变量，并把<code>myArray</code>的第一个索引上的值赋给它。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 变量<code>myData</code>的值应该等于<code>myArray</code>的第一个值。
    testString: assert((function(){if(typeof myArray !== 'undefined' && typeof myData !== 'undefined' && myArray[0] === myData){return true;}else{return false;}})());
  - text: 应使用方括号访问变量<code>myArray</code>中的数据。
    testString: assert((function(){if(code.match(/\s*=\s*myArray\[0\]/g)){return true;}else{return false;}})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.

```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [50,60,70];
var myData = myArray[0];
```

</section>
