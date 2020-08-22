---
id: 56104e9e514f539506016a5c
title: Iterate Odd Numbers With a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
localeTitle: 使用 For 循环遍历数组的奇数
---

## Description
<section id='description'>
for循环可以按照我们指定的顺序来迭代，通过更改我们的<code>计数器</code>，我们可以按照偶数顺序来迭代。
初始化<code>i = 0</code>，当<code>i < 10</code>的时候继续循环。
<code>i += 2</code>让<code>i</code>每次循环之后增加2。

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

循环结束后，<code>ourArray</code>的值为<code>[0,2,4,6,8]</code>。
改变<code>计数器</code>，这样我们可以用奇数来数。
</section>

## Instructions
<section id='instructions'>
写一个<code>for</code>循环，把从 1 到 9 的奇数添加到<code>myArray</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>for</code>循环。
    testString: assert(code.match(/for\s*\(/g).length > 1);
  - text: <code>myArray</code>应该等于<code>[1,3,5,7,9]</code>。
    testString: assert.deepEqual(myArray, [1,3,5,7,9]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.


```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```

</section>
