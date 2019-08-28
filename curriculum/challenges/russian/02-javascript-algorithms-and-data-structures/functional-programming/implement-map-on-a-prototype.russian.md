---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
challengeType: 1
forumTopicId: 301230
localeTitle: Реализовать map на прототипе
---

## Description
<section id='description'>
Как вы видели из применения <code>Array.prototype.map()</code> или просто <code>map()</code> ранее, метод <code>map</code> возвращает массив той же длины, что и тот, на котором он был вызван. Он также не изменяет исходный массив, если его функция обратного вызова не отработает. Другими словами, <code>map</code> является чистой функцией, и результат еевыполнения зависит исключительно от ее аргументов. Кроме того, в качестве аргумента требуется другая функция. Это достаточно описало <code>map</code> чтобы попытаться реализовать версию, которая ведет себя точно так же, как <code>Array.prototype.map()</code> с помощью цикла <code>for</code> или <code>Array.prototype.forEach()</code> . Примечание. Чистая функция позволяет изменять локальные переменные, определенные в пределах ее области действия, хотя предпочтительно избегать этого.
</section>

## Instructions
<section id='instructions'>
Напишите свой собственный <code>Array.prototype.myMap()</code> , который должен вести себя точно так же, как <code>Array.prototype.map()</code> . Вы можете использовать цикл <code>for</code> или метод <code>forEach</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>new_s</code> should equal <code>[46, 130, 196, 10]</code>.
    testString: assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
  - text: Your code should not use the <code>map</code> method.
    testString: assert(!code.match(/\.map/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

```

</div>

</section>

## Solution
<section id='solution'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for (var elem of this) {
    newArray.push(callback(elem));
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

</section>
