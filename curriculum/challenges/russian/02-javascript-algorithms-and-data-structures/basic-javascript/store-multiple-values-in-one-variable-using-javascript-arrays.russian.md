---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
videoUrl: https://scrimba.com/c/crZQWAm
forumTopicId: 18309
localeTitle: Сохранять несколько значений в одной переменной с помощью массивов JavaScript
---

## Description
<section id='description'>
С переменными <code>array</code> JavaScript мы можем хранить несколько фрагментов данных в одном месте. Вы начинаете объявление массива с открытой квадратной скобкой, заканчиваете его закрывающей квадратной скобкой и помещаете запятую между каждой записью, например: <code>var sandwich = [&quot;peanut butter&quot;, &quot;jelly&quot;, &quot;bread&quot;]</code> .
</section>

## Instructions
<section id='instructions'>
Измените новый массив <code>myArray</code> так, чтобы он содержал <code>string</code> и <code>number</code> (в этом порядке). <strong>намек</strong> <br> Если вы застряли, обратитесь к примеру кода в текстовом редакторе.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should be an <code>array</code>.
    testString: assert(typeof myArray == 'object');
  - text: The first item in <code>myArray</code> should be a <code>string</code>.
    testString: assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
  - text: The second item in <code>myArray</code> should be a <code>number</code>.
    testString: assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = [];

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(z){return z;})(myArray);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myArray = ["The Answer", 42];
```

</section>
