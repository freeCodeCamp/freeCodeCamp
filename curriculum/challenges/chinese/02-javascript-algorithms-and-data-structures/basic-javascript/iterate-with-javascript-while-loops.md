---
id: cf1111c1c11feddfaeb1bdef
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
title: while 循环
---

## Description
<section id='description'>
你可以使用循环多次执行相同的代码。
我们将学习的第一种类型的循环称为 "<code>while</code>" 循环，因为它规定，当 "while" 条件为真，循环才会执行，反之不执行。

```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

在上面的代码里，<code>while</code> 循环执行 5 次把 0 到 4 的数字添加到 <code>ourArray</code> 数组里。

让我们通过 while 循环将值添加到数组中。
</section>

## Instructions
<section id='instructions'>
通过一个<code>while</code>循环，把从 0 到 4 的值添加到<code>myArray</code>中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>while</code>循环。
    testString: assert(code.match(/while/g));
  - text: <code>myArray</code>应该等于<code>[0,1,2,3,4]</code>。
    testString: assert.deepEqual(myArray, [0,1,2,3,4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
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
var myArray = [];
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}
```

</section>
