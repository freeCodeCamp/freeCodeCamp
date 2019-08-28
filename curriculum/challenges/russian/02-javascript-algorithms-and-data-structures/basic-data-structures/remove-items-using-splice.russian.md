---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
forumTopicId: 301166
localeTitle: Удаление элементов с помощью splice ()
---

## Description
<section id='description'>
Итак, мы научились удалять элементы с начала и конца массивов с помощью <code>shift()</code> и <code>pop()</code> , но что, если мы хотим удалить элемент из где-то посередине? Или удалить сразу несколько элементов? Ну, вот где <code>splice()</code> приходит. <code>splice()</code> позволяет нам сделать это: <strong>удалить любое количество последовательных элементов</strong> из любого места в массиве. <code>splice()</code> может принимать до 3 параметров, но на данный момент мы сосредоточимся только на первом 2. Первые два параметра <code>splice()</code> представляют собой целые числа, которые представляют индексы или позиции массива, который является <code>splice()</code> призвал. И помните, массивы <em>нуль-индексируются</em> , поэтому, чтобы указать первый элемент массива, мы будем использовать <code>0</code> . Первый параметр <code>splice()</code> представляет собой индекс в массиве, из которого начинается удаление элементов, а второй параметр указывает количество удаляемых элементов. Например: <blockquote> пусть array = [&#39;today&#39;, &#39;was&#39;, &#39;not&#39;, &#39;so&#39;, &#39;great&#39;]; <br><br> array.splice (2, 2); <br> // удалить 2 элемента, начиная с 3-го элемента <br> // массив теперь равен [&#39;today&#39;, &#39;was&#39;, &#39;great&#39;] </blockquote> <code>splice()</code> не только изменяет массив, на который он вызывается, но также возвращает новый массив, содержащий значение удаленных элементов: <blockquote> пусть array = [&#39;I&#39;, &#39;am&#39;, &#39;feeling&#39;, &#39;really&#39;, &#39;happy&#39;]; <br><br> пусть newArray = array.splice (3, 2); <br> // newArray равно [&#39;really&#39;, &#39;happy&#39;] </blockquote>
</section>

## Instructions
<section id='instructions'>
Мы определили функцию <code>sumOfTen</code> , которая принимает массив как аргумент и возвращает сумму элементов этого массива. Измените функцию, используя <code>splice()</code> , чтобы она вернула значение <code>10</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfTen</code> should return 10
    testString: assert.strictEqual(sumOfTen([2, 5, 1, 5, 2, 1]), 10);
  - text: The <code>sumOfTen</code> function should utilize the <code>splice()</code> method
    testString: assert.notStrictEqual(sumOfTen.toString().search(/\.splice\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfTen(arr) {
  // change code below this line

  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

```

</div>

</section>

## Solution
<section id='solution'>

```js
function sumOfTen(arr) {
  arr.splice(2,2);
  return arr.reduce((a, b) => a + b);
}
```

</section>
