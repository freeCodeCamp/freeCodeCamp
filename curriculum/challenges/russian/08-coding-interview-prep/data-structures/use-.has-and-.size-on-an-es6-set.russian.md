---
id: 587d8255367417b2b2512c72
title: Use .has and .size on an ES6 Set
challengeType: 1
forumTopicId: 301717
localeTitle: Используйте .has и .size в наборе ES6.
---

## Description
<section id='description'>
Давайте посмотрим на методы .has и .size, доступные на объекте Set ES6. Сначала создайте набор ES6 <code>var set = new Set([1,2,3]);</code> Метод .has проверяет, содержится ли это значение в наборе. <code>var hasTwo = set.has(2);</code> Метод .size возвращает целое число, представляющее размер Set <code>var howBig = set.size;</code>
</section>

## Instructions
<section id='instructions'>
В этом упражнении мы передадим массив и значение функции checkSet (). Ваша функция должна создать набор ES6 из аргумента массива. Найдите, содержит ли набор аргумент значения. Найдите размер набора. И верните эти два значения в массив.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkSet([4, 5, 6], 3)</code> should return [ false, 3 ]
    testString: assert((function(){var test = checkSet([4,5,6], 3); return DeepEqual(test, [ false, 3 ]);})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(arrToBeSet, checkValue){

   // change code below this line

   // change code above this line

}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]

```

</div>

</section>

## Solution
<section id='solution'>

```js
function checkSet(arrToBeSet, checkValue){
var set = new Set(arrToBeSet);
var result = [
set.has(checkValue),
set.size
];
return result;
}
```

</section>
