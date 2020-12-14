---
id: 56105e7b514f539506016a5e
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
title: 使用 For 循环反向遍历数组
---

## Description
<section id='description'>
for循环也可以逆向迭代，只要我们定义好合适的条件。
为了让每次倒数递减 2，我们需要改变我们的<code>初始化</code>，<code>条件判断</code>和<code>计数器</code>。
我们让<code>i = 10</code>，并且当<code>i > 0</code>的时候才继续循环。我们使用<code>i -= 2</code>来让<code>i</code>每次循环递减 2。

```js
var ourArray = [];
for (var i=10; i > 0; i-=2) {
  ourArray.push(i);
}
```

循环结束后，<code>ourArray</code>的值为<code>[10,8,6,4,2]</code>。
让我们改变<code>初始化</code>和<code>计数器</code>，这样我们就可以按照奇数从后往前两两倒着数。
</section>

## Instructions
<section id='instructions'>
使用一个<code>for</code>循环，把 9 到 1 的奇数添加进<code>myArray</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>for</code>循环。
    testString: assert(code.match(/for\s*\(/g).length > 1);
  - text: 你应该使用数组方法<code>push</code>。
    testString: assert(code.match(/myArray.push/));
  - text: <code>myArray</code>应该等于<code>[9,7,5,3,1]</code>。
    testString: assert.deepEqual(myArray, [9,7,5,3,1]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
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
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

</section>
