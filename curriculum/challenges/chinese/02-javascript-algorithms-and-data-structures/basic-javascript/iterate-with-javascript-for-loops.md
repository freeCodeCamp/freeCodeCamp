---
id: cf1111c1c11feddfaeb5bdef
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
title: for 循环
---

## Description
<section id='description'>
你可以使用循环多次执行相同的代码。
JavaScript 中最常见的循环就是 “<code>for循环</code>”。
for循环中的三个表达式用分号隔开：
<code>for ([初始化]; [条件判断]; [计数器])</code>
<code>初始化</code>语句只会在执行循环开始之前执行一次。它通常用于定义和设置你的循环变量。
<code>条件判断</code>语句会在每一轮循环的开始执行，只要条件判断为<code>true</code>就会继续执行循环。当条件为<code>false</code>的时候，循环将停止执行。这意味着，如果条件在一开始就为<code>false</code>，这个循环将不会执行。
<code>计数器</code>是在每一轮循环结束时执行，通常用于递增或递减。
在下面的例子中，先初始化<code>i = 0</code>，条件<code>i &#60; 5</code>为真，进入第一次循环，执行大括号里的代码，第一次循环结束。递增<code>i</code>的值，条件判断，就这样依次执行下去，直到条件判断为假，整个循环结束。

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

最终<code>ourArray</code>的值为<code>[0,1,2,3,4]</code>.
</section>

## Instructions
<section id='instructions'>
使用<code>for</code>循环把从 1 到 5 添加进<code>myArray</code>中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>for</code>循环。
    testString: assert(code.match(/for\s*\(/g).length > 1);
  - text: <code>myArray</code>应该等于<code>[1,2,3,4,5]</code>。
    testString: assert.deepEqual(myArray, [1,2,3,4,5]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
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
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```

</section>
