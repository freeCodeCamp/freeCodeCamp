---
id: cf1111c1c11feddfaeb7bdef
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
title: 将一个数组嵌套在另一个数组中
---

## Description
<section id='description'>
你也可以在数组中包含其他数组，例如：<code>[["Bulls", 23], ["White Sox", 45]]</code>。这被称为一个<dfn>多维数组<dfn>。
</section>

## Instructions
<section id='instructions'>
创建一个名为<code>myArray</code>的多维数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该包含至少一个嵌入的数组。
    testString: assert(Array.isArray(myArray) && myArray.some(Array.isArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [];

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
var myArray = [[1,2,3]];
```

</section>
