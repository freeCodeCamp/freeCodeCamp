---
id: cf1111c1c11feddfaeb1bdef
title: Iterate with JavaScript While Loops
challengeType: 1
videoUrl: https://scrimba.com/c/c8QbnCM
forumTopicId: 18220
localeTitle: Итерации с помощью JavaScript, в то время как циклы
---

## Description
<section id='description'>
Вы можете запустить один и тот же код несколько раз, используя цикл. Первый тип цикла мы узнаем , что называется « в <code>while</code> » цикл , так как он работает « а» заданное условие истинно , и не остановится , как только это условие уже не так. <blockquote> var ourArray = []; <br> var i = 0; <br> тогда как (i &lt;5) { <br> ourArray.push (я); <br> я ++; <br> } </blockquote> Попробуем получить цикл while для работы, нажав значения в массив.
</section>

## Instructions
<section id='instructions'>
Нажмите цифры от 0 до 4 , чтобы <code>myArray</code> используя <code>while</code> цикл.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>while</code> loop for this.
    testString: assert(code.match(/while/g));
  - text: <code>myArray</code> should equal <code>[0,1,2,3,4]</code>.
    testString: assert.deepEqual(myArray, [0,1,2,3,4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];

// Only change code below this line.

```

</div>

### After Tests
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
```

</section>
