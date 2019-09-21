---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: https://scrimba.com/c/cBZQbTz
forumTopicId: 16158
localeTitle: Доступ к массиву данных с индексами
---

## Description
<section id='description'>
Мы можем получить доступ к данным внутри массивов с помощью <code>indexes</code> . Индексы массива записываются в одну и ту же скобку, в которой используются строки, за исключением того, что вместо указания символа они указывают запись в массиве. Подобно строкам, массивы используют индексирование с <dfn>нулевым</dfn> индексом, поэтому первым элементом в массиве является элемент <code>0</code> . <strong>пример</strong> <blockquote> var array = [50,60,70]; <br> массив [0]; // равно 50 <br> var data = array [1]; // равно 60 </blockquote> <strong>Заметка</strong> <br> Между именем массива и квадратными скобками не должно быть пробелов, например <code>array [0]</code> . Хотя JavaScript способен корректно обрабатывать, это может смутить других программистов, читающих ваш код.
</section>

## Instructions
<section id='instructions'>
Создайте переменную <code>myData</code> и установите ее равным первому значению <code>myArray</code> используя нотацию в виде скобок.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The variable <code>myData</code> should equal the first value of <code>myArray</code>.
    testString: assert((function(){if(typeof myArray !== 'undefined' && typeof myData !== 'undefined' && myArray[0] === myData){return true;}else{return false;}})());
  - text: The data in variable <code>myArray</code> should be accessed using bracket notation.
    testString: assert((function(){if(code.match(/\s*=\s*myArray\[0\]/g)){return true;}else{return false;}})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.

```

</div>

### After Tests
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myArray = [50,60,70];
var myData = myArray[0];
```

</section>
