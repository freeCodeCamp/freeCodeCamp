---
id: 587d8255367417b2b2512c73
title: Use Spread and Notes for ES5 Set() Integration
challengeType: 1
forumTopicId: 301720
localeTitle: Использование Spread и Notes для интеграции ES5 Set ()
---

## Description
<section id='description'>
Вы помните оператор распространения ES6 <code>...</code> ? <code>...</code> может принимать истребимые объекты в ES6 и превращать их в массивы. Давайте создадим Set и проверим функцию спреда. <blockquote> var set = new Set ([1,2,3]); <br> var setToArr = [... set] <br> console.log (setToArr) // возвращает [1, 2, 3] </blockquote>
</section>

## Instructions
<section id='instructions'>
В этом упражнении мы передадим заданный объект функции <code>checkSet</code> . Он должен возвращать массив, содержащий значения Set. Теперь вы успешно научились использовать объект ES6 <code>Set()</code> , хорошую работу!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your Set was returned correctly!
    testString: assert((function(){var test = checkSet(new Set([1,2,3,4,5,6,7])); return DeepEqual(test, [ 1, 2, 3, 4, 5, 6, 7 ]);})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(set){
   // change code below this line

   // change code above this line
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function checkSet(set){
return [...set];}
```

</section>
