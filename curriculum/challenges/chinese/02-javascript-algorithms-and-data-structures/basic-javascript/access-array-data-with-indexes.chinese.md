---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: ''
localeTitle: 使用索引访问数组数据
---

## Description
<section id="description">我们可以使用<code>indexes</code>访问数组内部的数据。数组索引使用字符串使用的相同括号表示法编写，但不是指定字符，而是指定数组中的条目。与字符串一样，数组使用<dfn>从零开始的</dfn>索引，因此数组中的第一个元素是元素<code>0</code> 。 <strong>例</strong> <blockquote> var array = [50,60,70]; <br>阵列[0]; //等于50 <br> var data = array [1]; //等于60 </blockquote> <strong>注意</strong> <br>数组名称和方括号之间不应有任何空格，如<code>array [0]</code> 。尽管JavaScript能够正确处理，但这可能会让其他程序员在阅读代码时感到困惑。 </section>

## Instructions
<section id="instructions">创建一个名为<code>myData</code>的变量，并使用括号表示法将其设置为等于<code>myArray</code>的第一个值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 变量<code>myData</code>应该等于<code>myArray</code>的第一个值。
    testString: assert((function(){if(typeof myArray !== 'undefined' && typeof myData !== 'undefined' && myArray[0] === myData){return true;}else{return false;}})());
  - text: 应使用括号表示法访问变量<code>myArray</code>的数据。
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
