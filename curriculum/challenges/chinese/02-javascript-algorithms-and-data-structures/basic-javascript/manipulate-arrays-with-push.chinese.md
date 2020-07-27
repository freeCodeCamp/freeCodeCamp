---
id: 56bbb991ad1ed5201cd392cb
title: Manipulate Arrays With push()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
localeTitle: 使用 push() 操作数组
---

## Description
<section id='description'>
一个简单的方法将数据添加到一个数组的末尾是通过<code>push()</code>函数。
<code>.push()</code>接受一个或多个参数，并把它“推”入到数组的末尾。

```js
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
```

</section>

## Instructions
<section id='instructions'>
把<code>["dog", 3]</code>“推”入到<code>myArray</code>变量的末尾。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code>应该等于<code>[["John", 23], ["cat", 2], ["dog", 3]]</code>。
    testString: assert((function(d){if(d[2] != undefined && d[0][0] == 'John' && d[0][1] === 23 && d[2][0] == 'dog' && d[2][1] === 3 && d[2].length == 2){return true;}else{return false;}})(myArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```

</section>
