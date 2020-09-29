---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
localeTitle: 使用 pop() 操作数组
---

## Description
<section id='description'>
改变数组中数据的另一种方法是用<code>.pop()</code>函数。
<code>.pop()</code>函数用来“抛出”一个数组末尾的值。我们可以把这个“抛出”的值赋给一个变量存储起来。换句话说就是<code>.pop()</code>函数移除数组末尾的元素并返回这个元素。
数组中任何类型的元素（数值，字符串，甚至是数组）可以被“抛出来” 。

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```

</section>

## Instructions
<section id='instructions'>
使用<code>.pop()</code>函数移除<code>myArray</code>中的最后一个元素，并且把“抛出”的值赋给<code>removedFromMyArray</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code>应该只包含<code>[["John", 23]]</code>。
    testString: assert((function(d){if(d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray));
  - text: 对<code>myArray</code>使用<code>pop()</code>函数。
    testString: assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
  - text: <code>removedFromMyArray</code>应该只包含<code>["cat", 2]</code>。
    testString: assert((function(d){if(d[0] == 'cat' && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
```

</section>
