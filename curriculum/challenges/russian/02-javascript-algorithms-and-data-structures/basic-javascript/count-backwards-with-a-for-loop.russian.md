---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
challengeType: 1
videoUrl: https://scrimba.com/c/c2R6BHa
forumTopicId: 16808
localeTitle: Count Backwards с помощью цикла
---

## Description
<section id='description'>
Цикл for также может рассчитывать назад, пока мы можем определить правильные условия. Для того, чтобы пересчитать назад два раза, нам нужно изменить нашу <code>initialization</code> , <code>condition</code> и <code>final-expression</code> . Мы начнем с <code>i = 10</code> и цикл, пока <code>i &gt; 0</code> . Мы будем уменьшать <code>i</code> на 2 каждый цикл с <code>i -= 2</code> . <blockquote> var ourArray = []; <br> для (var i = 10; i&gt; 0; i- = 2) { <br> ourArray.push (я); <br> } </blockquote> <code>ourArray</code> будет содержать <code>[10,8,6,4,2]</code> . Давайте изменим нашу <code>initialization</code> и <code>final-expression</code> чтобы мы могли рассчитывать назад на два по нечетным числам.
</section>

## Instructions
<section id='instructions'>
Нажимайте нечетные числа от 9 до 1 в <code>myArray</code> используя цикл <code>for</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>for</code> loop for this.
    testString: assert(code.match(/for\s*\(/g).length > 1);
  - text: You should be using the array method <code>push</code>.
    testString: assert(code.match(/myArray.push/));
  - text: <code>myArray</code> should equal <code>[9,7,5,3,1]</code>.
    testString: assert.deepEqual(myArray, [9,7,5,3,1]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

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
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

</section>
