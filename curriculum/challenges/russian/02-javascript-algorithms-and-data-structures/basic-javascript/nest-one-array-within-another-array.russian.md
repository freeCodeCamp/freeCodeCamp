---
id: cf1111c1c11feddfaeb7bdef
title: Nest one Array within Another Array
challengeType: 1
videoUrl: ''
localeTitle: Гнездо одного массива в другом массиве
---

## Description
<section id="description"> Вы также можете вложить массивы в другие массивы, например: <code>[[&quot;Bulls&quot;, 23], [&quot;White Sox&quot;, 45]]</code> . Это также называется <dfn>многомерным массивом <dfn>.</dfn></dfn> </section>

## Instructions
<section id="instructions"> Создайте вложенный массив с именем <code>myArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> должен иметь по крайней мере один массив, вложенный в другой массив.'
    testString: 'assert(Array.isArray(myArray) && myArray.some(Array.isArray), "<code>myArray</code> should have at least one array nested within another array.");'

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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
