---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1

videoUrl: ''
localeTitle: Access Array Data with Indexes
---

## Description
<section id='description'>
我们可以像操作字符串一样通过数组索引<code>[index]</code>来访问数组中的数据。
数组索引的使用与字符串索引一样，不同的是，通过字符串的索引得到的是一个字符，通过数组索引得到的是一个元素。与字符串类似，数组也是<dfn>基于零</dfn>的索引，因此数组的第一个元素的索引是<code>0</code>。
<strong>示例</strong>
<blockquote>var array = [50,60,70];<br>array[0]; // 值为 50<br>var data = array[1];  // 值为 60</blockquote>
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
  - text: 变量<code>myData</code>的值应该等于<code>myArray</code>的第一个值
    testString: assert((function(){if(typeof myArray !== 'undefined' && typeof myData !== 'undefined' && myArray[0] === myData){return true;}else{return false;}})(), '变量<code>myData</code>的值应该等于<code>myArray</code>的第一个值');
  - text: 应使用方括号访问变量<code>myArray</code>中的数据
    testString: assert((function(){if(code.match(/\s*=\s*myArray\[0\]/g)){return true;}else{return false;}})(), '应使用方括号访问变量<code>myArray</code>中的数据');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














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
              