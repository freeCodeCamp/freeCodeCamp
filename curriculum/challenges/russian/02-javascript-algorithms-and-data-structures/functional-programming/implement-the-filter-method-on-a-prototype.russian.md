---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
forumTopicId: 301231
localeTitle: Реализовать filter на прототипе
---

## Description
<section id='description'>
Реализация версии <code>filter</code>, которая ведет себя точно так же, как <code>Array.prototype.filter()</code> , поможет нам в понимании её работы . Он может использовать либо цикл <code>for</code> либо <code>Array.prototype.forEach()</code> . Примечание. Чистая функция позволяет изменять локальные переменные, определенные в пределах ее области действия, хотя предпочтительно избегать этого.
</section>

## Instructions
<section id='instructions'>
Напишите свой собственный <code>Array.prototype.myFilter()</code> , который должен вести себя точно так же, как <code>Array.prototype.filter()</code> . Вы можете использовать цикл <code>for</code> или метод <code>Array.prototype.forEach()</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>new_s</code> should equal <code>[23, 65, 5]</code>.
    testString: assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
  - text: Your code should not use the <code>filter</code> method.
    testString: assert(!code.match(/\.filter/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

```

</div>

</section>

## Solution
<section id='solution'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0;i<this.length;i++) {
    if (callback(this[i]))
      newArray.push(this[i]);
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
```

</section>
