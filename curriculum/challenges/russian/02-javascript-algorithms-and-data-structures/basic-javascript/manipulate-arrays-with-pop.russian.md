---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop()
challengeType: 1
videoUrl: ''
localeTitle: Манипулировать массивами С помощью pop ()
---

## Description
<section id="description"> Другой способ изменить данные в массиве - с помощью функции <code>.pop()</code> . <code>.pop()</code> используется для « <code>.pop()</code> » значения из конца массива. Мы можем сохранить это значение «выскочил», присвоив его переменной. Другими словами, <code>.pop()</code> удаляет последний элемент из массива и возвращает этот элемент. Любой тип записи можно «выскочить» из массива - числа, строки, даже вложенные массивы. <blockquote> <code>var threeArr = [1, 4, 6]; <br> var oneDown = threeArr.pop(); <br> console.log(oneDown); // Returns 6 <br> console.log(threeArr); // Returns [1, 4]</code> </blockquote> </section>

## Instructions
<section id="instructions"> Используйте <code>.pop()</code> чтобы удалить последний элемент из <code>myArray</code> , назначив значение «popped off» для <code>removedFromMyArray</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code> должен содержать только <code>[[&quot;John&quot;, 23]]</code> .'
    testString: 'assert((function(d){if(d[0][0] == "John" && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray), "<code>myArray</code> should only contain <code>[["John", 23]]</code>.");'
  - text: Использовать <code>pop()</code> на <code>myArray</code>
    testString: 'assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code), "Use <code>pop()</code> on <code>myArray</code>");'
  - text: '<code>removedFromMyArray</code> должен содержать только <code>[&quot;cat&quot;, 2]</code> .'
    testString: 'assert((function(d){if(d[0] == "cat" && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray), "<code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray;

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
