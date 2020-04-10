---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
localeTitle: 使用 unshift() 操作数组
---

## Description
<section id='description'>
你不仅可以<code>shift</code>（移出）数组中的第一个元素，你也可以<code>unshift</code>（移入）一个元素到数组的头部。
<code>.unshift()</code>函数用起来就像<code>.push()</code>函数一样, 但不是在数组的末尾添加元素，而是在数组的头部添加元素。
</section>

## Instructions
<section id='instructions'>
使用<code>unshift()</code>函数把<code>["Paul",35]</code>加入到<code>myArray</code>的头部。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code>应该包含[["Paul", 35], ["dog", 3]]。
    testString: assert((function(d){if(typeof d[0] === "object" && d[0][0] == 'Paul' && d[0][1] === 35 && d[1][0] != undefined && d[1][0] == 'dog' && d[1][1] != undefined && d[1][1] == 3){return true;}else{return false;}})(myArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```

</section>
