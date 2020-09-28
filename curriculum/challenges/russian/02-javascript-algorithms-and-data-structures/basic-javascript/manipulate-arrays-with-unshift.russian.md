---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
challengeType: 1
videoUrl: https://scrimba.com/c/ckNDESv
forumTopicId: 18239
localeTitle: Манипулировать массивами С помощью функции unshift ()
---

## Description
<section id='description'>
Вы не только можете <code>shift</code> элементы с начала массива, но также можете <code>unshift</code> элементы в начало массива, то есть добавить элементы перед массивом. <code>.unshift()</code> работает точно так же, как <code>.push()</code> , но вместо добавления элемента в конце массива <code>unshift()</code> добавляет элемент в начале массива.
</section>

## Instructions
<section id='instructions'>
Добавьте <code>[&quot;Paul&quot;,35]</code> в начало переменной <code>myArray</code> используя <code>unshift()</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should now have [["Paul", 35], ["dog", 3]].
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

### After Tests
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
