---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1
forumTopicId: 301161
localeTitle: Итерация через все элементы массива с использованием циклов
---

## Description
<section id='description'>
Иногда при работе с массивами очень удобно выполнять итерацию по каждому элементу, чтобы найти один или несколько элементов, которые могут нам понадобиться, или манипулировать массивом на основе того, какие элементы данных соответствуют определенному набору критериев. JavaScript предлагает несколько встроенных методов, каждый из которых перебирает несколько массивов несколькими разными способами для достижения разных результатов (например, each <code>every()</code> , <code>forEach()</code> , <code>map()</code> и т. Д.), Однако наиболее гибкий метод и предлагает нам наибольшую величина управления является простым <code>for</code> петли. Рассмотрим следующее: <blockquote> функция largeThanTen (arr) { <br> пусть newArr = []; <br> для (пусть i = 0; i &lt;arr.length; i ++) { <br> если (arr [i]&gt; 10) { <br> newArr.push (обр [я]); <br> } <br> } <br> return newArr; <br> } <br><br> moreThanTen ([2, 12, 8, 14, 80, 0, 1]); <br> // возвращает [12, 14, 80] </blockquote> Используя цикл <code>for</code> , эта функция выполняет итерации по каждому элементу массива и обращается к нему, и подвергает его простому тесту, который мы создали. Таким образом, мы легко и программно определили, какие элементы данных больше <code>10</code> , и возвратил новый массив, содержащий эти элементы.
</section>

## Instructions
<section id='instructions'>
Мы определили функцию, <code>filteredArray</code> , которая принимает <code>arr</code> , вложенный массив и <code>elem</code> качестве аргументов, и возвращает новый массив. <code>elem</code> представляет собой элемент, который может присутствовать или не присутствовать на одном или нескольких массивах, вложенных в <code>arr</code> . Измените функцию, используя цикл <code>for</code> , чтобы вернуть отфильтрованную версию переданного массива таким образом, чтобы любой массив, вложенный в <code>arr</code> содержащий <code>elem</code> , был удален.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> should return <code>[ [10, 8, 3], [14, 6, 23] ]</code>
    testString: assert.deepEqual(filteredArray([ [10, 8, 3], [14, 6, 23], [3, 18, 6] ], 18), [[10, 8, 3], [14, 6, 23]]);
  - text: <code>filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)</code> should return <code>[ ["flutes", 4] ]</code>
    testString: assert.deepEqual(filteredArray([ ['trumpets', 2], ['flutes', 4], ['saxophones', 2] ], 2), [['flutes', 4]]);
  - text: <code>filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")</code> should return <code>[ ["amy", "beth", "sam"] ]</code>
    testString: assert.deepEqual(filteredArray([['amy', 'beth', 'sam'], ['dave', 'sean', 'peter']], 'peter'), [['amy', 'beth', 'sam']]);
  - text: <code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> should return <code>[ ]</code>
    testString: assert.deepEqual(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3), []);
  - text: The <code>filteredArray</code> function should utilize a <code>for</code> loop
    testString: assert.notStrictEqual(filteredArray.toString().search(/for/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

```

</div>

</section>

## Solution
<section id='solution'>

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}
```

</section>
