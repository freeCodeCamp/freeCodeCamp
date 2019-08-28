---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift()
challengeType: 1
videoUrl: https://scrimba.com/c/cRbVETW
forumTopicId: 18238
localeTitle: Манипулировать массивами со сдвигом ()
---

## Description
<section id='description'>
<code>pop()</code> всегда удаляет последний элемент массива. Что делать, если вы хотите удалить первый? Вот где <code>.shift()</code> . Он работает так же, как <code>.pop()</code> , за исключением того, что он удаляет первый элемент вместо последнего.
</section>

## Instructions
<section id='instructions'>
Используйте <code>.shift()</code> чтобы удалить первый элемент из <code>myArray</code> , присвоив значение «shifted off» <code>removedFromMyArray</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should now equal <code>[["dog", 3]]</code>.
    testString: assert((function(d){if(d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined){return true;}else{return false;}})(myArray));
  - text: <code>removedFromMyArray</code> should contain <code>["John", 23]</code>.
    testString: assert((function(d){if(d[0] == 'John' && d[1] === 23 && typeof removedFromMyArray === 'object'){return true;}else{return false;}})(removedFromMyArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray;

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
```

</section>
