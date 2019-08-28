---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1
videoUrl: https://scrimba.com/c/crZQZf8
forumTopicId: 18247
localeTitle: Гнездо одного массива в другом массиве
---

## Description
<section id='description'>
Вы также можете вложить массивы в другие массивы, например: <code>[[&quot;Bulls&quot;, 23], [&quot;White Sox&quot;, 45]]</code> . Это также называется <dfn>многомерным массивом <dfn>.</dfn></dfn>
</section>

## Instructions
<section id='instructions'>
Создайте вложенный массив с именем <code>myArray</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should have at least one array nested within another array.
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

### After Tests
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
