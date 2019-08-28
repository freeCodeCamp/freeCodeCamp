---
id: 587d8254367417b2b2512c71
title: Remove items from a set in ES6
challengeType: 1
forumTopicId: 301713
localeTitle: Удаление элементов из набора в ES6
---

## Description
<section id='description'>
Давайте практикуем элементы removeimg из набора ES6, используя метод <code>delete</code> . Сначала создайте набор ES6 <code>var set = new Set([1,2,3]);</code> Теперь удалите элемент из вашего набора с помощью метода <code>delete</code> . <blockquote> set.delete (1); <br> console.log ([... set]) // должен возвращать [2, 3] <blockquote></blockquote></blockquote>
</section>

## Instructions
<section id='instructions'>
Теперь создайте набор с целыми числами 1, 2, 3, 4 и 5. Удалите значения 2 и 5, а затем верните набор.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your Set should contain the values 1, 3, & 4
    testString: assert((function(){var test = checkSet(); return test.has(1) && test.has(3) && test.has(4) && test.size === 3;})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkSet(){
   var set = //Create a set with values 1, 2, 3, 4, & 5
   //Remove the value 2
   //Remove the value 5
   //Return the set
   return set;
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```

</section>
