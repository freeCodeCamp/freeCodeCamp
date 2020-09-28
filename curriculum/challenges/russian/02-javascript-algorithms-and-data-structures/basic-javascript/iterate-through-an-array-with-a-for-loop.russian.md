---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
challengeType: 1
videoUrl: https://scrimba.com/c/caeR3HB
forumTopicId: 18216
localeTitle: Итерация через массив с петлей
---

## Description
<section id='description'>
Общей задачей в JavaScript является итерация содержимого массива. Один из способов сделать это - цикл <code>for</code> . Этот код выводит каждый элемент массива <code>arr</code> на консоль: <blockquote> var arr = [10,9,8,7,6]; <br> для (var i = 0; i &lt;arr.length; i ++) { <br> console.log (обр [я]); <br> } </blockquote> Помните, что массивы имеют нулевую нумерацию, что означает, что последний индекс массива - длина - 1. Наше <dfn>условие</dfn> для этого цикла равно <code>i &lt; arr.length</code> , которое останавливается, когда <code>i</code> является длиной - 1.
</section>

## Instructions
<section id='instructions'>
Объявить и инициализировать значение переменной <code>total</code> равным <code>0</code> . Используйте цикл <code>for</code> чтобы добавить значение каждого элемента массива <code>myArr</code> в <code>total</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>total</code> should be declared and initialized to 0
    testString: assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
  - text: <code>total</code> should equal 20
    testString: assert(total === 20);
  - text: You should use a <code>for</code> loop to iterate through <code>myArr</code>
    testString: assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/));
  - text: Do not set <code>total</code> to 20 directly
    testString: assert(!code.match(/total[\s\+\-]*=\s*(0(?!\s*[;,]?$)|[1-9])/gm));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()

```

</div>

</section>

## Solution
<section id='solution'>

```js
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```

</section>
